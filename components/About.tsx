"use client";

import { personal, languages } from "../lib/data";
import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about" label="About" className="section-bg-alt">
      <div className="section-header">
        <span className="section-label">About</span>
        <h2 className="section-title">Who I Am</h2>
      </div>

      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
        {/* Bio text */}
        <div className="lg:col-span-3 space-y-5">
          {personal.bio.map((paragraph, i) => (
            <p key={i} className="text-text-secondary leading-relaxed text-base">
              {paragraph}
            </p>
          ))}

          <div className="pt-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
              id="about-github-link"
            >
              View GitHub Profile
            </a>
          </div>
        </div>

        {/* Details panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Languages */}
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
              Languages
            </h3>
            <ul className="space-y-3" role="list">
              {languages.map((lang) => (
                <li key={lang.name} className="flex items-center justify-between">
                  <span className="text-text-primary font-medium text-sm">{lang.name}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium border border-accent/20">
                    {lang.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick facts */}
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
              Quick Facts
            </h3>
            <ul className="space-y-3" role="list">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-0.5" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <span className="text-sm text-text-secondary">Istanbul, Turkey</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-0.5" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
                  </svg>
                </span>
                <span className="text-sm text-text-secondary">4+ years professional experience</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-0.5" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.02 2 2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </span>
                <span className="text-sm text-text-secondary">{personal.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-0.5" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <span className="text-sm text-text-secondary break-all">{personal.email}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
