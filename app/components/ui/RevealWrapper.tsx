'use client';

import { useEffect, useRef, useState, CSSProperties } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'fade';

interface RevealWrapperProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;       // ms 단위
  duration?: number;    // ms 단위
  threshold?: number;   // 0~1
  style?: CSSProperties;
  className?: string;
}

const TRANSLATE: Record<Direction, string> = {
  up:    'translateY(32px)',
  down:  'translateY(-32px)',
  left:  'translateX(40px)',
  right: 'translateX(-40px)',
  fade:  'translateY(0)',
};

export default function RevealWrapper({
  children,
  direction = 'up',
  delay = 0,
  duration = 600,
  threshold = 0.12,
  style,
  className,
}: RevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate(0,0)' : TRANSLATE[direction],
        transition: `opacity ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
