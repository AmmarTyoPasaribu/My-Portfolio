'use client';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';

export function RunawayMascot() {
  const mascotRef = useRef<HTMLDivElement>(null);
  const [messages] = useState([
    'Hello! 👋', 
    'Whoops! 🏃‍♂️', 
    'Catch me! 😜', 
    'Too slow! 🐢', 
    'Hehe! 🤭',
    'Nope! ❌'
  ]);
  const [currentMessage, setCurrentMessage] = useState(messages[0]);
  
  useEffect(() => {
    const el = mascotRef.current;
    if (!el) return;

    // Set initial position at the bottom left, and make it visible
    const startX = 40;
    const startY = window.innerHeight - 120;
    gsap.set(el, { x: startX, y: startY, opacity: 1 });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const mascotX = rect.left + rect.width / 2;
      const mascotY = rect.top + rect.height / 2;
      
      const distance = Math.hypot(e.clientX - mascotX, e.clientY - mascotY);
      
      // If cursor gets within 120px, run away!
      if (distance < 120) {
        const margin = 50;
        let newX = Math.random() * (window.innerWidth - rect.width - margin * 2) + margin;
        let newY = Math.random() * (window.innerHeight - rect.height - margin * 2) + margin;
        
        // Ensure it jumps far enough away from its current spot
        if (Math.abs(newX - mascotX) < 150) newX += 200 * (newX > mascotX ? 1 : -1);
        if (Math.abs(newY - mascotY) < 150) newY += 200 * (newY > mascotY ? 1 : -1);

        // Clamp to screen bounds to prevent it flying off screen
        newX = Math.max(margin, Math.min(newX, window.innerWidth - rect.width - margin));
        newY = Math.max(margin, Math.min(newY, window.innerHeight - rect.height - margin));

        gsap.to(el, {
          x: newX,
          y: newY,
          duration: 0.4,
          ease: "power2.out",
          overwrite: true
        });

        // Change message randomly
        setCurrentMessage(messages[Math.floor(Math.random() * messages.length)]);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [messages]);

  return (
    <div 
      ref={mascotRef}
      className="fixed top-0 left-0 z-[100] flex flex-col items-center opacity-0 pointer-events-none"
      style={{ willChange: 'transform' }}
    >
      <div className="mb-2 rounded-xl bg-black/80 backdrop-blur-md px-3 py-1.5 text-xs font-medium text-white shadow-lg border border-white/10 relative">
        {currentMessage}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-black/80" />
      </div>
      
      {/* 3D Rendered Mascot Image */}
      <div className="relative w-20 h-20 mix-blend-screen drop-shadow-[0_0_15px_rgba(255,70,32,0.6)] select-none">
        <Image
          src="/assets/img/robot_mascot.png"
          alt="Robot Mascot"
          fill
          sizes="80px"
          className="object-contain"
        />
      </div>
    </div>
  );
}
