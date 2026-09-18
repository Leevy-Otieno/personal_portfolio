import { Button } from "@/components/Button";
import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-slate-950/50"
          : "bg-transparent py-5"
      } z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Spin-on-Zoom Logo with Midnight Blue Animated Border */}
        <a href="#" className="relative group inline-block py-1 px-2">
          {/* Animated Midnight Blue Border & Glow Halo (Reveals on hover) */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1.5px] blur-[1px] group-hover:blur-sm pointer-events-none" />
          
          <div className="absolute inset-0.5 rounded-[10px] bg-slate-950/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {/* Text Container: Bounces on idle, zooms + 360deg spins on hover */}
          <div className="relative z-10 px-2 py-0.5 animate-bounce group-hover:animate-none transform transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:rotate-[360deg]">
            <span className="text-xl font-black tracking-tight text-slate-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-cyan-300 group-hover:to-indigo-300 drop-shadow-sm group-hover:drop-shadow-[0_0_20px_rgba(56,189,248,0.8)] transition-colors duration-500">
              Leevy Otieno
            </span>
            <span className="text-blue-500 font-bold group-hover:text-cyan-400 transition-colors duration-500">
              .
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="bg-slate-900/80 border border-slate-800/80 backdrop-blur-md rounded-full px-2 py-1 flex items-center gap-1 shadow-inner">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="relative px-4 py-2 text-sm text-slate-300 hover:text-cyan-300 rounded-full hover:bg-slate-800/80 transition-all duration-300 hover:shadow-[0_0_15px_rgba(56,189,248,0.25)] border border-transparent hover:border-blue-500/30 group"
              >
                {link.label}
              </a>
            ))}
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
          className="md:hidden p-2 text-slate-100 hover:text-blue-400 cursor-pointer transition-colors"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 animate-fade-in shadow-xl">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-slate-300 hover:text-cyan-400 py-2 transition-colors border-b border-slate-900/50"
              >
                {link.label}
              </a>
            ))}

            <div className="relative group w-full mt-2">
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
  );
};