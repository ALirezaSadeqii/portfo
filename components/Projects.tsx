"use client";

import { projects, Project } from "../lib/data";
import SectionWrapper from "./SectionWrapper";

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
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

// Category badge colors
const categoryStyle: Record<string, string> = {
  "Full-Stack": "text-blue-400 border-blue-400/30 bg-blue-400/10",
  "Business Software": "text-amber-400 border-amber-400/30 bg-amber-400/10",
  "Real Product": "text-purple-400 border-purple-400/30 bg-purple-400/10",
};

export default function Projects() {
  return (
    <SectionWrapper id="projects" label="Projects" className="">
      <div className="section-header">
        <span className="section-label">Projects</span>
        <h2 className="section-title">Selected Work</h2>
        <p className="section-subtitle">
          Personal and professional projects built with modern web technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="project-card card overflow-hidden flex flex-col"
            aria-label={project.name}
          >
            {/* ── Screenshot / preview banner ── */}
            <ProjectPreview project={project} index={index} />

            {/* ── Card content ── */}
            <div className="flex flex-col flex-1 p-6 md:p-7">
              {/* Badges + title */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${
                      categoryStyle[project.category] ?? "text-text-muted border-border-subtle bg-bg-secondary"
                    }`}
                  >
                    {project.category}
                  </span>
                  {project.live && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium border border-green-500/30 text-green-400 bg-green-500/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
                      Live
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-text-primary">{project.name}</h3>
                <p className="text-sm text-accent font-medium mt-0.5">{project.tagline}</p>
              </div>

              {/* Description */}
              <p className="text-text-secondary text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Key features */}
              <div className="mb-5">
                <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                  Key Features
                </h4>
                <ul className="space-y-1.5" role="list">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent mt-0.5 flex-shrink-0" aria-hidden="true">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </span>
                      <span className="text-text-secondary text-xs leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-badge" role="listitem">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Links — pushed to bottom */}
              <div className="flex flex-wrap gap-3 mt-auto pt-2 border-t border-border-subtle">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs px-3 py-1.5 gap-1.5"
                    id={`project-${project.id}-github`}
                  >
                    <GitHubIcon />
                    {project.githubBackend ? "Frontend Repo" : "GitHub Repo"}
                  </a>
                )}
                {project.githubBackend && (
                  <a
                    href={project.githubBackend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs px-3 py-1.5 gap-1.5"
                    id={`project-${project.id}-backend-github`}
                  >
                    <GitHubIcon />
                    Backend Repo
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs px-3 py-1.5 gap-1.5"
                    id={`project-${project.id}-live`}
                  >
                    <ExternalLinkIcon />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}

/* ─────────────────────────────────────────────
   Project preview: screenshot with browser chrome,
   or abstract fallback for cards without an image
───────────────────────────────────────────── */
interface ProjectPreviewProps {
  project: Project;
  index: number;
}

function ProjectPreview({ project, index }: ProjectPreviewProps) {
  if (project.image) {
    return (
      <div className="relative w-full bg-bg-secondary border-b border-border-subtle overflow-hidden" style={{ height: "220px" }}>
        {/* Subtle browser chrome bar */}
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-1.5 px-4 py-2.5 bg-bg-primary/80 backdrop-blur-sm border-b border-border-subtle/50">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          <div className="flex-1 mx-3">
            <div className="mx-auto max-w-[180px] h-4 rounded bg-bg-secondary/80 border border-border-subtle/40 flex items-center px-2">
              <span className="text-[9px] text-text-muted/60 truncate font-mono">{project.name.toLowerCase()}.app</span>
            </div>
          </div>
        </div>

        {/* Screenshot fills the panel */}
        <img
          src={project.image}
          alt={`${project.name} interface`}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
        />

        {/* Project index watermark */}
        <div className="absolute bottom-2 right-3 text-5xl font-black text-white/5 select-none leading-none">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>
    );
  }

  // Abstract fallback for projects without screenshot
  return (
    <div className="relative w-full bg-bg-secondary border-b border-border-subtle overflow-hidden flex items-center justify-center" style={{ height: "160px" }}>
      <div className="project-number text-8xl font-black text-text-muted/8 select-none absolute">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="relative z-10 w-full max-w-[200px] mx-auto p-4">
        <div className="rounded-lg border border-border-subtle bg-bg-primary/50 p-4 text-xs">
          <div className="space-y-2.5">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-accent/30 flex-shrink-0" />
              <div className="h-2 rounded bg-text-muted/30 flex-1" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-text-muted/20 flex-shrink-0" />
              <div className="h-2 rounded bg-text-muted/20 flex-1" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-text-muted/15 flex-shrink-0" />
              <div className="h-2 rounded bg-text-muted/15 w-4/5" />
            </div>
            <div className="mt-1 h-px bg-border-subtle" />
            <div className="grid grid-cols-3 gap-1.5">
              <div className="h-6 rounded bg-accent/15 border border-accent/20" />
              <div className="h-6 rounded bg-text-muted/10 border border-border-subtle" />
              <div className="h-6 rounded bg-text-muted/8 border border-border-subtle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
