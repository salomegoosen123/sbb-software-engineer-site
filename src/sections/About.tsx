import { site } from '../data/siteData';

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="sectionHeader">
          <h2 className="h2">About</h2>
        </div>

        <p className="muted">{site.about}</p>
      </div>
    </section>
  );
}
