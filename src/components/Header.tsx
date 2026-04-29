import { useLocation } from "react-router-dom";
import logo from "@/assets/nor-cal-logo.jpg";

export default function Header() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  // If we're on the homepage, use anchor links (#services etc.)
  // If on a sub-page, go back to home and then the section (/#services)
  const sectionHref = (anchor: string) =>
    isHome ? `#${anchor}` : `/#${anchor}`;

  return (
    <header className="site-header">
      <a href={isHome ? "#hero" : "/"} className="header-logo">
        <img src={logo} alt="Nor Cal Inspections" />
      </a>
      <nav className="header-nav">
        <a href={sectionHref("services")}>Services</a>
        <a href={sectionHref("about")}>About</a>
        <a href={sectionHref("projects")}>Projects</a>
        <a href={sectionHref("contact")} className="nav-cta">Contact</a>
      </nav>
    </header>
  );
}
