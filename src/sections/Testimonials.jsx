import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Leevy is one of the most talented engineers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
    author: "Dennis Njagi",
    role: "CEO, Move Different.",
    avatar: "/avatars/Mdlogo.png",
  },
  {
    quote:
      "Working with Leevy was a game-changer for our project. He delivered ahead of schedule with code quality that set a new standard for our team.",
    author: "Hillary",
    role: "Social Worker, NRCF",
    avatar: "/avatars/NRCFlogo.png",
  },
  {
    quote:
      "Leevy's expertise in React and TypeScript helped us rebuild our entire frontend in record time. His architectural decisions continue to pay dividends.",
    author: "Joyce",
    role: "CEO, Joyce Perfumier",
    avatar: "/avatars/JoycePerfumier.jpg",
  },
  {
    quote:
      "Not only is Leevy technically brilliant, but he's also a fantastic communicator and team player. He elevated everyone around him.",
    author: "David Kim",
    role: "CEO, Innovation Hub",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden bg-slate-950 text-slate-100">
      {/* Background Glowing Ambient Spheres */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-blue-500/30 text-xs font-medium tracking-wider uppercase text-blue-400 backdrop-blur-md shadow-md shadow-blue-950/30 animate-fade-in">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse shadow-sm shadow-blue-400" />
            What People Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-slate-100">
            Kind words from{" "}
            <span className="font-serif italic font-normal text-blue-400 drop-shadow-[0_0_20px_rgba(96,165,250,0.35)]">
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            {/* Outer Glowing Halo on Card Hover */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl pointer-events-none" />

            {/* Main Testimonial Card */}
            <div className="relative z-10 bg-slate-900/80 backdrop-blur-xl p-8 rounded-3xl md:p-12 border border-slate-800/80 group-hover:border-blue-400/60 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-2 group-hover:scale-[1.01] shadow-2xl shadow-slate-950/60 group-hover:shadow-blue-500/10">
              
              {/* Quote Icon Badge */}
              <div className="absolute -top-5 left-8 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                <Quote className="w-6 h-6 text-slate-950 fill-slate-950" />
              </div>

              {/* Quote Body with Fade Key */}
              <blockquote
                key={activeIdx}
                className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4 text-slate-100 transition-all duration-300 animate-fade-in"
              >
                "{testimonials[activeIdx].quote}"
              </blockquote>

              {/* Author Details */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonials[activeIdx].avatar}
                    alt={testimonials[activeIdx].author}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-500/40 group-hover:ring-blue-400 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full ring-2 ring-cyan-400/30 animate-ping pointer-events-none" />
                </div>
                <div>
                  <div className="font-semibold text-lg text-slate-100 group-hover:text-blue-300 transition-colors">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-slate-400">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls with Ultra-Glow & Micro-Animations */}
            <div className="flex items-center justify-center gap-6 mt-10">
              {/* Previous Button */}
              <div className="relative group/btn">
                {/* High Contrast Glow Ring behind button on hover */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover/btn:opacity-100 transition duration-300 blur-md pointer-events-none" />
                
                <button
                  onClick={previous}
                  aria-label="Previous Testimonial"
                  className="relative p-4 rounded-full bg-slate-900 border border-slate-700 text-slate-200 hover:text-slate-950 hover:bg-cyan-400 hover:border-cyan-300 shadow-xl shadow-slate-950/80 transition-all duration-300 hover:scale-110 active:scale-90 flex items-center justify-center z-10"
                >
                  <ChevronLeft className="w-5 h-5 transition-transform duration-300 group-hover/btn:-translate-x-0.5 group-hover/btn:-rotate-12" />
                </button>
              </div>

              {/* Pagination Dots */}
              <div className="flex gap-2.5 items-center">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-gradient-to-r from-blue-400 to-cyan-400 shadow-md shadow-cyan-400/50"
                        : "w-2.5 bg-slate-800 hover:bg-blue-500/50"
                    }`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <div className="relative group/btn">
                {/* High Contrast Glow Ring behind button on hover */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover/btn:opacity-100 transition duration-300 blur-md pointer-events-none" />
                
                <button
                  onClick={next}
                  aria-label="Next Testimonial"
                  className="relative p-4 rounded-full bg-slate-900 border border-slate-700 text-slate-200 hover:text-slate-950 hover:bg-cyan-400 hover:border-cyan-300 shadow-xl shadow-slate-950/80 transition-all duration-300 hover:scale-110 active:scale-90 flex items-center justify-center z-10"
                >
                  <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:rotate-12" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};