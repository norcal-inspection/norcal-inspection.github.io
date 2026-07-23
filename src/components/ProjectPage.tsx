import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export type ProjectImage = { src: string; alt: string };
export type ProjectFact = { label: string; value: string | string[] };

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
  // Exactly two images: show them side by side as a pair, no separate lead image.
  const isPair = images.length === 2;
  const thumbImages = isPair ? images : rest;

  return (
    <div className="hdp">
      <style>{css}</style>
      <main className="hdp-main" style={{ paddingTop: topPad }}>
        {/* Title */}
        <div className="hdp-titleblock">
          <div className="hdp-eyebrow">{eyebrow}</div>
          <h1 className="hdp-title">{title}</h1>
        </div>

        {/* Gallery */}
        <section className="hdp-gallery">
          {!isPair && (
            <div className="hdp-lead">
              <img src={featured.src} alt={featured.alt} />
            </div>
          )}
          {thumbImages.length > 0 && (
            <div className="hdp-thumbs">
              {thumbImages.map((img) => (
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
            <h2 className="hdp-h2">{intro}</h2>
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
                    <dd>
                      {Array.isArray(f.value)
                        ? f.value.map((v, i) => <div key={i}>{v}</div>)
                        : f.value}
                    </dd>
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

.hdp-gallery { margin-top: 40px; max-width: 92%; margin-left: auto; margin-right: auto; }
.hdp-lead { border-radius: 10px; overflow: hidden; border: 1px solid #e6e3dd; box-shadow: 0 12px 34px rgba(17,27,51,0.10); }
.hdp-lead img { display: block; width: 100%; aspect-ratio: 16 / 9; object-fit: cover; }

.hdp-thumbs { display: grid; gap: 16px; margin-top: 16px; grid-template-columns: repeat(2, 1fr); }
.hdp-cell { border-radius: 10px; overflow: hidden; border: 1px solid #e6e3dd; box-shadow: 0 8px 22px rgba(17,27,51,0.08); }
.hdp-cell img { display: block; width: 100%; aspect-ratio: 4 / 3; object-fit: cover; }

@media (max-width: 640px) {
  .hdp-thumbs { grid-template-columns: 1fr; }
}

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
.hdp-fact dd div + div { margin-top: 4px; }

.hdp-back { display: inline-block; margin-top: 20px; color: #c88f1e; font-weight: 600; font-size: 14px; text-decoration: none; }
.hdp-back:hover { opacity: 0.7; }
`;

export default ProjectPage;
