'use client';

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 clamp(1.5rem, 6vw, 6rem)',
      }}
    >
      {/* 비대칭 그리드 컨테이너 */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(3rem, 6vw, 6rem)',
          alignItems: 'center',
          paddingTop: '80px',
        }}
      >
        {/* 왼쪽 — 텍스트 (3:2 비율 우선) */}
        <div style={{ gridColumn: '1 / -1' }}>
          <div
            style={{
              maxWidth: '780px',
            }}
          >
            {/* Eyebrow — 모노스페이스 */}
            <span
              className="animate-fade-up"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--cyan)',
                marginBottom: '1.75rem',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--cyan)',
                  boxShadow: '0 0 10px var(--cyan)',
                  display: 'inline-block',
                  animation: 'blink 2s ease-in-out infinite',
                }}
              />
              Fullstack Developer
            </span>

            {/* 메인 타이틀 — 극단적 타이포 대비 */}
            <h1
              className="animate-fade-up delay-100"
              style={{
                fontFamily: "'Pretendard', sans-serif",
                lineHeight: 0.95,
                marginBottom: '1.75rem',
              }}
            >
              <span
                style={{
                  display: 'block',
                  fontSize: 'clamp(1.6rem, 4.5vw, 3.2rem)',
                  fontWeight: 200,
                  fontStyle: 'italic',
                  color: 'var(--text-secondary)',
                  letterSpacing: '-0.01em',
                }}
              >
                안녕하세요,
              </span>
              <span
                style={{
                  display: 'block',
                  fontSize: 'clamp(2rem, 6vw, 4.5rem)',
                  fontWeight: 900,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.03em',
                }}
              >
                서인석입니다.
              </span>
            </h1>

            {/* 서브 설명 */}
            <p
              className="animate-fade-up delay-200"
              style={{
                fontFamily: "'Pretendard', system-ui, sans-serif",
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                marginBottom: '2.5rem',
                maxWidth: '560px',
              }}
            >
              Vue.js에서 Next.js로, 프론트엔드부터 NestJS 백엔드까지.
              <br />
              실제 운영 서비스를 만들어 온{' '}
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                풀스택 개발자
              </span>
              입니다.
            </p>

            {/* 기술 태그 라인 */}
            <div
              className="animate-fade-up delay-300"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '2.75rem',
              }}
            >
              {['Next.js', 'TypeScript', 'NestJS', 'PM2 · Nginx · XAMPP', 'Vercel'].map(
                (tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      padding: '0.35rem 0.8rem',
                      borderRadius: '999px',
                    }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            {/* CTA 버튼 */}
            <div
              className="animate-fade-up delay-400"
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            >
              <a href="#projects" className="btn-primary">
                프로젝트 보기
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#contact" className="btn-ghost">
                연락하기
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 스크롤 유도 */}
      <div
        className="animate-fade-in delay-500"
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--text-muted)',
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          scroll
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          style={{ animation: 'scrollBounce 1.6s ease-in-out infinite' }}
        >
          <path
            d="M10 4v12M5 11l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* 대각선 그래디언트 구분선 */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--cyan), var(--violet), transparent)',
          opacity: 0.3,
        }}
      />
    </section>
  );
}
