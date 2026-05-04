import { IProject } from '@/data';

const FONT_MONO = "'JetBrains Mono', monospace";
const FONT_BODY = "'Pretendard Variable', 'Pretendard', system-ui, sans-serif";

export default function ProjectCard({ project, onClick }: { project: IProject; onClick: () => void }) {
  return (
    <article
      className="card"
      onClick={onClick}
      style={{ padding: '1.75rem', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
      tabIndex={0}
      role="button"
      aria-label={`${project.title} 상세보기`}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      {/* 1. 타이틀 */}
      <h3
        style={{
          fontFamily: FONT_BODY,
          fontSize: '1.2rem',
          fontWeight: 800,
          color: 'var(--ink)',
          letterSpacing: '-0.02em',
          lineHeight: 1.3,
          marginBottom: '0.5rem',
        }}
      >
        {project.title}
      </h3>

      {/* 2. 날짜 */}
      <span
        style={{
          fontFamily: FONT_MONO,
          fontSize: '0.7rem',
          color: 'var(--cyan)',
          letterSpacing: '0.05em',
          marginBottom: '1rem',
        }}
      >
        {project.period}
      </span>

      {/* 3. 웹서비스 소개 */}
      <p
        style={{
          fontFamily: FONT_BODY,
          fontSize: '0.875rem',
          color: 'var(--ink-muted)',
          lineHeight: 1.65,
          marginBottom: '1.25rem',
        }}
      >
        {project.oneliner}
      </p>

      {/* 4. 스택 태그 */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
        {[...project.stack.frontend, ...project.stack.backend].slice(0, 4).map((t) => (
          <span
            key={t}
            style={{
              fontFamily: FONT_MONO,
              fontSize: '0.68rem',
              color: 'var(--ink-muted)',
              background: 'var(--paper-soft)',
              border: '1px solid var(--border)',
              padding: '0.2rem 0.55rem',
              borderRadius: '999px',
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* 5. 자세히 보기 */}
      <div
        style={{
          marginTop: 'auto',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontFamily: FONT_MONO,
          fontSize: '0.72rem',
          color: 'var(--cyan)',
          letterSpacing: '0.04em',
        }}
      >
        자세히 보기
        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </article>
  );
}
