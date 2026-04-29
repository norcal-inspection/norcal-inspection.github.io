import { useEffect, useRef } from "react";
import constructionImg1 from "@/assets/ucsf-helen-diller-elevation.avif";
import constructionImg2 from "@/assets/ucsf-helen-diller-entrance.avif";
import constructionImg3 from "@/assets/ucsf-helen-diller-street-view.avif";

// ─── Project data ────────────────────────────────────────────────────────────
// Replace placeholder Unsplash URLs with real imported images as you add them.
// Pattern: import myImg from "@/assets/my-image.jpg" then use myImg below.
const PROJECTS = [
  {
    img: "https://images.unsplash.com/photo-1584467541268-b040f83be3fd?w=600&q=70",
    alt: "UCSF Helen Diller Hospital",
    tag: "Healthcare · San Francisco",
    title: "UCSF Helen Diller Hospital",
    href: "/projects/ucsf-helen-diller",
  },
  {
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=70",
    alt: "Sutter Health Medical Center",
    tag: "Healthcare · Sacramento",
    title: "Sutter Health Medical Center",
    href: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=70",
    alt: "State Office Tower",
    tag: "Commercial · Sacramento",
    title: "State Office Tower",
    href: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=70",
    alt: "Davis Joint Unified School District",
    tag: "Education · Davis",
    title: "Davis Joint Unified SD Campus",
    href: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=70",
    alt: "Stanford Medicine Expansion",
    tag: "Healthcare · Palo Alto",
    title: "Stanford Medicine Expansion",
    href: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=70",
    alt: "John Muir Health Facility",
    tag: "Healthcare · Walnut Creek",
    title: "John Muir Health Facility",
    href: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=70",
    alt: "Kaiser Permanente Complex",
    tag: "Healthcare · Oakland",
    title: "Kaiser Permanente Complex",
    href: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=70",
    alt: "UC Davis Health Pavilion",
    tag: "Education · Davis",
    title: "UC Davis Health Pavilion",
    href: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&q=70",
    alt: "UC Hastings Law Campus",
    tag: "Education · San Francisco",
    title: "UC Hastings Law Campus",
    href: "#",
  },
];

// ─── Client data ─────────────────────────────────────────────────────────────
// Replace each `name` entry with an <img> once you have logo files.
// Pattern: import sutterLogo from "@/assets/sutter-health-logo.png"
//          then set logo: sutterLogo in the object below.
const CLIENTS: { name: string; logo?: string }[] = [
  { name: "Sutter Health" },
  { name: "John Muir Health" },
  { name: "Kaiser Permanente" },
  { name: "Lucile Packard Children's Hospital Stanford" },
  { name: "Stanford Medicine" },
  { name: "UC Davis" },
  { name: "UC Hastings Law" },
  { name: "UCSF Health" },
];

// ─── SVG icons ───────────────────────────────────────────────────────────────
const IconSchool = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#1a2744" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const IconHospital = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#1a2744" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);
const IconHealth = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#1a2744" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
  </svg>
);
const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const IconBriefcase = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  const aboutImgRef = useRef<HTMLDivElement>(null);

  // Parallax effect for About section image
  useEffect(() => {
    const el = aboutImgRef.current;
    if (!el) return;
    const section = el.closest("section") as HTMLElement;

    const onScroll = () => {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const winH = window.innerHeight;
      // progress goes 0 (section bottom at viewport bottom) → 1 (section top at viewport top)
      const progress = 1 - (rect.bottom / (winH + rect.height));
      // shift range: -80px (image slides up as you scroll down)
      const shift = progress * 120 - 40;
      el.style.transform = `translateY(${shift}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section id="hero" className="home-hero">
        <div className="hero-media">
          {/*
            TO ADD YOUR TIMELAPSE VIDEO/GIF:
            Option A — Video (recommended, much smoother):
              1. Download the .mp4 from Pixabay
              2. Save it to src/assets/construction-timelapse.mp4
              3. Add this import at the top of the file:
                 import heroVideo from "@/assets/construction-timelapse.mp4"
              4. Replace the <img> below with:
                 <video src={heroVideo} autoPlay muted loop playsInline />

            Option B — GIF:
              1. Save the .gif to src/assets/construction-timelapse.gif
              2. Add this import at the top:
                 import heroGif from "@/assets/construction-timelapse.gif"
              3. Replace the <img> below with:
                 <img src={heroGif} alt="" />
          */}
          <img src={constructionImg1} alt="" />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-eyebrow">Northern California Inspector of Record</span>
          <h1 className="hero-title">Leaders in Construction Inspection Services</h1>
          <p className="hero-sub">
            Delivering compliant, reliable inspections for hospitals, schools, and healthcare
            facilities across Northern California.
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn-primary">Our Services</a>
            <a href="#contact" className="btn-outline">Get in Touch</a>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          Scroll
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section id="services" className="home-services">
        <div className="section-label">What We Do</div>
        <h2 className="section-title white">Inspection &amp; Project Management Services</h2>
        <p className="section-body muted">
          Upholding standards set by California HCAI and the State Fire Marshal — delivered by
          experienced professionals across every project phase.
        </p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon"><IconSchool /></div>
            <h3>School Construction Inspection</h3>
            <p>
              Comprehensive inspection services for K–12 and higher education facilities, ensuring
              compliance with DSA requirements and California safety standards.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon"><IconHospital /></div>
            <h3>Hospital Construction Inspection</h3>
            <p>
              Thorough inspections for hospital construction projects, prioritizing quality and
              adherence to HCAI healthcare facility standards and OSHPD requirements.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon"><IconHealth /></div>
            <h3>Health Care Facility Inspection</h3>
            <p>
              Meticulous inspection services for health care facilities, focusing on structural
              integrity, fire safety, and full regulatory compliance from groundbreak to certificate
              of occupancy.
            </p>
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <section id="about" className="home-about">
        <div className="about-text-col">
          <div className="section-label">About Us</div>
          <h2 className="section-title">Trusted Expertise Across Northern California</h2>
          <p className="section-body">
            Nor Cal Inspection LLC is a dedicated provider of construction inspection services,
            committed to ensuring the safety and quality of critical infrastructure projects. Our
            experienced team upholds the standards set by California HCAI and the State Fire
            Marshal, delivering reliable and professional inspections for schools, hospitals, and
            healthcare facilities.
          </p>
          <div className="about-stats">
            <div>
              <div className="about-stat-num">20<span>+</span></div>
              <div className="about-stat-label">Years Experience</div>
            </div>
            <div>
              <div className="about-stat-num">150<span>+</span></div>
              <div className="about-stat-label">Projects Completed</div>
            </div>
            <div>
              <div className="about-stat-num">8<span>+</span></div>
              <div className="about-stat-label">Major Clients</div>
            </div>
          </div>
        </div>
        <div className="about-image-col">
          <div className="about-parallax-img" ref={aboutImgRef} />
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────────────────── */}
      <section id="projects" className="home-projects">
        <div className="projects-header">
          <div>
            <div className="section-label">Our Work</div>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Featured Projects</h2>
          </div>
          <a href="#contact" className="btn-primary btn-sm">Start a Project</a>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <a key={p.title} href={p.href} className="project-card">
              <img src={p.img} alt={p.alt} loading="lazy" />
              <div className="project-card-overlay">
                <div className="project-card-tag">{p.tag}</div>
                <h3>{p.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── CLIENTS ──────────────────────────────────────────────────────── */}
      <section id="clients" className="home-clients">
        <div className="clients-header">
          <div className="section-label centered">Our Clients</div>
          <h2 className="section-title centered sm">
            Trusted by California's Leading Institutions
          </h2>
        </div>
        <div className="clients-grid">
          {CLIENTS.map((c) => (
            <div key={c.name} className="client-cell">
              {c.logo ? (
                <img src={c.logo} alt={c.name} />
              ) : (
                <div className="client-placeholder">{c.name}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section id="contact" className="home-contact">
        <div className="contact-info-col">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title white">Let's Work Together</h2>
          <p className="section-body muted">
            For project inquiries, bid requests, or employment opportunities — reach out and our
            team will respond promptly.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon-wrap"><IconPin /></div>
              <div>
                <div className="contact-item-label">Head Office</div>
                <div className="contact-item-value">
                  6054 Clayton View Lane<br />Clayton, CA 94517
                </div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon-wrap"><IconPhone /></div>
              <div>
                <div className="contact-item-label">Phone</div>
                <div className="contact-item-value">925-323-5678</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon-wrap"><IconMail /></div>
              <div>
                <div className="contact-item-label">Email</div>
                <div className="contact-item-value">norcalinspection@icloud.com</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon-wrap"><IconBriefcase /></div>
              <div>
                <div className="contact-item-label">Employment</div>
                <div className="contact-item-value">
                  avik@norcalinspection.com
                  <br />
                  <span className="contact-item-note">Send cover letter + resume</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-col">
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="Jane" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Smith" />
            </div>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="jane@hospital.org" />
          </div>
          <div className="form-group">
            <label>Organization</label>
            <input type="text" placeholder="Institution or Firm" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Tell us about your project — location, scope, timeline..." />
          </div>
          <button className="form-submit">Send Message →</button>
        </div>
      </section>
    </>
  );
}
