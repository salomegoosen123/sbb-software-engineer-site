import React from 'react';
import { site } from '../data/siteData';

export function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="sectionHeader">
          <h2 className="h2">Services</h2>
          <p className="muted">Pick one, or mix them — most work is a blend.</p>
        </div>

        <div className="cards">
          {site.services.map((s) => (
            <div key={s.title} className="card">
              <div className="cardTitleRow">
                <h3 className="h3">{s.title}</h3>
              </div>
              <p className="muted">{s.body}</p>
              <ul className="miniBullets">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
