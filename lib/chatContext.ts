import { en } from './i18n/dictionaries/en';
import { projects } from './projects';
import {
  aboutTags,
  achievements,
  contactLinks,
  educationItems,
  experienceItems,
  heroSocials,
  techRows,
  typewriterWords,
} from './content';

// Builds a single plain-text "knowledge base" of the whole portfolio so the
// chat API route can stuff it directly into the model's system prompt.
// The portfolio's content is a few KB total — nowhere near large enough to
// need chunking or a vector store, so plain context-stuffing is simpler and
// more reliable than real RAG here.
function buildPortfolioContext(): string {
  const lines: string[] = [];

  lines.push('# Ammar Tyo Pasaribu — Portfolio Knowledge Base');
  lines.push('');
  lines.push('## Basics');
  lines.push(`Role: ${en['hero.greeting']}`);
  lines.push(`Roles typed in the hero animation: ${typewriterWords.join(', ')}`);
  lines.push(en['hero.desc']);
  lines.push('');
  lines.push('## About');
  lines.push(en['about.p1'].replace(/<br\s*\/?>/gi, ' '));
  lines.push(`Skills & interests tags: ${aboutTags.join(', ')}`);
  lines.push('');

  lines.push('## Education');
  for (const item of educationItems) {
    lines.push(`- ${item.org} (${item.period}): ${en[item.roleKey]}. ${stripHtml(en[item.descKey])}`);
  }
  lines.push('');

  lines.push('## Experience');
  for (const item of experienceItems) {
    lines.push(`- ${item.org} (${item.period}): ${en[item.roleKey]}. ${stripHtml(en[item.descKey])}`);
  }
  lines.push('');

  lines.push('## Achievements');
  for (const item of achievements) {
    lines.push(`- ${item.icon} ${item.title} (${item.year}): ${en[item.descKey]}`);
  }
  lines.push('');

  lines.push('## Skills');
  for (const row of techRows) {
    lines.push(`- ${row.map((t) => t.label).join(', ')}`);
  }
  lines.push('');

  lines.push('## Projects');
  for (const p of projects) {
    const techLine = p.techTable.map((t) => `${t.label}: ${t.value}`).join(' | ');
    const demoLine =
      p.demoStatus === 'live' && p.demoUrl ? `Live demo: ${p.demoUrl}` : 'Live demo: currently under maintenance/unavailable';
    lines.push(
      `- ${p.emoji} ${p.title}: ${en[p.cardDescKey]} Tech: ${techLine}. ${demoLine}. Source code: ${p.sourceUrl}`,
    );
  }
  lines.push('');

  lines.push('## Contact');
  for (const c of contactLinks) {
    lines.push(`- ${c.title}: ${c.value}`);
  }
  lines.push(`GitHub/LinkedIn/Email also linked in the hero section: ${heroSocials.map((s) => s.href).join(', ')}`);

  return lines.join('\n');
}

function stripHtml(text: string): string {
  return text.replace(/<[^>]+>/g, '');
}

export const PORTFOLIO_CONTEXT = buildPortfolioContext();

export const CHAT_SYSTEM_PROMPT = `You are the AI assistant embedded in Ammar Tyo Pasaribu's portfolio website. Answer questions about Ammar's background, skills, projects, education, and experience using ONLY the information in the knowledge base below.

Rules:
- Be concise, friendly, and helpful — a few sentences per answer unless more detail is clearly wanted.
- If asked something not covered in the knowledge base (or unrelated to Ammar/his portfolio), say you don't have that information and suggest reaching out to Ammar directly via the contact details below.
- Reply in the same language the user writes in (Indonesian or English).
- Never make up projects, dates, or facts not present below.

${PORTFOLIO_CONTEXT}`;
