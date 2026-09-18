import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "MOVE DIFFERENT eMOBILITY",
    description:
      "A scalable full-stack web application designed for a vehicle retail shop selling e-bikes and replacement parts. Developed using React and TypeScript, it features highly optimized data-fetching models and custom API integrations to deliver persistent shopping cart states, smooth UI transitions, and rapid transaction processing.",
    image: "/projects/emobility.png",
    tags: ["React", "Typescript", "NodeJS"],
    link: "https://emobility.movedifferent.co.ke/",
    github: "",
  },
  {
    title: "Fundi Interior Solutions",
    description:
      "A sleek business application engineered for a premier studio selling spatial design and custom renovations. Built on an architecture of highly reusable components, the site delivers a pixel-perfect, fully responsive interactive portfolio with optimized asset delivery to guarantee rapid load times for media-heavy architectural layouts.",
    image: "/projects/fundi.png",
    tags: ["React.js"],
    link: "https://fundi-interiors-final.lovable.app/",
    github: "",
  },
  {
    title: "StackBattleKe",
    description:
      "A full-stack competitive coding platform built for developer communities to practice LeetCode-style challenges and track progress on dynamic dashboards. Developed using a modular React architecture, it implements efficient state management models, highly secure API endpoints, and optimized data layers to ensure instant, reactive performance during live coding sessions.",
    image: "/projects/StackBattle.png",
    tags: ["React", "Typescript", "NodeJS"],
    link: "https://stacke-battleke-frontend.vercel.app/",
    github: "https://github.com/Leevy-Otieno/Stacke_Battleke_frontend",
  },
  {
    title: "BiteHUB",
    description:
      "A scalable food delivery application providing online menus, instant ordering, and localized food logistics. The platform runs on a robust PostgreSQL database optimized for geometric or relational lookups, using a clean utility-first CSS layout and server-side logic to process rapid menu updates and user carts without performance lag.",
    image: "/projects/Restaurant.png",
    tags: ["React JS", "PostgreSQL", "Tailwind"],
    link: "https://restaurant-site-hah4.vercel.app/",
    github: "https://github.com/Leevy-Otieno/restaurant-site",
  },
  {
    title: "Post Nexus",
    description:
      "An intelligent social media workflow application providing automated marketing tools, AI copy generation, and data-driven scheduling for growth-focused SMEs. Powered by FastAPI and React, the application leverages optimized asynchronous request handling and large language model execution to process rapid content creation requests with minimal latency [IN PROGRESS].",
    image: "/projects/Postnexus1.png",
    tags: ["React", "OpenAI", "Python", "FastAPI"],
    link: "https://postnexus.vercel.app/",
    github: "",
  },
  {
    title: "Booking",
    description:
      "A scalable full-stack travel marketplace selling instant flight bookings, custom holiday tours, and itinerary organization. Built on a robust MongoDB data layer, it features highly reactive search parameters, optimized geospatial or date-based query parameters, and a modular frontend architecture to ensure fluid, lag-free user search experiences [IN PROGRESS].",
    image: "/projects/booking.png",
    tags: ["React.js", "MongoDB"],
    link: "https://traveling-site-jet.vercel.app/#",
    github: "",
  },
  {
    title: "Rabii Foundation",
    description:
      "A full-stack community and fundraising platform engineered for a non-profit foundation providing environmental sustainability initiatives, health awareness campaigns, and public donations. Built with a modular frontend architecture, it integrates a secure third-party payment gateway for seamless donations, optimized dynamic content loading for program management, and scalable data layouts to manage community member engagement effortlessly.",
    image: "/projects/rabii.png",
    tags: ["React.js"],
    link: "https://rabii-foundation.vercel.app/#",
    github: "",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-slate-950 text-slate-100">
      {/* Background Glowing Ambient Spheres */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-blue-500/30 text-xs font-medium tracking-wider uppercase text-blue-400 backdrop-blur-md shadow-md shadow-blue-950/30 animate-fade-in">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse shadow-sm shadow-blue-400" />
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-slate-100">
            High-performance code that{" "}
            <span className="font-serif italic font-normal text-blue-400 drop-shadow-[0_0_20px_rgba(96,165,250,0.35)]">
              drives business goals.
            </span>
          </h2>
          <p className="text-slate-300 animate-fade-in animation-delay-200 leading-relaxed">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const hasValidGithub =
              project.github && project.github.trim() !== "" && project.github !== "#";

            return (
              <div
                key={idx}
                className="group relative rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* Glowing Outer Gradient Halo on Hover */}
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md pointer-events-none" />

                {/* Card Container with Spring Lift Transition */}
                <div className="relative z-10 flex flex-col h-full bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-800/80 group-hover:border-blue-400/80 overflow-hidden shadow-xl shadow-slate-950/50 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-3 group-hover:scale-[1.01] group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-video bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-300" />

                    {/* Overlay Action Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-slate-950/50 backdrop-blur-[2px]">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit live preview for ${project.title}`}
                          className="p-3.5 rounded-full bg-slate-900/90 border border-blue-500/40 text-blue-400 hover:text-slate-950 hover:bg-cyan-400 hover:border-cyan-400 shadow-lg shadow-blue-950/50 transition-all duration-300 hover:scale-110"
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </a>
                      )}
                      {hasValidGithub && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View GitHub repository for ${project.title}`}
                          className="p-3.5 rounded-full bg-slate-900/90 border border-slate-700 text-slate-300 hover:text-slate-950 hover:bg-slate-100 hover:border-slate-100 shadow-lg shadow-slate-950/50 transition-all duration-300 hover:scale-110"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 space-y-4 flex flex-col justify-between flex-grow">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/title flex items-center gap-2"
                        >
                          <h3 className="text-xl font-bold text-slate-100 group-hover/title:text-blue-400 transition-colors">
                            {project.title}
                          </h3>
                        </a>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 rounded-md text-slate-400 group-hover:text-cyan-400 transition-colors"
                        >
                          <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-3.5 py-1 rounded-full bg-slate-950/80 text-xs font-medium border border-slate-800 text-slate-300 group-hover:border-blue-500/40 group-hover:text-blue-300 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            <a
              href="https://github.com/Leevy-Otieno"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-200 hover:text-blue-300 transition-colors font-medium"
            >
              <span>View All Projects</span>
              <ArrowUpRight className="w-5 h-5 text-cyan-400" />
            </a>
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};