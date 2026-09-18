const experiences = [
  {
    period: "2026 — Present",
    role: "Senior Fullstack Engineer",
    company: "Move Different",
    description:
      "Leading frontend architecture for a suite of fintech products. Implemented micro-frontend architecture, reduced bundle size by 40%, and mentored a team of 5 developers.",
    technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
    current: true,
  },
  {
    period: "2025 — 2026",
    role: "Fullstack Engineer",
    company: "Ngong Road Children Foundation",
    description:
      "Built and maintained multiple React applications for enterprise clients. Introduced automated testing practices that improved code coverage to 85%.",
    technologies: ["React", "Wordpress", "Python"],
    current: false,
  },
  {
    period: "2024 — 2025",
    role: "Junior Developer",
    company: "Joyce Perfumier",
    description:
      "Contributed to the development of a SaaS platform from MVP to production. Collaborated with designers to implement pixel-perfect UI components.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    current: false,
  },
  {
    period: "2023 — 2024",
    role: "Freelance Developer",
    company: "Self-Employed",
    description:
      "Delivered custom web solutions for small businesses and startups. Built 15+ websites and applications, handling everything from design to deployment.",
    technologies: [
      "JavaScript",
      "PHP",
      "WordPress",
      "MySQL",
      "Python",
      "Figma",
    ],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-slate-950 text-slate-100">
      {/* Background Glow Overlay */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-blue-400 text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-slate-100">
            Experience that{" "}
            <span className="font-serif italic font-normal text-blue-300">
              speaks volumes.
            </span>
          </h2>

          <p className="text-slate-300 animate-fade-in animation-delay-200">
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and products at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Midnight Blue Timeline Line */}
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500/40 to-transparent md:-translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3.5 h-3.5 bg-blue-500 rounded-full -translate-x-1/2 ring-4 ring-slate-950 z-10 shadow-md shadow-blue-500/50">
                  {exp.current && (
                    <span className="absolute -inset-1 rounded-full bg-blue-400 animate-ping opacity-75" />
                  )}
                </div>

                {/* Content Card */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-blue-500/20 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-950/40 transition-all duration-500 group">
                    <span className="text-sm text-blue-400 font-semibold tracking-wide">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-1 text-slate-100 group-hover:text-blue-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-slate-400 text-sm font-medium">{exp.company}</p>
                    <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-5 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-slate-950/80 border border-slate-800 text-xs rounded-full text-slate-300 font-medium group-hover:border-blue-500/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};