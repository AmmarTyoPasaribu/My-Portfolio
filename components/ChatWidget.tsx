'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { IconClose, IconRobot, IconSend } from '@/lib/icons';
import { useT } from '@/lib/i18n/LanguageProvider';

// Minimal markdown renderer for assistant replies: just enough for the patterns LLMs actually
// produce (bold, bullet/numbered lists, links, line breaks). A full markdown library is overkill here.
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
        <a key={`${keyPrefix}-${i++}`} href={match[3]} target="_blank" rel="noreferrer" className="bx-chat-link">
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
    <div className="bx-chat-md">
      {lines.map((line, i) => {
        const bulletMatch = /^[-*]\s+(.*)/.exec(line) ?? /^\d+\.\s+(.*)/.exec(line);
        if (bulletMatch) {
          return (
            <div key={i} className="bx-chat-li">
              <span aria-hidden="true">▪</span>
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

function Studs({ count }: { count: number }) {
  return (
    <span className="bx-chat-studs" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <i key={i} />
      ))}
    </span>
  );
}

/** LEGO-styled AI assistant: a red brick button that opens a yellow-topped chat panel. */
export function ChatWidget() {
  const { t } = useT();
  const [isOpen, setIsOpen] = useState(false);
  // the greeting is rendered from the dictionary (so it follows the language switch) and is never sent to the API
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(1);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isSending, isOpen]);

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
      if (!res.ok) throw new Error(data?.error ?? t('chat.error'));
      setMessages((prev) => [...prev, { id: nextId.current++, role: 'assistant', content: data.reply as string }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : t('chat.error'));
    } finally {
      setIsSending(false);
    }
  }

  return (
    <>
      {isOpen && (
        <section className="bx-chat" role="dialog" aria-label={t('chat.title')}>
          <Studs count={6} />
          <header className="bx-chat-head">
            <span className="bx-chat-avatar" aria-hidden="true"><IconRobot className="bx-chat-ico" /></span>
            <div className="bx-chat-headtext">
              <strong>{t('chat.title')}</strong>
              <span><i aria-hidden="true" /> {t('chat.online')}</span>
            </div>
            <button type="button" className="bx-chat-x" aria-label={t('chat.close')} onClick={() => setIsOpen(false)}>
              <IconClose className="bx-chat-ico" />
            </button>
          </header>

          <div ref={scrollRef} className="bx-chat-body">
            <div className="bx-chat-row">
              <span className="bx-chat-mini" aria-hidden="true"><IconRobot className="bx-chat-ico" /></span>
              <div className="bx-chat-bubble bx-chat-bubble--bot">
                <p>{t('chat.welcome')}</p>
              </div>
            </div>
            {messages.map((m) => (
              <div key={m.id} className={`bx-chat-row ${m.role === 'user' ? 'bx-chat-row--me' : ''}`}>
                {m.role === 'assistant' && <span className="bx-chat-mini" aria-hidden="true"><IconRobot className="bx-chat-ico" /></span>}
                <div className={`bx-chat-bubble ${m.role === 'user' ? 'bx-chat-bubble--me' : 'bx-chat-bubble--bot'}`}>
                  {m.role === 'assistant' ? renderMarkdownLite(m.content) : <p>{m.content}</p>}
                </div>
              </div>
            ))}
            {isSending && (
              <div className="bx-chat-row">
                <span className="bx-chat-mini" aria-hidden="true"><IconRobot className="bx-chat-ico" /></span>
                <div className="bx-chat-bubble bx-chat-bubble--bot bx-chat-typing" aria-label="...">
                  <i /><i /><i />
                </div>
              </div>
            )}
            {error && <div className="bx-chat-error" role="alert">{error}</div>}
          </div>

          <form
            className="bx-chat-form"
            onSubmit={(e) => {
              e.preventDefault();
              void sendMessage();
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t('chat.placeholder')}
              maxLength={2000}
              aria-label={t('chat.placeholder')}
            />
            <button type="submit" disabled={isSending || !input.trim()} aria-label={t('chat.send')}>
              <IconSend className="bx-chat-ico" />
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        className={`bx-chat-fab ${isOpen ? 'is-open' : ''}`}
        aria-label={isOpen ? t('chat.close') : t('chat.open')}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
      >
        <Studs count={2} />
        {isOpen ? <IconClose className="bx-chat-ico" /> : <IconRobot className="bx-chat-ico" />}
        {!isOpen && <span className="bx-chat-dot" aria-hidden="true" />}
      </button>
    </>
  );
}
