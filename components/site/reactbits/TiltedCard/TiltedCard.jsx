'use client';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import './TiltedCard.css';

export default function TiltedCard({ imageSrc, altText = '', captionText = '', containerClassName = '', disabled = false, children }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 180, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 180, damping: 20 });
  const move = e => {
    if (disabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const leave = () => { x.set(0); y.set(0); };
  return (
    <motion.div
      ref={ref}
      className={`tilted-card ${containerClassName}`}
      onMouseMove={move}
      onMouseLeave={leave}
      style={disabled ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
    >
      {imageSrc && <img src={imageSrc} alt={altText} loading="lazy" />}
      {captionText && <span className="tilted-card-caption">{captionText}</span>}
      {children}
    </motion.div>
  );
}
