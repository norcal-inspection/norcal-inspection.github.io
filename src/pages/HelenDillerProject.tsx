import { Link } from "react-router-dom";
import elevationImg from "@/assets/ucsf-helen-diller-elevation.avif";
import entranceImg from "@/assets/ucsf-helen-diller-entrance.avif";
import streetViewImg from "@/assets/ucsf-helen-diller-street-view.avif";

// ─── Images ──────────────────────────────────────────────────────────────────
// The first image is the large featured one; the rest fill the smaller slots.
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

const serif = { fontFamily: "'Cormorant Garamond', serif" } as const;

const HelenDillerProject = () => {
  const [featured, ...rest] = IMAGES;

  return (
    <div className="min-h-screen flex flex-col bg-white" style={{ color: "#2d2b26" }}>
      {/* pt-28 pushes everything below the fixed top navigation bar */}
      <main className="flex-1 w-full max-w-[1120px] mx-auto px-6 pt-28 pb-24">

        {/* Breadcrumb */}
        <nav className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-6"
             style={{ color: "#9a9790" }}>
          <Link to="/" className="hover:opacity-70" style={{ color: "#9a9790" }}>Home</Link>
          <span className="mx-2">/</span>
          <span style={{ color: "#1a2744" }}>UCSF Helen Diller Hospital</span>
        </nav>

        {/* Title block — sits below the nav, no longer hidden under it */}
        <header className="max-w-3xl">
          <div className="text-xs font-bold tracking-[0.25em] uppercase"
               style={{ color: "#d4a820" }}>
            UCSF Health · Parnassus Heights
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05] mt-3"
              style={{ ...serif, color: "#111b33" }}>
            UCSF Health Helen Diller Hospital
          </h1>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: "#5c5a54" }}>
            A new 15-story acute care hospital on the Parnassus Heights campus, paired with
            renovation and seismic upgrades to existing UCSF facilities.
          </p>
        </header>

        {/* ── Image slots ── */}
        <section className="mt-10">
          {/* Featured image */}
          <div className="rounded-md overflow-hidden"
               style={{ border: "1px solid #eceae5" }}>
            <img
              src={featured.src}
              alt={featured.alt}
              className="w-full object-cover"
              style={{ aspectRatio: "16 / 9" }}
            />
          </div>

          {/* Remaining images in a responsive row of slots */}
          {rest.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {rest.map((img) => (
                <div key={img.src} className="rounded-md overflow-hidden"
                     style={{ border: "1px solid #eceae5" }}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full object-cover"
                    style={{ aspectRatio: "4 / 3" }}
                  />
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ── Project information ── */}
        <section className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Scope copy */}
          <div className="lg:col-span-2 space-y-6 leading-relaxed" style={{ color: "#33322d" }}>
            <h2 className="text-3xl font-semibold" style={{ ...serif, color: "#111b33" }}>
              Project Scope
            </h2>
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

          {/* Facts sidebar */}
          <aside>
            <div className="rounded-md p-6" style={{ background: "#f8f7f4", border: "1px solid #eceae5" }}>
              <div className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
                   style={{ color: "#d4a820" }}>
                Project Facts
              </div>
              <dl className="space-y-4">
                {FACTS.map((f) => (
                  <div key={f.label}>
                    <dt className="text-[11px] font-semibold tracking-[0.15em] uppercase"
                        style={{ color: "#9a9790" }}>
                      {f.label}
                    </dt>
                    <dd className="text-base font-medium mt-1" style={{ color: "#1a2744" }}>
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <Link
              to="/"
              className="inline-block mt-6 text-sm font-semibold tracking-wide hover:opacity-70"
              style={{ color: "#d4a820" }}
            >
              ← Back to all projects
            </Link>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default HelenDillerProject;
