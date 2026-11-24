"use client";

import { experience } from "../lib/data";
import SectionWrapper from "./SectionWrapper";

export default function Experience() {
  return (
    <SectionWrapper id="experience" label="Experience" className="section-bg-alt">
      <div className="section-header">
        <span className="section-label">Experience</span>
        <h2 className="section-title">Professional Background</h2>
      </div>

      <div className="relative">
        {experience.map((job, index) => (
          <article key={index} className="experience-item" aria-label={`${job.position} at ${job.company}`}>
            {/* Timeline line */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-border-subtle ml-5" aria-hidden="true" />

            {/* Timeline dot */}
            <div className="hidden md:flex absolute left-0 top-6 ml-[13px] w-5 h-5 rounded-full border-2 border-accent bg-bg-primary items-center justify-center" aria-hidden="true">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            </div>

            <div className="md:ml-16">
              <div className="card p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-1">{job.position}</h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-accent font-medium text-sm">{job.company}</span>
                      <span className="text-border-subtle" aria-hidden="true">·</span>
                      <span className="text-text-muted text-sm">{job.location}</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border-subtle bg-bg-secondary text-xs text-text-muted font-medium">
                      {job.current && (
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" aria-hidden="true" />
                      )}
                      {job.startDate} – {job.current ? "Present" : job.endDate}
                    </span>
                  </div>
                </div>

                {/* Context note */}
                {/* <p className="text-sm text-text-muted mb-5 leading-relaxed border-l-2 border-accent/40 pl-4">
                  Working across ERP modules covering Sales, Purchasing, HR, Finance, Accounting, and Orientation — serving real clients in production environments.
                </p> */}

                {/* Highlights */}
                <ul className="space-y-3" role="list">
                  {job.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-accent mt-1 flex-shrink-0" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span className="text-text-secondary text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* References */}
                {job.references && job.references.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-border-subtle">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-accent" aria-hidden="true">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-widest text-text-muted">References</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {job.references.map((ref, i) => {
                        const initials = ref.name
                          .split(" ")
                          .slice(0, 2)
                          .map((n: string) => n[0])
                          .join("");
                        return (
                          <div
                            key={i}
                            className="group flex items-center gap-4 p-4 rounded-xl border border-border-subtle bg-bg-secondary hover:border-accent/30 transition-colors duration-200"
                          >
                            {/* Avatar */}
                            <div
                              className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-accent border border-accent/25 bg-bg-primary select-none"
                              aria-hidden="true"
                            >
                              {initials}
                            </div>

                            {/* Info */}
                            <div className="min-w-0">
                              <p className="text-text-primary text-sm font-semibold leading-tight truncate">
                                {ref.name}
                              </p>
                              <p className="text-text-muted text-xs font-medium mt-0.5 mb-1.5">
                                {ref.title}
                              </p>
                              <a
                                href={`tel:${ref.phone.replace(/\s/g, "")}`}
                                className="inline-flex items-center gap-1.5 text-xs text-accent/80 hover:text-accent transition-colors duration-150"
                              >
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.57 3.41 2 2 0 0 1 3.55 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.74a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16l.19.92z" />
                                </svg>
                                {ref.phone}
                              </a>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
