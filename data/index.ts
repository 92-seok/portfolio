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
  links: { live?: string; github?: string; blog?: string };
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
}

export const PROFILE: IProfile = {
  name: '서인석',
  nickname: '또비',
  role: '운영 환경과 사용자 흐름을 이해하는 웹 개발자',
  email: 'iss3210@naver.com',
  phone: '010-9297-6763',
  location: '경기 성남시',
  company: '㈜우보재난시스템',
  companyPeriod: '2023.10 ~ 재직중 (2년 6개월)',
  summary: [
    'Vue 3에서 Next.js App Router로 시스템을 직접 마이그레이션하며 전체 아키텍처를 이해하는 개발자로 성장했습니다.',
    '관공서 납품 재난 시스템의 프론트엔드부터 서버 배포까지 실무 전반을 담당하며, 운영 환경에서 발생하는 이슈를 기능·UI 개선으로 해결해왔습니다.',
    '사용자 흐름을 분석해 장비 점검 업무 시간을 30분에서 10분으로 단축한 경험을 바탕으로, 실제 사용하는 사람에게 가치 있는 서비스를 만드는 것을 목표로 합니다.',
  ],
  highlights: [
    { label: '재직 중', desc: '㈜우보재난시스템 · 대리' },
    { label: '2년 6개월', desc: '실무 경력' },
    { label: 'Vue → Next.js', desc: '마이그레이션 경험' },
    { label: '업무 67% 단축', desc: '30분 → 10분 개선' },
  ],
};

export const SKILLS: ISkillGroup[] = [
  {
    category: 'Frontend',
    color: 'cyan',
    items: [
      { name: 'Vue 3 / Composition API', level: 'expert' },
      { name: 'React / Next.js', level: 'advanced' },
      { name: 'TypeScript / JavaScript', level: 'advanced' },
      { name: 'Tailwind CSS / Sass', level: 'advanced' },
      { name: 'React Query / Axios', level: 'advanced' },
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
    category: 'DevOps & Tools',
    color: 'emerald',
    items: [
      { name: 'PM2', level: 'intermediate' },
      { name: 'Nginx', level: 'intermediate' },
      { name: 'XAMPP', level: 'intermediate' },
      { name: 'Vercel', level: 'advanced' },
      { name: 'Git / GitHub / Gitea', level: 'advanced' },
    ],
  },
];

export const PROJECTS: IProject[] = [
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
    period: '2023.10 ~ 재직중',
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
    period: '2023.10 ~ 재직중',
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

export const TIMELINE: ITimelineItem[] = [
  { period: '2023.10 ~', event: '㈜우보재난시스템 입사', detail: '시스템사업부 · 웹개발 담당' },
  { period: '2024.03', event: '저수지 수위 대시보드 개발', detail: '1인 풀스택 (Node.js + Vue 3)' },
  { period: '2024.10', event: 'Next.js 마이그레이션 착수', detail: 'Vue 3 → Next.js App Router' },
  { period: '2025.01', event: 'Vercel 배포 완료', detail: 'woobo-web.vercel.app 운영 시작' },
  { period: '2025.04', event: '대리 승진', detail: '연간 우수사원 · 분기 칭찬사원 선정' },
];
