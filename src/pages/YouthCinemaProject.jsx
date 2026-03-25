import { useState, useEffect, useCallback } from "react";
import {
  Play,
  ChevronDown,
  ChevronUp,
  X,
  ChevronLeft,
  Clock,
  Volume2,
  Maximize,
} from "lucide-react";
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
  {
    id: "camera-editor",
    label: "Camera Operator / Editor",
    projectTitle: "YCP 2025 Live Reads",
    videos: [
      {
        youtubeId: "WGMpQiMQFdw",
        title: "YCP Live Reads 2025 : Lost World - Arely Guillen - RPS Steam Academy",
        category: "Live stream",
        year: "2025",
        duration: "11:01",
      },
      {
        youtubeId: "pCa_TMM_Uk0",
        title: "YCP Live Reads 2025: The Howling Mess - Carlos Aguilar - MORCS",
        category: "Live stream",
        year: "2025",
        duration: "13:45",
      },  
      {
        youtubeId: "wsJmy2TW4A4",
        title: "YCP Live Reads 2025 : Standing Up - Evangeline Agundez Cruz- Potrero School",
        category: "Live stream",
        year: "2025",
        duration: "19:08",
      },  
      {
        youtubeId: "inNOedxEu2E",
        title: "YCP Live Reads 2025: Cat-astrophe - Nathalia Benavides - Barbara Worth",
        category: "Live stream",
        year: "2025",
        duration: "7:58",
      },
      {
        youtubeId: "-W6lg5peqp8",
        title: "YCP Live Reads 2025",
        category: "Live stream",
        year: "2025",
        duration: "58:47",
      },
    ],
    description: [
      "YCP Live Reads is an annual showcase held during LALIFF that brings student-written stories to life in a powerful new way. The event features “Second Chance Scripts”—screenplays developed by students during the school year that were not selected for production—giving them a unique opportunity to be experienced by an audience.Professional actors perform these scripts live on stage, allowing the writing to take center stage and highlighting the students’ voices in a dynamic, collaborative setting. Following each reading, the student writers join for a live Q&A, where they reflect on their creative process, inspirations, and what it means to hear their work performed. The event celebrates storytelling at its core—reminding students that every story has value, and every voice deserves to be heard.",
    ],
  },
  {
    id: "technical-coordinator",
    label: "Technical Coordinator",
    projectTitle: "YCP ALumni Fellowship Films",
    videos: [
      {
        youtubeId: "Y36LhVPduZE",
        title: "Sol Supernova - A YCP Alumni Fellowship Short Film (2023)",
        category: "Short Film",
        year: "2025",
        duration: "18:03",
      },
      {
        youtubeId: "fgQbz9whFvg",
        title: "Lost Memories - A YCP Alumni Fellowship Short Film (2024)",
        category: "Short Film",
        year: "2025",
        duration: "20:43",
      },
      
     
    ],
    description: [
      "	As the Tech Coordinator for the YCP Alumni Fellowship films, I support the final stages of production by preparing projects for professional exhibition and distribution. My work focuses on creating Digital Cinema Packages (DCPs) for theatrical screenings, managing final deliverables, and coordinating with partners to ensure seamless file sharing and presentation. I work closely with internal teams and external collaborators to make sure each film meets industry standards and is ready for festival and partner screenings.",
      "The YCP Alumni program extends the Youth Cinema Project’s mission beyond the classroom, bridging achievement and opportunity gaps in the entertainment industry. Through mentorship, career development, and professional exposure, it empowers graduates to navigate the filmmaking landscape and build sustainable careers. Alumni gain access to internships, advanced production opportunities, and professional sets, along with one-on-one mentorship and guidance on college, scholarships, and early career pathways. My role supports this ecosystem by helping bring their work to the screen—ensuring their stories are presented at the highest level as they take the next step in their journey.",
    ],
  },
  {
    id: "camera-sound-interviewer-editor-a",
    label: "Camera Operator / Sound / Interviewer / Editor",
    projectTitle: "YCP Alumni Fellowship BTS",
    videos: [
      {
        youtubeId: "bCw8Zm4wpVc",
        title: '2025 - "Perfect" Alumni Fellowship BTS',
        category: "Interview",
        year: "2025",
        duration: "2:19",
      },
      {
        youtubeId: "Mq9Ul6ajbsM",
        title: 'Behind The Scenes of "Sol Supernova" - YCP Alumni Fellowship 2023',
        category: "Interview",
        year: "2025",
        duration: "3:18",
      },  
      {
        youtubeId: "XGEW3ghdhUg",
        title: 'Behind The Scenes of "Lost Memories" - YCP Alumni Fellowship 2024',
        category: "Interview",
        year: "2025",
        duration: "4:39",
      },
      {
        youtubeId: "vkOMMsAf-lA",
        title: 'Behind The Scenes of "Perfect" - YCP Alumni Fellowship 2025',
        category: "BTS",
        year: "2025",
        duration: "8:26",
      },
    ],
    description: [
      "As part of the YCP Alumni Fellowship at the Latino Film Institute, I document the production of high-level student films backed by major partners such as Amazon MGM Studios. This annual initiative brings together top student filmmakers to create projects at a professional scale, and I’ve been involved since its inception—launching the behind-the-scenes coverage during my first year with YCP as the fellowship itself was being introduced.",
      "I capture on-set BTS footage, conduct interviews with student filmmakers, and edit promotional pieces that showcase both the filmmaking process and the growth of the students involved. These videos are used for external promotion and have also been shared internally with industry partners including Amazon MGM Studios, Universal Studios, and Warner Bros. Through this work, I help translate the experience of these productions into compelling stories that reflect the talent, dedication, and future potential of the students.",
    ],
  },
  {
    id: "camera-sound-interviewer-editor-b",
    label: "Camera Operator / Sound / Interviewer / Editor",
    projectTitle: "	YCP Alumni Fellows Parent Testimonials",
    videos: [
      {
        youtubeId: "eSCv7tgkkNs",
        title: "Alumni Parent Testimonials",
        category: "Interview",
        year: "2025",
        duration: "2:07",
      },
      
    ],
    description: [
      "Alongside student interviews, I also capture conversations with parents, highlighting their perspectives on their children’s growth and the impact of the program. These stories add a deeper, more personal dimension to the work, showing how filmmaking extends beyond the classroom and into families and communities.	",
    ],
  },
];

function ycpVideoThumb(youtubeId) {
  return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
}

/** Same interaction pattern as `ProjectCard` in Projects.jsx */
function YcpGalleryCard({ video, onClick }) {
  const thumb = ycpVideoThumb(video.youtubeId);
  return (
    <button
      type="button"
      onClick={() => onClick(video)}
      className="group relative aspect-video w-full overflow-hidden bg-brand-card text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber"
    >
      <img
        src={thumb}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center bg-brand-black/55 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
        <div className="flex h-[72px] w-[72px] scale-90 items-center justify-center rounded-full border-2 border-brand-amber transition-transform duration-300 group-hover:scale-100">
          <Play size={22} className="ml-1 fill-brand-amber text-brand-amber" />
        </div>
      </div>
      <div className="absolute left-3 top-3">
        <span className="bg-brand-blue/75 px-2.5 py-1 font-body text-[9px] uppercase tracking-[0.22em] text-white backdrop-blur-sm">
          {video.category}
        </span>
      </div>
      <div className="absolute right-3 top-3">
        <span className="font-body text-[10px] text-white/50">{video.year}</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="translate-y-1 font-display text-2xl leading-none text-white transition-transform duration-300 group-hover:translate-y-0">
          {video.title}
        </h3>
        <p className="mt-1 flex items-center gap-1.5 font-body text-[10px] text-brand-silver/55 opacity-0 transition-opacity delay-75 duration-300 group-hover:opacity-100">
          <Clock size={9} />
          {video.duration}
        </p>
      </div>
    </button>
  );
}

/** Mirrors `ProjectModal` video column + details layout from Projects.jsx */
function YcpGalleryVideoModal({ video, onClose }) {
  const [playing, setPlaying] = useState(false);
  const posterSrc = ycpVideoThumb(video.youtubeId);

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

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-brand-black"
      style={{ animation: "modalIn 0.3s ease both" }}
    >
      <div className="flex h-[52px] flex-shrink-0 items-center justify-between border-b border-white/[0.07] px-5 md:px-8">
        <div className="flex items-center gap-2.5">
          <div className="flex h-6 w-6 items-center justify-center bg-brand-amber">
            <span className="select-none font-display text-sm leading-none text-brand-black">
              PT
            </span>
          </div>
          <span className="hidden font-display text-xs tracking-[0.18em] text-white sm:block">
            PICTURETOWN
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-1.5 font-body text-[10px] uppercase tracking-[0.25em] text-brand-silver/55 transition-colors hover:text-white"
          >
            <ChevronLeft size={13} />
            Back to gallery
          </button>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-8 w-8 items-center justify-center text-brand-silver/50 transition-all hover:bg-white/10 hover:text-white"
          >
            <X size={15} />
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col overflow-hidden md:flex-row">
        <div className="flex min-h-[220px] flex-1 flex-col bg-black">
          {playing ? (
            <iframe
              className="h-full w-full flex-1 border-0"
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
              allow="autoplay; fullscreen"
              allowFullScreen
              title={video.title}
            />
          ) : (
            <>
              <div className="relative flex-1">
                <img
                  src={posterSrc}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    className="group flex h-[76px] w-[76px] items-center justify-center rounded-full border-2 border-brand-amber backdrop-blur-sm transition-all duration-300 hover:bg-brand-amber/15"
                  >
                    <Play
                      size={26}
                      className="ml-1 fill-brand-amber text-brand-amber"
                    />
                  </button>
                </div>
                <div className="absolute left-4 top-4">
                  <span className="bg-brand-blue/70 px-3 py-1.5 font-body text-[9px] uppercase tracking-[0.25em] text-white backdrop-blur-sm">
                    {video.category} &middot; {video.year}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#080a0c] px-4 py-3">
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="text-white/60 transition-colors hover:text-white"
                >
                  <Play size={14} />
                </button>
                <div className="group/bar relative h-1 flex-1 cursor-pointer rounded-full bg-white/15">
                  <div className="h-full w-[30%] rounded-full bg-brand-amber" />
                  <div className="absolute left-[30%] top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-black bg-brand-amber opacity-0 transition-opacity group-hover/bar:opacity-100" />
                </div>
                <span className="whitespace-nowrap font-body text-[10px] tabular-nums text-white/65">
                  {video.duration}
                </span>
                <Volume2
                  size={13}
                  className="cursor-pointer text-white/40 transition-colors hover:text-white/70"
                />
                <Maximize
                  size={13}
                  className="cursor-pointer text-white/40 transition-colors hover:text-white/70"
                />
              </div>
            </>
          )}
        </div>

        <div className="w-full flex-shrink-0 overflow-y-auto border-t border-white/[0.06] md:w-[360px] md:border-l md:border-t-0 lg:w-[400px] xl:w-[440px]">
          <div className="space-y-6 p-6 md:p-8">
            <p className="font-body text-[10px] uppercase tracking-[0.35em] text-brand-amber">
              {video.category} · {video.year}
            </p>
            <div>
              <h2
                className="font-display leading-none text-white"
                style={{ fontSize: "clamp(36px,4vw,52px)" }}
              >
                {video.title}
              </h2>
              <p className="mt-2 font-body text-xs text-brand-silver/60">
                Youth Cinema Project · {video.category} · {video.year}
              </p>
            </div>
            <div className="h-px bg-white/[0.07]" />
            <div>
              <h4 className="mb-2.5 font-body text-[9px] uppercase tracking-[0.35em] text-brand-silver/55">
                Overview
              </h4>
              <p className="font-body text-sm leading-relaxed text-brand-silver/75">
                Placeholder overview for this clip—replace with shoot notes, crew,
                or classroom context. Same layout as the main site project modal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RoleTabVideoGallery({ videos }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="mt-8">
        <h4 className="font-ycp mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
          Video gallery
        </h4>
        <div className="grid grid-cols-1 gap-[1px] bg-white/[0.04] md:grid-cols-2 lg:grid-cols-3">
          {videos.map((v) => (
            <YcpGalleryCard
              key={`${v.youtubeId}-${v.title}`}
              video={v}
              onClick={setSelected}
            />
          ))}
        </div>
      </div>
      {selected && (
        <YcpGalleryVideoModal
          video={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}

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
                  className="font-ycp text-sm leading-relaxed text-white/70 md:text-base"
                >
                  <header>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">
                      Project title
                    </p>
                    <h3 className="mt-2 text-2xl font-bold uppercase tracking-tight text-white md:text-3xl">
                      {tab.projectTitle}
                    </h3>
                  </header>

                  <RoleTabVideoGallery videos={tab.videos} />

                  <div className="mt-10 border-t border-white/[0.08] pt-8">
                    <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
                      Description
                    </h4>
                    <div className="space-y-4 text-white/65">
                      {tab.description.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
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
