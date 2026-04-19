'use client';

import RevealWrapper from './ui/RevealWrapper';

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ background: 'var(--surface)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <RevealWrapper direction="up">
          <span className="section-eyebrow">05. Contact</span>
          <h2 className="section-title">연락하기</h2>
          <div className="divider" />
        </RevealWrapper>

        <RevealWrapper direction="up" delay={100} style={{ maxWidth: '560px' }}>
          <p
            style={{
              fontFamily: "'Pretendard', system-ui, sans-serif",
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
            }}
          >
            새로운 기회나 협업에 대해 이야기 나누고 싶으시다면 편하게 연락 주세요.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M2 4.5A1.5 1.5 0 013.5 3h11A1.5 1.5 0 0116 4.5v9A1.5 1.5 0 0114.5 15h-11A1.5 1.5 0 012 13.5v-9zm1.5 0L9 9l5.5-4.5M3.5 13.5h11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                label: 'Email',
                value: 'isseo8010@gmail.com',
                href: 'mailto:isseo8010@gmail.com',
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9c0 3.315 2.153 6.125 5.138 7.116.375.069.512-.163.512-.362 0-.178-.007-.651-.01-1.278-2.088.454-2.529-.998-2.529-.998-.341-.868-.833-1.099-.833-1.099-.681-.465.051-.456.051-.456.753.053 1.149.774 1.149.774.668 1.145 1.754.814 2.182.622.068-.483.262-.814.476-1.001-1.667-.19-3.419-.833-3.419-3.708 0-.82.292-1.49.771-2.015-.077-.19-.334-.953.074-1.987 0 0 .629-.201 2.062.769a7.165 7.165 0 011.875-.252c.636.003 1.277.086 1.875.252 1.432-.97 2.06-.769 2.06-.769.41 1.034.152 1.797.075 1.987.48.525.77 1.195.77 2.015 0 2.882-1.754 3.516-3.424 3.703.269.232.508.688.508 1.387 0 1.001-.009 1.808-.009 2.054 0 .2.135.434.515.361C15.35 15.122 17.5 12.314 17.5 9c0-4.14-3.36-7.5-7.5-7.5z" fill="currentColor"/>
                  </svg>
                ),
                label: 'GitHub',
                value: 'github.com/seok2',
                href: 'https://github.com/seok2',
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem 1.25rem',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s ease, background 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'rgba(6,182,212,0.4)';
                  el.style.background = 'rgba(6,182,212,0.04)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'var(--border)';
                  el.style.background = 'var(--surface)';
                }}
              >
                <span style={{ color: 'var(--cyan)', flexShrink: 0 }}>{item.icon}</span>
                <span>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.65rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: '0.15rem',
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Pretendard', system-ui, sans-serif",
                      fontSize: '0.9rem',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {item.value}
                  </span>
                </span>
              </a>
            ))}
          </div>

          <a href="mailto:iss3210@naver.com" className="btn-primary">
            메일 보내기
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </RevealWrapper>
      </div>

      {/* 푸터 */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '4rem auto 0',
          paddingTop: '2rem',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
          }}
        >
          또비<span style={{ color: 'rgba(240,238,233,0.2)' }}>_dev</span>
        </span>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.7rem',
            color: 'var(--text-muted)',
          }}
        >
          © 2026. Built with Next.js & deployed on Vercel.
        </span>
      </div>
    </section>
  );
}
