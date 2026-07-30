'use client';

import Image from 'next/image';
import { useTiltCard } from '@/lib/hooks/useTiltCard';

/**
 * Clean, self-built photo card — replaces both the Lanyard 3D badge (too
 * fragile, WebGL context loss) and ReactBits' ProfileCard (its baked-in
 * shine/luminosity blend modes washed the real photo out and overlapped the
 * name across the face). No third-party visual surprises: plain true-color
 * photo, gradient scrim, and the same tilt hook already used elsewhere on
 * the site.
 */
export function AboutPhotoCard() {
  const ref = useTiltCard<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="group relative mx-auto w-full max-w-[300px] overflow-hidden rounded-lg border border-border bg-bg-card transition-[border-color,box-shadow] hover:border-border-glow hover:shadow-[0_20px_60px_rgba(255,70,32,0.15)]"
    >
      <div className="relative aspect-[1151/1727] w-full overflow-hidden">
        <Image
          src="/assets/img/graduation.jpg"
          alt="Ammar Tyo Pasaribu"
          fill
          priority
          sizes="300px"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="mb-1.5 flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[0.65rem] uppercase tracking-wider text-emerald-300">Open to work</span>
          </div>
          <h3 className="text-[1.3rem] font-bold leading-tight text-white">Ammar Tyo Pasaribu</h3>
          <p className="font-mono text-[0.8rem] text-accent">Full Stack Developer</p>
        </div>
      </div>
    </div>
  );
}
