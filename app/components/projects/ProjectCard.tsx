import { IProject } from '@/data';

const FONT_MONO = "'JetBrains Mono', monospace";
const FONT_BODY = "'Pretendard', system-ui, sans-serif";

export default function ProjectCard({ project, onClick }: { project: IProject; onClick: () => void }) {
  return (
    <article
      className="card"
      onClick={onClick}
      style={{ padding: '1.75rem', cursor: 'pointer' }}
      tabIndex={0}
      role="button"
      aria-label={`${project.title} 상세보기`}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <span aria-hidden="true" style={{ fontSize: '2rem' }}>{project.emoji}</span>
        <span
          style={{
            fontFamily: FONT_MONO,
            fontSize: '0.65rem',
            color: 'var(--text-muted)',
            background: 'var(--surface)',
            padding: '0.25rem 0.6rem',
            borderRadius: '6px',
            border: '1px solid var(--border)',
          }}
        >
          {project.period}
        </span>
      </div>

      <h3
        style={{
          fontFamily: FONT_BODY,
          fontSize: '1.15rem',
          fontWeight: 800,
          color: 'var(--text-primary)',
          marginBottom: '0.5rem',
          lineHeight: 1.3,
        }}
      >
        {project.title}
      </h3>
      <p
        style={{
          fontFamily: FONT_BODY,
          fontSize: '0.875rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.65,
          marginBottom: '1.25rem',
        }}
      >
        {project.oneliner}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
        {[...project.stack.frontend, ...project.stack.backend].slice(0, 4).map((t) => (
          <span
            key={t}
            style={{
              fontFamily: FONT_MONO,
              fontSize: '0.68rem',
              color: 'var(--cyan)',
              background: 'var(--cyan-subtle)',
              border: '1px solid rgba(8,145,178,0.15)',
              padding: '0.2rem 0.55rem',
              borderRadius: '999px',
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontFamily: FONT_MONO,
          fontSize: '0.75rem',
          color: 'var(--cyan)',
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
