import React from 'react';
import { site } from '../data/siteData';

export function Work() {
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="sectionHeader">
          <h2 className="h2">Selected work</h2>
          <p className="muted">A few examples of the kinds of outcomes I deliver.</p>
        </div>

        <div className="cards">
          {site.work.map((w) => (
            <article key={w.title} className="card">
              <h3 className="h3">{w.title}</h3>
              <p className="muted">{w.body}</p>
              <div className="tagRow">
                {w.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="callout">
          <div>
            <div className="calloutTitle">Want to see something more specific?</div>
            <div className="muted">I can share architecture notes or a short technical plan tailored to your project.</div>
          </div>
          <a className="btn primary" href="#contact">Request a quick plan</a>
        </div>
      </div>
    </section>
  );
}
