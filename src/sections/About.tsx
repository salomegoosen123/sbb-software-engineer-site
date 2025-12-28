import React from 'react';
import { site } from '../data/siteData';

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="sectionHeader">
          <h2 className="h2">About</h2>
          <p className="muted">A pragmatic engineer who loves clean systems and clean UIs.</p>
        </div>

        <div className="grid2">
          <div className="panel">
            <h3 className="h3">What you get</h3>
            <p className="muted">
              I build and improve software that’s easy to operate and easy to change.
              Think: clear interfaces, safe deployments, and fewer “mystery failures”.
            </p>
            <div className="pillRow">
              {site.about.pills.map((p) => (
                <span key={p} className="pill">{p}</span>
              ))}
            </div>
          </div>

          <div className="panel">
            <h3 className="h3">Where I focus</h3>
            <ul className="bullets">
              {site.about.focus.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="note">
              <strong>Location:</strong> {site.brand.location} · <strong>Timezone:</strong> Africa/Johannesburg
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
