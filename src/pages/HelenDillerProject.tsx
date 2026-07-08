import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import elevationImg from "@/assets/ucsf-helen-diller-elevation.avif";
import entranceImg from "@/assets/ucsf-helen-diller-entrance.avif";
import streetViewImg from "@/assets/ucsf-helen-diller-street-view.avif";

// ─── Images ──────────────────────────────────────────────────────────────────
// First image is the large featured one; the rest fill the thumbnail row.
// To add a slot: import the file above, then add a line here.
const IMAGES = [
  { src: elevationImg,  alt: "UCSF Helen Diller Hospital — elevation view from Mount Sutro" },
  { src: entranceImg,   alt: "UCSF Helen Diller Hospital — main entrance at street level" },
  { src: streetViewImg, alt: "UCSF Helen Diller Hospital — street view looking up at tower" },
];

// ─── Facts sidebar ───────────────────────────────────────────────────────────
const FACTS = [
  { label: "Location",         value: "Parnassus Heights, San Francisco" },
  { label: "Client",           value: "UCSF Health" },
  { label: "Tower",            value: "15 stories" },
  { label: "New Construction", value: "~900,000 GSF" },
  { label: "Patient Beds",     value: "~336" },
  { label: "Renovation",       value: "~114,000 GSF" },
];

const HelenDillerProject = () => {
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

  const [featured, ...rest] = IMAGES;

  return (
    <div className="hdp">
      <style>{css}</style>
      <main className="hdp-main" style={{ paddingTop: topPad }}>
        {/* Breadcrumb */}
        <nav className="hdp-crumb">
          <Link to="/" className="hdp-crumb-link">Home</Link>
          <span className="hdp-crumb-sep">/</span>
          <span className="hdp-crumb-here">UCSF Helen Diller Hospital</span>
        </nav>

        {/* Title — now sits below the nav */}
        <div className="hdp-titleblock">
          <div className="hdp-eyebrow">UCSF Health · Parnassus Heights</div>
          <h1 className="hdp-title">UCSF Health Helen Diller Hospital</h1>
          <p className="hdp-intro">
            A new 15-story acute care hospital on the Parnassus Heights campus, paired with
            renovation and seismic upgrades to existing UCSF facilities.
          </p>
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
            <p>
              The project centers on a new 15-story, approximately 900,000 gross square foot
              hospital building delivering roughly 336 patient beds, with expanded emergency
              department, imaging, and surgical services for the Parnassus Heights campus.
            </p>
            <p>
              Alongside the new tower, the scope includes the renovation of approximately 114,000
              gross square feet within the existing Moffitt and Long Hospitals to enhance inpatient
              clinical services and address the campus's growing patient capacity needs.
            </p>
            <p>
              Structural and infrastructure work includes a new 15-story exterior stair at Moffitt
              Hospital and a seismic upgrade enabling Moffitt to support acute care services beyond
              2030.
            </p>
          </div>

          <aside className="hdp-aside">
            <div className="hdp-facts">
              <div className="hdp-facts-title">Project Facts</div>
              <dl className="hdp-facts-list">
                {FACTS.map((f) => (
                  <div className="hdp-fact" key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <Link to="/" className="hdp-back">← Back to all projects</Link>
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

.hdp-crumb { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #8f8c85; margin-bottom: 22px; }
.hdp-crumb-link { color: #8f8c85; text-decoration: none; }
.hdp-crumb-link:hover { color: #1a2744; }
.hdp-crumb-sep { margin: 0 8px; }
.hdp-crumb-here { color: #1a2744; }

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

export default HelenDillerProject;
