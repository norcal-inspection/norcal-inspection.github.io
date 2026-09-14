import { useState, type FormEvent } from "react";
import Seo from "@/components/Seo";
import heroVideo from "@/assets/aerial-crane.mp4";
import sutterLogo from "@/assets/sutter-health.png";
import johnmuirLogo from "@/assets/john-muir-health.png";
import kaiserLogo from "@/assets/kaiser-permanente.png";
import lpackardLogo from "@/assets/lucile-packard-children-hospital.svg";
import stanfordLogo from "@/assets/stanford-medicine.png";
import ucdavisLogo from "@/assets/uc-davis.png";
import uchastingsLogo from "@/assets/uc-hastings-law.svg";
import ucsfLogo from "@/assets/ucsf-health.png";
import helendillerImg from "@/assets/ucsf-helen-diller-elevation.avif";
import chineseHospitalImg from "@/assets/chinese-hospital-website.jpg";
import tidelandsImg from "@/assets/ucsf-tidelands.jpg";
import ucLawImg from "@/assets/uc-law-exterior.jpg";
import richmondImg from "@/assets/richmond-transit-village.jpg";
import weillImg from "@/assets/weill-exterior-1.jpg";
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
    tag: "Civic",
    href: "/projects/ucsf-tidelands",
  },
  {
    title: "UC Law San Francisco",
    img: ucLawImg,
    alt: "UC Law San Francisco",
    tag: "Civic",
    href: "/projects/uc-law-san-francisco",
  },
  {
    title: "Richmond Transit Village",
    img: richmondImg,
    alt: "Richmond Transit Village",
    tag: "Civic",
    href: "/projects/richmond-transit-village",
  },
  {
    title: "Weill Neurosciences Building",
    img: weillImg,
    alt: "Weill Neurosciences Building",
    tag: "Healthcare",
    href: "/projects/weill-neurosciences",
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
const IconBriefcase = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────

// Web3Forms access key — links this form to norcalinspection@icloud.com.
// Get it from https://web3forms.com (Create Access Key, enter that email, confirm).
// Not a secret: it only permits sending mail to the pre-registered address.
const WEB3FORMS_ACCESS_KEY = "36a8cc4d-730e-4cd0-8c8a-8f22e9413e1c";

type FormStatus = "idle" | "sending" | "ok" | "error";

export default function Home() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

  async function handleContactSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setFormStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        setFormStatus("ok");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <>
      <Seo
        title="Nor Cal Inspections"
        description="Northern California Inspector of Record and construction project management for healthcare, civic, and education projects — DSA, HCAI, and OSFM compliance since 2005."
      />
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
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section id="services" className="home-services">
        <div className="section-label">What We Do</div>
        <h2 className="section-title white">Inspection Services</h2>
        <p className="section-body muted">
          From groundbreaking to final sign-off, we provide continuous, on-site inspection to
          verify that every stage of your project meets state regulatory standards.
        </p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon"><IconSchool /></div>
            <h3>K-12 & Community Colleges</h3>
            <p>
              Nor Cal Inspection LLC provides comprehensive inspection services for K-12 schools and community colleges, ensuring compliance with Division of the State Architect (DSA) regulations at every phase of construction.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon"><IconHospital /></div>
            <h3>Hospital & Healthcare</h3>
            <p>
              Our team specializes in thorough, on-site inspections for hospital and healthcare construction projects, meeting HCAI (Health Care Access and Information) standards with uncompromising attention to patient and life safety.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon"><IconHealth /></div>
            <h3>Civic & Institutional</h3>
            <p>
              We deliver inspection services for civic, institutional, and public agency projects — including university facilities and transit infrastructure — in accordance with Office of the State Fire Marshal (OSFM) requirements.
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
            Today our team of more than 20 Class A Inspectors of Record has overseen the
            construction of hundreds of hospitals, surgical centers, and school campuses across
            the region. Built on a simple belief:
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

        <form className="contact-form-col" onSubmit={handleContactSubmit}>
          <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
          <input type="hidden" name="subject" value="New inquiry from norcalinspection.com" />
          <input type="hidden" name="from_name" value="NorCal Inspection website" />
          {/* honeypot — bots fill this, humans never see it */}
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            style={{ display: "none" }}
          />
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="cf-first">First Name</label>
              <input id="cf-first" type="text" name="First Name" placeholder="Jane" required />
            </div>
            <div className="form-group">
              <label htmlFor="cf-last">Last Name</label>
              <input id="cf-last" type="text" name="Last Name" placeholder="Smith" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="cf-email">Email</label>
            <input id="cf-email" type="email" name="email" placeholder="jane@hospital.org" required />
          </div>
          <div className="form-group">
            <label htmlFor="cf-org">Organization</label>
            <input id="cf-org" type="text" name="Organization" placeholder="Institution or Firm" />
          </div>
          <div className="form-group">
            <label htmlFor="cf-msg">Message</label>
            <textarea
              id="cf-msg"
              name="message"
              placeholder="Tell us about your project — location, scope, timeline..."
              required
            />
          </div>
          <button type="submit" className="form-submit" disabled={formStatus === "sending"}>
            {formStatus === "sending" ? "Sending…" : "Send Message →"}
          </button>
          {formStatus === "ok" && (
            <p className="form-status ok" role="status">
              Thanks — your message has been sent. We'll be in touch shortly.
            </p>
          )}
          {formStatus === "error" && (
            <p className="form-status error" role="status">
              Something went wrong. Please email us directly at norcalinspection@icloud.com.
            </p>
          )}
        </form>
      </section>
    </>
  );
}
