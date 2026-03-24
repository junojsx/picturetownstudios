import { useState, useEffect, useCallback } from "react";
import {
  X,
  Play,
  Pause,
  Volume2,
  Maximize,
  ChevronLeft,
  Clock,
  Camera,
  Award,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Through the Redwoods",
    category: "Short Film",
    year: "2023",
    duration: "13 min, 23 sec",
    description:
      "A short film about three brothers bound not by blood but by bond, yearning to better their circumstances as they make their way to freedom through the redwoods.",
    awards: ["Sundance Selection 2024", "Best Documentary — LAIFF"],
    specs: {
      Camera: "ARRI Alexa Mini LF",
      Codec: "ProRes4444 / 12-bit",
      Resolution: "4.5K Open Gate",
      Lenses: "Zeiss Master Anamorphics",
    },
    thumb: "https://img.youtube.com/vi/Btu_NKOsOXg/maxresdefault.jpg",
    full: "https://www.youtube.com/watch?v=Btu_NKOsOXg",
  },
  {
    id: 2,
    title: "An A Peel for Justice",
    category: "Comedy Short",
    year: "2023",
    duration: "90 sec",
    description: "A short comedy shot during the Covid-19 pandemic of 2020",
    awards: ["Cannes Lions Finalist", "One Show Gold"],
    specs: {
      Camera: "RED Monstro 8K VV",
      Codec: "REDCode RAW / 8K",
      Resolution: "8192 × 4320",
      Lenses: "Leica Summilux-C",
    },
    thumb: "https://img.youtube.com/vi/wAHpnJJIIzA/maxresdefault.jpg",
    full: "https://www.youtube.com/watch?v=wAHpnJJIIzA",
  },
  {
    id: 3,
    title: "Fractured",
    category: "Short Film Trailer",
    year: "2025",
    duration: "1 min 20 sec",
    description:
      "A short horror film about a man wracked by guilt and trauma, finally being made to pay his debts.",
    awards: ["BAFTA Nominated", "TIFF Official Selection"],
    specs: {
      Camera: "ARRI Alexa 35",
      Codec: "ARRIRAW / 4.6K",
      Resolution: "4608 × 3164",
      Lenses: "Cooke S7/i Full Frame Plus",
    },
    thumb: "https://img.youtube.com/vi/pYdoLSy08i0/maxresdefault.jpg",
    full: "https://www.youtube.com/watch?v=pYdoLSy08i0",
  },
  {
    id: 4,
    title: "The Things We Lost",
    category: "Short Documentary",
    year: "2022",
    duration: "19:03 min",
    description:
      "A short documentary on the experiences of individuals all over the globe regarding the COVID-19 pandemic of 2020, and the things they lost during that time.",
    awards: ["MTV VMA Nominee", "D&AD Pencil Winner"],
    specs: {
      Camera: "Phantom Flex4K",
      Codec: "Cine RAW / 4K",
      Resolution: "4096 × 2304",
      Lenses: "Sigma Cine High Speed",
    },
    thumb: "https://img.youtube.com/vi/57d6SjU4HvM/maxresdefault.jpg",
    full: "https://www.youtube.com/watch?v=57d6SjU4HvM&t=1s",
  },
  {
    id: 5,
    title: "Steak Mania",
    category: "Feature Documentary",
    year: "2022",
    duration: "87 min",
    description:
      "A decade-spanning portrait of three street artists battling gentrification in Los Angeles. Winner of four major documentary awards, now streaming worldwide.",
    awards: ["Tribeca Grand Jury Prize", "Independent Spirit Award"],
    specs: {
      Camera: "Sony VENICE 2",
      Codec: "X-OCN / 6K",
      Resolution: "6048 × 4032",
      Lenses: "Vintage Canon FD Primes",
    },
    thumb: "https://img.youtube.com/vi/zMfEPc3n1wg/maxresdefault.jpg",
    full: "https://www.youtube.com/watch?v=zMfEPc3n1wg",
  },
  {
    id: 6,
    title: "Golden Hour Protocol",
    category: "Brand Film",
    year: "2021",
    duration: "3:20 min",
    description:
      "A sun-drenched brand narrative for a global watch company. Shot entirely during the golden hour across seven locations, celebrating the poetry of fleeting time.",
    awards: ["Webby Award Winner", "D&AD Shortlist"],
    specs: {
      Camera: "ARRI Alexa LF",
      Codec: "ARRIRAW / 4K",
      Resolution: "4448 × 3096",
      Lenses: "ARRI Master Primes",
    },
    thumb: "https://picsum.photos/seed/golden-hour-pt/800/450",
    full: "https://picsum.photos/seed/golden-hour-pt/1400/787",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function getYouTubeId(url) {
  const match = url?.match(/[?&]v=([^&]+)/);
  return match ? match[1] : null;
}

// ─── Card ─────────────────────────────────────────────────────────────────────
function ProjectCard({ project, onClick }) {
  return (
    <button
      onClick={() => onClick(project)}
      className="group relative aspect-video overflow-hidden bg-brand-card text-left w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber"
    >
      <img
        src={project.thumb}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        loading="lazy"
      />
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-brand-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
        <div className="w-[72px] h-[72px] rounded-full border-2 border-brand-amber flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-300">
          <Play size={22} className="text-brand-amber fill-brand-amber ml-1" />
        </div>
      </div>
      {/* Category chip */}
      <div className="absolute top-3 left-3">
        <span className="font-body text-[9px] tracking-[0.22em] uppercase bg-brand-blue/75 backdrop-blur-sm text-white px-2.5 py-1">
          {project.category}
        </span>
      </div>
      {/* Year */}
      <div className="absolute top-3 right-3">
        <span className="font-body text-[10px] text-white/50">
          {project.year}
        </span>
      </div>
      {/* Title + duration */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="font-display text-white text-2xl leading-none translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
          {project.title}
        </h3>
        <p className="font-body text-brand-silver/55 text-[10px] mt-1 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
          <Clock size={9} />
          {project.duration}
        </p>
      </div>
    </button>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }) {
  const [playing, setPlaying] = useState(false);
  const ytId = getYouTubeId(project.full);
  const posterSrc = ytId
    ? `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`
    : project.full;

  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-brand-black flex flex-col"
      style={{ animation: "modalIn 0.3s ease both" }}
    >
      {/* ── Modal top-bar ── */}
      <div className="flex-shrink-0 border-b border-white/[0.07] px-5 md:px-8 h-13 flex items-center justify-between h-[52px]">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 bg-brand-amber flex items-center justify-center">
            <span className="font-display text-brand-black text-sm leading-none select-none">
              PT
            </span>
          </div>
          <span className="font-display text-white tracking-[0.18em] text-xs hidden sm:block">
            PICTURETOWN
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 font-body text-[10px] tracking-[0.25em] uppercase text-brand-silver/55 hover:text-white transition-colors"
          >
            <ChevronLeft size={13} />
            Back to Projects
          </button>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 flex items-center justify-center text-brand-silver/50 hover:text-white hover:bg-white/10 transition-all"
          >
            <X size={15} />
          </button>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Video player */}
        <div className="md:flex-1 flex flex-col bg-black min-h-[220px]">
          {playing && ytId ? (
            /* ── YouTube embed ── */
            <iframe
              className="flex-1 w-full border-0"
              src={`https://www.youtube.com/embed/${ytId}?autoplay=1`}
              allow="autoplay; fullscreen"
              allowFullScreen
              title={project.title}
            />
          ) : (
            <>
              {/* Poster / playhead area */}
              <div className="relative flex-1">
                <img
                  src={posterSrc}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setPlaying(true)}
                    className="w-[76px] h-[76px] rounded-full border-2 border-brand-amber flex items-center justify-center hover:bg-brand-amber/15 transition-all duration-300 group backdrop-blur-sm"
                  >
                    <Play
                      size={26}
                      className="text-brand-amber fill-brand-amber ml-1"
                    />
                  </button>
                </div>
                {/* Category badge overlay */}
                <div className="absolute top-4 left-4">
                  <span className="font-body text-[9px] tracking-[0.25em] uppercase bg-brand-blue/70 backdrop-blur-sm text-white px-3 py-1.5">
                    {project.category} &middot; {project.year}
                  </span>
                </div>
              </div>

              {/* Controls bar */}
              <div className="bg-[#080a0c] px-4 py-3 flex items-center gap-3">
                <button
                  onClick={() => setPlaying(true)}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <Play size={14} />
                </button>
                {/* Timeline scrubber */}
                <div className="flex-1 group/bar relative h-1 bg-white/15 rounded-full cursor-pointer">
                  <div className="h-full w-[30%] bg-brand-amber rounded-full" />
                  <div className="absolute top-1/2 left-[30%] -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-amber border-2 border-brand-black opacity-0 group-hover/bar:opacity-100 transition-opacity" />
                </div>
                <span className="font-body text-[10px] text-white/65 tabular-nums whitespace-nowrap">
                  {project.duration}
                </span>
                <Volume2
                  size={13}
                  className="text-white/40 cursor-pointer hover:text-white/70 transition-colors"
                />
                <Maximize
                  size={13}
                  className="text-white/40 cursor-pointer hover:text-white/70 transition-colors"
                />
              </div>
            </>
          )}
        </div>

        {/* Details panel */}
        <div className="md:w-[360px] lg:w-[400px] xl:w-[440px] flex-shrink-0 overflow-y-auto border-l border-white/[0.06]">
          <div className="p-6 md:p-8 space-y-6">
            {/* Category + year */}
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-brand-amber">
              {project.category} · {project.year}
            </p>

            {/* Title */}
            <div>
              <h2
                className="font-display text-white leading-none"
                style={{ fontSize: "clamp(36px,4vw,52px)" }}
              >
                {project.title}
              </h2>
              <p className="font-body text-brand-silver/60 text-xs mt-2">
                Directed &amp; Produced by Jeff Aquino &middot; {project.year}{" "}
                &middot; {project.category}
              </p>
            </div>

            <div className="h-px bg-white/[0.07]" />

            {/* Overview */}
            <div>
              <h4 className="font-body text-[9px] tracking-[0.35em] uppercase text-brand-silver/55 mb-2.5">
                Project Overview
              </h4>
              <p className="font-body text-brand-silver/75 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Technical Specs */}
            <div>
              <h4 className="font-body text-[9px] tracking-[0.35em] uppercase text-brand-silver/55 mb-3 flex items-center gap-1.5">
                <Camera size={9} />
                Technical Specs
              </h4>
              <div className="space-y-2.5">
                {Object.entries(project.specs).map(([key, val]) => (
                  <div
                    key={key}
                    className="flex items-center justify-between gap-4"
                  >
                    <span className="font-body text-brand-silver/60 text-xs">
                      {key}
                    </span>
                    <span className="font-body text-brand-silver/80 text-xs text-right">
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            {project.awards.length > 0 && (
              <div>
                <h4 className="font-body text-[9px] tracking-[0.35em] uppercase text-brand-silver/55 mb-3 flex items-center gap-1.5">
                  <Award size={9} />
                  Awards &amp; Recognition
                </h4>
                <ul className="space-y-2">
                  {project.awards.map((award) => (
                    <li key={award} className="flex items-start gap-2.5">
                      <div className="w-1 h-1 rounded-full bg-brand-amber mt-[5px] flex-shrink-0" />
                      <span className="font-body text-brand-silver/65 text-xs leading-snug">
                        {award}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────
export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-24 md:py-32 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="font-body text-[10px] tracking-[0.45em] uppercase text-brand-amber mb-2.5">
              Selected Works
            </p>
            <h2
              className="font-display text-white leading-none"
              style={{ fontSize: "clamp(48px,8vw,96px)" }}
            >
              Projects
            </h2>
          </div>
          <p className="hidden md:block font-body text-brand-silver/60 text-sm max-w-[240px] text-right leading-relaxed">
            Narrative films, brand commercials, and documentary work spanning 12
            years.
          </p>
        </div>

        {/* Grid — 1→2→3 columns, 1px gap for exposed grid-line effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/[0.04]">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onClick={setSelected} />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
