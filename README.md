# 서인석 포트폴리오

> 운영 환경과 사용자 흐름을 이해하는 웹 개발자 **서인석(또비)**의 개인 포트폴리오 웹사이트입니다.

<br />

## 🔗 링크

| | |
|---|---|
| **배포 주소** | [woobo-web.vercel.app](https://woobo-web.vercel.app) |
| **GitHub** | [github.com/92-seok](https://github.com/92-seok) |
| **이메일** | iss3210@naver.com |

<br />

## 🛠 기술 스택

### Frontend
![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

### 배포
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

### 폰트
- **Pretendard** — 본문 (한국어 최적화)
- **JetBrains Mono** — 코드 / 모노스페이스

<br />

## ✨ 주요 기능

### 스크롤 진입 애니메이션
`IntersectionObserver` 기반의 `RevealWrapper` 컴포넌트로 각 섹션 요소가 화면에 진입할 때 부드럽게 등장합니다.
- 방향별 애니메이션 (`up`, `left`, `right`, `fade`)
- 순차 딜레이로 자연스러운 흐름 연출
- `prefers-reduced-motion` 접근성 대응

### Skills 프로그레스 바
섹션 진입 시 `0% → 목표값`으로 채워지는 애니메이션 적용.

### 프로젝트 모달
- `createPortal`로 렌더링해 z-index 겹침 문제 해결
- ESC 키 닫기, 포커스 트랩, body 스크롤 잠금
- `role="dialog"` + `aria-modal` 접근성 대응

### 반응형 Nav
- 스크롤 감지로 배경 blur 전환
- 모바일 햄버거 메뉴

<br />

## 📂 프로젝트 구조

```
portfolio/
├── app/
│   ├── components/
│   │   ├── ui/
│   │   │   └── RevealWrapper.tsx   # 스크롤 애니메이션 래퍼
│   │   ├── projects/
│   │   │   ├── ProjectCard.tsx
│   │   │   └── ProjectModal.tsx
│   │   ├── Nav.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   ├── globals.css                 # 디자인 토큰 + 글로벌 스타일
│   ├── layout.tsx
│   └── page.tsx
├── data/
│   └── index.ts                    # 프로필 · 프로젝트 · 스킬 데이터
└── next.config.ts
```

<br />

## 🎨 디자인 시스템

2026 디자인 트렌드를 반영한 **딥 그레이 다크 테마**입니다.

| 토큰 | 값 | 용도 |
|---|---|---|
| `--void` | `#16161A` | 섹션 배경 |
| `--surface` | `#1E1E24` | 서피스 배경 |
| `--elevated` | `#25252F` | 카드 배경 |
| `--cyan` | `#22D3EE` | 메인 액센트 |
| `--violet` | `#A78BFA` | 서브 액센트 |
| `--emerald` | `#34D399` | DevOps 태그 |

<br />

## 🚀 로컬 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

<br />

## 📋 포트폴리오 섹션

| # | 섹션 | 내용 |
|---|---|---|
| 01 | **About** | 자기소개, 연락처, 경력 하이라이트 |
| 02 | **Skills** | 기술 스택 및 숙련도 (프로그레스 바 애니메이션) |
| 03 | **Projects** | 실무 프로젝트 4개 (모달 상세보기, 라이브 링크) |
| 04 | **Experience** | 경력 타임라인 |
| 05 | **Contact** | 연락처 및 링크 |

<br />

---

<p align="center">
  Built with <a href="https://nextjs.org">Next.js</a> · Deployed on <a href="https://vercel.com">Vercel</a>
</p>
