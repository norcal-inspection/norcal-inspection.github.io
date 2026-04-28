import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import elevationImg from "@/assets/ucsf-helen-diller-elevation.avif";
import entranceImg from "@/assets/ucsf-helen-diller-entrance.avif";
import streetViewImg from "@/assets/ucsf-helen-diller-street-view.avif";

const IMAGES = [
  {
    src: elevationImg,
    alt: "UCSF Helen Diller Hospital — elevation view from Mount Sutro",
  },
  {
    src: entranceImg,
    alt: "UCSF Helen Diller Hospital — main entrance at street level",
  },
  {
    src: streetViewImg,
    alt: "UCSF Helen Diller Hospital — street view looking up at tower",
  },
];

const FACTS = [
  { label: "Location", value: "Parnassus Heights, San Francisco" },
  { label: "Client", value: "UCSF Health" },
  { label: "Tower", value: "15 stories" },
  { label: "New Construction", value: "~900,000 GSF" },
  { label: "Patient Beds", value: "~336" },
  { label: "Renovation", value: "~114,000 GSF" },
];

const HelenDillerProject = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <article className="container mt-10">
        {/* Breadcrumb */}
        <nav className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-6">
          <Link to="/" className="hover:text-brand">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">UCSF Helen Diller Hospital</span>
        </nav>

        {/* Title */}
        <header className="max-w-4xl">
          <div className="text-xs font-semibold tracking-[0.25em] text-brand uppercase">
            UCSF Health · Parnassus Heights
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-[1.05] mt-3 text-balance">
            UCSF Health Helen Diller Hospital
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            A new 15-story acute care hospital on the Parnassus Heights campus, paired with
            renovation and seismic upgrades to existing UCSF facilities.
          </p>
        </header>

        {/* Carousel */}
        <div className="mt-10">
          <Carousel images={IMAGES} />
        </div>

        {/* Body */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6 text-foreground/90 leading-relaxed">
            <h2 className="font-serif text-3xl font-semibold text-foreground">Project Scope</h2>
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
              2030. The Parnassus Central Utility Plant is being renovated, the Long Hospital
              loading dock expanded, and Medical Center Way and site utilities upgraded. The
              Langley Porter Psychiatric building will be demolished as part of the broader campus
              modernization.
            </p>
          </div>

          <aside className="lg:col-span-1">
            <div className="border-t border-border pt-6">
              <h3 className="font-serif text-xl font-semibold mb-5">Project Facts</h3>
              <dl className="space-y-4">
                {FACTS.map((fact) => (
                  <div key={fact.label} className="flex flex-col gap-1">
                    <dt className="text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                      {fact.label}
                    </dt>
                    <dd className="font-serif text-lg text-foreground">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>

        {/* Back link */}
        <div className="mt-16 mb-8 border-t border-border pt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-brand hover:text-brand/80 transition"
          >
            <span aria-hidden>←</span> Back to all projects
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default HelenDillerProject;
