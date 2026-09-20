import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  FileText,
  Download,
  X,
  Sparkles,
  User,
  Briefcase,
  MessageSquare,
  Laugh,
  Cpu,
  Clock,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "Python",
  "Django",
  "Wordpress",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Redis",
  "Docker",
  "AWS",
  "Vercel",
  "Tailwind CSS",
  "Prisma",
  "Figma",
  "Git",
  "GitHub Actions",
];

// Fallbacks just in case network/offline hiccups occur
const fallbackJokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
  "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?' 🍻",
  "Why do Java developers wear glasses? Because they don't C#! 👓",
];

const fallbackFacts = [
  "The first computer mouse, invented by Douglas Engelbart in 1964, was made of carved wood! 🖱️",
  "The Apollo 11 Guidance Computer that landed humans on the moon had only about 64KB of memory! 🚀",
];

// Rotating teaser prompts for the unopened notification bubble
const teaserPrompts = [
  "😂 Leevy made me have such a good day! Click me! ✨",
  "🤖 Wanna hear a hilarious programming joke right now? 🤣",
  "💡 Hey there! Want a cool computer fact or a good laugh?",
  "🚀 Tap me to take a quick tour of Leevy's portfolio!",
];

export const Hero = () => {
  // Chatbot State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "HAHA! 😂 I'm laughing because Leevy made me have such a good day! I'm Leevy's friend, and I'm here to share those good vibes with you. Want to hear more jokes, learn a cool computer fact, or take a tour of his portfolio?",
    },
  ]);

  // Click tracking states for dynamic button text
  const [hasClickedJoke, setHasClickedJoke] = useState(false);
  const [hasClickedFact, setHasClickedFact] = useState(false);

  // Index for rotating teaser notifications
  const [teaserIndex, setTeaserIndex] = useState(0);

  // Rotate teaser messages every 5 seconds when chat is closed
  useEffect(() => {
    if (isChatOpen) return;
    const interval = setInterval(() => {
      setTeaserIndex((prev) => (prev + 1) % teaserPrompts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isChatOpen]);

  // Reference for auto-scrolling to the latest message
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isChatOpen) {
      scrollToBottom();
    }
  }, [messages, isChatOpen]);

  const handleJokeAction = async () => {
    setHasClickedJoke(true);
    try {
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Programming?safe-mode",
      );
      if (!response.ok) throw new Error("Failed to fetch programming joke");
      const data = await response.json();

      let jokeText = "";
      if (data.type === "single") {
        jokeText = `${data.joke} 💻`;
      } else {
        jokeText = `${data.setup} - ${data.delivery} 😆`;
      }

      setMessages((prev) => [
        ...prev,
        { sender: "user", text: "Wanna hear a joke! 😄" },
        { sender: "bot", text: `HAHA! Here you go: ${jokeText}` },
      ]);
    } catch (error) {
      const randomJoke =
        fallbackJokes[Math.floor(Math.random() * fallbackJokes.length)];
      setMessages((prev) => [
        ...prev,
        { sender: "user", text: "Wanna hear a joke! 😄" },
        { sender: "bot", text: `HAHA! Here you go: ${randomJoke}` },
      ]);
    }
  };

  const handleFactAction = async () => {
    setHasClickedFact(true);
    try {
      const response = await fetch(
        "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en",
      );
      if (!response.ok) throw new Error("Failed to fetch fact");
      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        { sender: "user", text: "Tell me an interesting fact! 🧠" },
        { sender: "bot", text: `${data.text} 💡` },
      ]);
    } catch (error) {
      const randomFact =
        fallbackFacts[Math.floor(Math.random() * fallbackFacts.length)];
      setMessages((prev) => [
        ...prev,
        { sender: "user", text: "Tell me an interesting fact! 🧠" },
        { sender: "bot", text: randomFact },
      ]);
    }
  };

  const handleNavigate = (sectionId, sectionName) => {
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: `Take me to ${sectionName} 🚀` },
      {
        sender: "bot",
        text: `Whipping you over to the ${sectionName} section right now!`,
      },
    ]);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = `#${sectionId}`;
      }
      setIsChatOpen(false);
    }, 800);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 text-slate-100">
      {/* Background Overlay */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/70 to-slate-950" />
      </div>

      {/* Blue Glowing Ambient Spheres */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Blue Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60 shadow-sm shadow-cyan-400"
            style={{
              backgroundColor: "#38bdf8",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Role Badge with Idle Animated Border Background & Enhanced Hover State */}
            <div className="animate-fade-in inline-block">
              <div className="relative group/badge p-[2px] rounded-full overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] shadow-lg shadow-blue-950/50">
                {/* Continuous Animated Rotating Border Gradient (Idle & Hover) */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-400 via-indigo-600 to-blue-600 bg-[length:200%_auto] rounded-full opacity-80 group-hover/badge:opacity-100 group-hover/badge:animate-marquee transition-all duration-500 animate-pulse" />

                {/* Inner Badge Content */}
                <div className="relative px-5 py-2.5 rounded-full bg-slate-950/95 backdrop-blur-md flex items-center gap-3">
                  {/* Left Glowing Dot */}
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping shrink-0" />

                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-200">
                    {[
                      "Software",
                      "Engineer",
                      "•",
                      "React",
                      "Specialist",
                      "•",
                      "Python",
                      "Specialist",
                      "•",
                      "Machine",
                      "Learning",
                      "Enthusiast",
                    ].map((word, idx) =>
                      word === "•" ? (
                        <span key={idx} className="text-blue-500 select-none">
                          •
                        </span>
                      ) : (
                        <span
                          key={idx}
                          className="inline-block cursor-pointer transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-125 hover:-translate-y-1 hover:animate-bounce hover:text-cyan-300 hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.9)]"
                        >
                          {word}
                        </span>
                      ),
                    )}
                  </div>

                  {/* Right Glowing Dot */}
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-sm shadow-cyan-400 shrink-0" />
                </div>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                {/* Code With Purpose - Animated Hover Glow */}
                <span className="inline-block text-blue-400 transition-all duration-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:via-cyan-300 hover:to-indigo-400 drop-shadow-[0_0_25px_rgba(96,165,250,0.4)] hover:drop-shadow-[0_0_35px_rgba(56,189,248,0.8)] hover:-translate-y-1 hover:scale-[1.02] cursor-default">
                  Code With Purpose
                </span>
                <br />
                Deploy with
                <br />
                <span className="font-serif italic font-normal text-slate-200">
                  pride.
                </span>
              </h1>

              {/* Bio Paragraph: "Leevy Otieno" with Offset Bounce Cadence */}
              <p className="text-lg text-slate-300 max-w-lg animate-fade-in animation-delay-200 leading-relaxed">
                Hi, I'm{" "}
                <span className="inline-block cursor-pointer font-bold text-slate-100 animate-bounce [animation-duration:1.8s] [animation-delay:400ms] hover:animate-none transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-2 hover:scale-105 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:via-cyan-300 hover:to-indigo-400 hover:drop-shadow-[0_0_25px_rgba(56,189,248,0.85)]">
                  Leevy Otieno
                </span>{" "}
                — a software engineer specializing in Python, Django, Flask,
                React, Next.js, TypeScript, and WordPress. I build scalable,
                performant web applications that users love.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 animate-fade-in animation-delay-300">
              {/* Glowing Animated Contact Me Button */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 rounded-xl blur-md opacity-80 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse" />

                <a href="#contact" className="block">
                  <Button
                    size="lg"
                    className="relative bg-slate-950 hover:bg-slate-900 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 border border-blue-500/40 flex items-center gap-2 group-hover:text-blue-200 shadow-xl"
                  >
                    Contact Me{" "}
                    <ArrowRight className="w-5 h-5 text-cyan-400 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>

              {/* Animated Border Button for Resume with Idle Zoom & Icon Swap on Hover */}
              <AnimatedBorderButton>
                <a
                  href="/mycv.docx"
                  download="Leevy_Otieno_Resume_ReadOnly.docx"
                  className="relative group/resume inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-slate-950/90 border border-blue-500/30 text-cyan-300 font-medium transition-all duration-500 animate-pulse hover:animate-none hover:scale-105 hover:border-cyan-400/80 hover:text-white shadow-lg shadow-blue-950/40 hover:shadow-cyan-500/30 active:scale-95 overflow-hidden"
                >
                  {/* Outer Glowing Blue Aura on Hover */}
                  <span className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 opacity-0 group-hover/resume:opacity-100 group-hover/resume:blur-md transition-all duration-500 pointer-events-none" />

                  {/* Icon Container: FileText on idle, swaps to Download on hover */}
                  <div className="relative z-10 flex items-center justify-center w-5 h-5">
                    <FileText className="absolute w-4 h-4 text-cyan-400 transition-all duration-300 group-hover/resume:opacity-0 group-hover/resume:scale-75 group-hover/resume:-translate-y-2" />
                    <Download className="absolute w-4 h-4 text-white opacity-0 transition-all duration-300 group-hover/resume:opacity-100 group-hover/resume:scale-110 group-hover/resume:translate-y-0" />
                  </div>

                  {/* Button Text with Glowing Gradient */}
                  <span className="relative z-10 font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-200 group-hover/resume:from-white group-hover/resume:via-cyan-200 group-hover/resume:to-blue-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)] group-hover/resume:drop-shadow-[0_0_20px_rgba(56,189,248,0.9)] transition-all duration-300">
                    Read My Resume
                  </span>
                </a>
              </AnimatedBorderButton>
            </div>

            {/* Social Links with Hover Effects */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-slate-400">Follow me: </span>
              {[
                { icon: Github, href: "https://github.com/Leevy-Otieno" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/leevy-otieno-22a3ab279/",
                },
                { icon: Twitter, href: "#" },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/code.with.leevy/",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-2.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-blue-500/60 hover:text-cyan-300 hover:bg-slate-800/90 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image with Hover Bounce */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto group cursor-pointer">
              {/* Animated Outer Blue Glow Backdrop */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-600 via-cyan-400 to-indigo-600 opacity-60 blur-xl group-hover:opacity-100 group-hover:blur-2xl transition-all duration-500 animate-pulse" />

              {/* Glass Frame Container with Gentle Bounce Transition on Hover */}
              <div className="relative bg-slate-900/90 backdrop-blur-md rounded-3xl p-2.5 border border-blue-500/40 shadow-2xl shadow-blue-950/50 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-4 group-hover:scale-[1.02] group-hover:shadow-blue-500/30 group-hover:border-blue-400">
                <img
                  src="/porfolioprofile.jpg"
                  alt="Leevy Otieno"
                  className="w-full aspect-[4/5] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.01]"
                />

                {/* Availability Badge */}
                <div className="absolute -bottom-4 -right-4 bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-xl px-4 py-3 shadow-xl animate-float group-hover:border-blue-500/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-sm shadow-emerald-400/50" />
                    <span className="text-sm font-medium text-slate-100">
                      Available for work
                    </span>
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="absolute -top-4 -left-4 bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-xl px-4 py-3 shadow-xl animate-float animation-delay-500 group-hover:border-blue-500/30 transition-colors">
                  <div className="text-2xl font-bold text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]">
                    5+
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-slate-400 mb-6 text-center tracking-wide uppercase font-medium">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-slate-500 hover:text-blue-400 transition-colors cursor-default">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider font-medium">
            Scroll
          </span>
          <ChevronDown className="w-6 h-6 animate-bounce text-blue-400" />
        </a>
      </div>

      {/* ================= UNIVERSAL RESPONSIVE 3D EMOJI WIDGET ================= */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
        {/* Chat Dialog Box */}
        {isChatOpen && (
          <div className="mb-3 w-[88vw] sm:w-[380px] md:w-[420px] bg-slate-900/98 backdrop-blur-2xl border-2 border-cyan-400/60 rounded-3xl shadow-2xl shadow-cyan-950/95 overflow-hidden animate-fade-in flex flex-col max-h-[540px]">
            {/* Header */}
            <div className="relative group bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 hover:from-blue-500 hover:via-cyan-400 hover:to-indigo-500 p-4 flex items-center justify-between text-white transition-all duration-500 shadow-md">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10 flex items-center gap-3">
                {/* 3D Emoji Avatar */}
                <div className="relative w-9 h-9 rounded-full bg-slate-950/80 border-2 border-yellow-300 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform text-lg select-none">
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-ping z-20" />
                  😂
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base flex items-center gap-1.5 drop-shadow-sm">
                    😂 LeevyStack{" "}
                    <Sparkles className="w-4 h-4 text-yellow-300 animate-spin" />
                  </h3>
                  <p className="text-[11px] text-cyan-100 font-medium tracking-wide">
                    Oops!🤭I'm still laughing. Can't help it. He made me
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="relative z-10 p-2 rounded-xl bg-white/10 hover:bg-white/30 transition-all text-white active:scale-95"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Container */}
            <div className="p-4 sm:p-5 overflow-y-auto space-y-3.5 flex-1 text-sm max-h-[240px] scrollbar-thin scrollbar-thumb-cyan-500/40">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[88%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-lg ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-br-none font-medium shadow-blue-500/20"
                        : "bg-slate-800/95 border border-cyan-500/40 text-slate-100 rounded-bl-none shadow-cyan-950/50"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {/* Invisible element to target auto-scroll */}
              <div ref={messagesEndRef} />
            </div>

            {/* Interactive Action Buttons */}
            <div className="p-3.5 sm:p-4 bg-slate-950/95 border-t border-slate-800 flex flex-col gap-2.5">
              {/* Row 1: Joke & Fact Buttons with Dynamic Text */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleJokeAction}
                  className="relative group/btn py-2.5 px-3 bg-gradient-to-r from-cyan-500/20 to-blue-600/30 hover:from-cyan-500/40 hover:to-blue-600/50 border border-cyan-400/60 rounded-xl text-xs font-bold text-cyan-200 hover:text-white transition-all duration-300 flex items-center justify-center gap-1.5 active:scale-95 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/30 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  <Laugh className="w-4 h-4 text-yellow-300 group-hover/btn:rotate-12 transition-transform animate-bounce" />
                  {hasClickedJoke ? "Another joke" : "Wanna hear a joke"}
                </button>

                <button
                  onClick={handleFactAction}
                  className="relative group/btn py-2.5 px-3 bg-gradient-to-r from-indigo-500/20 to-purple-600/30 hover:from-indigo-500/40 hover:to-purple-600/50 border border-indigo-400/60 rounded-xl text-xs font-bold text-indigo-200 hover:text-white transition-all duration-300 flex items-center justify-center gap-1.5 active:scale-95 shadow-lg shadow-indigo-500/10 hover:shadow-indigo-400/30 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-indigo-400/10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  <Cpu className="w-4 h-4 text-cyan-300 group-hover/btn:scale-110 transition-transform animate-pulse" />
                  {hasClickedFact ? "Another fact" : "Interesting fact"}
                </button>
              </div>

              {/* Row 2: Page Navigation Bar */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5 pt-1">
                <button
                  onClick={() => handleNavigate("about", "About")}
                  className="py-2 px-2 bg-slate-800/80 hover:bg-cyan-950/60 border border-slate-700 hover:border-cyan-400/60 rounded-xl text-[10px] sm:text-[11px] font-semibold text-slate-200 hover:text-cyan-300 transition-all duration-300 flex items-center justify-center gap-1 shadow-sm"
                >
                  <User className="w-3 h-3 text-cyan-400 shrink-0" /> About
                </button>
                <button
                  onClick={() => handleNavigate("experience", "Experience")}
                  className="py-2 px-2 bg-slate-800/80 hover:bg-cyan-950/60 border border-slate-700 hover:border-cyan-400/60 rounded-xl text-[10px] sm:text-[11px] font-semibold text-slate-200 hover:text-cyan-300 transition-all duration-300 flex items-center justify-center gap-1 shadow-sm"
                >
                  <Clock className="w-3 h-3 text-cyan-300 shrink-0" /> Exp
                </button>
                <button
                  onClick={() => handleNavigate("projects", "Projects")}
                  className="py-2 px-2 bg-slate-800/80 hover:bg-cyan-950/60 border border-slate-700 hover:border-cyan-400/60 rounded-xl text-[10px] sm:text-[11px] font-semibold text-slate-200 hover:text-cyan-300 transition-all duration-300 flex items-center justify-center gap-1 shadow-sm"
                >
                  <Briefcase className="w-3 h-3 text-blue-400 shrink-0" />{" "}
                  Projects
                </button>
                <button
                  onClick={() => handleNavigate("testimonials", "Testimonials")}
                  className="py-2 px-2 bg-slate-800/80 hover:bg-cyan-950/60 border border-slate-700 hover:border-cyan-400/60 rounded-xl text-[10px] sm:text-[11px] font-semibold text-slate-200 hover:text-cyan-300 transition-all duration-300 flex items-center justify-center gap-1 shadow-sm"
                >
                  <MessageSquare className="w-3 h-3 text-indigo-400 shrink-0" />{" "}
                  Reviews
                </button>
                <button
                  onClick={() => handleNavigate("contact", "Contact")}
                  className="py-2 px-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 border border-blue-400/60 rounded-xl text-[10px] sm:text-[11px] font-bold text-white transition-all duration-300 flex items-center justify-center gap-1 shadow-md col-span-3 sm:col-span-1"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Floating Constantly Laughing Emoji Trigger with Responsive Animations */}
        <div className="flex items-center gap-3">
          {!isChatOpen && (
            <div className="flex items-center px-3 sm:px-4 py-2 bg-slate-900/95 backdrop-blur-md border border-cyan-400/50 rounded-2xl shadow-xl text-[11px] sm:text-xs font-semibold text-cyan-200 animate-pulse transition-all duration-500">
              {teaserPrompts[teaserIndex]}
            </div>
          )}

          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="relative group p-3.5 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-400 to-indigo-600 text-white shadow-2xl shadow-cyan-900/80 hover:shadow-cyan-400/90 transition-all duration-300 hover:scale-125 hover:rotate-12 active:scale-95 flex items-center justify-center animate-bounce [animation-duration:1.2s]"
            aria-label="Toggle Constantly Laughing Emoji Assistant"
          >
            {/* Glowing Aura Hover Ring */}
            <span className="absolute -inset-2 rounded-full bg-cyan-400 opacity-60 blur-md group-hover:opacity-100 transition duration-500 animate-pulse" />

            {/* Constantly shaking/laughing 😂 emoji avatar */}
            <div className="relative z-10 w-10 h-10 rounded-full bg-slate-950/90 border-2 border-yellow-300 flex items-center justify-center shadow-inner group-hover:bg-cyan-950 transition-colors text-2xl select-none animate-pulse">
              😂
              {/* Online glowing pulse */}
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-slate-950 animate-ping z-20" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
