import logo from "@/assets/nor-cal-logo-dark.png";

export default function Footer() {
  return (
    <footer className="site-footer">
      <a href="/" className="footer-logo">
        <img src={logo} alt="Nor Cal Inspections" />
      </a>
      <div className="footer-copy">
        © {new Date().getFullYear()} Nor Cal Inspection LLC. All rights reserved.
      </div>
      <div className="footer-links">
        <a href="/#services">Services</a>
        <a href="/#about">About</a>
        <a href="/#projects">Projects</a>
        <a href="/#contact">Contact</a>
      </div>
    </footer>
  );
}
