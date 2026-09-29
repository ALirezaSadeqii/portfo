"use client";

import { useState, useEffect } from "react";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-bg-primary/95 backdrop-blur-md border-b border-border-subtle shadow-sm"
          : "bg-transparent"
        }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Main navigation">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="text-text-primary font-semibold text-lg tracking-tight hover:text-accent transition-colors"
          aria-label="Alireza Sadeghi – Back to top"
        >
          AS<span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          id="mobile-menu-button"
        >
          <span
            className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
          />
          <span
            className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${menuOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } bg-bg-primary/98 backdrop-blur-md border-b border-border-subtle`}
        id="mobile-menu"
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col px-6 py-4 gap-4" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-base text-text-secondary hover:text-text-primary transition-colors font-medium py-1"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
