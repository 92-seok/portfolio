import { EDUCATION, CERTIFICATIONS, TRAINING } from '@/data';
import RevealWrapper from './ui/RevealWrapper';

const subgroupTitle = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: '0.7rem',
  letterSpacing: '0.18em',
  textTransform: 'uppercase' as const,
  color: 'var(--cyan)',
  marginBottom: '1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
};

const subgroupLine = {
  flex: 1,
  height: '1px',
  background: 'var(--border)',
};

export default function Credentials() {
  return (
    <section id="credentials" className="section" style={{ background: 'var(--paper)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <RevealWrapper direction="up">
          <span className="section-eyebrow">05 — Credentials</span>
          <h2 className="section-title">학력 · 자격 · 교육</h2>
          <div className="divider" />
        </RevealWrapper>

        {/* Education */}
        <div style={{ marginBottom: '3rem' }}>
          <RevealWrapper direction="up" delay={60}>
            <div style={subgroupTitle}>
              <span>Education</span>
              <span style={subgroupLine} />
              <span style={{ color: 'var(--ink-faint)' }}>{EDUCATION.length}</span>
            </div>
          </RevealWrapper>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1rem',
            }}
          >
            {EDUCATION.map((edu, i) => (
              <RevealWrapper key={edu.school} direction="up" delay={120 + i * 80}>
                <div className="card" style={{ padding: '1.5rem' }}>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.7rem',
                      color: 'var(--cyan)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {edu.period}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Pretendard', sans-serif",
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: 'var(--ink)',
                      marginBottom: '0.25rem',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {edu.school}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Pretendard', sans-serif",
                      fontSize: '0.85rem',
                      color: 'var(--ink-muted)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {edu.major}
                  </p>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '0.25rem 0.6rem',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.65rem',
                      letterSpacing: '0.08em',
                      color: edu.status === '졸업' ? 'var(--emerald)' : 'var(--ink-faint)',
                      background: edu.status === '졸업' ? 'var(--emerald-subtle)' : 'var(--paper-soft)',
                      border: `1px solid ${edu.status === '졸업' ? 'var(--emerald)' : 'var(--border)'}`,
                      borderRadius: '4px',
                    }}
                  >
                    {edu.status}
                  </span>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div style={{ marginBottom: '3rem' }}>
          <RevealWrapper direction="up" delay={60}>
            <div style={subgroupTitle}>
              <span>Certifications</span>
              <span style={subgroupLine} />
              <span style={{ color: 'var(--ink-faint)' }}>{CERTIFICATIONS.length}</span>
            </div>
          </RevealWrapper>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1rem',
            }}
          >
            {CERTIFICATIONS.map((cert, i) => (
              <RevealWrapper key={cert.name} direction="up" delay={120 + i * 80}>
                <div
                  className="card"
                  style={{
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      gap: '0.5rem',
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "'Pretendard', sans-serif",
                        fontSize: '0.98rem',
                        fontWeight: 700,
                        color: 'var(--ink)',
                      }}
                    >
                      {cert.name}
                    </h3>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.65rem',
                        color: 'var(--cyan)',
                        flexShrink: 0,
                      }}
                    >
                      {cert.date}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.65rem',
                      color: 'var(--emerald)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {cert.status}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Pretendard', sans-serif",
                      fontSize: '0.78rem',
                      color: 'var(--ink-muted)',
                    }}
                  >
                    {cert.issuer}
                  </span>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>

        {/* Training */}
        <div>
          <RevealWrapper direction="up" delay={60}>
            <div style={subgroupTitle}>
              <span>Training</span>
              <span style={subgroupLine} />
              <span style={{ color: 'var(--ink-faint)' }}>{TRAINING.length}</span>
            </div>
          </RevealWrapper>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1rem',
            }}
          >
            {TRAINING.map((tr, i) => (
              <RevealWrapper key={tr.institution} direction="up" delay={120 + i * 80}>
                <div className="card" style={{ padding: '1.5rem' }}>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.7rem',
                      color: 'var(--cyan)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {tr.period}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Pretendard', sans-serif",
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--ink)',
                      marginBottom: '0.4rem',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {tr.institution}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Pretendard', sans-serif",
                      fontSize: '0.82rem',
                      color: 'var(--ink-muted)',
                      lineHeight: 1.5,
                      marginBottom: '0.85rem',
                    }}
                  >
                    {tr.course}
                  </p>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.4rem',
                    }}
                  >
                    {tr.topics.map((t) => (
                      <li
                        key={t}
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.65rem',
                          color: 'var(--ink-muted)',
                          padding: '0.25rem 0.55rem',
                          background: 'var(--paper-soft)',
                          border: '1px solid var(--border)',
                          borderRadius: '4px',
                        }}
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
