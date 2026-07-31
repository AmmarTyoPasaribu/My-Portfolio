'use client';

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence, MotionValue } from 'framer-motion';
import { Children, cloneElement, useEffect, useMemo, useRef, useState, ReactElement } from 'react';

interface DockItemProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  mouseX: MotionValue<number>;
  spring: any;
  distance: number;
  magnification: number;
  baseItemSize: number;
  label?: string;
}

function DockItem({ children, className = '', onClick, href, mouseX, spring, distance, magnification, baseItemSize, label }: DockItemProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(mouseDistance, [-distance, 0, distance], [baseItemSize, magnification, baseItemSize]);
  const size = useSpring(targetSize, spring);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <motion.a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener' : undefined}
      ref={ref}
      style={{
        width: size,
        height: size
      }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className={`relative inline-flex items-center justify-center rounded-full bg-bg/60 backdrop-blur-md border-border border shadow-lg text-text-secondary hover:text-text-primary hover:border-accent hover:bg-accent/10 transition-colors ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
      aria-label={label}
    >
      {Children.map(children, child => {
         if (typeof child === 'object' && child !== null && 'props' in child) {
           return cloneElement(child as ReactElement, { isHovered })
         }
         return child;
      })}
    </motion.a>
  );
}

function DockLabel({ children, className = '', ...rest }: { children: React.ReactNode, className?: string, isHovered?: MotionValue<number> }) {
  const { isHovered } = rest;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isHovered) return;
    const unsubscribe = isHovered.on('change', (latest) => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={`${className} absolute -top-8 left-1/2 w-fit whitespace-pre rounded-md border border-border bg-bg px-3 py-1.5 text-xs text-text-primary font-mono tracking-wide pointer-events-none drop-shadow-md`}
          role="tooltip"
          style={{ x: '-50%' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return <div className={`flex items-center justify-center w-full h-full [&>svg]:w-[45%] [&>svg]:h-[45%] ${className}`}>{children}</div>;
}

export interface DockProps {
  items: {
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
    href?: string;
    className?: string;
  }[];
  className?: string;
  spring?: any;
  magnification?: number;
  distance?: number;
  panelHeight?: number;
  dockHeight?: number;
  baseItemSize?: number;
}

export function Dock({
  items,
  className = '',
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 64,
  dockHeight = 256,
  baseItemSize = 42 // Adjusted for smaller initial icon sizes
}: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification, dockHeight]
  );
  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  return (
    <motion.div style={{ height, scrollbarWidth: 'none' }} className="flex max-w-full items-center max-md:justify-center relative">
      <motion.div
        onMouseMove={(e) => {
          isHovered.set(1);
          mouseX.set(e.pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={`${className} flex items-end w-fit gap-3 rounded-full border-border border bg-bg-glass pb-[11px] px-3`}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            href={item.href}
            onClick={item.onClick}
            className={item.className}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
            label={item.label}
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel>{item.label}</DockLabel>
          </DockItem>
        ))}
      </motion.div>
    </motion.div>
  );
}
