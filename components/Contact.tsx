"use client";

import { useState, JSX, ChangeEvent, FormEvent } from "react";
import { personal } from "../lib/data";
import SectionWrapper from "./SectionWrapper";

type Status = "idle" | "success";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactItem {
  id: string;
  label: string;
  value: string;
  href: string;
  external?: boolean;
  icon: JSX.Element;
}

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const body = `Hi Alireza,\n\n${message}\n\n---\nFrom: ${name}\nEmail: ${email}`;
    const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(subject || "Portfolio Contact")}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setStatus("success");
  };

  const contactItems: ContactItem[] = [
    {
      id: "contact-email",
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
    },
    {
      id: "contact-phone",
      label: "Phone",
      value: personal.phone,
      href: `tel:${personal.phone.replace(/\s/g, "")}`,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.02 2 2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
        </svg>
      ),
    },
    {
      id: "contact-github",
      label: "GitHub",
      value: "github.com/ALirezaSadeqii",
      href: personal.github,
      external: true,
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
  ];

  return (
    <SectionWrapper id="contact" label="Contact" className="">
      <div className="section-header">
        <span className="section-label">Contact</span>
        <h2 className="section-title">Let&apos;s Build Something Useful</h2>
        <p className="section-subtitle">
          Have a project in mind or want to discuss a role? Get in touch.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
        {/* Contact info */}
        <div className="lg:col-span-2 space-y-4">
          {contactItems.map((item) => (
            <a
              key={item.id}
              id={item.id}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="card p-4 flex items-center gap-4 group hover:border-accent/40 transition-all"
            >
              <span className="text-accent flex-shrink-0">{item.icon}</span>
              <div className="min-w-0">
                <p className="text-xs text-text-muted mb-0.5">{item.label}</p>
                <p className="text-sm text-text-primary font-medium truncate group-hover:text-accent transition-colors">
                  {item.value}
                </p>
              </div>
            </a>
          ))}

          <div className="card p-5 mt-6">
            <p className="text-sm text-text-secondary leading-relaxed">
              I typically respond to messages within 1–2 business days. For urgent inquiries, email is the fastest way to reach me.
            </p>
          </div>
        </div>

        {/* Contact form */}
        <div className="lg:col-span-3">
          <div className="card p-6 md:p-8">
            <p className="text-xs text-text-muted mb-5 pb-4 border-b border-border-subtle">
              This form opens your email client pre-filled with your message. You can also email me directly at{" "}
              <a href={`mailto:${personal.email}`} className="text-accent hover:underline">
                {personal.email}
              </a>
            </p>

            {status === "success" ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p className="text-text-primary font-medium mb-2">Email client opened</p>
                <p className="text-text-muted text-sm">Send the email from your client to complete the message.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-secondary mt-4 text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="form-input"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="form-input"
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="form-input"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or inquiry..."
                    className="form-input resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full"
                  id="contact-submit"
                >
                  Open Email Client
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
