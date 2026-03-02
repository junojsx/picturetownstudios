import { Film, PenTool, Clapperboard } from "lucide-react";

const services = [
  {
    num: "01",
    icon: Film,
    title: "Direction",
    subtitle: "Narrative & Commercial",
    description:
      "From intimate character studies to high-octane brand films, I bring stories to life with cinematic precision and emotional depth that moves audiences.",
    deliverables: [
      "Feature & Short Films",
      "Brand Commercials",
      "Documentaries",
      "Music Videos",
      "Social Content Series",
    ],
    accent: "#3A7CA5",
  },
  {
    num: "02",
    icon: PenTool,
    title: "Writing",
    subtitle: "Script & Story Development",
    description:
      "Every great film starts with a great script. I craft compelling screenplays, brand narratives, and creative treatments that earn attention and trust.",
    deliverables: [
      "Screenplays & Teleplays",
      "Brand Story Development",
      "Creative Treatments",
      "Pitch Decks & Bibles",
      "Documentary Storyboarding",
    ],
    accent: "#F59E0B",
  },
  {
    num: "03",
    icon: Clapperboard,
    title: "Production",
    subtitle: "Full-Service Oversight",
    description:
      "End-to-end production management with an eye for quality at every stage — from pre-production planning through final delivery and distribution.",
    deliverables: [
      "Production Planning",
      "Crew & Cast Assembly",
      "Location Scouting",
      "Budget Management",
      "Post-Production Supervision",
    ],
    accent: "#3A7CA5",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 border-y border-white/[0.06] bg-[#0c0f13]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="font-body text-[10px] tracking-[0.45em] uppercase text-brand-amber mb-3">
            What I Do
          </p>
          <h2
            className="font-display text-white leading-none mb-4"
            style={{ fontSize: "clamp(48px,8vw,96px)" }}
          >
            Services
          </h2>
          <p className="font-serif text-brand-silver/65 text-lg md:text-xl italic max-w-sm mx-auto leading-relaxed">
            Comprehensive creative services for stories worth telling.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/[0.05]">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="relative bg-brand-black p-8 md:p-10 group hover:bg-[#111417] transition-colors duration-500 overflow-hidden"
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"
                  style={{ backgroundColor: service.accent }}
                />

                {/* Ghost number */}
                <div className="absolute top-6 right-6 font-display text-[96px] leading-none text-white/[0.4] select-none pointer-events-none">
                  {service.num}
                </div>

                {/* Icon box */}
                <div
                  className="w-11 h-11 flex items-center justify-center border border-white/10 mb-7 group-hover:border-opacity-60 transition-all duration-300"
                  style={{ color: service.accent }}
                >
                  <Icon size={18} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-display text-white text-3xl leading-none mb-0.5">
                  {service.title}
                </h3>
                <p className="font-body text-[9px] tracking-[0.3em] uppercase text-brand-silver/55 mb-5">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="font-body text-brand-silver/65 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Divider */}
                <div className="h-px bg-white/[0.06] mb-5" />

                {/* Deliverables */}
                <ul className="space-y-2.5">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 font-body text-[11px] text-brand-silver/60"
                    >
                      <div
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ backgroundColor: service.accent }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
