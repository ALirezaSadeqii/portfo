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
                <p className="text-sm text-text-muted mb-5 leading-relaxed border-l-2 border-accent/40 pl-4">
                  Working across ERP modules covering Sales, Purchasing, HR, Finance, Accounting, and Orientation — serving real clients in production environments.
                </p>

                {/* Highlights */}
                <ul className="space-y-3" role="list">
                  {job.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-accent mt-1 flex-shrink-0" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </span>
                      <span className="text-text-secondary text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
