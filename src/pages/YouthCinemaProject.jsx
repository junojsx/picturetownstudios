import { Play } from "lucide-react";
import Navbar from "../components/Navbar";

/** Full-bleed cinematic still — swap for /ycp-hero.jpg in public when you have a local asset */
const HERO_BG =
  "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=2400&q=85";

const accent = "#FFB800";

export default function YouthCinemaProject() {
  return (
    <>
      <Navbar />
      <main className="bg-black text-white">
        {/* ── Hero (matches reference layout) ── */}
        <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={HERO_BG}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/65" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10 pt-28 pb-20 md:pb-28">
            <p
              className="font-ycp text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.35em] mb-6 md:mb-8"
              style={{ color: accent }}
            >
              Est. 2024 • The Academy Presents
            </p>

            <h1 className="font-ycp font-bold uppercase leading-[0.92] tracking-tight mb-8 md:mb-10">
              <span
                className="block text-white"
                style={{ fontSize: "clamp(2.75rem, 9vw, 7.5rem)" }}
              >
                The Youth
              </span>
              <span
                className="block italic"
                style={{
                  color: accent,
                  fontSize: "clamp(2.75rem, 9vw, 7.5rem)",
                }}
              >
                Cinema
              </span>
              <span
                className="block text-white"
                style={{ fontSize: "clamp(2.75rem, 9vw, 7.5rem)" }}
              >
                Project
              </span>
            </h1>

            <p className="font-ycp max-w-xl text-base md:text-lg text-white/90 font-medium leading-relaxed mb-10 md:mb-12">
              A cinematic documentary initiative empowering the next generation of
              visual storytellers through professional mentorship and high-end
              production access.
            </p>

            <div className="flex flex-wrap items-center gap-6 md:gap-10">
              <button
                type="button"
                className="font-ycp inline-flex items-center gap-3 rounded-full px-7 py-3.5 md:px-8 md:py-4 text-sm font-bold uppercase tracking-widest text-black transition hover:brightness-110"
                style={{ backgroundColor: accent }}
              >
                <Play size={18} className="fill-black text-black" />
                Watch Trailer
              </button>
              <p className="font-ycp text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-white/85">
                Run time: 2h 14m
              </p>
            </div>
          </div>
        </section>

        {/* ── Secondary band (from reference — condensed) ── */}
        <section className="relative overflow-hidden bg-[#121212] py-20 md:py-28">
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <h2 className="font-ycp font-bold uppercase leading-[0.95] tracking-tight">
                <span className="block text-4xl md:text-5xl text-white">
                  Redefining
                </span>
                <span
                  className="block text-4xl md:text-5xl italic"
                  style={{ color: accent }}
                >
                  Perspective
                </span>
              </h2>
              <div
                className="mt-6 h-1 w-16 rounded-full"
                style={{ backgroundColor: accent }}
              />
            </div>

            <div className="relative">
              <p
                className="pointer-events-none select-none absolute -right-4 top-1/2 -translate-y-1/2 font-ycp font-black uppercase leading-none text-[clamp(4rem,18vw,14rem)] text-white/[0.06]"
                aria-hidden
              >
                Truth
              </p>
              <div className="relative space-y-5 font-ycp text-sm md:text-base leading-relaxed text-white/75">
                <p className="text-white/90">
                  Behind every frame is a student learning to see differently—finding
                  truth in the craft of lens, light, and story.
                </p>
                <p className="text-white/55">
                  Youth Cinema Project connects classrooms with working sets,
                  directors, and the tools used on films audiences actually watch.
                </p>
              </div>
              <div className="relative mt-12 flex flex-wrap gap-12 md:gap-16">
                <div>
                  <p
                    className="font-ycp text-4xl md:text-5xl font-bold"
                    style={{ color: accent }}
                  >
                    48
                  </p>
                  <p className="font-ycp mt-1 text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                    Original Shorts
                  </p>
                </div>
                <div>
                  <p
                    className="font-ycp text-4xl md:text-5xl font-bold"
                    style={{ color: accent }}
                  >
                    12k
                  </p>
                  <p className="font-ycp mt-1 text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                    Global Stream Hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
