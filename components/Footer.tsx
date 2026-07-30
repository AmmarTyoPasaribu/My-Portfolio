import { footerSocials } from '@/lib/content';
import { Trans } from '@/lib/i18n/Trans';
import { Container } from './Container';
import { IconGithub, IconLinkedin, IconEmailFill } from '@/lib/icons';

const iconMap = { github: IconGithub, linkedin: IconLinkedin, email: IconEmailFill };

export function Footer() {
  return (
    <footer className="relative z-[1] border-t border-border bg-[#0c0c0b]/85 py-10">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-5">
          <a href="#" className="font-mono text-[1.1rem] font-semibold text-accent">
            A<span className="text-text-primary">mmar</span>
          </a>
          <Trans k="footer.copy" as="p" className="text-sm text-text-muted" />
          <div className="flex gap-2.5">
            {footerSocials.map((s) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap];
              return (
                <a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={s.label}
                  className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-border text-text-secondary transition-all hover:border-accent hover:bg-accent/10 hover:text-text-primary"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}
