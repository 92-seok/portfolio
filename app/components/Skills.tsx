'use client';

import { useRef, useEffect, useState } from 'react';
import { SKILLS, ISkillGroup } from '@/data';
import RevealWrapper from './ui/RevealWrapper';

type ColorKey = ISkillGroup['color'];

const COLOR_MAP: Record<ColorKey, { border: string; bg: string; text: string }> = {
  cyan:    { border: 'rgba(34,211,238,0.25)',   bg: 'rgba(34,211,238,0.08)',   text: '#22D3EE' },
  violet:  { border: 'rgba(167,139,250,0.25)',  bg: 'rgba(167,139,250,0.08)', text: '#A78BFA' },
  emerald: { border: 'rgba(52,211,153,0.25)',   bg: 'rgba(52,211,153,0.08)',  text: '#34D399' },
};

const LEVEL_MAP = {
  expert:       { label: 'Expert',       width: '90%' },
  advanced:     { label: 'Advanced',     width: '72%' },
  intermediate: { label: 'Intermediate', width: '55%' },
};

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="section" style={{ background: 'var(--surface)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <RevealWrapper direction="up">
          <span className="section-eyebrow">02. Skills</span>
          <h2 className="section-title">기술 스택</h2>
          <div className="divider" />
        </RevealWrapper>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {SKILLS.map((group, gi) => {
            const colors = COLOR_MAP[group.color];
            return (
              <RevealWrapper key={group.category} direction="up" delay={gi * 100}>
              <div className="card" style={{ padding: '1.75rem' }}>
                {/* 카테고리 헤더 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <span
                    style={{
                      width: '3px',
                      height: '1.25rem',
                      background: colors.text,
                      borderRadius: '2px',
                      flexShrink: 0,
                      boxShadow: `0 0 8px ${colors.text}66`,
                    }}
                  />
                  <h3
                    style={{
                      fontFamily: "'Pretendard', system-ui, sans-serif",
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {group.category}
                  </h3>
                </div>

                {/* 스킬 목록 */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {group.items.map((item, idx) => {
                    const level = LEVEL_MAP[item.level];
                    return (
                      <li key={item.name}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
                          <span
                            style={{
                              fontFamily: "'Pretendard', system-ui, sans-serif",
                              fontSize: '0.875rem',
                              color: 'var(--text-primary)',
                              fontWeight: 500,
                            }}
                          >
                            {item.name}
                          </span>
                          <span
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: '0.65rem',
                              color: colors.text,
                              background: colors.bg,
                              border: `1px solid ${colors.border}`,
                              padding: '0.15rem 0.5rem',
                              borderRadius: '999px',
                            }}
                          >
                            {level.label}
                          </span>
                        </div>

                        {/* 프로그레스 바 */}
                        <div
                          role="progressbar"
                          aria-valuenow={parseInt(level.width)}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`${item.name} ${level.label}`}
                          style={{
                            height: '4px',
                            background: 'var(--void)',
                            borderRadius: '999px',
                            overflow: 'hidden',
                          }}
                        >
                          <div
                            style={{
                              height: '100%',
                              width: isVisible ? level.width : '0%',
                              background: `linear-gradient(90deg, ${colors.text}, ${colors.text}99)`,
                              borderRadius: '999px',
                              transition: `width 0.9s cubic-bezier(0.34, 1.2, 0.64, 1) ${idx * 0.08}s`,
                              boxShadow: isVisible ? `0 0 8px ${colors.text}55` : 'none',
                            }}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              </RevealWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
