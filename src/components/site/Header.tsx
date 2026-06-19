import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/cris-logo.gif?url";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/programs", label: "Programs" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev;
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_24px_-12px_rgba(124,58,237,0.18)]" : "shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
      }`}
    >
      <div className="container-app flex items-center justify-between py-3">
        <Link to="/" className="flex items-center group" aria-label="CRIS Learning Centre — Home">
          <div 
            className="h-14 md:h-16 w-24 md:w-32 bg-white relative overflow-hidden"
            style={{
              backgroundImage: `url(${logo})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
          >
            <img
              src={logo}
              alt="CRIS Learning Centre"
              className="h-full w-full object-contain group-hover:scale-[1.03] transition-transform [transform:translateZ(0)] opacity-[0.99] [filter:brightness(1.01)_contrast(1.01)] bg-transparent [isolation:isolate]"
            />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
              activeProps={{ className: "text-primary bg-primary/5" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary hover:[transform:translateY(-2px)] hover:shadow-[var(--shadow-glow)]">
            Enroll Now
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 rounded-xl hover:bg-muted"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
        {...(!open ? { inert: true } : {})}
      >
        {/* Overlay */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-foreground/50 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Drawer */}
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`absolute top-0 right-0 h-[100svh] w-[82%] max-w-sm bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-out will-change-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <div 
              className="h-12 w-24 bg-white relative overflow-hidden"
              style={{
                backgroundImage: `url(${logo})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left center'
              }}
            >
              <img src={logo} alt="CRIS Learning Centre" className="h-full w-full object-contain mascot-optimize bg-transparent [isolation:isolate]" />
            </div>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="p-2 rounded-xl hover:bg-muted"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-4 py-5 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium hover:bg-primary/5 hover:text-primary transition-colors"
                activeProps={{ className: "bg-primary/5 text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="px-5 py-4 border-t border-border [padding-bottom:max(1rem,env(safe-area-inset-bottom))]">
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary w-full justify-center">
              Enroll Now
            </Link>
          </div>
        </aside>
      </div>
    </header>
  );
}
