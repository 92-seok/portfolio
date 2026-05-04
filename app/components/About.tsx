'use client';

import { PROFILE } from '@/data';
import RevealWrapper from './ui/RevealWrapper';

export default function About() {
  return (
    <section id="about" className="section">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <RevealWrapper direction="up">
          <span className="section-eyebrow">01 — About Me</span>
          <h2 className="section-title">개발자 소개</h2>
          <div className="divider" />
        </RevealWrapper>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* 왼쪽 — 자기소개 */}
          <div>
            {/* 이름 + 역할 */}
            <RevealWrapper direction="up" delay={80}>
              <div style={{ marginBottom: '1.75rem' }}>
                <h3
                  style={{
                    fontFamily: "'Pretendard', sans-serif",
                    fontSize: '1.75rem',
                    fontWeight: 900,
                    color: 'var(--text-primary)',
                    marginBottom: '0.4rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {PROFILE.name}
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.9rem',
                      fontWeight: 400,
                      color: 'var(--cyan)',
                      marginLeft: '0.75rem',
                    }}
                  >
                    ({PROFILE.nickname})
                  </span>
                </h3>
                <p
                  style={{
                    fontFamily: "'Pretendard', system-ui, sans-serif",
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                  }}
                >
                  {PROFILE.role}
                </p>
              </div>
            </RevealWrapper>

            {/* 소개 문단 */}
            {PROFILE.summary.map((text, i) => (
              <RevealWrapper key={i} direction="up" delay={160 + i * 80}>
                <p
                  style={{
                    fontFamily: "'Pretendard', system-ui, sans-serif",
                    fontSize: '0.975rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.85,
                    marginBottom: '1.25rem',
                  }}
                >
                  {text}
                </p>
              </RevealWrapper>
            ))}

            {/* 연락처 정보 */}
            <RevealWrapper direction="up" delay={400}>
              <div
                style={{
                  marginTop: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                }}
              >
                {[
                  { label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
                  { label: 'Location', value: PROFILE.location, href: undefined },
                ].map(({ label, value, href }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.65rem',
                        color: 'var(--cyan)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        flexShrink: 0,
                        width: '5rem',
                      }}
                    >
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        style={{
                          fontFamily: "'Pretendard', system-ui, sans-serif",
                          fontSize: '0.875rem',
                          color: 'var(--text-secondary)',
                          textDecoration: 'none',
                          transition: 'color 0.15s ease',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                      >
                        {value}
                      </a>
                    ) : (
                      <span
                        style={{
                          fontFamily: "'Pretendard', system-ui, sans-serif",
                          fontSize: '0.875rem',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </RevealWrapper>
          </div>

          {/* 오른쪽 — 하이라이트 카드 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {PROFILE.highlights.map((item, i) => (
              <RevealWrapper key={item.label} direction="up" delay={200 + i * 80}>
                <div
                  className="card"
                  style={{ padding: '1.5rem', textAlign: 'center' }}
                >
                  <span
                    style={{
                      fontFamily: "'Pretendard', sans-serif",
                      fontSize: '1.1rem',
                      fontWeight: 800,
                      color: 'var(--cyan)',
                      display: 'block',
                      marginBottom: '0.4rem',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Pretendard', system-ui, sans-serif",
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.4,
                    }}
                  >
                    {item.desc}
                  </span>
                </div>
              </RevealWrapper>
            ))}

            {/* Vision — 앞으로의 방향 */}
            <RevealWrapper direction="up" delay={520} style={{ gridColumn: '1 / -1' }}>
              <div
                className="card"
                style={{
                  padding: '1.5rem 1.75rem',
                  borderLeft: '3px solid var(--cyan)',
                  background:
                    'linear-gradient(180deg, var(--paper-card) 0%, var(--cyan-subtle) 100%)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    marginBottom: '0.85rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.65rem',
                      color: 'var(--cyan)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.18em',
                    }}
                  >
                    Vision
                  </span>
                  <span style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
                  <span
                    style={{
                      fontFamily: "'Pretendard Variable', sans-serif",
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: 'var(--ink)',
                    }}
                  >
                    {/* {PROFILE.vision.title} */}
                  </span>
                </div>

                <p
                  style={{
                    fontFamily: "'Pretendard Variable', sans-serif",
                    fontSize: '0.88rem',
                    color: 'var(--ink-muted)',
                    lineHeight: 1.7,
                    marginBottom: '1rem',
                  }}
                >
                  {PROFILE.vision.description}
                </p>

                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    padding: 0,
                  }}
                >
                  {PROFILE.vision.bullets.map((b) => (
                    <li
                      key={b}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.55rem',
                        fontFamily: "'Pretendard Variable', sans-serif",
                        fontSize: '0.85rem',
                        color: 'var(--ink)',
                        lineHeight: 1.6,
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          color: 'var(--cyan)',
                          marginTop: '0.05rem',
                          flexShrink: 0,
                          fontWeight: 700,
                        }}
                      >
                        →
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
