import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-slate-100">
              Building the future,
              <span className="font-serif italic font-normal text-blue-300">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-slate-300 animate-fade-in animation-delay-200">
              <p>
                I'm a passionate software engineer with over 5 years of
                experience crafting high-performance digital products. My
                journey started with a curiosity for how things work on the web,
                and it has evolved into a deep expertise in modern frontend
                technologies.
              </p>
              <p>
                I specialize in React, Next.js, and TypeScript, building
                everything from sleek landing pages to complex enterprise
                applications. My approach combines technical excellence with a
                Where clean code meets exceptional UX.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 backdrop-blur-md rounded-2xl p-6 shadow-lg shadow-blue-950/20 animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-slate-200">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/70 border border-slate-800/80 backdrop-blur-md p-6 rounded-2xl hover:border-blue-500/40 hover:bg-slate-900 transition-all duration-300 shadow-md animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 hover:bg-blue-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-100">{item.title}</h3>
                <p className="text-sm text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};