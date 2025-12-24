"use client";

import { useState } from "react";
import type { ContactInfo } from "@/types/content";

interface Props {
  contact: ContactInfo;
}

export default function ContactSection({ contact }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sport: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We will get back to you soon.");
    setFormData({ name: "", email: "", sport: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Get In <span className="text-lime-400">Touch</span>
          </h2>
          <p className="text-lg text-slate-600">
            {contact.availability ||
              "We're here to help you reach your athletic goals."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <ContactItem
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              }
              label="Email"
              value={contact.email}
              link={`mailto:${contact.email}`}
            />

            <ContactItem
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              }
              label="Phone"
              value={contact.phone}
              link={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}
            />

            {contact.address && (
              <ContactItem
                icon={
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                }
                label="Location"
                value={contact.address}
              />
            )}

            {/* Social Media */}
            {contact.socialMedia && (
              <div className="pt-6">
                <h3 className="text-sm font-semibold text-slate-700 mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {contact.socialMedia.instagram && (
                    <SocialLink
                      href={contact.socialMedia.instagram}
                      label="Instagram"
                    />
                  )}
                  {contact.socialMedia.facebook && (
                    <SocialLink
                      href={contact.socialMedia.facebook}
                      label="Facebook"
                    />
                  )}
                  {contact.socialMedia.twitter && (
                    <SocialLink
                      href={contact.socialMedia.twitter}
                      label="Twitter"
                    />
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="sport"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Sport / Activity
              </label>
              <input
                type="text"
                id="sport"
                name="sport"
                value={formData.sport}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 outline-none transition-colors"
                placeholder="e.g., Basketball, Football"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 outline-none transition-colors resize-none"
                placeholder="Tell us about your goals..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-lime-400 text-black text-base font-bold rounded-full hover:bg-lime-500 transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function ContactItem({
  icon,
  label,
  value,
  link,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="shrink-0 w-12 h-12 rounded-lg bg-lime-400/10 flex items-center justify-center text-lime-400">
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold text-slate-500 mb-1">{label}</div>
        <div className="text-base font-medium text-slate-900">{value}</div>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} className="block hover:opacity-70 transition-opacity">
        {content}
      </a>
    );
  }

  return content;
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-slate-900 hover:bg-lime-400 flex items-center justify-center text-white hover:text-black transition-colors"
      aria-label={label}
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    </a>
  );
}
