'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { IconClose, IconRobot, IconSend } from '@/lib/icons';

// Minimal markdown renderer for assistant replies — just enough for the
// patterns LLMs actually produce (bold, bullet/numbered lists, links, line
// breaks). A full markdown library is overkill for chat bubble text.
function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const regex = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;
  while ((match = regex.exec(text))) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
    if (match[1] !== undefined) {
      nodes.push(<strong key={`${keyPrefix}-${i++}`}>{match[1]}</strong>);
    } else {
      nodes.push(
        <a
          key={`${keyPrefix}-${i++}`}
          href={match[3]}
          target="_blank"
          rel="noreferrer"
          className="underline decoration-accent/50 underline-offset-2 hover:text-accent"
        >
          {match[2]}
        </a>,
      );
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

function renderMarkdownLite(content: string): ReactNode {
  const lines = content.split('\n').map((l) => l.trim()).filter(Boolean);
  return (
    <div className="space-y-1.5">
      {lines.map((line, i) => {
        const bulletMatch = /^[-*]\s+(.*)/.exec(line) ?? /^\d+\.\s+(.*)/.exec(line);
        if (bulletMatch) {
          return (
            <div key={i} className="flex gap-1.5 pl-0.5">
              <span className="text-accent">•</span>
              <span>{renderInline(bulletMatch[1], `l${i}`)}</span>
            </div>
          );
        }
        return <p key={i}>{renderInline(line, `l${i}`)}</p>;
      })}
    </div>
  );
}

type ChatMessage = { id: number; role: 'user' | 'assistant'; content: string };

const WELCOME_MESSAGE: ChatMessage = {
  id: 0,
  role: 'assistant',
  content:
    "Hi! I'm Ammar's portfolio assistant. Ask me about his projects, skills, experience, or how to get in touch.",
};

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-1 py-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-text-secondary"
          animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(1);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isSending]);

  async function sendMessage() {
    const content = input.trim();
    if (!content || isSending) return;

    const userMsg: ChatMessage = { id: nextId.current++, role: 'user', content };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput('');
    setError(null);
    setIsSending(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages.map(({ role, content }) => ({ role, content })) }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error ?? 'Something went wrong.');
      }

      setMessages((prev) => [...prev, { id: nextId.current++, role: 'assistant', content: data.reply as string }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setIsSending(false);
    }
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 12 }}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            className="fixed bottom-24 left-5 z-[999] flex h-[480px] w-[min(360px,calc(100vw-2.5rem))] max-h-[calc(100dvh-180px)] flex-col overflow-hidden rounded-xl border border-border bg-bg-card shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl max-md:bottom-20"
          >
            <div className="flex items-center gap-3 border-b border-border px-4 py-3">
              <div className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                <IconRobot className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-text-primary">Portfolio Assistant</p>
                <p className="flex items-center gap-1.5 text-xs text-text-secondary">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  Online
                </p>
              </div>
              <button
                type="button"
                aria-label="Close chat"
                onClick={() => setIsOpen(false)}
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-text-secondary transition-colors hover:bg-bg-card-hover hover:text-text-primary"
              >
                <IconClose className="h-4 w-4" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
              <AnimatePresence initial={false}>
                {messages.map((m) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className={`flex items-end gap-2 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {m.role === 'assistant' && (
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                        <IconRobot className="h-3.5 w-3.5" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] rounded-lg px-3 py-2 text-sm leading-relaxed ${
                        m.role === 'user'
                          ? 'rounded-br-sm bg-accent text-[#0a0a0a]'
                          : 'rounded-bl-sm bg-bg-card-hover text-text-primary'
                      }`}
                    >
                      {m.role === 'assistant' ? renderMarkdownLite(m.content) : m.content}
                    </div>
                  </motion.div>
                ))}
                {isSending && (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-end gap-2"
                  >
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <IconRobot className="h-3.5 w-3.5" />
                    </div>
                    <div className="rounded-lg rounded-bl-sm bg-bg-card-hover px-2 py-1">
                      <TypingDots />
                    </div>
                  </motion.div>
                )}
                {error && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-lg border border-border-glow bg-bg-card-hover px-3 py-2 text-sm text-accent"
                  >
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                void sendMessage();
              }}
              className="flex items-center gap-2 border-t border-border p-3"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Ammar..."
                maxLength={2000}
                className="min-w-0 flex-1 rounded-lg border border-border bg-bg px-3 py-2 text-sm text-text-primary outline-none placeholder:text-text-muted focus:border-accent"
              />
              <motion.button
                type="submit"
                disabled={isSending || !input.trim()}
                aria-label="Send message"
                whileTap={{ scale: 0.9 }}
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-accent text-[#0a0a0a] transition-opacity disabled:opacity-40"
              >
                <IconSend className="h-4 w-4" />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        aria-label={isOpen ? 'Close chat assistant' : 'Open chat assistant'}
        onClick={() => setIsOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-8 left-8 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-accent text-[#0a0a0a] shadow-[0_8px_24px_rgba(255,70,32,0.35)] max-md:bottom-5 max-md:left-5 max-md:h-12 max-md:w-12"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isOpen ? 'close' : 'robot'}
            initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            {isOpen ? <IconClose className="h-5 w-5" /> : <IconRobot className="h-6 w-6" />}
          </motion.span>
        </AnimatePresence>
        {!isOpen && (
          <span className="absolute right-0 top-0 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-bg bg-emerald-400" />
          </span>
        )}
      </motion.button>
    </>
  );
}
