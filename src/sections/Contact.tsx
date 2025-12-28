import React from 'react';
import { site } from '../data/siteData';

function copy(text: string) {
  navigator.clipboard?.writeText(text).catch(() => {});
}

export function Contact() {
  const [copied, setCopied] = React.useState(false);

  const onCopy = () => {
    copy(site.brand.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="sectionHeader">
          <h2 className="h2">Contact</h2>
          <p className="muted">Tell me what you want to build — I’ll reply with a clear next step.</p>
        </div>

        <div className="grid2">
          <div className="panel">
            <h3 className="h3">Quick message</h3>
            <p className="muted">
              Prefer email? Click below to open your mail app. You can also copy the address.
            </p>
            <div className="contactRow">
              <a className="btn primary" href={`mailto:${site.brand.email}?subject=${encodeURIComponent('SBB — project enquiry')}`}>
                Email me
              </a>
              <button className="btn" type="button" onClick={onCopy}>
                {copied ? 'Copied!' : 'Copy email'}
              </button>
            </div>
            <div className="note">
              <strong>Email:</strong> {site.brand.email}
              <br />
              <strong>Location:</strong> {site.brand.location}
            </div>
          </div>

          <div className="panel">
            <h3 className="h3">FAQ</h3>
            <div className="faq">
              {site.faq.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <div className="muted">{f.a}</div>
                </details>
              ))}
            </div>
            <div className="socialRow">
              <a className="pillLink" target="_blank" rel="noopener noreferrer" href={site.brand.links.linkedin}>LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
