import { useState } from "react";
import {
  Mail,
  MapPin,
  Instagram,
  Youtube,
  Linkedin,
  Send,
  ArrowRight,
} from "lucide-react";

const projectTypes = [
  "Brand Commercial",
  "Narrative Film",
  "Documentary",
  "Music Video",
  "Brand Film",
  "Other",
];

const budgetRanges = [
  "$10K – $25K",
  "$25K – $50K",
  "$50K – $100K",
  "$100K+",
  "Let's discuss",
];

const socials = [
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Youtube, label: "Vimeo", href: "#" },
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
];

const inputBase =
  "w-full bg-brand-black border border-white/10 text-brand-silver font-body text-sm px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors placeholder:text-brand-silver/55";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);

  const set = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSending(true);
    try {
      const body = new URLSearchParams({
        "form-name": "contact",
        ...form,
      }).toString();
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!res.ok) {
        setError("Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
      setForm({ name: "", email: "", projectType: "", budget: "", message: "" });
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="border-t border-white/[0.06] bg-[#0c0f13]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        {/* Header */}
        <div className="mb-14 md:mb-18">
          <p className="font-body text-[10px] tracking-[0.45em] uppercase text-brand-amber mb-3">
            Let's Create
          </p>
          <h2
            className="font-display text-white leading-none"
            style={{ fontSize: "clamp(48px,8vw,96px)" }}
          >
            Start a Project
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-12 lg:gap-20">
          {/* ── Form ── */}
          <div>
            {submitted ? (
              <div className="flex flex-col gap-5 py-8">
                <div className="w-14 h-14 border border-brand-amber/50 flex items-center justify-center">
                  <Send size={22} className="text-brand-amber" />
                </div>
                <h3 className="font-display text-white text-4xl">
                  Message Received
                </h3>
                <p className="font-body text-brand-silver/55 text-sm max-w-sm leading-relaxed">
                  Thank you for reaching out. I'll review your project details
                  and get back to you within 24 – 48 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setError(null);
                  }}
                  className="flex items-center gap-2 font-body text-[10px] tracking-widest uppercase text-brand-amber hover:text-white transition-colors mt-2"
                >
                  Send another message
                  <ArrowRight size={11} />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-300 font-body text-sm px-4 py-3">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-body text-[9px] tracking-widest uppercase text-brand-silver/60 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={set("name")}
                      placeholder="Your name"
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label className="block font-body text-[9px] tracking-widest uppercase text-brand-silver/60 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={set("email")}
                      placeholder="hello@email.com"
                      className={inputBase}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-body text-[9px] tracking-widest uppercase text-brand-silver/60 mb-2">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={set("projectType")}
                      className={`${inputBase} appearance-none`}
                    >
                      <option value="" disabled>
                        Select type
                      </option>
                      {projectTypes.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-body text-[9px] tracking-widest uppercase text-brand-silver/60 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={set("budget")}
                      className={`${inputBase} appearance-none`}
                    >
                      <option value="" disabled>
                        Select range
                      </option>
                      {budgetRanges.map((r) => (
                        <option key={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-body text-[9px] tracking-widest uppercase text-brand-silver/60 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={set("message")}
                    placeholder="Tell me about your project, timeline, and vision..."
                    className={`${inputBase} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="group flex items-center gap-3 bg-brand-amber hover:bg-amber-500 text-brand-black font-body font-semibold text-sm px-8 py-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_32px_rgba(245,158,11,0.28)] disabled:opacity-60 disabled:pointer-events-none disabled:hover:scale-100"
                >
                  {sending ? "Sending…" : "Send Message"}
                  <Send
                    size={13}
                    className={`group-hover:translate-x-0.5 transition-transform ${sending ? "animate-pulse" : ""}`}
                  />
                </button>
              </form>
            )}
          </div>

          {/* ── Contact info ── */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-display text-white text-3xl mb-6">
                Direct Contact
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:picturetownstudios@gmail.com"
                  className="flex items-center gap-3.5 group"
                >
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-brand-amber transition-colors duration-300">
                    <Mail
                      size={13}
                      className="text-brand-blue group-hover:text-brand-amber transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <p className="font-body text-[9px] tracking-widest uppercase text-brand-silver/55 mb-0.5">
                      Email
                    </p>
                    <p className="font-body text-brand-silver/80 text-sm group-hover:text-brand-amber transition-colors duration-300">
                      picturetownstudios@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center">
                    <MapPin size={13} className="text-brand-blue" />
                  </div>
                  <div>
                    <p className="font-body text-[9px] tracking-widest uppercase text-brand-silver/55 mb-0.5">
                      Based In
                    </p>
                    <p className="font-body text-brand-silver/80 text-sm">
                      Los Angeles, CA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h4 className="font-body text-[9px] tracking-widest uppercase text-brand-silver/55 mb-4">
                Find Me Online
              </h4>
              <div className="flex gap-3">
                {socials.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 border border-white/10 flex items-center justify-center text-brand-silver/45 hover:text-brand-amber hover:border-brand-amber transition-all duration-300"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="border border-white/[0.08] p-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-body text-[9px] tracking-widest uppercase text-brand-silver/60">
                  Available for Projects
                </span>
              </div>
              <p className="font-body text-brand-silver/60 text-xs leading-relaxed">
                Currently accepting new projects for Q2 2026. Short-turnaround
                inquiries welcome.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="border-t border-white/[0.05] px-6 md:px-10 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <img
              src="/picturetown-mark.png"
              alt="PictureTown Studios logo"
              className="w-6 h-6 rounded-full object-contain"
            />
            <span className="font-body text-brand-silver/55 text-xs">
              © 2026 PictureTown Studios. All rights reserved.
            </span>
          </div>
          <p className="font-body text-brand-silver/55 text-xs">
           Jeff Aquino — Director &amp; Writer — Los Angeles
          </p>
        </div>
      </div>
    </section>
  );
}
