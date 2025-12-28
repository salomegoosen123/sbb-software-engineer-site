import React from 'react';
import { site } from '../data/siteData';

export function Hero() {
  return (
    <section className="hero" aria-label="Hero" id="top">
      <div className="container heroGrid">
        <div className="heroLeft">
          <div className="kicker">SBB · Software Engineer</div>
          <h1 className="h1">{site.hero.headline}</h1>
          <p className="lead">{site.hero.subheadline}</p>

          <div className="heroActions">
            <a className="btn primary" href="#contact">Let’s talk</a>
            <a className="btn" href="#work">See work</a>
          </div>

          <ul className="checks">
            {site.hero.highlights.map((h) => (
              <li key={h}>
                <span className="check" aria-hidden="true">✓</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="heroRight">
          <div className="glassCard">
            <div className="cardTop">
              <div className="chip">How I work</div>
              <div className="muted">Simple, documented, reliable.</div>
            </div>
            <div className="metricRow">
              <div className="metric">
                <div className="metricNum">TS</div>
                <div className="metricLbl">TypeScript-first</div>
              </div>
              <div className="metric">
                <div className="metricNum">AWS</div>
                <div className="metricLbl">Cloud-native</div>
              </div>
              <div className="metric">
                <div className="metricNum">DX</div>
                <div className="metricLbl">Developer UX</div>
              </div>
            </div>

            <div className="divider" />

            <div className="miniList">
              <div className="mini">
                <div className="dot" />
                <div>
                  <div className="miniTitle">Ship incrementally</div>
                  <div className="miniBody">Small PRs, clear checkpoints, no big-bang rewrites.</div>
                </div>
              </div>
              <div className="mini">
                <div className="dot" />
                <div>
                  <div className="miniTitle">Make it observable</div>
                  <div className="miniBody">Logs, metrics, alarms — so production stays calm.</div>
                </div>
              </div>
              <div className="mini">
                <div className="dot" />
                <div>
                  <div className="miniTitle">Write it down</div>
                  <div className="miniBody">Docs that the next person can actually use.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
