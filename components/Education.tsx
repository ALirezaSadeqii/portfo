"use client";

import { education, certifications } from "../lib/data";
import SectionWrapper from "./SectionWrapper";

export default function Education() {
  return (
    <SectionWrapper id="education" label="Education" className="section-bg-alt">
      <div className="section-header">
        <span className="section-label">Education</span>
        <h2 className="section-title">Academic Background</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-14">
        {education.map((edu, i) => (
          <article key={i} className="card p-6" aria-label={edu.degree}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-text-primary mb-1">{edu.degree}</h3>
                <p className="text-sm text-accent font-medium mb-1">{edu.institution}</p>
                <p className="text-xs text-text-muted">{edu.years}</p>
                {edu.gpa && (
                  <p className="text-xs text-text-muted mt-1.5">
                    GPA: <span className="text-text-secondary font-medium">{edu.gpa}</span>
                  </p>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Certifications */}
      <div>
        <div className="section-header mb-8" style={{ marginTop: 0 }}>
          <span className="section-label">Certifications</span>
          <h2 className="section-title">Credentials</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {certifications.map((cert, i) => (
            <article key={i} className="card p-5 flex items-start gap-4" aria-label={cert.title}>
              <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <circle cx="12" cy="8" r="6"/>
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text-primary leading-snug">{cert.title}</h3>
                {cert.issuer && (
                  <p className="text-xs text-text-muted mt-1">{cert.issuer}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
