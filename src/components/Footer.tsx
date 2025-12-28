import React from 'react';
import { site } from '../data/siteData';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div className="footerLeft">
          <div className="footerBrand">{site.brand.name}</div>
          <div className="muted">© {year} · Built with React + Vite</div>
        </div>
        <div className="footerLinks">
          <a href={site.brand.links.linkedin} target="_blank" rel="noopener noreferrer" className="socialLink">LinkedIn</a>
          <a href={`mailto:${site.brand.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
