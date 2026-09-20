import { Button } from "@/components/Button";
import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About", id: "about" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#testimonials", label: "Testimonials", id: "testimonials" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [activeSplashIndex, setActiveSplashIndex] = useState(null);
  const [activeMobileSplashIndex, setActiveMobileSplashIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = navLinks.map((link) => link.id);
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (index, href) => {
    setActiveSplashIndex(index);
    window.location.href = href;
    setTimeout(() => setActiveSplashIndex(null), 600);
  };

  const handleMobileLinkClick = (index, href) => {
    setActiveMobileSplashIndex(index);
    setIsMobileMenuOpen(false);
    window.location.href = href;
    setTimeout(() => setActiveMobileSplashIndex(null), 600);
  };

  return (
    <>
      {/* Inline styles for 3D water droplet splash, text shimmer, and active states */}
      <style>{`
        @keyframes waterDroplet3DSplash {
          0% {
            transform: scale(0.4) translateZ(0);
            opacity: 1;
            box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.95), inset 0 0 15px rgba(56, 189, 248, 0.9);
          }
          60% {
            transform: scale(1.3) translateZ(30px);
            opacity: 0.6;
            box-shadow: 0 10px 25px rgba(56, 189, 248, 0.4), inset 0 0 25px rgba(56, 189, 248, 0.5);
          }
          100% {
            transform: scale(1.8) translateZ(50px);
            opacity: 0;
            box-shadow: 0 20px 40px rgba(56, 189, 248, 0);
          }
        }
        @keyframes textShimmerGlow {
          0% {
            background-position: 0% 50%;
            filter: drop-shadow(0 0 3px rgba(56, 189, 248, 0.3));
          }
          50% {
            background-position: 100% 50%;
            filter: drop-shadow(0 0 12px rgba(56, 189, 248, 0.7));
          }
          100% {
            background-position: 0% 50%;
            filter: drop-shadow(0 0 3px rgba(56, 189, 248, 0.3));
          }
        }
        @keyframes activePulseGlow {
          0%, 100% {
            box-shadow: 0 0 15px rgba(56, 189, 248, 0.4), inset 0 0 10px rgba(56, 189, 248, 0.3);
          }
          50% {
            box-shadow: 0 0 25px rgba(56, 189, 248, 0.7), inset 0 0 15px rgba(56, 189, 248, 0.5);
          }
        }
        .animate-3d-droplet-splash {
          animation: waterDroplet3DSplash 0.5s cubic-bezier(0.1, 0.9, 0.2, 1) forwards;
          transform-style: preserve-3d;
        }
        .animate-text-shimmer {
          background: linear-gradient(270deg, #38bdf8, #93c5fd, #818cf8, #38bdf8);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textShimmerGlow 4s ease infinite;
        }
        .animate-active-glow {
          animation: activePulseGlow 2.5s ease-in-out infinite;
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
          isScrolled
            ? "bg-slate-950/90 backdrop-blur-xl border-b border-cyan-500/30 py-3 shadow-2xl shadow-slate-950/80"
            : "bg-transparent py-5"
        } z-50`}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo / Name - Bouncing on idle, glowing animated text inside, spinning on hover */}
          <a
            href="#"
            className="relative group inline-block py-2 px-3 rounded-2xl cursor-pointer overflow-visible z-20"
          >
            <div className="relative z-10 px-2 py-0.5 animate-bounce group-hover:animate-none transform transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:rotate-[360deg]">
              {/* Pre-hover animated glowing text effect */}
              <span className="text-xl font-black tracking-tight animate-text-shimmer group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-cyan-300 group-hover:to-indigo-300 transition-colors duration-500">
                Leevy Otieno
              </span>
              <span className="text-cyan-400 font-bold group-hover:text-cyan-300 transition-colors duration-500 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]">
                .
              </span>
            </div>
          </a>

          {/* Desktop Nav with pre-hover animations, active states & 3D Water Droplet Splash Effect */}
          <div className="hidden md:flex items-center gap-1">
            <div className="relative bg-slate-900/90 border border-cyan-500/30 group-hover:border-cyan-400/60 backdrop-blur-md rounded-full px-2 py-1 flex items-center gap-1 shadow-lg shadow-blue-950/40 transition-all duration-500">
              {/* Pre-hover soft aura across navbar pill */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/10 via-cyan-400/10 to-indigo-600/10 opacity-50 group-hover:opacity-100 pointer-events-none transition-opacity" />

              {navLinks.map((link, index) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    onClick={() => handleNavLinkClick(index, link.href)}
                    key={index}
                    className={`relative px-4 py-2 text-sm rounded-full transition-all duration-300 border group cursor-pointer overflow-hidden ${
                      isActive
                        ? "bg-cyan-500/20 text-cyan-200 border-cyan-400 animate-active-glow scale-105 font-bold"
                        : "text-slate-300 hover:text-cyan-200 bg-transparent hover:bg-slate-800/90 border-transparent hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:scale-105"
                    }`}
                  >
                    {/* Pre-hover ambient shimmer inside each link */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                    {/* 3D Droplet Water Splash Effect on Click */}
                    {activeSplashIndex === index && (
                      <span className="absolute inset-0 rounded-full bg-cyan-400/50 animate-3d-droplet-splash pointer-events-none z-10" />
                    )}
                    <span className="relative z-20 font-medium">{link.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Glowing Contact CTA Button */}
          <div className="hidden md:block">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 opacity-75 blur-md group-hover:opacity-100 group-hover:blur-lg transition duration-500 group-hover:duration-200 animate-pulse pointer-events-none" />
              <a href="#contact">
                <Button
                  size="sm"
                  className="relative bg-slate-950 hover:bg-slate-900 text-slate-100 font-medium px-5 py-2.5 rounded-full transition-all duration-300 border border-blue-500/40 flex items-center gap-2 group-hover:text-cyan-300 shadow-xl group-hover:scale-105 active:scale-95"
                >
                  <span>Contact Me</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-100 hover:text-cyan-300 cursor-pointer transition-colors"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu with 3D Water Droplet Splash Effects & Active states */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-950/98 backdrop-blur-2xl border-b border-cyan-500/30 animate-fade-in shadow-2xl">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-3">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    onClick={() => handleMobileLinkClick(index, link.href)}
                    key={index}
                    className={`relative text-left text-lg py-3 transition-all duration-300 border rounded-xl px-4 cursor-pointer overflow-hidden ${
                      isActive
                        ? "bg-cyan-500/20 text-cyan-200 border-cyan-400 animate-active-glow font-bold"
                        : "text-slate-300 hover:text-cyan-300 border-slate-900/80 bg-slate-900/40 hover:bg-slate-900/80 hover:border-cyan-400/40"
                    }`}
                  >
                    {/* Mobile 3D Droplet Splash Effect */}
                    {activeMobileSplashIndex === index && (
                      <span className="absolute inset-0 rounded-xl bg-cyan-400/50 animate-3d-droplet-splash pointer-events-none z-10" />
                    )}
                    <span className="relative z-20 font-medium">{link.label}</span>
                  </button>
                );
              })}

              <div className="relative group w-full mt-3">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 rounded-xl blur-md opacity-80 animate-pulse" />
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.location.href = "#contact";
                  }}
                  className="relative w-full bg-slate-950 hover:bg-slate-900 text-slate-100 font-medium py-3 rounded-xl border border-blue-500/40 flex items-center justify-center gap-2"
                >
                  <span>Contact Me</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};