import React from 'react';
import { site } from '../data/siteData';

export function Privacy() {
  return (
    <section className="section" id="privacy">
      <div className="container">
        <div className="sectionHeader">
          <h2 className="h2">{site.privacy.title}</h2>
          <p className="muted">{site.privacy.intro}</p>
        </div>

        <div className="privacyContent">
          {site.privacy.sections.map((section) => (
            <div key={section.heading} className="privacySection">
              <h3 className="h3">{section.heading}</h3>
              <p className="muted">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
