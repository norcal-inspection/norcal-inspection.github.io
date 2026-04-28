import { Link, NavLink } from "react-router-dom";

const NAV = [
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Clients", path: "/clients" },
  { label: "Connect", path: "/connect" },
];

const Header = () => {
  return (
    <header className="border-b border-border/60 bg-background/80 backdrop-blur sticky top-0 z-40">
      <div className="container flex items-center justify-between py-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-brand">
            <span className="font-serif text-xl font-bold text-brand">N</span>
          </div>
          <div className="leading-tight">
            <div className="font-serif text-xl font-bold tracking-wide text-brand">NOR CAL</div>
            <div className="text-[10px] font-semibold tracking-[0.25em] text-brand/80">
              INSPECTIONS
            </div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-semibold tracking-wider uppercase transition-colors ${
                  isActive ? "text-brand" : "text-foreground/70 hover:text-brand"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
