import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/60 py-8 mt-16">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Nor Cal Inspections. All rights reserved.</div>
        <div className="flex gap-6">
          <Link to="/connect" className="hover:text-brand">
            Contact
          </Link>
          <Link to="/services" className="hover:text-brand">
            Services
          </Link>
          <Link to="/about" className="hover:text-brand">
            About
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
