'use client';

import { useState } from 'react';
import Image from 'next/image';
import { certGroups, type CertGroup, type CertItem } from '@/lib/content';
import { Trans } from '@/lib/i18n/Trans';
import { useT } from '@/lib/i18n/LanguageProvider';
import { useTiltCard } from '@/lib/hooks/useTiltCard';
import { useLightbox } from './Lightbox';
import { Container } from './Container';
import { Reveal } from './Reveal';
import GlareHover from './GlareHover';

export function Certifications() {
  const { t } = useT();
  return (
    <section id="certifications" className="relative z-[1] py-24 max-md:py-[70px]">
      <Container>
        <Reveal className="mb-3 text-center">
          <Trans
            k="cert.title"
            as="h2"
            className="text-[clamp(2rem,5vw,3rem)] font-extrabold tracking-[-0.03em] [&_span]:font-accent [&_span]:font-medium [&_span]:not-italic [&_span]:italic [&_span]:text-accent"
          />
        </Reveal>
        <Reveal className="mb-14 text-center font-mono text-[0.8rem] uppercase tracking-[0.08em] text-text-secondary">
          {t('cert.sub')}
        </Reveal>

        {certGroups.map((group) => (
          <CertGroupBlock key={group.id} group={group} />
        ))}
      </Container>
    </section>
  );
}

function CertGroupBlock({ group }: { group: CertGroup }) {
  const [expanded, setExpanded] = useState(false);
  const { t } = useT();

  const visibleItems = group.toggle ? group.items.filter((c) => c.visible || expanded) : group.items;

  return (
    <div className="mb-2">
      <Reveal className="mb-2 grid grid-cols-3 gap-5 max-md:grid-cols-2 max-[480px]:grid-cols-1">
        {visibleItems.map((item, i) => (
          <CertCard key={i} item={item} />
        ))}
      </Reveal>
      {group.toggle && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className={`mx-auto mb-7 mt-1 block rounded-full border px-7 py-2.5 text-[0.88rem] font-medium transition-all hover:shadow-[0_0_20px_rgba(255,70,32,0.15)] ${
            expanded ? 'border-accent text-accent' : 'border-border text-accent hover:border-accent hover:bg-accent/8'
          }`}
        >
          {expanded ? t('cert.less') : t('cert.more')}
        </button>
      )}
    </div>
  );
}

function CertCard({ item }: { item: CertItem }) {
  const ref = useTiltCard<HTMLDivElement>();
  const { open } = useLightbox();
  const { t } = useT();
  const src = `/assets/sertifikat/${item.img}`;
  const title = item.titleKey ? t(item.titleKey) : item.title;

  return (
    <GlareHover
      ref={ref}
      width="100%"
      height="100%"
      background="transparent"
      borderColor="transparent"
      borderRadius="10px"
      glareColor="#ff4620"
      glareOpacity={0.3}
      glareAngle={-30}
      glareSize={200}
      className="!border-white/8 !bg-[#0e0e0d]/85 backdrop-blur-md transition-[border-color,box-shadow] hover:!border-border-glow hover:shadow-[0_12px_40px_rgba(255,70,32,0.12)]"
    >
      <div className="w-full">
        <button
          type="button"
          onClick={() => open(src, title)}
          className="cert-img-hover relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden border-b border-white/6"
        >
          <Image src={src} alt={title} fill className="object-cover object-top transition-transform duration-300 hover:scale-[1.04]" />
        </button>
        <div className="bg-[#0a0a0a]/70 px-4.5 py-4">
          <h4 className="mb-1.5 text-[0.92rem] font-semibold leading-[1.35] text-text-primary">{title}</h4>
          <p className="mb-1.5 text-[0.8rem] text-text-muted">{item.org}</p>
          <span className="inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-[0.75rem] font-semibold text-accent">
            {item.year}
          </span>
        </div>
      </div>
    </GlareHover>
  );
}
