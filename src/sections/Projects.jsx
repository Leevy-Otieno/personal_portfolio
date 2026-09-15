import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "MOVE DIFFERENT eMOBILITY",
    description:
      "Your one-stop shop for bikes, premium parts, and accessories. Built to keep you riding smooth, whether you need a new setup or reliable replacements.",
    image: "/projects/emobility.png",
    tags: ["React", "Typescript", "NodeJS"],
    link: "https://emobility.movedifferent.co.ke/",
  },
  {
    title: "StackBattleKe",
    description:
      "An open-source, interactive competitive programming platform where developers can tackle coding challenges, climb the leaderboards, form groups, and track their progress via a personalized dashboard. Think LeetCode, but built for community and competition.",
    image: "/projects/StackBattle.png",
    tags: ["React", "Typescript", "NodeJS"],
    link: "https://stacke-battleke-frontend.vercel.app/",
    github: "https://github.com/Leevy-Otieno/Stacke_Battleke_frontend",
  },
  {
    title: "BiteHUB",
    description:
      "Fresh flavors, local favorites, and your go-to dishes delivered fast or ready for easy pickup. Order online and satisfy your cravings in just a few clicks.",
    image: "/projects/Restaurant.png",
    tags: ["React JS", "PostgreSQL", "Tailwind"],
    link: "https://restaurant-site-hah4.vercel.app/",
    github: "https://github.com/Leevy-Otieno/restaurant-site",
  },
  {
    title: "Post Nexus",
    description:
      "An intelligent Social Media management tools which  helps users create better content faster.[In progress]",
    image: "/projects/Postnexus1.png",
    tags: ["React", "OpenAI", "Python", "FastAPI"],
    link: "https://postnexus.vercel.app/",
    github: "",
  },
  {
    title: "Booking",
    description:
      "An online platform that allows users to booke there flights online.",
    image: "/projects/booking.png",
    tags: ["React.js", "MongoDB"],
    link: "https://traveling-site-jet.vercel.app/#",
    github: "#",
  },
  {
    title: "Rabii FOundation",
    description:
      "An online platform that allows users to booke there flights online.",
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
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
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
