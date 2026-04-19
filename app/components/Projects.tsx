'use client';

import { useState } from 'react';
import { PROJECTS, IProject } from '@/data';
import ProjectCard from './projects/ProjectCard';
import ProjectModal from './projects/ProjectModal';
import RevealWrapper from './ui/RevealWrapper';

export default function Projects() {
  const [selected, setSelected] = useState<IProject | null>(null);

  return (
    <section id="projects" className="section" style={{ background: 'var(--void)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <RevealWrapper direction="up">
          <span className="section-eyebrow">03. Projects</span>
          <h2 className="section-title">프로젝트</h2>
          <div className="divider" />
        </RevealWrapper>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {PROJECTS.map((p, i) => (
            <RevealWrapper key={p.id} direction="up" delay={i * 100}>
              <ProjectCard project={p} onClick={() => setSelected(p)} />
            </RevealWrapper>
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
