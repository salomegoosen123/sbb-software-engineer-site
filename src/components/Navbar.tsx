import React from 'react';
import { Logo } from './Logo';
import { site } from '../data/siteData';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'process', label: 'Process' },
  { id: 'contact', label: 'Contact' },
] as const;

function useActiveSection() {
  const [active, setActive] = React.useState<string>('about');

  React.useEffect(() => {
    const ids = sections.map(s => s.id);
    const els = ids
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const obs = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        root: null,
        rootMargin: '-30% 0px -60% 0px',
        threshold: [0.05, 0.1, 0.2, 0.3, 0.4],
      }
    );

    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return active;
}

export function Navbar() {
  const active = useActiveSection();

  return (
    <header className="navWrap">
      <div className="container navInner">
        <a href="#top" className="brand" aria-label="Go to top">
          <Logo size={38} />
          <div className="brandText">
            <div className="brandName">{site.brand.name}</div>
            <div className="brandTag">{site.brand.tagline}</div>
          </div>
        </a>

        <nav className="navLinks" aria-label="Primary">
          {sections.map(s => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={active === s.id ? 'navLink active' : 'navLink'}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="navCta">
          <a href={site.brand.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="btn" href={`mailto:${site.brand.email}`}>
            Email me
          </a>
        </div>
      </div>
    </header>
  );
}
