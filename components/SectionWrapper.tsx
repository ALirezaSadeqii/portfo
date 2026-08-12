"use client";

import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  label: string;
  className?: string;
  children: ReactNode;
}

export default function SectionWrapper({ id, label, className = "", children }: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-label={label}
      className={`section-padding ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
}
