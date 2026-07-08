import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export type ProjectImage = { src: string; alt: string };
export type ProjectFact = { label: string; value: string };

export interface ProjectPageProps {
  eyebrow: string;
  title: string;
  intro: string;
  images: ProjectImage[];
  scope: string[];
  facts: ProjectFact[];
  backHref?: string;
}

const ProjectPage = ({
  eyebrow,
  title,
  intro,
  images,
  scope,
  facts,
  backHref = "/",
}: ProjectPageProps) => {
  // Measure the real header height so the title can never sit under it.
  const [topPad, setTopPad] = useState(104);
  useEffect(() => {
    const measure = () => {
      const h =
        document.querySelector(".site-header") ||
        document.querySelector("header");
      const height = h ? (h as HTMLElement).offsetHeight : 68;
      setTopPad(height + 40);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const [featured, ...rest] = images;

  return (
    <div className="hdp">
      <style>{css}</style>
      <main className="hdp-main" style={{ paddingTop: topPad }}>
        {/* Title */}
        <div className="hdp-titleblock">
          <div className="hdp-eyebrow">{eyebrow}</div>
          <h1 className="hdp-title">{title}</h1>
          <p className="hdp-intro">{intro}</p>
        </div>

        {/* Gallery */}
        <section className="hdp-gallery">
          <div className="hdp-lead">
            <img src={featured.src} alt={featured.alt} />
          </div>
          {rest.length > 0 && (
            <div className="hdp-thumbs">
              {rest.map((img) => (
                <div className="hdp-cell" key={img.src}>
                  <img src={img.src} alt={img.alt} />
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Details */}
        <section className="hdp-body">
          <div className="hdp-scope">
            <h2 className="hdp-h2">Project Scope</h2>
            {scope.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <aside className="hdp-aside">
            <div className="hdp-facts">
              <div className="hdp-facts-title">Project Facts</div>
              <dl className="hdp-facts-list">
                {facts.map((f) => (
                  <div className="hdp-fact" key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <Link to={backHref} className="hdp-back">← Back to all projects</Link>
          </aside>
        </section>
      </main>
    </div>
  );
};

// ─── Scoped styles (self-contained; nothing else in the site is affected) ─────
const css = `
.hdp { background: #ffffff; color: #2d2b26; min-height: 100vh; }
.hdp-main { max-width: 1120px; margin: 0 auto; padding-left: 24px; padding-right: 24px; padding-bottom: 96px; }

.hdp-titleblock { max-width: 760px; }
.hdp-eyebrow { color: #c88f1e; font-weight: 700; font-size: 12px; letter-spacing: 0.22em; text-transform: uppercase; }
.hdp-title { font-family: 'Cormorant Garamond', serif; color: #111b33; font-weight: 600; line-height: 1.05; margin: 10px 0 0; font-size: clamp(34px, 5vw, 60px); }
.hdp-intro { color: #6f6d67; font-size: 18px; line-height: 1.6; margin: 16px 0 0; max-width: 60ch; }

.hdp-gallery { margin-top: 40px; }
.hdp-lead { border-radius: 10px; overflow: hidden; border: 1px solid #e6e3dd; box-shadow: 0 12px 34px rgba(17,27,51,0.10); }
.hdp-lead img { display: block; width: 100%; aspect-ratio: 16 / 9; object-fit: cover; transition: transform 0.6s ease; }
.hdp-lead:hover img { transform: scale(1.03); }

.hdp-thumbs { display: grid; gap: 16px; margin-top: 16px; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
.hdp-cell { border-radius: 10px; overflow: hidden; border: 1px solid #e6e3dd; box-shadow: 0 8px 22px rgba(17,27,51,0.08); }
.hdp-cell img { display: block; width: 100%; aspect-ratio: 4 / 3; object-fit: cover; transition: transform 0.6s ease; }
.hdp-cell:hover img { transform: scale(1.04); }

.hdp-body { display: grid; gap: 48px; margin-top: 64px; grid-template-columns: 1fr; }
@media (min-width: 900px) { .hdp-body { grid-template-columns: 2fr 1fr; } }

.hdp-scope { border-left: 3px solid #e0a437; padding-left: 28px; }
.hdp-h2 { font-family: 'Cormorant Garamond', serif; color: #111b33; font-weight: 600; font-size: 30px; margin: 0 0 4px; }
.hdp-scope p { margin: 18px 0 0; line-height: 1.75; color: #3a382f; font-size: 16.5px; max-width: 62ch; }

.hdp-aside { align-self: start; }
.hdp-facts { background: #f7f5f1; border: 1px solid #e6e3dd; border-radius: 10px; padding: 24px 26px; }
.hdp-facts-title { color: #c88f1e; font-weight: 700; font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 8px; }
.hdp-facts-list { margin: 0; }
.hdp-fact { padding: 14px 0; border-bottom: 1px solid #eae7e0; }
.hdp-fact:last-child { border-bottom: none; padding-bottom: 0; }
.hdp-fact dt { font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: #9a9790; }
.hdp-fact dd { margin: 4px 0 0; font-size: 16px; font-weight: 500; color: #1a2744; }

.hdp-back { display: inline-block; margin-top: 20px; color: #c88f1e; font-weight: 600; font-size: 14px; text-decoration: none; }
.hdp-back:hover { opacity: 0.7; }
`;

export default ProjectPage;
