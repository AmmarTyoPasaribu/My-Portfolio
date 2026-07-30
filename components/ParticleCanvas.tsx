'use client';

import { useParticleBackground } from '@/lib/hooks/useParticleBackground';

export function ParticleCanvas() {
  const ref = useParticleBackground();
  return <canvas ref={ref} className="fixed inset-0 z-0 bg-bg pointer-events-none" />;
}
