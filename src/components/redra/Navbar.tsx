import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/redra-logo.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 backdrop-blur-xl bg-background/70 border-b border-border" : "py-5"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <a href="#home" className="flex items-center group">
          <img
            src={logo}
            alt="Redra Tech"
            className="h-8 md:h-10 w-auto animate-logo-pulse group-hover:drop-shadow-[0_0_24px_hsl(var(--primary)/0.85)] transition-all"
          />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-primary hover:after:w-full after:transition-all"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-medium hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] transition-all"
        >
          Get Started
        </a>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden container mt-4 glass-card rounded-xl p-6 flex flex-col gap-4 animate-fade-in">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};