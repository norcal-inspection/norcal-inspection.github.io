import { useEffect, useRef } from "react";
import heroVideo from "@/assets/aerial-crane.mp4";
import sutterLogo from "@/assets/sutter-health.png";
import johnmuirLogo from "@/assets/john-muir-health.png";
import kaiserLogo from "@/assets/kaiser-permanente.png";
import lpackardLogo from "@/assets/lucile-packard-children-hospital.png";
import stanfordLogo from "@/assets/stanford-medicine.png";
import ucdavisLogo from "@/assets/uc-davis.jpeg";
import uchastingsLogo from "@/assets/uc-hastings-law.png";
import ucsfLogo from "@/assets/ucsf-health.png";
import helendillerImg from "@/assets/ucsf-helen-diller-elevation.avif";
import chineseHospitalImg from "@/assets/chinese-hospital-website.jpg";
import tidelandsImg from "@/assets/ucsf-tidelands.jpg";
import chabotImg from "@/assets/chabot-college.jpg";
import richmondImg from "@/assets/richmond-transit-village.jpg";
import bayAreaMetroImg from "@/assets/bay-area-metro-center.jpg";
import aboutImg from "@/assets/iors.jpg";

// ─── Project data ────────────────────────────────────────────────────────────
// Replace placeholder Unsplash URLs with real imported images as you add them.
// Pattern: import myImg from "@/assets/my-image.jpg" then use myImg below.
const PROJECTS = [
  {
    title: "UCSF Helen Diller Hospital",
    img: helendillerImg,
    alt: "UCSF Helen Diller Hospital elevation",
    tag: "Healthcare",
    href: "/projects/ucsf-helen-diller",
  },
  {
    title: "Chinese Hospital",
    img: chineseHospitalImg,
    alt: "Chinese Hospital",
    tag: "Healthcare",
    href: "/projects/chinese-hospital",
  },
  {
    title: "UCSF Tidelands",
    img: tidelandsImg,
    alt: "UCSF Tidelands",
    tag: "Healthcare",
    href: "/projects/ucsf-tidelands",
  },
  {
    title: "Chabot College",
    img: chabotImg,
    alt: "Chabot College",
    tag: "Education",
    href: "/projects/chabot-college",
  },
  {
    title: "Richmond Transit Village",
    img: richmondImg,
    alt: "Richmond Transit Village",
    tag: "Civic",
    href: "/projects/richmond-transit-village",
  },
  {
    title: "Bay Area Metro Center",
    img: bayAreaMetroImg,
    alt: "Bay Area Metro Center",
    tag: "Civic",
    href: "/projects/bay-area-metro-center",
  },
];
// ─── Client data ─────────────────────────────────────────────────────────────
// Replace each `name` entry with an <img> once you have logo files.
// Pattern: import sutterLogo from "@/assets/sutter-health-logo.png"
//          then set logo: sutterLogo in the object below.
const CLIENTS: { name: string; logo?: string; url?: string }[] = [
  { name: "Sutter Health", logo: sutterLogo, url: "https://www.sutterhealth.org" },
  { name: "John Muir Health", logo: johnmuirLogo, url: "https://www.johnmuirhealth.com" },
  { name: "Kaiser Permanente", logo: kaiserLogo, url: "https://www.kaiserpermanente.org" },
  { name: "Lucile Packard Children's Hospital Stanford", logo: lpackardLogo, url: "https://www.stanfordchildrens.org" },
  { name: "Stanford Medicine", logo: stanfordLogo, url: "https://med.stanford.edu" },
  { name: "UC Davis", logo: ucdavisLogo, url: "https://www.ucdavis.edu" },
  { name: "UC Hastings Law", logo: uchastingsLogo, url: "https://www.uchastings.edu" },
  { name: "UCSF Health", logo: ucsfLogo, url: "https://www.ucsfhealth.org" },
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

    const onScroll = () => {
      const section = el.closest("section") as HTMLElement;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const winH = window.innerHeight;
      // How far the section has travelled through the viewport (0 = just entered, 1 = just left)
      const progress = 1 - rect.bottom / (winH + rect.height);
      const shift = progress * 100 - 30;
      el.style.transform = `translateY(${shift}px)`;
    };

    // Listen on both window and document to catch all scroll contexts
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll);
    };
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
          <video src={heroVideo} autoPlay muted loop playsInline />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-eyebrow"></span>
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
        <h2 className="section-title white">Inspection Services</h2>
        <p className="section-body muted">
          From groundbreaking to final sign-off, we provide continuous, on-site inspection
          verifying that each stage of your project meets California HCAI and State Fire Marshal
          code and regulatory standards.
        </p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon"><IconSchool /></div>
            <h3>School Construction Inspection</h3>
            <p>
              Nor Cal Inspection LLC provides comprehensive construction inspection services for K-12 and higher education facilities, ensuring compliance with state regulations and safety standards. 
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon"><IconHospital /></div>
            <h3>Hospital Construction Inspection</h3>
            <p>
              Our team specializes in conducting thorough inspections for hospital construction projects, prioritizing quality and adherence to healthcare facility standards.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon"><IconHealth /></div>
            <h3>Health Care Facility Inspection</h3>
            <p>
              We offer meticulous inspection services for health care facilities, focusing on structural
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
            Founded in 2005 in Clayton, California, Nor Cal Inspection LLC has grown into one of
            Northern California's most trusted names in healthcare and public-facility inspection.
            Today our team of more than 20 Class A Inspectors of Record has overseen hospitals,
            surgical centers, and school campuses across the region. Built on a simple belief:
            that rigorous, honest inspection protects the people who will one day walk through
            these buildings. That's the standard behind every project we take on.
          </p>
          <div className="about-stats">
            <div>
              <div className="about-stat-num">20<span>+</span></div>
              <div className="about-stat-label">Years Experience</div>
            </div>
            <div>
              <div className="about-stat-num">500<span>+</span></div>
              <div className="about-stat-label">Projects Completed</div>
            </div>
            <div>
              <div className="about-stat-num">15<span>+</span></div>
              <div className="about-stat-label">Major Clients</div>
            </div>
          </div>
        </div>
        <div className="about-image-col">
          <div
            className="about-parallax-img"
            ref={aboutImgRef}
            style={{ backgroundImage: `url(${aboutImg})` }}
          />
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
  <a
    key={c.name}
    href={c.url}
    target="_blank"
    rel="noopener noreferrer"
    className="client-cell"
  >
    {c.logo ? (
      <img src={c.logo} alt={c.name} />
    ) : (
      <div className="client-placeholder">{c.name}</div>
    )}
  </a>
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
