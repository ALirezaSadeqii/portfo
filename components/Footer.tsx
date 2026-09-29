"use client";

import { personal } from "../lib/data";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="relative overflow-hidden border-t border-border-subtle bg-bg-primary"
      role="contentinfo"
    >
      {/* Accent glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 100% at 50% 110%, color-mix(in srgb, var(--color-accent) 18%, transparent), transparent)",
          pointerEvents: "none",
        }}
      />

      {/* Main grid */}
      <div className="relative max-w-6xl mx-auto px-6 pt-14 pb-10">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
          }}
        >
          {/* ── Col 1: Brand ── */}
          <div style={{ gridColumn: "span 1" }}>
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="text-text-primary font-semibold text-xl hover:text-accent transition-colors"
              aria-label="Back to top"
            >
              AS<span className="text-accent">.</span>
            </a>
            <p className="text-sm text-text-secondary mt-3 leading-relaxed" style={{ maxWidth: "240px" }}>
              Full-Stack Web Developer building modern applications across frontend, backend, APIs, and databases.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2 mt-5">
              {/* GitHub */}
              <SocialBtn href={personal.github} label="GitHub profile" id="footer-github" external>
                <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </SocialBtn>

              {/* LinkedIn */}
              <SocialBtn href={personal.linkedin} label="LinkedIn profile" id="footer-linkedin" external>
                <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </SocialBtn>

              {/* Email */}
              <SocialBtn href={`mailto:${personal.email}`} label="Send email" id="footer-email">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </SocialBtn>
            </div>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div>
            <h3 className="text-text-primary font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-text-secondary hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Contact ── */}
          <div>
            <h3 className="text-text-primary font-semibold text-sm uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <ContactRow
                  icon={
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  }
                  label="Email"
                  value={personal.email}
                  href={`mailto:${personal.email}`}
                />
              </li>
              <li>
                <ContactRow
                  icon={
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.64a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  }
                  label="Phone"
                  value={personal.phone}
                  href={`tel:${personal.phone}`}
                />
              </li>
              <li>
                <ContactRow
                  icon={
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  }
                  label="Location"
                  value={personal.location}
                />
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="mt-12 pt-6 border-t border-border-subtle"
          style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}
        >
          <p className="text-xs text-text-muted">
            © {year} Alireza Sadeghi. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Web &amp; Full-Stack Developer · Istanbul, Turkey
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ── Small reusable sub-components ── */

function SocialBtn({
  href,
  label,
  id,
  external,
  children,
}: {
  href: string;
  label: string;
  id: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "36px",
    height: "36px",
    borderRadius: "9px",
    border: "1px solid var(--color-border-subtle)",
    background: "var(--color-bg-card)",
    color: "var(--color-text-muted)",
    transition:
      "color 0.2s ease, border-color 0.2s ease, background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer",
  };
  const enter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    el.style.color = "var(--color-accent)";
    el.style.borderColor = "var(--color-accent)";
    el.style.background = "color-mix(in srgb, var(--color-accent) 12%, var(--color-bg-card))";
    el.style.transform = "translateY(-2px)";
    el.style.boxShadow = "0 4px 14px color-mix(in srgb, var(--color-accent) 25%, transparent)";
  };
  const leave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    el.style.color = "var(--color-text-muted)";
    el.style.borderColor = "var(--color-border-subtle)";
    el.style.background = "var(--color-bg-card)";
    el.style.transform = "translateY(0)";
    el.style.boxShadow = "none";
  };
  return (
    <a
      href={href}
      id={id}
      aria-label={label}
      style={base}
      onMouseEnter={enter}
      onMouseLeave={leave}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-3">
      <span
        style={{
          marginTop: "1px",
          color: "var(--color-accent)",
          flexShrink: 0,
        }}
      >
        {icon}
      </span>
      <div>
        <p className="text-xs text-text-muted mb-0.5">{label}</p>
        <p className="text-sm text-text-secondary">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="hover:opacity-80 transition-opacity"
        style={{ display: "block" }}
      >
        {inner}
      </a>
    );
  }
  return inner;
}
