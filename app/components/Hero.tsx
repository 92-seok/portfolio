"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="kinetic-hero ambient-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "0 clamp(1.5rem, 6vw, 6rem)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          paddingTop: "120px",
          paddingBottom: "80px",
        }}
      >
        {/* 챕터 라벨 */}
        <div
          className="animate-fade-up"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "2.25rem",
          }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--cyan)",
            }}
          >
            00 — Intro
          </span>
          <span
            style={{
              flex: 1,
              height: "1px",
              background: "var(--border-strong)",
              maxWidth: "180px",
            }}
          />
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              color: "var(--ink-muted)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "var(--cyan)",
                boxShadow: "0 0 0 4px var(--cyan-subtle)",
                animation: "blink 2s ease-in-out infinite",
              }}
            />
            Available
          </span>
        </div>

        {/* 헤드라인 */}
        <h1
          className="animate-fade-up delay-100"
          style={{
            fontFamily: "'Pretendard Variable', 'Pretendard', sans-serif",
            fontSize: "clamp(2rem, 6vw, 4.4rem)",
            fontWeight: 900,
            fontVariationSettings: '"wght" 900',
            lineHeight: 1.05,
            letterSpacing: "-0.035em",
            color: "var(--ink)",
            marginBottom: "1.75rem",
            maxWidth: "900px",
            wordBreak: "keep-all",
            overflowWrap: "break-word",
          }}
        >
          운영 환경과 사용자 흐름을
          <br />
          이해하는{" "}
          <span
            style={{
              backgroundImage:
                "linear-gradient(135deg, var(--cyan) 0%, var(--violet) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              fontVariationSettings: '"wght" 800',
            }}
          >
            웹 개발자
          </span>
          <span style={{ color: "var(--violet)" }}>.</span>
        </h1>

        {/* 서브 카피 */}
        <p
          className="animate-fade-up delay-200"
          style={{
            fontFamily: "'Pretendard Variable', sans-serif",
            fontSize: "clamp(1rem, 1.7vw, 1.25rem)",
            fontWeight: 400,
            color: "var(--ink-muted)",
            lineHeight: 1.65,
            maxWidth: "720px",
            marginBottom: "2.5rem",
          }}
        >
          Vue.js에서 Next.js로, 프론트엔드부터 NestJS 백엔드까지. 실제 운영되는
          서비스를 만들어 온{" "}
          <strong style={{ color: "var(--ink)", fontWeight: 700 }}>
            풀스택 개발자 서인석
          </strong>
          입니다.
        </p>

        {/* 메타 정보 카드 */}
        <div
          className="animate-fade-up delay-300"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "0.75rem",
            marginBottom: "2.5rem",
            maxWidth: "900px",
          }}
        >
          {[
            { label: "Role", value: "Fullstack Developer" },
            { label: "Stack", value: "Next.js · NestJS · TS" },
            { label: "Years", value: "실무 경험 1년" },
          ].map((item) => (
            <div
              key={item.label}
              className="card"
              style={{ padding: "0.85rem 1rem" }}
            >
              <span
                style={{
                  display: "block",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--cyan)",
                  marginBottom: "0.3rem",
                }}
              >
                {item.label}
              </span>
              <span
                style={{
                  fontFamily: "'Pretendard Variable', sans-serif",
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  color: "var(--ink)",
                }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="animate-fade-up delay-400"
          style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}
        >
          <a href="#projects" className="btn-primary">
            프로젝트 보기
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#contact" className="btn-ghost">
            연락하기
          </a>
        </div>
      </div>

      {/* 스크롤 유도 */}
      <div
        className="animate-fade-in delay-500"
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          color: "var(--ink-faint)",
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.62rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          scroll
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
          style={{ animation: "scrollBounce 1.6s ease-in-out infinite" }}
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
    </section>
  );
}
