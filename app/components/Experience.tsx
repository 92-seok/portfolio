import { TIMELINE } from '@/data';
import RevealWrapper from './ui/RevealWrapper';

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: 'var(--surface)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <RevealWrapper direction="up">
          <span className="section-eyebrow">04. Experience</span>
          <h2 className="section-title">경력 / 타임라인</h2>
          <div className="divider" />
        </RevealWrapper>

        <div style={{ position: 'relative', maxWidth: '720px' }}>
          {/* 세로 라인 */}
          <div
            style={{
              position: 'absolute',
              left: '7.5rem',
              top: 0,
              bottom: 0,
              width: '1px',
              background: 'linear-gradient(180deg, var(--cyan), var(--violet), transparent)',
              opacity: 0.25,
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {TIMELINE.map((item, i) => (
              <RevealWrapper key={item.period} direction="left" delay={i * 100}>
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                  {/* 기간 */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: '6rem',
                      textAlign: 'right',
                      paddingTop: '0.15rem',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.7rem',
                      color: 'var(--cyan)',
                      lineHeight: 1.4,
                    }}
                  >
                    {item.period}
                  </div>

                  {/* 점 */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: i === 0 ? 'var(--cyan)' : 'var(--elevated)',
                      border: `2px solid ${i === 0 ? 'var(--cyan)' : 'var(--border)'}`,
                      marginTop: '0.25rem',
                      boxShadow: i === 0 ? '0 0 10px var(--cyan)' : 'none',
                    }}
                  />

                  {/* 내용 */}
                  <div className="card" style={{ flex: 1, padding: '1.25rem 1.5rem' }}>
                    <p
                      style={{
                        fontFamily: "'Pretendard', system-ui, sans-serif",
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '0.35rem',
                      }}
                    >
                      {item.event}
                    </p>
                    <p
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {item.detail}
                    </p>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
