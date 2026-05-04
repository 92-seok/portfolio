'use client';

import { IconType } from 'react-icons';
import {
  SiVuedotjs, SiReact, SiNextdotjs, SiTypescript, SiJavascript,
  SiTailwindcss, SiSass, SiAxios, SiReactquery,
  SiNestjs, SiNodedotjs, SiMysql, SiMariadb,
  SiNginx, SiVercel, SiGit, SiGithub, SiGitea,
} from 'react-icons/si';
import { TbBrandTypescript, TbApi, TbDatabase, TbServerCog, TbServer2 } from 'react-icons/tb';
import RevealWrapper from './ui/RevealWrapper';

type SkillItem = {
  name: string;
  level: 'expert' | 'advanced' | 'intermediate';
  icon: IconType;
};

type SkillCategory = {
  category: string;
  color: 'cyan' | 'violet' | 'amber';
  items: SkillItem[];
};

// 모든 카테고리를 같은 cyan 톤으로 통일 — 카테고리는 텍스트 라벨로 구분
const ACCENT = {
  fg: 'var(--cyan)',
  bg: 'var(--cyan-subtle)',
  border: 'rgba(217,119,6,0.25)',
};
const COLORS: Record<SkillCategory['color'], typeof ACCENT> = {
  cyan: ACCENT,
  violet: ACCENT,
  amber: ACCENT,
};

const LEVEL_LABEL: Record<SkillItem['level'], string> = {
  expert: 'Expert',
  advanced: 'Advanced',
  intermediate: 'Intermediate',
};

const SKILL_GROUPS: SkillCategory[] = [
  {
    category: 'Frontend',
    color: 'cyan',
    items: [
      { name: 'Vue 3', level: 'expert', icon: SiVuedotjs },
      { name: 'React', level: 'advanced', icon: SiReact },
      { name: 'Next.js', level: 'advanced', icon: SiNextdotjs },
      { name: 'TypeScript', level: 'advanced', icon: SiTypescript },
      { name: 'JavaScript', level: 'advanced', icon: SiJavascript },
      { name: 'Tailwind CSS', level: 'advanced', icon: SiTailwindcss },
      { name: 'Sass', level: 'advanced', icon: SiSass },
      { name: 'React Query', level: 'advanced', icon: SiReactquery },
      { name: 'Axios', level: 'advanced', icon: SiAxios },
    ],
  },
  {
    category: 'Backend',
    color: 'violet',
    items: [
      { name: 'NestJS', level: 'advanced', icon: SiNestjs },
      { name: 'Node.js', level: 'advanced', icon: SiNodedotjs },
      { name: 'TypeORM', level: 'advanced', icon: TbDatabase },
      { name: 'MySQL', level: 'advanced', icon: SiMysql },
      { name: 'MariaDB', level: 'advanced', icon: SiMariadb },
      { name: 'REST API', level: 'advanced', icon: TbApi },
    ],
  },
  {
    category: 'DevOps & Tools',
    color: 'amber',
    items: [
      { name: 'PM2', level: 'intermediate', icon: TbServerCog },
      { name: 'Nginx', level: 'intermediate', icon: SiNginx },
      { name: 'XAMPP', level: 'intermediate', icon: TbServer2 },
      { name: 'Vercel', level: 'advanced', icon: SiVercel },
      { name: 'Git', level: 'advanced', icon: SiGit },
      { name: 'GitHub', level: 'advanced', icon: SiGithub },
      { name: 'Gitea', level: 'advanced', icon: SiGitea },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background: 'var(--paper-soft)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <RevealWrapper direction="up">
          <span className="section-eyebrow">02 — Skills</span>
          <h2 className="section-title">기술 스택</h2>
          <div className="divider" />
        </RevealWrapper>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            alignItems: 'stretch',
          }}
        >
          {SKILL_GROUPS.map((group, gi) => {
            const colors = COLORS[group.color];
            return (
              <RevealWrapper key={group.category} direction="up" delay={gi * 100} style={{ height: '100%', display: 'flex' }}>
                <div className="card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  {/* 카테고리 헤더 */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                    <span
                      style={{
                        width: '6px',
                        height: '1.4rem',
                        background: colors.fg,
                        borderRadius: '3px',
                        flexShrink: 0,
                      }}
                    />
                    <h3
                      style={{
                        fontFamily: "'Pretendard Variable', sans-serif",
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        color: 'var(--ink)',
                      }}
                    >
                      {group.category}
                    </h3>
                    <span
                      style={{
                        marginLeft: 'auto',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.7rem',
                        color: 'var(--ink-faint)',
                      }}
                    >
                      {group.items.length} stacks
                    </span>
                  </div>

                  {/* 아이콘 그리드 */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(86px, 1fr))',
                      gap: '0.6rem',
                    }}
                  >
                    {group.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.name}
                          title={`${item.name} · ${LEVEL_LABEL[item.level]}`}
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.4rem',
                            padding: '0.85rem 0.5rem',
                            background: colors.bg,
                            border: `1px solid ${colors.border}`,
                            borderRadius: '12px',
                            transition: 'transform 0.15s ease, border-color 0.15s ease, background 0.15s ease',
                            cursor: 'default',
                            position: 'relative',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.borderColor = colors.fg;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor = colors.border;
                          }}
                        >
                          {/* 레벨 인디케이터 (우상단 점 — Expert는 채움 / Advanced는 테두리 / Intermediate는 절반) */}
                          {item.level === 'expert' && (
                            <span
                              aria-hidden="true"
                              style={{
                                position: 'absolute',
                                top: 6,
                                right: 6,
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                background: colors.fg,
                              }}
                            />
                          )}
                          <Icon size={28} color={colors.fg} aria-hidden="true" />
                          <span
                            style={{
                              fontFamily: "'Pretendard Variable', sans-serif",
                              fontSize: '0.72rem',
                              fontWeight: 600,
                              color: 'var(--ink)',
                              textAlign: 'center',
                              lineHeight: 1.3,
                            }}
                          >
                            {item.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* 범례 — flex로 카드 하단에 고정 */}
                  <div
                    style={{
                      marginTop: 'auto',
                      paddingTop: '1rem',
                      borderTop: '1px dashed var(--border)',
                      display: 'flex',
                      gap: '0.85rem',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.65rem',
                      color: 'var(--ink-faint)',
                    }}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: colors.fg }} />
                      Expert
                    </span>
                    <span>{group.items.filter((i) => i.level === 'expert').length} · {group.items.filter((i) => i.level === 'advanced').length} adv</span>
                  </div>
                </div>
              </RevealWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
