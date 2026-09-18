import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Leevy-Otieno", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/leevy-otieno-22a3ab279/",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "#", label: "Twitter" },
  {
    icon: Instagram,
    href: "https://www.instagram.com/code.with.leevy/",
    label: "Instagram",
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-800/80 bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo with Spin-Zoom + Midnight Blue Glowing Border */}
          <div className="text-center md:text-left">
            <a href="#" className="relative group inline-block py-1 px-2">
              {/* Midnight Blue Glowing Border Halo */}
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
            <p className="text-sm text-slate-400 mt-2">
              © {currentYear} Leevy Otieno. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 hover:text-cyan-300 transition-all duration-300 hover:translate-y-[-2px]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <div key={social.label} className="relative group">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition duration-300 blur-md pointer-events-none" />
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="relative flex items-center justify-center p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-slate-950 hover:bg-cyan-400 hover:border-cyan-300 shadow-lg transition-all duration-300 group-hover:scale-110 active:scale-95"
                >
                  <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
