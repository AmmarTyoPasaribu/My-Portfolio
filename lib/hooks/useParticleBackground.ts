'use client';

import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface Particle {
  x: number;
  y: number;
  r: number;
  o: number;
  vx: number;
  vy: number;
}

/** Sparse single-hue (accent-only) particle drift — no glow, no multi-color. */
export function useParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || prefersReduced) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let cw = 0;
    let ch = 0;
    let particles: Particle[] = [];
    let rafId = 0;

    function makeParticle(): Particle {
      return {
        x: Math.random() * cw,
        y: Math.random() * ch,
        r: Math.random() * 1.2 + 0.6,
        o: Math.random() * 0.25 + 0.12,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
      };
    }

    function resize() {
      cw = canvas!.width = window.innerWidth;
      ch = canvas!.height = window.innerHeight;
    }

    function tick() {
      ctx!.clearRect(0, 0, cw, ch);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = cw;
        if (p.x > cw) p.x = 0;
        if (p.y < 0) p.y = ch;
        if (p.y > ch) p.y = 0;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255, 70, 32, ${p.o})`;
        ctx!.fill();
      });
      rafId = requestAnimationFrame(tick);
    }

    resize();
    particles = Array.from({ length: 80 }, makeParticle);
    window.addEventListener('resize', resize);
    tick();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, [prefersReduced]);

  return canvasRef;
}
