import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBuilding from "@/assets/ucsf-helen-diller-elevation.avif";

// Placeholder project entries — swap these images/links in as you have them.
const PROJECTS = [
  {
    img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
    label: "Sutter Health",
    title: "Regional Medical Center Expansion",
    href: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=80",
    label: "Sacramento",
    title: "State Office Tower Renovation",
    href: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    label: "Davis Joint USD",
    title: "New Academic Campus Building",
    href: "#",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      {/* Tagline banner */}
      <section className="container pt-8">
        <div className="bg-brand text-brand-foreground rounded-sm px-8 py-12 md:py-16 text-center">
          <h1 className="font-serif text-3xl md:text-5xl font-semibold leading-tight max-w-4xl mx-auto text-balance">
            Northern California Inspector of Record
            <br className="hidden md:block" /> and Project Management Services
          </h1>
        </div>
      </section>

      {/* Featured project — clickable through to detail page */}
      <section className="container mt-6">
        <Link
          to="/projects/ucsf-helen-diller"
          className="block group relative overflow-hidden rounded-sm"
        >
          <img
            src={heroBuilding}
            alt="UCSF Health Helen Diller Hospital at Parnassus Heights"
            width={1600}
            height={900}
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent p-6 md:p-10">
            <div className="text-xs font-semibold tracking-[0.2em] text-background/90">
              UCSF HEALTH · PARNASSUS HEIGHTS
            </div>
            <div className="font-serif text-2xl md:text-4xl font-semibold text-background mt-1">
              Helen Diller Hospital
            </div>
            <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-background/90 group-hover:text-background transition">
              View project
              <span aria-hidden>→</span>
            </div>
          </div>
        </Link>
      </section>

      {/* Projects grid */}
      <section className="container mt-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <a
              key={p.title}
              href={p.href}
              className="group relative overflow-hidden rounded-sm block"
            >
              <img
                src={p.img}
                alt={p.title}
                width={800}
                height={600}
                loading="lazy"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/85 via-foreground/40 to-transparent p-5">
                <div className="text-[10px] font-semibold tracking-[0.2em] text-background/90">
                  {p.label.toUpperCase()}
                </div>
                <div className="font-serif text-lg font-semibold text-background mt-1 leading-snug">
                  {p.title}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
