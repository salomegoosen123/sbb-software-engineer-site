import React from "react";
import { site } from "../data/siteData";

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
      </div>
    </section>
  );
}
