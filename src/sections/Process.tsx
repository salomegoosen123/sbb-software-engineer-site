import React from 'react';
import { site } from '../data/siteData';

export function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="sectionHeader">
          <h2 className="h2">Process</h2>
          <p className="muted">Clear steps, fewer surprises.</p>
        </div>

        <div className="grid2">
          {site.process.map((step) => (
            <div className="panel" key={step.title}>
              <h3 className="h3">{step.title}</h3>
              <p className="muted">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="panel" style={{ marginTop: 16 }}>
          <h3 className="h3">FAQ</h3>
          <div className="faq">
            {site.faq.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p className="muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
