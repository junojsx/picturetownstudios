import { useState } from "react";
import { Play, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "../components/Navbar";

const DESCRIPTION_LEAD =
  "Through my work with the Youth Cinema Project at the Latino Film Institute, I help bring filmmaking education to underserved schools across The State of California. I support the launch and growth of each program by coordinating closely with school staff, managing equipment setup and inventory, and ensuring classrooms are fully equipped for production. From the first day of instruction to final screenings, I help create an environment where students can explore storytelling through hands-on experience.";

const DESCRIPTION_MORE =
  "In addition to overseeing production logistics, I train and support professional filmmakers who serve as mentors, guiding them in how to effectively teach students the fundamentals of storytelling, cinematography, sound, and editing. I also provide on-the-ground technical support during student shoots, helping bridge the gap between education and real-world filmmaking. Beyond my work in the classroom, I contribute to the Latino Film Institute's broader outreach by shooting and editing promotional content featured by outlets such as Good Day LA and KTLA. At its core, my role is about empowering young creators—giving them the tools, confidence, and support to tell stories that reflect their own lives and communities.";

/** Full-bleed cinematic still — swap for /ycp-hero.jpg in public when you have a local asset */
const HERO_BG =
  "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=2400&q=85";

const accent = "#FFB800";

const ROLE_TABS = [
  { id: "camera-editor", label: "Camera Operator / Editor" },
  { id: "technical-coordinator", label: "Technical Coordinator" },
  {
    id: "camera-sound-interviewer-editor-a",
    label: "Camera Operator / Sound / Interviewer / Editor",
  },
  {
    id: "camera-sound-interviewer-editor-b",
    label: "Camera Operator / Sound / Interviewer / Editor",
  },
];

export default function YouthCinemaProject() {
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  const [activeRoleTab, setActiveRoleTab] = useState(0);

  const focusRoleTab = (index) => {
    const next = (index + ROLE_TABS.length) % ROLE_TABS.length;
    setActiveRoleTab(next);
    document.getElementById(`ycp-tab-${ROLE_TABS[next].id}`)?.focus();
  };

  const onRoleTabKeyDown = (e, index) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      focusRoleTab(index + 1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      focusRoleTab(index - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusRoleTab(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusRoleTab(ROLE_TABS.length - 1);
    }
  };

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
              2023-Present • The Latino Film Institute 
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

            <div className="max-w-xl mb-6 md:mb-8">
              <p className="font-ycp text-base md:text-lg text-white/90 font-medium leading-relaxed">
                {DESCRIPTION_LEAD}
              </p>
              {descriptionExpanded && (
                <p className="font-ycp mt-5 text-base md:text-lg text-white/90 font-medium leading-relaxed border-l-2 border-white/20 pl-4">
                  {DESCRIPTION_MORE}
                </p>
              )}
              <button
                type="button"
                onClick={() => setDescriptionExpanded((e) => !e)}
                className="font-ycp mt-4 inline-flex items-center gap-1.5 text-xs md:text-sm font-bold uppercase tracking-[0.2em] transition hover:opacity-90"
                style={{ color: accent }}
                aria-expanded={descriptionExpanded}
              >
                {descriptionExpanded ? (
                  <>
                    Show less
                    <ChevronUp size={18} strokeWidth={2.5} aria-hidden />
                  </>
                ) : (
                  <>
                    Read more
                    <ChevronDown size={18} strokeWidth={2.5} aria-hidden />
                  </>
                )}
              </button>
            </div>

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

        {/* ── Roles tablist ── */}
        <section
          className="border-t border-white/[0.06] bg-black py-16 md:py-24"
          aria-labelledby="ycp-roles-heading"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <h2
              id="ycp-roles-heading"
              className="font-ycp mb-8 text-xs font-bold uppercase tracking-[0.35em] md:text-sm"
              style={{ color: accent }}
            >
              Roles &amp; responsibilities
            </h2>

            <div
              role="tablist"
              aria-label="Youth Cinema Project roles"
              className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3"
            >
              {ROLE_TABS.map((tab, index) => {
                const selected = activeRoleTab === index;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    id={`ycp-tab-${tab.id}`}
                    aria-selected={selected}
                    aria-controls={`ycp-panel-${tab.id}`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActiveRoleTab(index)}
                    onKeyDown={(e) => onRoleTabKeyDown(e, index)}
                    className={`font-ycp border px-4 py-3 text-left text-xs font-semibold uppercase leading-snug tracking-wide transition sm:min-h-[3rem] sm:max-w-[16rem] sm:flex-1 sm:text-center md:text-[13px] ${
                      selected
                        ? "border-transparent text-black"
                        : "border-white/15 bg-transparent text-white/70 hover:border-white/30 hover:text-white"
                    }`}
                    style={
                      selected ? { backgroundColor: accent, borderColor: accent } : undefined
                    }
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-10 border border-white/[0.08] bg-[#0a0a0a] p-6 md:p-8">
              {ROLE_TABS.map((tab, index) => (
                <div
                  key={tab.id}
                  role="tabpanel"
                  id={`ycp-panel-${tab.id}`}
                  aria-labelledby={`ycp-tab-${tab.id}`}
                  hidden={activeRoleTab !== index}
                  className="font-ycp text-sm leading-relaxed text-white/65 md:text-base"
                >
                  <p className="text-white/40">
                    [Placeholder] Content for <strong className="text-white/80">{tab.label}</strong>{" "}
                    will go here—project list, credits, gear, dates, or narrative copy.
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-white/50">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</li>
                  </ul>
                </div>
              ))}
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
