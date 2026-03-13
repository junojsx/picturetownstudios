import { Play, ArrowRight } from "lucide-react";

const stats = [
  { value: "10+", label: "Films &\u00A0Commercials" },
  { value: "1", label: "Industry Awards" },
  { value: "2", label: "Countries Filmed" },
  { value: "5+", label: "Years Experience" },
];

// Viewfinder bracket positions: [position classes, border classes]
const brackets = [
  ["top-[72px] left-6 md:left-10", "border-t-2 border-l-2"],
  ["top-[72px] right-6 md:right-10", "border-t-2 border-r-2"],
  ["bottom-[88px] left-6 md:left-10", "border-b-2 border-l-2"],
  ["bottom-[88px] right-6 md:right-10", "border-b-2 border-r-2"],
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-brand-black">
        {/* Warm studio key-light from left */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_70%,rgba(245,158,11,0.07)_0%,transparent_65%)]" />
        {/* Cool fill from upper-right */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_70%_at_100%_10%,rgba(58,124,165,0.09)_0%,transparent_60%)]" />
        {/* Dark vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
        {/* Scanlines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.022,
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(255,255,255,0.35) 3px,rgba(255,255,255,0.35) 4px)",
          }}
        />
      </div>

      {/* ── Viewfinder corner brackets ── */}
      {brackets.map(([pos, border], i) => (
        <div
          key={i}
          className={`absolute ${pos} w-7 h-7 md:w-9 md:h-9 ${border} border-brand-amber/35 pointer-events-none`}
        />
      ))}

      {/* ── Film-strip sprocket holes (decorative, left edge) ── */}
      <div className="absolute left-0 top-0 bottom-0 w-5 flex flex-col items-center justify-evenly pointer-events-none opacity-20 hidden lg:flex">
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            className="w-2.5 h-4 border border-brand-silver/30 rounded-sm"
          />
        ))}
      </div>

      {/* ── Main content ── */}
      <div className="relative mx-auto z-10 flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-20">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <p
            className="font-body text-brand-silver/60 text-[11px] tracking-[0.55em] uppercase mb-5"
            style={{ animation: "fadeUp 0.8s ease 0.15s both" }}
          >
            Award-Winning Director
          </p>

          {/* Headline */}
          <h1 className="leading-[0.9] mb-6">
            <span
              className="font-display text-white block"
              style={{
                fontSize: "clamp(32px, 14vw, 120px)",
                animation: "fadeUp 0.8s ease 0.35s both",
              }}
            >
              Cinematic
            </span>
            <span
              className="font-display text-brand-amber block"
              style={{
                fontSize: "clamp(32px, 14vw, 120px)",
                animation: "fadeUp 0.8s ease 0.5s both",
                textShadow:
                  "0 0 40px rgba(245,158,11,0.4), 0 0 90px rgba(245,158,11,0.15)",
              }}
            >
              Storytelling
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="font-serif text-brand-silver/60 text-lg md:text-xl italic mb-10 max-w-md leading-relaxed"
            style={{ animation: "fadeUp 0.8s ease 0.65s both" }}
          >
            Creating high-impact visual experiences and narrative-driven films
            for global brands and independent studios.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap items-center gap-6 md:gap-10"
            style={{ animation: "fadeUp 0.8s ease 0.8s both" }}
          >
            <button className="group flex items-center gap-3 bg-brand-amber hover:bg-amber-500 text-brand-black font-body font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_32px_rgba(245,158,11,0.35)]">
              <Play size={14} className="fill-current" />
              Watch Reel
            </button>
            <a
              href="#projects"
              className="group flex items-center gap-2 font-body text-brand-silver/65 hover:text-white text-[11px] tracking-[0.25em] uppercase transition-colors duration-300"
            >
              View Works
              <ArrowRight
                size={13}
                className="-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
              />
            </a>
          </div>
        </div>
      </div>

      {/* ── Stats strip ── */}
      <div
        className="relative z-10 border-t border-white/[0.08] mt-8"
        style={{ animation: "fadeIn 1s ease 1.1s both" }}
      >
        <div className="flex divide-x divide-white/[0.08]">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex-1 py-5 md:py-7 flex flex-col items-center gap-1 hover:bg-white/[0.02] transition-colors duration-300"
            >
              <span className="font-display text-brand-amber text-2xl md:text-4xl leading-none">
                {stat.value}
              </span>
              <span className="font-body text-brand-silver/60 text-[9px] md:text-[10px] tracking-widest uppercase text-center leading-tight px-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll nudge ── */}
      <div className="absolute bottom-[88px] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none">
        <span className="font-body text-[9px] tracking-[0.4em] uppercase text-brand-silver/55">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-brand-silver/25 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
