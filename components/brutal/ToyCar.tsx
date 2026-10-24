'use client';

import { useEffect, useRef } from 'react';

const BASE_SPEED = 260; // px per second
const TURBO_SPEED = 720;
const OFFSET = 4; // the car's centre rides just outside the frame border
const PUFFS = [
  { back: 86, size: 15, opacity: 0.17 },
  { back: 63, size: 8, opacity: 0.58 },
  { back: 47, size: 4, opacity: 0.8 },
];

/** Position and heading (degrees) at arc length `s` along a rectangle, clockwise from the top-left corner. */
function along(s: number, w: number, h: number) {
  const perimeter = 2 * (w + h);
  const d = ((s % perimeter) + perimeter) % perimeter;
  if (d < w) return { x: d, y: 0, a: 0 };
  if (d < w + h) return { x: w, y: d - w, a: 90 };
  if (d < 2 * w + h) return { x: w - (d - w - h), y: h, a: 180 };
  return { x: 0, y: h - (d - 2 * w - h), a: 270 };
}

function honk() {
  try {
    const Ctx = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    const now = ctx.currentTime;
    [392, 330].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, now + i * 0.14);
      gain.gain.exponentialRampToValueAtTime(0.08, now + i * 0.14 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.14 + 0.13);
      osc.connect(gain).connect(ctx.destination);
      osc.start(now + i * 0.14);
      osc.stop(now + i * 0.14 + 0.14);
    });
    window.setTimeout(() => void ctx.close(), 600);
  } catch {
    // audio can be blocked; the turbo boost still works
  }
}

/** A toy car that drives clockwise around its positioned parent. Click it to honk and boost. */
export default function ToyCar() {
  const layerRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const puffRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const turboUntil = useRef(0);

  useEffect(() => {
    const layer = layerRef.current;
    const car = carRef.current;
    if (!layer || !car) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w = 0;
    let h = 0;
    const measure = () => {
      const rect = layer.getBoundingClientRect();
      w = layer.offsetWidth + OFFSET * 2;
      h = layer.offsetHeight + OFFSET * 2;
      return rect;
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(layer);

    let s = w * 0.42;
    let angle = 0;
    let speed = BASE_SPEED;
    let last = performance.now();
    let raf = 0;

    const place = () => {
      const p = along(s, w, h);
      car.style.transform = `translate3d(${p.x - OFFSET}px, ${p.y - OFFSET}px, 0) translate(-50%, -50%) rotate(${angle}deg)`;
      PUFFS.forEach((puff, i) => {
        const el = puffRefs.current[i];
        if (!el) return;
        const q = along(s - puff.back, w, h);
        el.style.left = `${q.x - OFFSET}px`;
        el.style.top = `${q.y - OFFSET}px`;
      });
    };

    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const boosted = now < turboUntil.current;
      speed += ((boosted ? TURBO_SPEED : BASE_SPEED) - speed) * Math.min(1, dt * 6);
      s += speed * dt;
      const target = along(s, w, h).a;
      const diff = ((target - angle + 540) % 360) - 180; // shortest way round
      angle = (angle + diff * Math.min(1, dt * 14) + 360) % 360;
      car.classList.toggle('is-turbo', boosted);
      place();
      raf = requestAnimationFrame(frame);
    };

    if (reduced) place();
    else raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  const onBoost = () => {
    turboUntil.current = performance.now() + 1600;
    honk();
  };

  return (
    <div ref={layerRef} className="bx-car-layer" aria-hidden="false">
      {PUFFS.map((p, i) => (
        <span
          key={p.back}
          ref={(el) => {
            puffRefs.current[i] = el;
          }}
          className="bx-puff"
          style={{ width: p.size, height: p.size, opacity: p.opacity }}
        />
      ))}
      <div
        ref={carRef}
        className="bx-car"
        role="button"
        tabIndex={0}
        title="Honk & turbo!"
        aria-label="Toy car: press to honk and boost"
        onClick={onBoost}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onBoost();
          }
        }}
      >
        <svg viewBox="0 0 78 46" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="carBeam" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" stopColor="#fff59d" stopOpacity="0.8" />
              <stop offset="1" stopColor="#fff9c4" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="carGlass" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#bae6fd" />
              <stop offset="1" stopColor="#0ea5e9" />
            </linearGradient>
          </defs>
          <g className="bx-beam" opacity="0.85">
            <polygon points="70,12 118,0 118,22 70,19" fill="url(#carBeam)" />
            <polygon points="70,27 118,24 118,46 70,34" fill="url(#carBeam)" />
          </g>
          {/* wheels */}
          {[[12, 1], [47, 1], [12, 37], [47, 37]].map(([x, y]) => (
            <rect key={`${x}-${y}`} x={x} y={y} width="17" height="8" rx="2.5" fill="#0f172a" stroke="#1a1c1c" strokeWidth="2" />
          ))}
          {/* body */}
          <rect x="5" y="6" width="65" height="34" rx="9" fill="#d11f26" stroke="#1a1c1c" strokeWidth="3.5" />
          <rect x="8" y="21" width="59" height="4" fill="#ffd700" stroke="#1a1c1c" strokeWidth="1.2" />
          {/* cabin */}
          <rect x="24" y="11" width="22" height="24" rx="4" fill="#a8141a" stroke="#1a1c1c" strokeWidth="2" />
          <path d="M 46 11 L 57 14 L 57 32 L 46 35 Z" fill="url(#carGlass)" stroke="#1a1c1c" strokeWidth="2.2" />
          <line x1="49" y1="17" x2="54" y2="30" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" opacity="0.85" />
          <text x="35" y="26" fontSize="8" fontWeight="900" fontFamily="sans-serif" fill="#fff" textAnchor="middle">AT</text>
          {/* lights */}
          <circle cx="67" cy="13" r="3.4" fill="#fef08a" stroke="#1a1c1c" strokeWidth="1.8" />
          <circle cx="67" cy="33" r="3.4" fill="#fef08a" stroke="#1a1c1c" strokeWidth="1.8" />
          <rect x="4" y="9" width="4" height="6" rx="1" fill="#ef4444" stroke="#1a1c1c" strokeWidth="1" />
          <rect x="4" y="31" width="4" height="6" rx="1" fill="#ef4444" stroke="#1a1c1c" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
}
