import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Working with Leevy was an absolute game-changer. His technical depth across React, Python, and full-stack development ensured our project was delivered on time and exceeded all expectations.",
    author: "Dennis Njagi",
    role: "CEO",
    company: "Move Diffrent KE",
    avatar: "/avatars/Mdlogo.png",
    rating: 5,
  },
  {
    quote:
      "Leevy's attention to UI/UX detail and robust backend architecture gave our platform the exact high-end polish we needed. Highly professional and exceptionally skilled!",
    author: "Hillary",
    role: "Seniour CAse Manager",
    company: "NRCF",
    avatar: "/avatars/NRCFlogo.png",
    rating: 4,
  },
  {
    quote:
      "From seamless state management in React to secure API integrations, Leevy brings top-tier engineering discipline to every sprint. Absolute pleasure to collaborate with.",
    author: "Joyce",
    role: "CEO",
    company: "Joyce Perfumier",
    avatar: "/avatars/JoycePerfumier.jpg",
    rating: 3,
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="py-32 relative overflow-hidden bg-slate-950 text-slate-100"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header with Borderless Glowing Text & Blinking Dot */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-3 animate-fade-in">
            {/* Blinking Glowing Dot */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
            </span>

            {/* Attractive Glowing Header Text */}
            <span className="text-sm font-semibold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 drop-shadow-[0_0_15px_rgba(56,189,248,0.7)] uppercase font-sans">
              What People Say
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold animate-fade-in animation-delay-100 text-slate-100 tracking-tight">
            Kind words from{" "}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-300 drop-shadow-[0_0_20px_rgba(56,189,248,0.6)]">
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonials Carousel Container */}
        <div className="max-w-4xl mx-auto relative group/card">
          {/* Outer Glowing Midnight Blue Halo */}
          <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 opacity-0 group-hover/card:opacity-75 blur-3xl transition-all duration-700 pointer-events-none" />

          {/* Main Card with Zoom-in & Neon Glow Hover Effect */}
          <div className="relative bg-slate-900/80 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-blue-500/30 shadow-2xl shadow-blue-950/40 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover/card:-translate-y-2 group-hover/card:scale-[1.03] group-hover/card:border-cyan-400 group-hover/card:shadow-[0_0_60px_rgba(56,189,248,0.4)]">
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              {/* Avatar & Author Info with Continuous Floating Animation */}
              <div className="flex flex-col items-center text-center shrink-0">
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/20 animate-float group-hover/card:scale-110 group-hover/card:border-cyan-300 group-hover/card:shadow-[0_0_25px_rgba(56,189,248,0.6)] transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 via-cyan-400/20 to-transparent opacity-0 group-hover/card:opacity-150 transition-opacity duration-500 pointer-events-none" />
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].author}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-115"
                  />
                </div>

                <h4 className="font-semibold text-lg text-slate-100 mt-4 group-hover/card:text-cyan-200 transition-colors duration-300">
                  {testimonials[currentIndex].author}
                </h4>
                <p className="text-xs text-blue-400 font-medium">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-xs text-slate-400">
                  {testimonials[currentIndex].company}
                </p>
              </div>

              {/* Quote & Star Ratings Content */}
              <div className="flex-1 space-y-4 text-center md:text-left">
                <div className="relative pt-2">
                  <Quote className="w-10 h-10 text-blue-500/30 mb-2 mx-auto md:mx-0 pointer-events-none transition-transform duration-500 group-hover/card:scale-110 group-hover/card:text-cyan-400/50 rotate-180" />
                  <p className="text-slate-200 text-base md:text-lg italic leading-relaxed relative inline-block">
                    "{testimonials[currentIndex].quote}"
                    <Quote className="inline-block w-5 h-5 text-blue-500/30 ml-2 mb-2 pointer-events-none transition-transform duration-500 group-hover/card:scale-110 group-hover/card:text-cyan-400/50 align-bottom" />
                  </p>
                </div>

                {/* Stars Positioned Below Text & Above Author Name */}
                <div className="flex justify-center md:justify-start gap-1 pt-2">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)] transition-transform duration-300 hover:scale-125"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Centered Navigation Controls (Arrows with Dots in the Middle) */}
          <div className="flex items-center justify-center gap-6 mt-8">
            {/* Previous Arrow Button */}
            <button
              onClick={handlePrev}
              className="group/btn relative p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/60 hover:bg-slate-800 transition-all shadow-md active:scale-95 overflow-hidden"
              aria-label="Previous testimonial"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              <ChevronLeft className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover/btn:-translate-x-0.5" />
            </button>

            {/* Dots Indicator in the Middle */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-8 bg-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]"
                      : "w-2.5 bg-slate-800 hover:bg-slate-700"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Next Arrow Button */}
            <button
              onClick={handleNext}
              className="group/btn relative p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/60 hover:bg-slate-800 transition-all shadow-md active:scale-95 overflow-hidden"
              aria-label="Next testimonial"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
              <ChevronRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
