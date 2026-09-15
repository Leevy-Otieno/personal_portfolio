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
  },
  {
    title: "Fundi Interior Solutions",
    description:
      "A sleek business application engineered for a premier studio selling spatial design and custom renovations. Built on an architecture of highly reusable components, the site delivers a pixel-perfect, fully responsive interactive portfolio with optimized asset delivery to guarantee rapid load times for media-heavy architectural layouts.",
    image: "/projects/fundi.png",
    tags: ["React.js"],
    link: "https://fundi-interiors-final.lovable.app/",
    github: "#",
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
      "An intelligent social media workflow application providing automated marketing tools, AI copy generation, and data-driven scheduling for growth-focused SMEs. Powered by FastAPI and React, the application leverages optimized asynchronous request handling and large language model execution to process rapid content creation requests with minimal latency[IN PROGRESS].",
    image: "/projects/Postnexus1.png",
    tags: ["React", "OpenAI", "Python", "FastAPI"],
    link: "https://postnexus.vercel.app/",
    github: "",
  },
  {
    title: "Booking",
    description:
      "A scalable full-stack travel marketplace selling instant flight bookings, custom holiday tours, and itinerary organization. Built on a robust MongoDB data layer, it features highly reactive search parameters, optimized geospatial or date-based query parameters, and a modular frontend architecture to ensure fluid, lag-free user search experiences.[IN PROGRESS]",
    image: "/projects/booking.png",
    tags: ["React.js", "MongoDB"],
    link: "https://traveling-site-jet.vercel.app/#",
    github: "#",
  },
  {
    title: "Rabii FOundation",
    description:
      "A full-stack community and fundraising platform engineered for a non-profit foundation providing environmental sustainability initiatives, health awareness campaigns, and public donations. Built with a modular frontend architecture, it integrates a secure third-party payment gateway for seamless donations, optimized dynamic content loading for program management, and scalable data layouts to manage community member engagement effortlessly.",
    image: "/projects/rabii.png",
    tags: ["React.js"],
    link: "https://rabii-foundation.vercel.app/#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            High-performance code that
            <span className="font-serif italic font-normal text-white">
              {" "}
              drives business goals.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
