'use client';

import type { IconType } from 'react-icons';
import {
  SiCss,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiGit,
  SiGithub,
  SiGooglecolab,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPandas,
  SiPhp,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { techRows, type TechItem } from '@/lib/content';
import { Trans } from '@/lib/i18n/Trans';
import { useT } from '@/lib/i18n/LanguageProvider';
import { Container } from './Container';
import { Reveal } from './Reveal';
import LogoLoop, { type LogoItem } from './LogoLoop';

// Rendered as inline SVG components (react-icons), not <img> pointed at an
// external icon CDN — LogoLoop measures each row's width once its images
// finish loading, and 19+ separate cross-origin image requests loading at
// slightly different times threw that measurement off, causing rows to
// overlap. Inline SVGs paint synchronously with everything else, so there's
// nothing to "finish loading" and the overlap can't happen.
const ICONS: Record<string, { Icon: IconType; color: string }> = {
  html: { Icon: SiHtml5, color: '#E34F26' },
  css: { Icon: SiCss, color: '#1572B6' },
  js: { Icon: SiJavascript, color: '#F7DF1E' },
  ts: { Icon: SiTypescript, color: '#3178C6' },
  react: { Icon: SiReact, color: '#61DAFB' },
  nextjs: { Icon: SiNextdotjs, color: '#F2F0EA' },
  tailwind: { Icon: SiTailwindcss, color: '#06B6D4' },
  nodejs: { Icon: SiNodedotjs, color: '#339933' },
  express: { Icon: SiExpress, color: '#F2F0EA' },
  python: { Icon: SiPython, color: '#3776AB' },
  flask: { Icon: SiFlask, color: '#F2F0EA' },
  fastapi: { Icon: SiFastapi, color: '#009688' },
  pandas: { Icon: SiPandas, color: '#F2F0EA' },
  googlecolab: { Icon: SiGooglecolab, color: '#F9AB00' },
  laravel: { Icon: SiLaravel, color: '#FF2D20' },
  php: { Icon: SiPhp, color: '#777BB4' },
  java: { Icon: FaJava, color: '#F89820' },
  mysql: { Icon: SiMysql, color: '#4479A1' },
  git: { Icon: SiGit, color: '#F05032' },
  github: { Icon: SiGithub, color: '#F2F0EA' },
  vscode: { Icon: VscVscode, color: '#007ACC' },
  vercel: { Icon: SiVercel, color: '#F2F0EA' },
  postman: { Icon: SiPostman, color: '#FF6C37' },
};

const DIRECTIONS: Array<'left' | 'right'> = ['left', 'right', 'left'];

function toLogoItems(row: TechItem[]): LogoItem[] {
  return row.map((tech) => {
    const entry = ICONS[tech.slug];
    const Icon = entry?.Icon;
    return {
      node: (
        <span className="flex items-center gap-2.5 whitespace-nowrap rounded-lg border border-border bg-bg-card px-4 py-2.5 text-[0.85rem] font-medium text-text-secondary transition-all duration-300 group-hover/item:border-accent group-hover/item:bg-accent/10 group-hover/item:text-text-primary group-hover/item:shadow-[0_8px_24px_rgba(255,70,32,0.2)]">
          {Icon && <Icon className="h-6 w-6 flex-shrink-0" style={{ color: entry.color }} />}
          {tech.label}
        </span>
      ),
      title: tech.label,
    };
  });
}

export function SkillsMarquee() {
  const { t } = useT();
  return (
    <section id="skills" className="relative z-[1] overflow-hidden py-24 max-md:py-[70px]">
      <Container>
        <Reveal className="mb-3 text-center">
          <Trans
            k="skills.title"
            as="h2"
            className="text-[clamp(2rem,5vw,3rem)] font-extrabold tracking-[-0.03em] [&_span]:font-accent [&_span]:font-medium [&_span]:not-italic [&_span]:italic [&_span]:text-accent"
          />
        </Reveal>
        <Reveal className="mb-14 text-center font-mono text-[0.8rem] uppercase tracking-[0.08em] text-text-secondary">
          {t('skills.sub')}
        </Reveal>
      </Container>

      <div className="flex flex-col gap-5">
        {techRows.map((row, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <LogoLoop
              logos={toLogoItems(row)}
              direction={DIRECTIONS[i % DIRECTIONS.length]}
              speed={36}
              gap={20}
              logoHeight={40}
              fadeOut
              fadeOutColor="var(--color-bg)"
              pauseOnHover
              scaleOnHover
              ariaLabel={`Tech stack row ${i + 1}`}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
