import React, { forwardRef, useRef, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

const SpotlightCard = forwardRef<HTMLDivElement, SpotlightCardProps>(
  ({ children, className = '', spotlightColor = 'rgba(255, 255, 255, 0.25)' }, forwardedRef) => {
    const innerRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState<number>(0);

    const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
      if (!innerRef.current || isFocused) return;
      const rect = innerRef.current.getBoundingClientRect();
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
      setIsFocused(true);
      setOpacity(0.6);
    };

    const handleBlur = () => {
      setIsFocused(false);
      setOpacity(0);
    };

    const handleMouseEnter = () => setOpacity(0.6);
    const handleMouseLeave = () => setOpacity(0);

    return (
      <div
        ref={(node) => {
          innerRef.current = node;
          if (typeof forwardedRef === 'function') forwardedRef(node);
          else if (forwardedRef) forwardedRef.current = node;
        }}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`relative overflow-hidden ${className}`}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
          style={{
            opacity,
            background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`
          }}
        />
        {children}
      </div>
    );
  }
);

SpotlightCard.displayName = 'SpotlightCard';

export default SpotlightCard;
