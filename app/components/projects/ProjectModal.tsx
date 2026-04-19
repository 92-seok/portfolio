'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { IProject } from '@/data';

const FONT_BODY = "'Pretendard', system-ui, sans-serif";
const FONT_MONO = "'JetBrains Mono', monospace";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h4 style={{
      fontFamily: FONT_BODY,
      fontSize: '0.78rem',
      fontWeight: 700,
      color: 'var(--text-muted)',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.12em',
      marginBottom: '0.75rem',
    }}>
      {children}
    </h4>
  );
}

export default function ProjectModal({ project, onClose }: { project: IProject; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // 포커스 트랩 — 모달 열리면 닫기 버튼에 포커스
    closeRef.current?.focus();

    // ESC 키 닫기
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);

    // body 스크롤 잠금
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return createPortal(
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(14,14,18,0.82)',
        backdropFilter: 'blur(10px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--elevated)',
          border: '1px solid var(--border)',
          borderRadius: '20px',
          maxWidth: '680px',
          width: '100%',
          maxHeight: '85vh',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 60px rgba(15,15,15,0.12)',
        }}
      >
        {/* 고정 헤더 */}
        <div style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          background: 'var(--elevated)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '0.75rem 1.25rem',
          display: 'flex',
          justifyContent: 'flex-end',
          borderRadius: '20px 20px 0 0',
        }}>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="닫기"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              color: 'var(--text-muted)',
              width: '36px',
              height: '36px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.1rem',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--void)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--surface)';
              e.currentTarget.style.color = 'var(--text-muted)';
            }}
          >
            ×
          </button>
        </div>

        {/* 본문 */}
        <div style={{ padding: 'clamp(1.25rem, 4vw, 2rem)' }}>

          {/* 제목 */}
          <div style={{ marginBottom: '1.5rem' }}>
            <span aria-hidden="true" style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>
              {project.emoji}
            </span>
            <h3
              id="modal-title"
              style={{ fontFamily: FONT_BODY, fontSize: '1.5rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '0.5rem' }}
            >
              {project.title}
            </h3>
            <p style={{ fontFamily: FONT_MONO, fontSize: '0.75rem', color: 'var(--cyan)' }}>
              {project.period}
            </p>
          </div>

          {/* 설명 */}
          <p style={{ fontFamily: FONT_BODY, fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.75rem' }}>
            {project.description}
          </p>

          {/* 역할 */}
          <div style={{ marginBottom: '1.75rem' }}>
            <SectionLabel>담당 역할</SectionLabel>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {project.role.map((r) => (
                <li key={r} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontFamily: FONT_BODY, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--cyan)', marginTop: '0.1rem', flexShrink: 0 }}>✓</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* 기술 스택 */}
          <div style={{ marginBottom: '1.75rem' }}>
            <SectionLabel>기술 스택</SectionLabel>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {[...project.stack.frontend, ...project.stack.backend, ...project.stack.devops].map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: FONT_MONO,
                    fontSize: '0.72rem',
                    color: 'var(--cyan)',
                    background: 'var(--cyan-subtle)',
                    border: '1px solid rgba(8,145,178,0.2)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '999px',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* 트러블슈팅 */}
          {project.troubles.length > 0 && (
            <div style={{ marginBottom: '1.75rem' }}>
              <SectionLabel>트러블슈팅</SectionLabel>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {project.troubles.map((t) => (
                  <div
                    key={t.issue}
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '10px',
                      padding: '1rem',
                    }}
                  >
                    <p style={{ fontFamily: FONT_BODY, fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                      🔴 {t.issue}
                    </p>
                    <p style={{ fontFamily: FONT_BODY, fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                      <strong style={{ color: 'var(--text-muted)' }}>원인: </strong>{t.cause}
                    </p>
                    <p style={{ fontFamily: FONT_BODY, fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                      <strong style={{ color: 'var(--text-muted)' }}>해결: </strong>{t.solution}
                    </p>
                    <p style={{ fontFamily: FONT_MONO, fontSize: '0.78rem', color: 'var(--cyan)' }}>
                      ✓ {t.result}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 성과 */}
          <div style={{ marginBottom: (project.links.live || project.links.github || project.links.blog) ? '1.75rem' : 0 }}>
            <SectionLabel>성과</SectionLabel>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {project.outcomes.map((o) => (
                <li key={o} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontFamily: FONT_BODY, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--violet)', flexShrink: 0 }}>→</span>
                  {o}
                </li>
              ))}
            </ul>
          </div>

          {/* 링크 */}
          {(project.links.live || project.links.github || project.links.blog) && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    padding: '0.55rem 1.1rem',
                    background: 'var(--cyan)', color: '#FFFFFF',
                    fontFamily: FONT_BODY, fontSize: '0.82rem', fontWeight: 600,
                    borderRadius: '8px', textDecoration: 'none',
                    transition: 'opacity 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  라이브 사이트
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    padding: '0.55rem 1.1rem',
                    background: 'transparent', color: 'var(--text-secondary)',
                    fontFamily: FONT_BODY, fontSize: '0.82rem', fontWeight: 500,
                    border: '1px solid var(--border)', borderRadius: '8px',
                    textDecoration: 'none', transition: 'border-color 0.15s ease, color 0.15s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--cyan)'; e.currentTarget.style.color = 'var(--cyan)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >
                  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                    <path d="M7 .5a6.5 6.5 0 00-2.055 12.674c.325.06.445-.14.445-.312v-1.093c-1.806.392-2.187-.872-2.187-.872-.295-.75-.72-.95-.72-.95-.589-.403.044-.395.044-.395.651.046.994.669.994.669.578 1.99 2.636 1.27 2.636 1.27.107-.588.226-.99.411-1.215-2.498-.284-5.126-1.249-5.126-5.56 0-1.228.44-2.233 1.16-3.02-.116-.285-.503-1.428.11-2.977 0 0 .945-.303 3.095 1.154A10.77 10.77 0 017 3.498c.957.004 1.921.13 2.82.38 2.148-1.457 3.091-1.154 3.091-1.154.615 1.549.228 2.692.112 2.977.722.787 1.158 1.792 1.158 3.02 0 4.322-2.632 5.273-5.139 5.55.404.348.764 1.033.764 2.082v3.087c0 .174.118.376.448.312A6.502 6.502 0 007 .5z"/>
                  </svg>
                  GitHub
                </a>
              )}
              {project.links.blog && (
                <a
                  href={project.links.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    padding: '0.55rem 1.1rem',
                    background: 'transparent', color: 'var(--text-secondary)',
                    fontFamily: FONT_BODY, fontSize: '0.82rem', fontWeight: 500,
                    border: '1px solid var(--border)', borderRadius: '8px',
                    textDecoration: 'none', transition: 'border-color 0.15s ease, color 0.15s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--violet)'; e.currentTarget.style.color = 'var(--violet)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >
                  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 2.5h12M1 5.5h8M1 8.5h10M1 11.5h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                  블로그
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
