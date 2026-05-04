export interface IProject {
  id: string;
  title: string;
  emoji: string;
  oneliner: string;
  description: string;
  role: string[];
  stack: { frontend: string[]; backend: string[]; devops: string[] };
  troubles: { issue: string; cause: string; solution: string; result: string }[];
  outcomes: string[];
  links: { live?: string; github?: string; blog?: string; docs?: string };
  period: string;
}

export interface ISkillGroup {
  category: string;
  color: 'cyan' | 'violet' | 'emerald';
  items: { name: string; level: 'expert' | 'advanced' | 'intermediate' }[];
}

export interface ITimelineItem {
  period: string;
  event: string;
  detail: string;
}

export interface IEducationItem {
  period: string;
  school: string;
  major: string;
  status: '졸업' | '중퇴' | '수료';
}

export interface ICertificationItem {
  date: string;
  name: string;
  status: string;
  issuer: string;
}

export interface ITrainingItem {
  period: string;
  institution: string;
  course: string;
  topics: string[];
}

export interface IProfile {
  name: string;
  nickname: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  company: string;
  companyPeriod: string;
  summary: string[];
  highlights: { label: string; desc: string }[];
  operations: { title: string; description: string; bullets: string[] };
  vision: { title: string; description: string; bullets: string[] };
}

export const PROFILE: IProfile = {
  name: '서인석',
  nickname: '또비',
  role: '운영 환경과 사용자 흐름을 이해하는 웹 개발자',
  email: 'isseo8010@gmail.com',
  phone: '010-9297-6763',
  location: '경기 성남시',
  company: '㈜우보재난시스템',
  companyPeriod: '2023.10 ~ 현재 (2년 6개월)',
  summary: [
    'Vue 3에서 Next.js App Router로 시스템을 직접 마이그레이션하며 전체 아키텍처를 이해하는 개발자로 성장했습니다.',
    '관공서 납품 재난 시스템의 프론트엔드부터 서버 배포까지 실무 전반을 담당하며, 운영 환경에서 발생하는 이슈를 기능·UI 개선으로 해결해왔습니다.',
    '재난 장비 유지보수·네트워크·서버 환경 구성을 직접 경험하며, 웹 서비스를 개발할 때 실제 운영 환경을 고려하는 시야를 키워왔습니다.',
    '사용자 흐름을 분석해 장비 점검 업무 시간을 30분에서 10분으로 단축한 경험을 바탕으로, 실제 사용하는 사람에게 가치 있는 서비스를 만드는 것을 목표로 합니다.',
  ],
  highlights: [
    { label: '1인 풀스택', desc: '기획부터 운영까지 전담' },
    { label: '2년 6개월', desc: '실무 경력' },
    { label: 'Vue → Next.js', desc: '마이그레이션 경험' },
    { label: '업무 67% 단축', desc: '30분 → 10분 개선' },
  ],
  operations: {
    title: '현장·인프라 운영 경험',
    description:
      '관공서 재난 장비 AS·유지보수와 사업 납품 서버 환경 구성을 직접 수행하며, 코드 바깥의 운영 환경을 이해하는 감각을 다져왔습니다.',
    bullets: [
      '기상·침수·차단 장비 유지보수 (강우·적설·AWS·LPR 차단기·예·경보 장비)',
      '서버 환경 구성 및 네트워크 설정 (데이터 수집/중계 서버, VPN, LTE Router)',
      '소하천 시스템 H/W·S/W 운영 지원 및 방화벽 통신 구성 (AhnLab 방화벽)',
    ],
  },
  vision: {
    title: '앞으로의 방향',
    description:
      '운영 환경에서 익힌 감각을 바탕으로, 실제 사용하는 사람에게 닿는 서비스를 만드는 개발자가 되고자 합니다.',
    bullets: [
      '운영 이슈를 기능·UI 개선으로 풀어내는 문제 해결형 개발',
      '프론트엔드 인터랙션과 백엔드 도메인 모델링 양쪽 모두 깊이 다루기',
      '1인 풀스택 경험을 팀 협업과 시스템 설계까지 확장',
    ],
  },
};

export const SKILLS: ISkillGroup[] = [
  {
    category: 'Frontend',
    color: 'cyan',
    items: [
      { name: 'Vue 3 / Composition API', level: 'expert' },
      { name: 'React / Next.js', level: 'advanced' },
      { name: 'TypeScript / JavaScript (ES6+)', level: 'advanced' },
      { name: 'HTML5 / CSS3', level: 'advanced' },
      { name: 'Tailwind CSS / Sass', level: 'advanced' },
      { name: 'React Query / React Router / Axios', level: 'advanced' },
    ],
  },
  {
    category: 'Backend',
    color: 'violet',
    items: [
      { name: 'NestJS', level: 'advanced' },
      { name: 'Node.js', level: 'advanced' },
      { name: 'TypeORM', level: 'advanced' },
      { name: 'MySQL / MariaDB', level: 'advanced' },
      { name: 'REST API 설계', level: 'advanced' },
    ],
  },
  {
    category: 'DevOps & Infra',
    color: 'emerald',
    items: [
      { name: 'PM2', level: 'intermediate' },
      { name: 'Nginx', level: 'intermediate' },
      { name: 'XAMPP', level: 'intermediate' },
      { name: 'Vercel', level: 'advanced' },
      { name: 'Git / GitHub / Gitea', level: 'advanced' },
      { name: 'VPN / AhnLab Firewall / Network', level: 'intermediate' },
    ],
  },
];

export const PROJECTS: IProject[] = [
  {
    id: 'pawmart',
    title: 'Pawmart 펫 e-commerce',
    emoji: '🐾',
    oneliner: '풀스택 펫 마켓플레이스 — React 19 + Spring Boot 4',
    description:
      'React 19 + Spring Boot 4 기반 풀스택 펫 e-commerce 사이트. 사용자 24+ 페이지 + 관리자 6 페이지를 모바일 퍼스트로 직접 설계·구현했습니다. JWT role-based 인증, 재고 동시성 제어, Toss Payments 통합, Pet Friendly Soft 자체 디자인 시스템까지 포함한 포트폴리오용 풀스택 프로젝트입니다.',
    role: [
      'React 19 + TypeScript + Tailwind v4 기반 24개 사용자 페이지 직접 설계·구현',
      'Spring Boot 4 + JPA + MySQL 8 백엔드 12개 API 모듈 + Flyway 12 마이그레이션',
      'JWT + Role-based 인증 이중 가드 (백엔드 SecurityConfig + 프론트 AdminRoute)',
      '재고 동시성 제어 (@Version Optimistic Lock + MockMvc 통합 테스트)',
      '관리자 대시보드 + 주문/상품/재고/회원 관리 페이지',
      'Pet Friendly Soft 디자인 토큰 시스템 + Bento Hero + 마이크로 인터랙션',
      'Toss Payments 통합 + 시안 4종 비교 검증 후 디자인 채택',
    ],
    stack: {
      frontend: ['React 19', 'TypeScript', 'Vite 8', 'Tailwind v4', 'shadcn/ui', 'Zustand', 'lucide-react'],
      backend: ['Spring Boot 4', 'Java 21', 'JPA / Hibernate', 'MySQL 8', 'Flyway', 'JWT', 'BCrypt'],
      devops: ['Gradle', 'Toss Payments SDK', 'ESLint', 'GitHub'],
    },
    troubles: [
      {
        issue: '재고 동시 차감 시 race condition',
        cause: '여러 사용자가 동시에 재고 1개 남은 상품 주문 시 음수 재고 발생 가능',
        solution: '@Version 기반 Optimistic Lock 적용 + 충돌 시 retry 로직. MockMvc 통합 테스트로 동시 주문 시나리오 검증',
        result: '동시 주문 상황에서 재고 음수 방지, 데이터 정합성 확보',
      },
      {
        issue: 'admin 라우트에 일반 사용자도 UI 접근 가능',
        cause: 'PrivateRoute가 isLoggedIn만 체크하고 role 분기 없음',
        solution: 'AdminRoute 컴포넌트 신설 (role !== ADMIN → / redirect) + 백엔드 SecurityConfig에 hasRole(ADMIN) 적용해 이중 가드',
        result: 'admin UI 비인가 노출 차단, 백엔드 데이터도 차단되어 양쪽으로 보호',
      },
      {
        issue: 'Mock 데이터로 인한 백엔드 의존성 가림',
        cause: 'API 실패 시 mock 데이터로 폴백되어 진짜 에러가 가려져 디버깅 어려움',
        solution: '일반 화면의 mock 파일·fallback 코드 제거하고 명시적 에러 노출. 단 시연용 admin 대시보드만 폴백 유지',
        result: '실제 백엔드 통신 검증 강화, 시연 환경은 별도 처리',
      },
    ],
    outcomes: [
      '24+ 사용자 페이지 + 6 관리자 페이지 풀스택 1인 구현',
      '60+ 재사용 컴포넌트 + 12 API 모듈 + 12 DB 마이그레이션',
      'JWT role-based 가드로 보안 영역 분리',
      '시안 4종 비교 후 자체 디자인 시스템(Pet Friendly Soft) 채택',
      '16-슬라이드 클라이언트 제안서 형식 발표 자료 작성',
    ],
    links: {
      github: 'https://github.com/92-seok/project-web',
      docs: '/docs/pawmart-portfolio.pptx',
    },
    period: '2026.04 ~ 2026.05',
  },
  {
    id: 'soha-dashboard',
    title: '소하천 통합 운영관리 시스템',
    emoji: '🌊',
    oneliner: '현장 장비 데이터를 실시간 시각화하는 관공서 납품 관리자 대시보드',
    description:
      '관공서 납품용 소하천 모니터링 시스템으로, 강우·수위 등 현장 장비 데이터를 REST API로 조회해 대시보드 형태로 실시간 시각화합니다. 운영자 피드백을 반영한 UI 개선으로 장비 점검 업무 시간을 30분에서 10분으로 단축했습니다.',
    role: [
      'Vue 3 + Axios 기반 REST API 연동 및 대시보드 UI 구현',
      '장비 상태 모니터링 화면 구현',
      '운영자 피드백 반영한 관리자 UI 구조 개선',
      '서버 환경 구성 및 운영 배포',
    ],
    stack: {
      frontend: ['Vue 3', 'Composition API', 'Axios', 'Vuetify'],
      backend: ['NestJS', 'TypeORM', 'MySQL'],
      devops: ['PM2', 'Nginx', 'XAMPP'],
    },
    troubles: [
      {
        issue: 'MySQL max_allowed_packet 에러',
        cause: 'CSV 대량 INSERT 시 기본 패킷 크기(4MB) 초과',
        solution: 'my.ini에서 max_allowed_packet=256M으로 수정',
        result: '대량 데이터 안정적 처리',
      },
      {
        issue: 'SyncService ECONNRESET',
        cause: 'PM2 장기 운영 시 DB 커넥션 타임아웃',
        solution: 'TypeORM connectTimeoutMS 조정 + 재연결 로직 추가',
        result: '24시간 연속 운영 안정화',
      },
    ],
    outcomes: [
      '장비 점검 업무 시간 30분 → 10분 단축 (67% 개선)',
      '다중 화면을 단일 대시보드로 통합해 운영 효율 향상',
      '관공서 납품 실서비스 운영 중',
    ],
    links: { live: 'http://www.woobo.online:8000' },
    period: '2024.05 ~ 현재',
  },
  {
    id: 'reservoir-dashboard',
    title: '저수지 수위 통합 대시보드',
    emoji: '💧',
    oneliner: '1인 풀스택 개발 — 수위 데이터 차트 시각화 관리자 대시보드',
    description:
      '저수지 수위 데이터를 실시간으로 수집·조회하고 차트로 시각화하는 관리자용 대시보드입니다. 기획부터 배포까지 1인 풀스택으로 전담 개발했습니다.',
    role: [
      'Node.js 기반 REST API 직접 설계 및 개발',
      'MySQL 수위 데이터 조회 기능 구현',
      '수위 데이터 차트 시각화 화면 개발',
      '서버 환경 구성 및 운영 배포 (1인 풀스택)',
    ],
    stack: {
      frontend: ['Vue 3', 'Axios'],
      backend: ['Node.js', 'MySQL'],
      devops: ['PM2', 'XAMPP'],
    },
    troubles: [],
    outcomes: [
      '기획~배포 1인 풀스택 전담',
      '수위 데이터 차트 시각화로 관리자 모니터링 기능 구현',
      '단일 화면에서 장비 상태·수위 데이터 통합 조회 가능',
    ],
    links: { live: 'http://www.woobo.online:1010' },
    period: '2024.03 ~ 2024.06',
  },
  {
    id: 'wobo-ops',
    title: '운영지원시스템 (Vue 3)',
    emoji: '🚨',
    oneliner: '재난장비 점검 이력 관리 및 모니터링 관리자 시스템',
    description:
      '재난 장비 상태 모니터링과 점검 이력 CRUD를 제공하는 관리자 시스템입니다. JWT 인증, 카카오맵 API 기반 장비 위치 오버레이, 다중 화면을 단일 대시보드로 통합한 UI 개선을 주도했습니다.',
    role: [
      'JWT 기반 로그인 UI 및 Vue Router 네비게이션 가드 구현',
      'Vue 3 Composition API + Axios 기반 장비 상태 대시보드 구현',
      '점검 이력 CRUD UI 및 API 연동',
      '카카오맵 API 기반 장비 위치 커스텀 오버레이 구현',
      '관리자 화면 UI 구조 개선',
    ],
    stack: {
      frontend: ['Vue 3', 'Composition API', 'Vue Router', 'Axios', 'Sass'],
      backend: ['NestJS', 'MySQL'],
      devops: ['PM2', 'XAMPP'],
    },
    troubles: [
      {
        issue: '다중 화면 분산으로 인한 운영자 업무 비효율',
        cause: '장비 상태·점검 이력·위치 정보가 각각 다른 화면에 분산',
        solution: '운영자 UX 분석을 통한 단일 대시보드 통합 설계 및 UI 재구성',
        result: '장비 점검 업무 시간 30분 → 10분 단축',
      },
    ],
    outcomes: [
      '장비 점검 업무 시간 30분 → 10분 단축 (67% 개선)',
      'JWT 기반 인증으로 비인가 접근 차단',
      '실서비스 운영 중',
    ],
    links: { live: 'http://woobo.online' },
    period: '2024.05 ~ 현재',
  },
  {
    id: 'wobo-nextjs',
    title: '운영지원시스템 Next.js 마이그레이션',
    emoji: '⚡',
    oneliner: 'Vue 3 → Next.js App Router 1인 마이그레이션 · Vercel 배포',
    description:
      '기존 Vue 3 운영지원시스템을 Next.js App Router 구조로 1인 전담 마이그레이션한 프로젝트입니다. Vue SFC를 React 함수형 컴포넌트로 1:1 변환해 기존 기능 100%를 유지하고 Vercel에 배포했습니다.',
    role: [
      '기존 Vue 시스템 구조 분석 및 Next.js App Router 구조 직접 설계',
      'Vue SFC → React 컴포넌트 변환, 기능 100% 이식',
      '스타일링 전면 재작업 (Tailwind CSS 적용)',
      'REST API 연동 로직 React 패턴으로 재구현',
      'Vercel 배포 환경 구성 및 운영 (1인 기획~배포 전담)',
    ],
    stack: {
      frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      backend: ['NestJS', 'MySQL'],
      devops: ['Vercel'],
    },
    troubles: [
      {
        issue: 'Vue Pinia 전역 상태 → React 전환 시 패턴 불일치',
        cause: 'Pinia 기반 전역 상태를 React로 이전 시 패턴 불일치',
        solution: 'React Context + useReducer로 동일한 로직 재구현',
        result: '마이그레이션 완료, 기능 100% 유지',
      },
    ],
    outcomes: [
      'Vue SFC → React 컴포넌트 1:1 변환, 기능 100% 이식',
      'Vercel 배포로 CI/CD 자동화',
      '1인 기획~배포 전담 경험',
    ],
    links: { live: 'https://woobo-web.vercel.app/' },
    period: '2024.10 ~ 2025.01',
  },
];

export const EDUCATION: IEducationItem[] = [
  {
    period: '2010.03 ~ 2010.08',
    school: '신구대학교 (2·3년제)',
    major: '시각디자인',
    status: '중퇴',
  },
  {
    period: '2007.03 ~ 2010.02',
    school: '양영디지털고등학교',
    major: '특성화/마이스터고 로봇과',
    status: '졸업',
  },
];

export const CERTIFICATIONS: ICertificationItem[] = [
  {
    date: '2026.03',
    name: '정보처리산업기사',
    status: '필기합격',
    issuer: '한국산업인력공단',
  },
  {
    date: '2010.02',
    name: '1종 대형 운전면허',
    status: '최종합격',
    issuer: '경찰청 (운전면허시험관리단)',
  },
  {
    date: '2009.07',
    name: '전자기능사',
    status: '최종합격',
    issuer: '한국산업인력공단',
  },
];

export const TRAINING: ITrainingItem[] = [
  {
    period: '2023.03 ~ 2023.07',
    institution: '하이미디어IT인재개발원',
    course: 'JAVA·AI/RPA/빅데이터를 활용한 E-커머스 개발자 양성 취업과정',
    topics: ['Java / Spring / MyBatis', 'DB 설계 / SQL', 'AI + RPA 기반 자동화', '웹 서비스 구현 실습'],
  },
  {
    period: '2021.03 ~ 2021.08',
    institution: 'SBS아카데미컴퓨터아트학원',
    course: '웹디자인 정규과정',
    topics: ['HTML / CSS / JavaScript', 'Photoshop / Illustrator', '웹퍼블리싱 기초'],
  },
];

export const TIMELINE: ITimelineItem[] = [
  { period: '2023.10', event: '㈜우보재난시스템 입사', detail: '시스템사업부 · 웹개발 담당 (사원)' },
  { period: '2024.05', event: '저수지 수위 대시보드 개발', detail: '1인 풀스택 (Node.js + Vue 3)' },
  { period: '2024.10', event: '운영지원시스템 (Vue 3) 본격 개발', detail: 'JWT 인증 · 카카오맵 오버레이 · 점검 이력 CRUD' },
  { period: '2025.04', event: '사원 → 대리 승진', detail: '입사 1년 6개월 만에 승진 · 연간 우수사원 · 분기 칭찬사원 선정' },
  { period: '2025.10', event: 'Next.js 마이그레이션 착수', detail: 'Vue 3 → Next.js App Router · Vercel 배포' },
  { period: '2026.03', event: '정보처리산업기사 필기합격', detail: '한국산업인력공단' },
];
