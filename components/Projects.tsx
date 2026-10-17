"use client";

import { useState, useEffect } from "react";
import { projects, Project } from "../lib/data";
import SectionWrapper from "./SectionWrapper";

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

// Category badge styles
const categoryStyle: Record<string, string> = {
  "Full-Stack": "text-blue-400 border-blue-400/30 bg-blue-400/10",
  "Business Software": "text-amber-400 border-amber-400/30 bg-amber-400/10",
  "Real Product": "text-purple-400 border-purple-400/30 bg-purple-400/10",
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close on Escape & prevent body scrolling when modal is active
  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      } else if (e.key === "ArrowLeft") {
        navigateModal(-1);
      } else if (e.key === "ArrowRight") {
        navigateModal(1);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const navigateModal = (direction: number) => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + direction + projects.length) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  return (
    <SectionWrapper id="projects" label="Projects" className="">
      <div className="section-header">
        <span className="section-label">Projects</span>
        <h2 className="section-title">Selected Work</h2>
        <p className="section-subtitle">
          Personal and professional projects built with modern web technologies. Click any project to view complete architecture, key features, and source details.
        </p>
      </div>

      {/* Shorter, streamlined project card grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => {
          const displayAbstract = project.abstract || project.description;
          const previewTech = project.techStack.slice(0, 3);
          const remainingTechCount = project.techStack.length - previewTech.length;

          return (
            <article
              key={project.id}
              tabIndex={0}
              role="button"
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              className="project-card card overflow-hidden flex flex-col text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-all duration-300"
              aria-label={`View details for ${project.name}`}
            >
              {/* Preview Banner */}
              <div className="relative w-full h-44 bg-bg-secondary border-b border-border-subtle overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <AbstractGraphic index={index} />
                )}

                {/* Overlaid Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border backdrop-blur-md shadow-sm ${categoryStyle[project.category] ?? "text-text-muted border-border-subtle bg-bg-secondary/90"
                      }`}
                  >
                    {project.category}
                  </span>

                  {project.live && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium border border-green-500/40 text-green-300 bg-green-950/80 backdrop-blur-md shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                      Live
                    </span>
                  )}
                </div>

                {/* Index Watermark */}
                <div className="absolute bottom-1 right-2 text-4xl font-black text-white/5 select-none pointer-events-none leading-none">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Shorter Card Content */}
              <div className="flex flex-col flex-1 p-5">
                {/* Title & Tagline */}
                <div className="mb-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <span className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                      <ArrowUpRightIcon />
                    </span>
                  </div>
                  <p className="text-xs text-accent font-medium mt-0.5">
                    {project.tagline}
                  </p>
                </div>

                {/* Project Abstract */}
                <p className="text-text-secondary text-xs leading-relaxed line-clamp-3 mb-4 flex-1">
                  {displayAbstract}
                </p>

                {/* Compact Tech Badges */}
                <div className="flex flex-wrap items-center gap-1.5 mb-4">
                  {previewTech.map((tech) => (
                    <span
                      key={tech}
                      className="tech-badge text-[11px] py-0.5 px-2"
                    >
                      {tech}
                    </span>
                  ))}
                  {remainingTechCount > 0 && (
                    <span className="text-[11px] font-medium text-text-muted px-1.5 py-0.5 rounded bg-bg-secondary border border-border-subtle">
                      +{remainingTechCount} more
                    </span>
                  )}
                </div>

                {/* Card Action Footer */}
                <div className="pt-3 border-t border-border-subtle flex items-center justify-between text-xs text-text-muted font-medium mt-auto">
                  <span className="inline-flex items-center gap-1 group-hover:text-accent transition-colors font-semibold">
                    View Details
                  </span>
                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 text-text-muted hover:text-text-primary transition-colors"
                        aria-label={`${project.name} GitHub Repository`}
                        title="GitHub Repo"
                      >
                        <GitHubIcon />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 text-text-muted hover:text-accent transition-colors"
                        aria-label={`${project.name} Live Demo`}
                        title="Live Demo"
                      >
                        <ExternalLinkIcon />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* ── Project Details Modal ── */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/75 backdrop-blur-md modal-backdrop-animate overflow-y-auto"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div
            className="relative w-full max-w-2xl bg-bg-card border border-border-subtle rounded-2xl shadow-2xl overflow-hidden my-auto modal-content-animate flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header / Banner */}
            <div className="relative w-full h-48 sm:h-56 bg-bg-secondary border-b border-border-subtle flex-shrink-0">
              {selectedProject.image ? (
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.name} screenshot`}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-bg-secondary to-bg-primary">
                  <AbstractGraphic index={projects.findIndex((p) => p.id === selectedProject.id)} />
                </div>
              )}

              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-black/30 to-black/60 pointer-events-none" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center border border-white/20 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="Close project details"
              >
                <CloseIcon />
              </button>

              {/* Badges on banner */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium border backdrop-blur-md shadow ${categoryStyle[selectedProject.category] ?? "text-text-muted border-border-subtle bg-bg-secondary/90"
                    }`}
                >
                  {selectedProject.category}
                </span>
                {selectedProject.live && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-medium border border-green-500/40 text-green-300 bg-green-950/80 backdrop-blur-md shadow">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                    Live
                  </span>
                )}
              </div>

              {/* Title & Tagline in banner */}
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <h3 id="modal-project-title" className="text-2xl font-bold tracking-tight text-white drop-shadow-sm">
                  {selectedProject.name}
                </h3>
                <p className="text-xs sm:text-sm text-accent font-medium mt-0.5 drop-shadow-sm">
                  {selectedProject.tagline}
                </p>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
              {/* Abstract Callout */}
              {selectedProject.abstract && (
                <div className="p-3.5 sm:p-4 rounded-xl bg-accent/10 border border-accent/25 text-xs sm:text-sm text-text-primary leading-relaxed font-medium">
                  <span className="text-accent font-semibold block text-[11px] uppercase tracking-wider mb-1">
                    Abstract
                  </span>
                  {selectedProject.abstract}
                </div>
              )}

              {/* Full Description */}
              <div>
                <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                  Project Overview
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Key Features */}
              {selectedProject.features && selectedProject.features.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                    Key Features & Architecture
                  </h4>
                  <ul className="space-y-2" role="list">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-accent mt-0.5 flex-shrink-0" aria-hidden="true">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Full Tech Stack */}
              <div>
                <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2.5">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech} className="tech-badge text-xs" role="listitem">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer with Links and Navigation */}
            <div className="p-4 sm:p-5 bg-bg-secondary/70 border-t border-border-subtle flex flex-wrap items-center justify-between gap-3 mt-auto">
              {/* Prev / Next browsing */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => navigateModal(-1)}
                  className="p-1.5 rounded-lg border border-border-subtle hover:bg-bg-secondary text-text-muted hover:text-text-primary transition-colors text-xs flex items-center gap-1"
                  title="Previous project (←)"
                >
                  <ChevronLeftIcon />
                  <span className="hidden sm:inline">Prev</span>
                </button>
                <button
                  type="button"
                  onClick={() => navigateModal(1)}
                  className="p-1.5 rounded-lg border border-border-subtle hover:bg-bg-secondary text-text-muted hover:text-text-primary transition-colors text-xs flex items-center gap-1"
                  title="Next project (→)"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRightIcon />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs px-3 py-1.5 gap-1.5"
                  >
                    <GitHubIcon />
                    {selectedProject.githubBackend ? "Frontend Repo" : "GitHub Repo"}
                  </a>
                )}
                {selectedProject.githubBackend && (
                  <a
                    href={selectedProject.githubBackend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs px-3 py-1.5 gap-1.5"
                  >
                    <GitHubIcon />
                    Backend Repo
                  </a>
                )}
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs px-3 py-1.5 gap-1.5"
                  >
                    <ExternalLinkIcon />
                    Live Demo
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="btn-secondary text-xs px-3 py-1.5"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}

/* ─────────────────────────────────────────────
   Abstract Fallback Graphic for cards without images
───────────────────────────────────────────── */
function AbstractGraphic({ index }: { index: number }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <div className="text-7xl font-black text-text-muted/10 select-none absolute">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="relative z-10 w-full max-w-[180px] p-3 rounded-lg border border-border-subtle bg-bg-primary/50 text-[10px]">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-accent/30 flex-shrink-0" />
            <div className="h-1.5 rounded bg-text-muted/30 flex-1" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-text-muted/20 flex-shrink-0" />
            <div className="h-1.5 rounded bg-text-muted/20 flex-1" />
          </div>
          <div className="grid grid-cols-3 gap-1 pt-1">
            <div className="h-4 rounded bg-accent/20 border border-accent/20" />
            <div className="h-4 rounded bg-text-muted/10 border border-border-subtle" />
            <div className="h-4 rounded bg-text-muted/10 border border-border-subtle" />
          </div>
        </div>
      </div>
    </div>
  );
}
