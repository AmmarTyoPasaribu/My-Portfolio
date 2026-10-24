import { localize } from './i18n/localize';
import {
  certifications,
  education,
  experiences,
  organizations,
  personal,
  projects,
  skills,
  socials,
  volunteers,
} from './site/data';

// Builds a single plain-text "knowledge base" of the whole portfolio so the
// chat API route can stuff it directly into the model's system prompt.
// The portfolio's content is a few KB total, nowhere near large enough to
// need chunking or a vector store, so plain context-stuffing is simpler and
// more reliable than real RAG here.
function buildPortfolioContext(): string {
  const en = <T>(value: T) => localize(value, 'en');
  const lines: string[] = [];

  lines.push(`# ${personal.name} — Portfolio Knowledge Base`);
  lines.push('');
  lines.push('## Basics');
  lines.push(`Roles: ${personal.roles.join(', ')}`);
  lines.push(`Location: ${personal.location}`);
  lines.push(en(personal.description));
  lines.push('');
  lines.push('## About');
  lines.push(en(personal.about.description));
  lines.push('');

  lines.push('## Education');
  for (const item of en(education)) {
    lines.push(`- ${item.institution} (${item.period}): ${item.degree}. ${item.description} ${item.details.join(' ')}`);
  }
  lines.push('');

  lines.push('## Experience');
  for (const item of en(experiences)) {
    lines.push(
      `- ${item.role} at ${item.company} (${item.period}, ${item.type}): ${item.description} ${item.responsibilities.join(' ')}`,
    );
  }
  lines.push('');

  lines.push('## Organizations, volunteering and scholarship');
  for (const item of [...en(organizations), ...en(volunteers)]) {
    lines.push(
      `- ${item.role}, ${item.organization} (${item.period}): ${item.description} ${item.responsibilities.join(' ')}`,
    );
  }
  lines.push('');

  lines.push('## Licenses and certifications');
  for (const item of en(certifications)) {
    lines.push(`- ${item.name}, ${item.issuer} (${item.date})`);
  }
  lines.push('');

  lines.push('## Skills');
  for (const group of en(skills)) {
    lines.push(`- ${group.title}: ${group.items.map((i) => i.name).join(', ')}`);
  }
  lines.push('');

  lines.push('## Projects');
  for (const p of en(projects)) {
    const demo =
      p.demoStatus === 'live' && p.links.demo ? `Live demo: ${p.links.demo}` : 'Live demo: currently under maintenance/unavailable';
    const role = p.role ? ` Role: ${p.role}.` : '';
    lines.push(
      `- ${p.title} (${p.category}): ${p.description}${role} Tech: ${p.technologies.join(', ')}. ${demo}. Source code: ${p.links.github ?? 'n/a'}`,
    );
  }
  lines.push('');

  lines.push('## Contact');
  for (const s of socials) {
    lines.push(`- ${s.name}: ${s.handle}`);
  }

  return lines.join('\n');
}

export const PORTFOLIO_CONTEXT = buildPortfolioContext();

export const CHAT_SYSTEM_PROMPT = `You are the AI assistant embedded in ${personal.name}'s portfolio website. Answer questions about ${personal.shortName}'s background, skills, projects, education, and experience using ONLY the information in the knowledge base below.

Rules:
- Be concise, friendly, and helpful — a few sentences per answer unless more detail is clearly wanted.
- If asked something not covered in the knowledge base (or unrelated to ${personal.shortName}/his portfolio), say you don't have that information and suggest reaching out directly via the contact details below.
- Reply in the same language the user writes in (Indonesian or English).
- Never make up projects, dates, or facts not present below.

${PORTFOLIO_CONTEXT}`;
