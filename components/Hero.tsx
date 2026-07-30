'use client';

import Image from 'next/image';
import { heroSocials, typewriterWords } from '@/lib/content';
import { useT } from '@/lib/i18n/LanguageProvider';
import { useTypewriter } from '@/lib/hooks/useTypewriter';
import { useSplitTextReveal } from '@/lib/hooks/useSplitTextReveal';
import { useHeroPhotoEntrance } from '@/lib/hooks/useHeroPhotoEntrance';
import { useHeroParallax } from '@/lib/hooks/useHeroParallax';
import { IconGithub, IconLinkedin, IconEmailFill, IconPhoneFill } from '@/lib/icons';
import ClickSpark from './ClickSpark';
import StarBorder from './StarBorder';
import DecryptedText from './DecryptedText';

const iconMap = { github: IconGithub, linkedin: IconLinkedin, email: IconEmailFill, phone: IconPhoneFill };

export function Hero() {
  const { t } = useT();
  const typed = useTypewriter(typewriterWords);
  const nameRef = useSplitTextReveal<HTMLHeadingElement>();
  const photoEntranceRef = useHeroPhotoEntrance<HTMLDivElement>();
  const photoParallaxRef = useHeroParallax<HTMLDivElement>();

  return (
    <section
      id="home"
      className="hero-section relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-10 pb-16 pt-24 max-md:px-5"
    >
      <div className="relative z-[1] mx-auto flex w-full max-w-[1140px] items-center justify-between gap-16 max-md:flex-col-reverse max-md:gap-9 max-md:text-center">
        <div className="flex-1">
          <p className="mb-5 font-mono text-[0.8rem] uppercase tracking-[0.15em] text-accent">
            <DecryptedText text={t('hero.greeting')} animateOn="view" speed={40} sequential revealDirection="start" />
          </p>

          <h1
            ref={nameRef}
            className="hero-name mb-5 text-balance text-[clamp(2.4rem,6vw,4.8rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-text-primary"
          >
            Ammar Tyo{' '}
            <em className="whitespace-nowrap font-accent font-medium not-italic italic text-accent">Pasaribu</em>
          </h1>

          <p className="mb-5 min-h-[1.8em] font-mono text-base tracking-[-0.01em] text-text-secondary">
            <span className="text-text-muted">{t('hero.tagline')}</span>
            <span className="font-medium text-accent">{typed}</span>
            <span className="animate-[blink_1s_step-end_infinite] text-accent">|</span>
          </p>

          <p className="mb-8 max-w-[480px] text-[1.05rem] leading-[1.8] text-text-secondary max-md:mx-auto">
            {t('hero.desc')}
          </p>

          <div className="mb-10 flex flex-wrap gap-4 max-md:justify-center">
            <ClickSpark sparkColor="#ff4620" sparkCount={10} sparkRadius={20} duration={500}>
              <StarBorder as="a" href="#projects" color="#ff4620" speed="4s">
                {t('hero.cta1')}
              </StarBorder>
            </ClickSpark>
            <a
              href="/assets/docs/CV_Ammar_Tyo_Pasaribu.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-sm border border-border px-8 py-3.5 text-[0.95rem] font-semibold text-text-primary transition-all hover:border-accent hover:text-accent"
            >
              {t('about.cv')}
            </a>
          </div>

          <div className="flex gap-3 max-md:justify-center">
            {heroSocials.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <a
                  key={s.icon}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener' : undefined}
                  aria-label={s.label}
                  className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-border text-text-secondary transition-all hover:-translate-y-1 hover:border-accent hover:bg-accent/10 hover:text-text-primary"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex-shrink-0" ref={photoParallaxRef}>
          <div ref={photoEntranceRef} className="relative">
            <div className="image-wrapper group relative h-[360px] w-[300px] border border-border p-2.5 max-md:h-[216px] max-md:w-[180px]">
              <div className="pointer-events-none absolute -bottom-4 left-4 -right-4 top-4 -z-10 border border-accent transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
              <Image
                src="/assets/img/foto.jpg"
                alt="Ammar Tyo Pasaribu — Profile Photo"
                width={300}
                height={360}
                priority
                className="h-full w-full object-cover grayscale-[0.6] contrast-[1.05] transition-[filter] duration-300 hover:grayscale-0"
              />
            </div>
            <span className="absolute -left-3.5 bottom-2 z-[2] whitespace-nowrap border border-border bg-bg px-3 py-1.5 font-mono text-[0.68rem] tracking-wide text-accent max-md:left-1/2 max-md:-translate-x-1/2">
              IMG_01 // PORTOFOLIO
            </span>
          </div>
        </div>
      </div>

      <a href="#about" aria-label="Scroll down" className="absolute bottom-8 left-1/2 z-[2] -translate-x-1/2 animate-[bounce-indicator_2s_ease-in-out_infinite]">
        <div className="flex h-[42px] w-[26px] justify-center rounded-full border-2 border-text-muted pt-2">
          <div className="h-2 w-1 animate-[scroll-wheel_2s_ease-in-out_infinite] rounded bg-text-muted" />
        </div>
      </a>
    </section>
  );
}
