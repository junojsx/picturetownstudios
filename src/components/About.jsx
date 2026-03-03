import { MapPin, Mail } from "lucide-react";

const timeline = [
  {
    year: "2024",
    role: "Director / Founder",
    company: "PictureTown Studios — Los Angeles",
    current: true,
  },
  {
    year: "2021",
    role: "Senior Director",
    company: "Luminary Films, Los Angeles",
  },
  {
    year: "2018",
    role: "Director / DOP",
    company: "Atlas Creative Group, New York City",
  },
  {
    year: "2015",
    role: "Commercial Director",
    company: "Freelance · Branded Content",
  },
  {
    year: "2012",
    role: "MFA Film Production",
    company: "UCLA School of Theater, Film & TV",
  },
];

const skills = [
  "Narrative Direction",
  "Cinematography",
  "Screenwriting",
  "Documentary",
  "Brand Storytelling",
  "Color Grading",
  "Post Supervision",
  "Cast Direction",
];

const statItems = [
  ["50+", "Projects"],
  ["8", "Awards"],
  ["15", "Countries"],
  ["12+", "Years"],
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-brand-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
          {/* ── Left column: portrait ── */}
          <div className="relative max-w-sm mx-auto lg:mx-0 w-full">
            {/* Decorative border offset */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-brand-blue/20 pointer-events-none" />

            {/* Portrait frame */}
            <div className="relative aspect-[3/4] overflow-hidden bg-brand-card">
              <img
                src="/jeff.jpg"
                alt="Jeff Aquino — Director & Producer"
                className="absolute inset-0 w-full h-full object-cover grayscale"
                style={{ mixBlendMode: "luminosity", opacity: 0.65, transform: "scale(1.1)", transformOrigin: "center 35%" }}
              />
              {/* Coloured rim overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,rgba(58,124,165,0.10)_0%,transparent_1%)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent" />
            </div>

            {/* Experience badge */}
            <div className="absolute bottom-0 left-6 bg-brand-card/95 backdrop-blur-md border border-white/[0.08] px-5 py-4">
              <div className="font-display text-brand-amber text-5xl leading-none">
                12+
              </div>
              <div className="font-body text-[9px] tracking-[0.3em] uppercase text-brand-silver/55 mt-1">
                Years Experience
              </div>
            </div>
          </div>

          {/* ── Right column: bio ── */}
          <div className="flex flex-col justify-center">
            {/* Label */}
            <p className="font-body text-[9px] tracking-[0.55em] uppercase text-brand-amber mb-5">
              The Visionary
            </p>

            {/* Name / title */}
            <h2
              className="font-display leading-[0.88]"
              style={{ fontSize: "clamp(48px,6vw,80px)" }}
            >
              <span className="text-white block">Director &amp;</span>
              <span className="text-brand-silver/50 block">Producer</span>
            </h2>

            {/* Bio */}
            <div className="mt-7 mb-6 space-y-4 max-w-lg">
              <p className="font-body text-brand-silver/75 text-sm leading-relaxed">
                Creating cinematic experiences through visual storytelling and
                innovative production techniques. Based in Los Angeles, I've
                spent the last decade crafting narratives that bridge the gap
                between commercial impact and artistic integrity.
              </p>
              <p className="font-body text-brand-silver/65 text-sm leading-relaxed">
                My approach combines technical precision with a deep
                understanding of human emotion. From high-budget commercials to
                intimate independent documentaries, I focus on the{" "}
                <em>"why"</em> behind every frame.
              </p>
            </div>

            {/* Contact chips */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="mailto:hello@picturetown.studio"
                className="flex items-center gap-2 text-brand-silver/55 hover:text-brand-amber text-xs font-body transition-colors group"
              >
                <Mail
                  size={13}
                  className="text-brand-blue group-hover:text-brand-amber transition-colors"
                />
                hello@picturetown.studio
              </a>
              <div className="flex items-center gap-2 text-brand-silver/55 text-xs font-body">
                <MapPin size={13} className="text-brand-blue" />
                Los Angeles, CA
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-[1px] bg-white/[0.07] mb-8">
              {statItems.map(([val, label]) => (
                <div
                  key={label}
                  className="bg-brand-black py-4 flex flex-col items-center"
                >
                  <span className="font-display text-brand-amber text-2xl leading-none">
                    {val}
                  </span>
                  <span className="font-body text-[9px] tracking-wider uppercase text-brand-silver/55 mt-1">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Career timeline */}
            <div className="mb-7">
              <h4 className="font-body text-[9px] tracking-[0.4em] uppercase text-brand-silver/55 mb-4">
                Career Timeline
              </h4>
              <div className="space-y-3">
                {timeline.map((item) => (
                  <div
                    key={item.year + item.role}
                    className="flex items-start gap-4"
                  >
                    <span
                      className={`w-8 flex-shrink-0 font-body text-[10px] font-medium pt-0.5 ${
                        item.current
                          ? "text-brand-amber"
                          : "text-brand-silver/55"
                      }`}
                    >
                      '{item.year.slice(2)}
                    </span>
                    <div className="flex-1 border-t border-white/[0.08] pt-1">
                      <p
                        className={`font-body text-xs ${item.current ? "text-white" : "text-brand-silver/60"}`}
                      >
                        {item.role}
                      </p>
                      <p className="font-body text-[10px] text-brand-silver/55 mt-0.5">
                        {item.company}
                      </p>
                    </div>
                    {item.current && (
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-amber mt-1.5 flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Skill tags */}
            <div>
              <h4 className="font-body text-[9px] tracking-[0.4em] uppercase text-brand-silver/55 mb-3">
                Areas of Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-body text-[10px] tracking-wider uppercase text-brand-silver/60 border border-white/[0.08] px-3 py-1.5 hover:border-brand-blue/50 hover:text-brand-silver transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
