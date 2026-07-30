'use client';

import { contactLinks } from '@/lib/content';
import { Trans } from '@/lib/i18n/Trans';
import { useT } from '@/lib/i18n/LanguageProvider';
import { Container } from './Container';
import { Reveal } from './Reveal';
import { IconMailStroke, IconGithub, IconLinkedin, IconInstagram, IconPhoneStroke } from '@/lib/icons';

const iconMap = {
  email: IconMailStroke,
  github: IconGithub,
  linkedin: IconLinkedin,
  instagram: IconInstagram,
  phone: IconPhoneStroke,
};

export function ContactCards() {
  const { t } = useT();
  return (
    <section id="contact" className="relative z-[1] py-24 max-md:py-[70px]">
      <Container>
        <Reveal className="mb-3 text-center">
          <Trans
            k="contact.title"
            as="h2"
            className="text-[clamp(2rem,5vw,3rem)] font-extrabold tracking-[-0.03em] [&_span]:font-accent [&_span]:font-medium [&_span]:not-italic [&_span]:italic [&_span]:text-accent"
          />
        </Reveal>
        <Reveal className="mb-14 text-center font-mono text-[0.8rem] uppercase tracking-[0.08em] text-text-secondary">
          {t('contact.sub')}
        </Reveal>

        <Reveal className="grid grid-cols-5 gap-5 max-md:grid-cols-3 max-[560px]:grid-cols-2">
          {contactLinks.map((c) => {
            const Icon = iconMap[c.icon];
            return (
              <a
                key={c.title}
                href={c.href}
                target="_blank"
                rel="noopener"
                className="flex flex-col items-center rounded-lg border border-white/8 bg-[#0e0e0d]/85 px-5 py-8 pb-7 text-center text-text-primary backdrop-blur-md transition-all hover:-translate-y-1.5 hover:border-border-glow hover:shadow-[0_12px_40px_rgba(255,70,32,0.15)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/12 text-accent">
                  <Icon className="h-[22px] w-[22px]" />
                </div>
                <h4 className="mb-1.5 font-heading text-[0.95rem] font-semibold">{c.title}</h4>
                <p className="break-all text-[0.82rem] text-text-muted">{c.value}</p>
              </a>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
