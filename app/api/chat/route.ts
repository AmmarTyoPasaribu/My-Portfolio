import { CHAT_SYSTEM_PROMPT } from '@/lib/chatContext';

export const runtime = 'nodejs';

type ChatMessage = { role: 'user' | 'assistant'; content: string };

const MAX_MESSAGE_LENGTH = 2000;
const MAX_HISTORY_MESSAGES = 20;
const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';
// Free models come and go on OpenRouter. The configured model is tried first; if it is unavailable,
// OpenRouter falls through this list in order instead of the chat failing outright.
const FALLBACK_MODELS = ['nvidia/nemotron-3.5-super-vl:free', 'nvidia/nemotron-3.5-lightning:free', 'google/gemma-4-31b-it:free'];

function isValidMessages(value: unknown): value is ChatMessage[] {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    value.every(
      (m) =>
        m &&
        typeof m === 'object' &&
        (m.role === 'user' || m.role === 'assistant') &&
        typeof m.content === 'string' &&
        m.content.trim().length > 0 &&
        m.content.length <= MAX_MESSAGE_LENGTH,
    )
  );
}

export async function POST(request: Request) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: 'Chat is not configured on this deployment (missing OPENROUTER_API_KEY).' },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const messages = (body as { messages?: unknown })?.messages;
  if (!isValidMessages(messages)) {
    return Response.json({ error: 'Invalid messages payload.' }, { status: 400 });
  }

  // Drop any leading assistant message(s) — the widget always prepends a
  // hardcoded welcome message that was never actually part of the exchange.
  let conversation = messages.slice(-MAX_HISTORY_MESSAGES);
  while (conversation.length > 0 && conversation[0].role !== 'user') {
    conversation = conversation.slice(1);
  }
  if (conversation.length === 0) {
    return Response.json({ error: 'No user message to respond to.' }, { status: 400 });
  }

  try {
    const res = await fetch(OPENROUTER_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        models: [...new Set([process.env.OPENROUTER_MODEL, ...FALLBACK_MODELS].filter(Boolean))].slice(0, 3),
        messages: [
          { role: 'system', content: CHAT_SYSTEM_PROMPT },
          ...conversation.map((m) => ({ role: m.role, content: m.content })),
        ],
      }),
    });

    if (!res.ok) {
      console.error('OpenRouter error:', res.status, await res.text());
      return Response.json({ error: 'The assistant is temporarily unavailable. Please try again shortly.' }, { status: 502 });
    }

    const data = await res.json();
    const reply = data?.choices?.[0]?.message?.content;
    if (typeof reply !== 'string') {
      console.error('Unexpected OpenRouter response shape:', JSON.stringify(data));
      return Response.json({ error: 'The assistant is temporarily unavailable. Please try again shortly.' }, { status: 502 });
    }

    return Response.json({ reply });
  } catch (error) {
    console.error('OpenRouter chat error:', error);
    return Response.json({ error: 'The assistant is temporarily unavailable. Please try again shortly.' }, { status: 502 });
  }
}
