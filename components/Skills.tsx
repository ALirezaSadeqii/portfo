"use client";

import { JSX } from "react";
import { skills } from "../lib/data";
import SectionWrapper from "./SectionWrapper";

const categoryIcons: Record<string, JSX.Element> = {
  Frontend: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Backend: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  Database: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  "Tools & Platforms": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  ),
};

export default function Skills() {
  return (
    <SectionWrapper id="skills" label="Skills" className="">
      <div className="section-header">
        <span className="section-label">Skills</span>
        <h2 className="section-title">Technologies I Work With</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((group) => (
          <div key={group.category} className="card p-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-accent">{categoryIcons[group.category]}</span>
              <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
                {group.category}
              </h3>
            </div>
            <ul className="flex flex-wrap gap-2" role="list" aria-label={`${group.category} technologies`}>
              {group.items.map((tech) => (
                <li key={tech}>
                  <span className="tech-badge">{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
