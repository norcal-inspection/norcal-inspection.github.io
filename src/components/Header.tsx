import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "@/assets/nor-cal-logo.png";

export default function Header() {
  const { pathname, hash } = useLocation();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route/anchor changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  // If we're on the homepage, use anchor links (#services etc.)
  // If on a sub-page, go back to home and then the section (/#services)
  const sectionHref = (anchor: string) =>
    isHome ? `#${anchor}` : `/#${anchor}`;

  return (
    <header className="site-header">
      <a href={isHome ? "#hero" : "/"} className="header-logo">
        <img src={logo} alt="Nor Cal Inspections" />
      </a>
      <nav className={`header-nav ${open ? "open" : ""}`}>
        <a href={sectionHref("services")}>Services</a>
        <a href={sectionHref("about")}>About</a>
        <a href={sectionHref("projects")}>Projects</a>
        <a href={sectionHref("contact")} className="nav-cta">Contact</a>
      </nav>
      <button
        type="button"
        className={`nav-toggle ${open ? "open" : ""}`}
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
