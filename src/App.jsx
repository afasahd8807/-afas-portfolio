import { useEffect, useRef, useState } from "react";

import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Cloud,
  Code2,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Headphones,
  Laptop,
  Mail,
  Menu,
  Network,
  Server,
  ShieldCheck,
  Terminal,
  Wrench,
  X,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

/*
  -----------------------------------------------------
  UPDATE THESE LINKS WITH YOUR REAL DETAILS
  -----------------------------------------------------
*/
const profile = {
  email: "afasahd@gmail.com",
  linkedin: "https://www.linkedin.com/in/afas-ahamed-3032692aa",
  github: "#",
  resume: "/Afas-Ahamed-CV.pdf",
};

const navLinks = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

const itSkills = [
  {
    name: "Hardware & Software Troubleshooting",
    icon: Wrench,
  },
  {
    name: "Windows / End-User Support",
    icon: Laptop,
  },
  {
    name: "Networking Fundamentals",
    icon: Network,
  },
  {
    name: "TCP/IP, DNS & DHCP",
    icon: Server,
  },
  {
    name: "System Installation & Configuration",
    icon: Terminal,
  },
  {
    name: "Remote User Support",
    icon: Headphones,
  },
  {
    name: "Microsoft 365 Support",
    icon: Cloud,
  },
  {
    name: "IT Asset & Device Support",
    icon: Laptop,
  },
  {
    name: "Basic Cybersecurity",
    icon: ShieldCheck,
  },
  {
    name: "Technical Documentation",
    icon: Code2,
  },
];

const developmentSkills = [
  "React.js",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Git & GitHub",
];

const cloudSkills = [
  "Microsoft Azure",
  "Azure Fundamentals",
  "Cloud Concepts",
  "Virtual Machines",
  "Cloud Networking",
  "Identity Fundamentals",
  "Cloud Security Basics",
  "Cloud Storage",
];

const education = [
  {
    title: "Bachelor of Information Technology",
    place: "University of Moratuwa",
  },
  {
    title: "Higher National Diploma in IT",
    place: "University of Moratuwa",
  },
  {
    title: "Diploma in Information Technology",
    place: "University of Moratuwa",
  },
];

const certifications = [
  {
    title: "Microsoft Azure Fundamentals",
    short: "AZ-900",
  },
  {
    title: "Google IT Support",
    short: "Google",
  },
];

// Small drifting "spark" dots layered over the hero visual — purely
// decorative, positioned around the terminal card for extra sparkle.
const heroSparks = [
  { top: "6%", left: "12%", size: 5, duration: 4.2, delay: 0 },
  { top: "18%", left: "88%", size: 4, duration: 5, delay: 0.6 },
  { top: "82%", left: "20%", size: 4, duration: 4.6, delay: 1.2 },
  { top: "70%", left: "92%", size: 6, duration: 5.4, delay: 0.3 },
  { top: "40%", left: "4%", size: 3, duration: 3.8, delay: 1.6 },
];

function SectionTitle({ label, title, description }) {
  return (
    <div className="mb-12 max-w-3xl">
      <div className="mb-4 flex items-center gap-3">
        <span className="eyebrow-line" />
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
          {label}
        </span>
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 leading-8 text-gray-400">{description}</p>
      )}
    </div>
  );
}

function BrandLogo() {
  return (
    <span className="flex items-center gap-3">
      <span className="brand-mark relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-blue-300/30 bg-gradient-to-br from-blue-500 via-indigo-600 to-violet-700 text-white shadow-lg shadow-blue-700/25">
        <Cloud size={24} strokeWidth={2.2} />
        <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#06060c] bg-emerald-400 text-[#04120d]">
          <Headphones size={11} strokeWidth={3} />
        </span>
      </span>

      <span className="leading-none">
        <span className="block text-xl font-extrabold tracking-tight">
          Afas<span className="text-blue-400">.</span>
        </span>
        <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.22em] text-gray-500">
          IT Support &amp; Cloud
        </span>
      </span>
    </span>
  );
}

const bgIcons = [
  { Icon: Cloud, top: "8%", left: "10%", size: 46, duration: 22, delay: 0, drift: 1, color: "text-blue-400/[0.10]" },
  { Icon: Code2, top: "15%", left: "80%", size: 40, duration: 26, delay: 2, drift: 2, color: "text-violet-400/[0.10]" },
  { Icon: Database, top: "52%", left: "88%", size: 44, duration: 24, delay: 3, drift: 1, color: "text-blue-400/[0.08]" },
  { Icon: Terminal, top: "66%", left: "12%", size: 36, duration: 20, delay: 0.5, drift: 2, color: "text-violet-400/[0.10]" },
  { Icon: ShieldCheck, top: "76%", left: "72%", size: 42, duration: 28, delay: 4, drift: 3, color: "text-emerald-400/[0.10]" },
];

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const progressRef = useRef(null);
  const spotlightRef = useRef(null);
  const pointerFrameRef = useRef(null);

  useEffect(() => {
    let frameId = null;
    let lastBackToTopVisibility = window.scrollY > 600;

    setShowBackToTop(lastBackToTopVisibility);

    const updateScrollEffects = () => {
      const scrollTop = window.scrollY;
      const docHeight = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      const progress = Math.min(Math.max(scrollTop / docHeight, 0), 1);

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }

      const shouldShowBackToTop = scrollTop > 600;
      if (shouldShowBackToTop !== lastBackToTopVisibility) {
        lastBackToTopVisibility = shouldShowBackToTop;
        setShowBackToTop(shouldShowBackToTop);
      }

      frameId = null;
    };

    const handleScroll = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateScrollEffects);
      }
    };

    updateScrollEffects();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      document.documentElement.classList.toggle(
        "animations-paused",
        document.hidden,
      );
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.documentElement.classList.remove("animations-paused");
    };
  }, []);

  const handleHeroMouseMove = (e) => {
    if (!spotlightRef.current || pointerFrameRef.current !== null) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    pointerFrameRef.current = window.requestAnimationFrame(() => {
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty("--spotlight-x", `${x}px`);
        spotlightRef.current.style.setProperty("--spotlight-y", `${y}px`);
        spotlightRef.current.style.opacity = "1";
      }
      pointerFrameRef.current = null;
    });
  };

  const handleHeroMouseLeave = () => {
    if (spotlightRef.current) spotlightRef.current.style.opacity = "0";
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#030308] text-white">
      {/* Background */}
      <div
        className="background-stage pointer-events-none fixed inset-0 overflow-hidden"
      >
        <div className="aurora" />
        <div className="blob blob-one" />
        <div className="blob blob-two" />
        <div className="blob blob-three" />
        <div className="blob blob-four" />
        <div className="particles" />
        <div className="bg-icons-layer">
          {bgIcons.map(({ Icon, top, left, size, duration, delay, drift, color }, i) => (
            <div
              key={i}
              className={`bg-icon bg-icon-drift-${drift} ${color}`}
              style={{
                top,
                left,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
              }}
            >
              <Icon size={size} strokeWidth={1.4} />
            </div>
          ))}
        </div>
        <div className="grid-bg absolute inset-0 opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030308_75%)]" />
      </div>

      {/* Scroll progress bar */}
      <div
        ref={progressRef}
        className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left scale-x-0 transform-gpu bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 will-change-transform"
      />

      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-black/40 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a
            href="#home"
            className="rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label="Afas IT Support and Cloud — home"
          >
            <BrandLogo />
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map(([name, href]) => (
              <a
                key={name}
                href={href}
                className="nav-link text-sm font-medium text-gray-400"
              >
                {name}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-full border border-violet-400/25 bg-violet-500/10 px-5 py-2.5 text-sm font-semibold text-violet-200 transition hover:bg-violet-500/20 lg:block"
          >
            Let's Connect
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/10 p-2 text-gray-300 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/[0.06] bg-[#06060c]/95 px-6 py-6 backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-2 text-gray-300 transition hover:bg-white/5 hover:text-white"
                >
                  {name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full border border-violet-400/25 bg-violet-500/10 px-5 py-2.5 text-center text-sm font-semibold text-violet-200 transition hover:bg-violet-500/20"
              >
                Let's Connect
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        {/* HERO */}
        <section
          id="home"
          onMouseMove={handleHeroMouseMove}
          onMouseLeave={handleHeroMouseLeave}
          className="relative flex min-h-screen items-center overflow-hidden pt-24"
        >
          {/* Cursor-tracking glow — desktop only, follows pointer within the hero */}
          <div
            ref={spotlightRef}
            className="hero-spotlight pointer-events-none absolute inset-0 z-0 hidden sm:block"
          />

          <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.08fr_.92fr]">
            <div>
              <div className="fade-up mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-4 py-2 text-sm text-cyan-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-35" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                </span>
                Building my career in Cloud Engineering
              </div>

              <p className="fade-up mb-4 text-lg font-medium text-blue-400 sm:text-xl">
                Hello, I'm
              </p>

              <h1 className="fade-up-delay break-words text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
                <span className="gradient-text">Afas Ahamed</span>
              </h1>

              <div className="fade-up-delay-2 mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-lg font-medium text-gray-300 sm:text-xl">
                <span>IT Support Intern</span>
                <span className="text-violet-500">•</span>
                <span>MERN Developer</span>
                <span className="text-cyan-500">•</span>
                <span>Cloud Engineer</span>
              </div>

              <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
                IT professional passionate about technical support, modern web
                development and cloud technologies. Currently working as an
                <span className="text-gray-200">
                  {" "}
                  IT Support Intern at QS4QS
                </span>{" "}
                while building my skills toward a career in cloud engineering.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="glow-button group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 px-7 py-3.5 font-semibold text-white transition hover:scale-[1.03]"
                >
                  View My Work
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </a>

                <a
                  href={profile.resume}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3.5 font-semibold text-gray-200 transition hover:border-white/20 hover:bg-white/[0.08]"
                >
                  <Download size={18} />
                  Download CV
                </a>
              </div>

              <div className="mt-10 flex items-center gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white"
                >
                  <FaGithub size={19} />
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-white"
                >
                  <FaLinkedin size={19} />
                </a>

                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-white"
                >
                  <Mail size={19} />
                </a>
              </div>
            </div>

            {/* HERO VISUAL */}
            <div className="relative mx-auto block w-full max-w-md sm:max-w-lg">
              <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-blue-600/20 via-violet-600/15 to-cyan-500/20 blur-3xl sm:-inset-10" />

              {/* Decorative drifting sparks — visible at every breakpoint */}
              {heroSparks.map((s, i) => (
                <span
                  key={i}
                  className="spark"
                  style={{
                    top: s.top,
                    left: s.left,
                    width: s.size,
                    height: s.size,
                    animationDuration: `${s.duration}s`,
                    animationDelay: `${s.delay}s`,
                  }}
                />
              ))}

              <div className="floating relative">
                {/* Pulsing rings — a live focal point on every breakpoint,
                    including mobile where the orbit rings shrink down */}
                <div className="pulse-ring" />
                <div className="pulse-ring pulse-ring-delay" />

                <div className="glass overflow-hidden rounded-3xl shadow-2xl shadow-violet-900/20">
                  <div className="flex items-center gap-2 border-b border-white/[0.07] px-4 py-3 sm:px-6 sm:py-4">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80 sm:h-3 sm:w-3" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80 sm:h-3 sm:w-3" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/80 sm:h-3 sm:w-3" />

                    <span className="ml-2 text-[10px] text-gray-500 sm:ml-3 sm:text-xs">
                      afas@portfolio ~
                    </span>
                  </div>

                  <div className="space-y-4 p-5 font-mono text-xs sm:space-y-5 sm:p-7 sm:text-sm">
                    <div>
                      <span className="text-violet-400">$</span>{" "}
                      <span className="text-gray-300">whoami</span>
                    </div>

                    <div className="pl-2 text-blue-300">Afas Ahamed</div>

                    <div>
                      <span className="text-violet-400">$</span>{" "}
                      <span className="text-gray-300">cat role.txt</span>
                    </div>

                    <div className="space-y-2 pl-2 text-gray-400">
                      <p>
                        <span className="text-emerald-400">✓</span> IT Support
                        Intern @ QS4QS
                      </p>

                      <p>
                        <span className="text-emerald-400">✓</span> MERN Stack
                        Developer
                      </p>

                      <p>
                        <span className="text-emerald-400">✓</span> Aspiring
                        Cloud Engineer
                      </p>
                    </div>

                    <div>
                      <span className="text-violet-400">$</span>{" "}
                      <span className="text-gray-300">skills --cloud</span>
                    </div>

                    <div className="pl-2 text-cyan-300">
                      Azure • Cloud • Networking • Support
                    </div>

                    <div className="flex items-center">
                      <span className="text-violet-400">$</span>
                      <span className="ml-2 h-5 w-2 animate-pulse bg-violet-400" />
                    </div>
                  </div>
                </div>

                {/* Current Role — desktop/tablet floating badge (hidden on mobile to avoid overflow) */}
                <div className="floating-delay absolute -bottom-7 -left-2 hidden rounded-2xl border border-emerald-400/20 bg-[#080811]/90 px-3 py-3 shadow-2xl backdrop-blur-xl sm:-bottom-9 sm:-left-9 sm:block sm:px-5 sm:py-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Headphones className="text-emerald-400" size={21} />

                    <div>
                      <p className="text-[10px] text-gray-500 sm:text-xs">
                        Current Role
                      </p>

                      <p className="text-sm font-semibold text-gray-100 sm:text-base">
                        IT Support Intern
                      </p>
                    </div>
                  </div>
                </div>

                {/* Target Role — desktop/tablet floating badge (hidden on mobile to avoid overflow) */}
                <div className="floating-delay absolute -bottom-7 -right-2 hidden rounded-2xl border border-blue-400/20 bg-[#080811]/90 px-3 py-3 shadow-2xl backdrop-blur-xl sm:-bottom-9 sm:-right-9 sm:block sm:px-5 sm:py-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Cloud className="text-blue-400" size={21} />

                    <div>
                      <p className="text-[10px] text-gray-500 sm:text-xs">
                        Target Role
                      </p>

                      <p className="text-sm font-semibold text-gray-100 sm:text-base">
                        Cloud Engineer
                      </p>
                    </div>
                  </div>
                </div>

                {/* MERN Stack — desktop/tablet floating badge (hidden on mobile to avoid overflow) */}
                <div className="floating absolute -right-2 -top-7 hidden rounded-2xl border border-violet-400/20 bg-[#080811]/90 px-3 py-3 shadow-2xl backdrop-blur-xl sm:-right-8 sm:-top-8 sm:block sm:px-5 sm:py-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Code2 className="text-violet-400" size={20} />

                    <div>
                      <p className="text-[10px] text-gray-500 sm:text-xs">
                        Development
                      </p>

                      <p className="text-sm font-semibold sm:text-base">
                        MERN Stack
                      </p>
                    </div>
                  </div>
                </div>

                {/*
                  Orbiting icons — previously "hidden sm:block", which removed
                  them entirely on mobile. Now they render at every breakpoint;
                  index.css shrinks their radius (.orbit-pos-*) and size
                  (.orbit-icon) under 640px so they stay inside the viewport.
                */}
                <div className="orbit-ring orbit-ring-a block">
                  <div className="orbit-pos-a">
                    <div className="orbit-icon orbit-icon-a">
                      <Wrench size={16} className="text-blue-300" />
                    </div>
                  </div>
                </div>

                <div className="orbit-ring orbit-ring-b block">
                  <div className="orbit-pos-b">
                    <div className="orbit-icon orbit-icon-b">
                      <Network size={16} className="text-violet-300" />
                    </div>
                  </div>
                </div>

                <div className="orbit-ring orbit-ring-c block">
                  <div className="orbit-pos-c">
                    <div className="orbit-icon orbit-icon-c">
                      <ShieldCheck size={16} className="text-cyan-300" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile-only compact chips — replaces floating badges below sm
                  breakpoint. Each now has a staggered glow pulse so the hero
                  still feels alive on mobile, not just statically rendered. */}
              <div className="mt-8 flex flex-wrap justify-center gap-2 sm:hidden">
                <span
                  className="mobile-chip-pulse inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-500/[0.07] px-3 py-1.5 text-xs font-medium text-emerald-200"
                  style={{ animationDelay: "0s" }}
                >
                  <Headphones size={13} />
                  IT Support Intern
                </span>

                <span
                  className="mobile-chip-pulse inline-flex items-center gap-1.5 rounded-full border border-blue-400/20 bg-blue-500/[0.07] px-3 py-1.5 text-xs font-medium text-blue-200"
                  style={{ animationDelay: "0.7s" }}
                >
                  <Cloud size={13} />
                  Target: Cloud Engineer
                </span>

                <span
                  className="mobile-chip-pulse inline-flex items-center gap-1.5 rounded-full border border-violet-400/20 bg-violet-500/[0.07] px-3 py-1.5 text-xs font-medium text-violet-200"
                  style={{ animationDelay: "1.4s" }}
                >
                  <Code2 size={13} />
                  MERN Stack
                </span>
              </div>
            </div>
          </div>

          <a
            href="#about"
            aria-label="Scroll to about"
            className="absolute bottom-7 left-1/2 -translate-x-1/2 text-gray-600 transition hover:text-violet-400"
          >
            <ChevronDown className="animate-bounce" />
          </a>
        </section>

        {/* MARQUEE STRIP */}
        <section aria-label="Tech stack" className="relative border-y border-white/[0.06] bg-white/[0.015] py-5">
          <div className="marquee-wrap">
            <div className="marquee-track">
              {[...developmentSkills, ...cloudSkills, ...developmentSkills, ...cloudSkills].map(
                (skill, index) => (
                  <span key={`${skill}-${index}`} className="marquee-item">
                    {skill}
                  </span>
                ),
              )}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <SectionTitle
                label="About me"
                title="Technology, support & cloud."
                description="I enjoy solving technical problems, supporting users and building applications. My goal is to combine my IT support foundation, development experience and cloud knowledge to grow into a skilled cloud engineer."
              />
            </Reveal>

            <div className="grid items-stretch gap-5 sm:grid-cols-2 md:grid-cols-3">
              <Reveal delay={0} className="h-full">
                <div className="glass card-hover h-full rounded-3xl p-7">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                    <Headphones />
                  </div>

                  <h3 className="text-xl font-bold">IT Support</h3>

                  <p className="mt-3 leading-7 text-gray-400">
                    Building hands-on experience in end-user support,
                    troubleshooting, systems, devices and networking.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={100} className="h-full">
                <div className="glass card-hover h-full rounded-3xl p-7">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400">
                    <Code2 />
                  </div>

                  <h3 className="text-xl font-bold">MERN Development</h3>

                  <p className="mt-3 leading-7 text-gray-400">
                    Developing full-stack web applications using MongoDB,
                    Express.js, React and Node.js.
                  </p>
                </div>
              </Reveal>

              <Reveal
                delay={200}
                className="h-full sm:col-span-2 md:col-span-1"
              >
                <div className="glass card-hover h-full rounded-3xl p-7">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                    <Cloud />
                  </div>

                  <h3 className="text-xl font-bold">Cloud Engineering</h3>

                  <p className="mt-3 leading-7 text-gray-400">
                    Expanding my knowledge of Microsoft Azure, cloud
                    infrastructure, networking, security and modern IT
                    environments.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <SectionTitle label="Experience" title="Where I'm working now." />
            </Reveal>

            <Reveal delay={100}>
              <div className="glass card-hover relative overflow-hidden rounded-3xl p-7 sm:p-10">
                <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-blue-600/10 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

                <div className="relative grid gap-9 lg:grid-cols-[1fr_1.4fr]">
                  <div>
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 shadow-lg shadow-violet-900/25">
                      <BriefcaseBusiness size={25} />
                    </div>

                    <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-violet-400">
                      Current Experience
                    </p>

                    <h3 className="text-2xl font-bold sm:text-3xl">
                      IT Support Intern
                    </h3>

                    <p className="mt-2 text-lg text-gray-400">QS4QS</p>
                  </div>

                  <div>
                    <p className="mb-5 leading-8 text-gray-400">
                      Developing practical IT support experience while
                      strengthening the technical foundation required for systems,
                      networking and cloud engineering.
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        "End-user technical support",
                        "Hardware & software troubleshooting",
                        "System setup & configuration",
                        "Networking fundamentals",
                        "Technical documentation",
                        "User-focused problem solving",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-xl bg-white/[0.03] px-4 py-3 text-sm text-gray-300"
                        >
                          <CheckCircle2
                            size={17}
                            className="shrink-0 text-blue-400"
                          />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <SectionTitle
                label="Technical toolkit"
                title="Skills I bring to the table."
                description="A combination of IT support fundamentals, software development and growing cloud expertise."
              />
            </Reveal>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* IT */}
              <Reveal delay={0}>
                <div className="glass card-hover rounded-3xl p-7 sm:p-8">
                  <div className="mb-7 flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                      <Headphones size={23} />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500">
                        Core
                      </p>
                      <h3 className="text-xl font-bold">IT Support</h3>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {itSkills.map(({ name, icon: Icon }) => (
                      <div
                        key={name}
                        className="group flex items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.025] px-4 py-3.5 text-sm text-gray-400 transition hover:border-blue-400/20 hover:text-gray-200"
                      >
                        <Icon size={16} className="shrink-0 text-blue-400" />
                        {name}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <div className="space-y-6">
                {/* DEVELOPMENT */}
                <Reveal delay={100}>
                  <div className="glass card-hover rounded-3xl p-7 sm:p-8">
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                        <Code2 size={23} />
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wider text-gray-500">
                          Development
                        </p>
                        <h3 className="text-xl font-bold">MERN Stack</h3>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {developmentSkills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-violet-400/15 bg-violet-500/[0.07] px-4 py-2 text-sm text-violet-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>

                {/* CLOUD */}
                <Reveal delay={200}>
                  <div className="glass card-hover rounded-3xl p-7 sm:p-8">
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                        <Cloud size={23} />
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wider text-gray-500">
                          Growing Focus
                        </p>
                        <h3 className="text-xl font-bold">Cloud & Azure</h3>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {cloudSkills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-cyan-400/15 bg-cyan-500/[0.07] px-4 py-2 text-sm text-cyan-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <SectionTitle
                label="Featured project"
                title="Things I've built."
                description="A practical demonstration of my full-stack MERN development skills."
              />
            </Reveal>

            <Reveal delay={100}>
              <div className="glass card-hover overflow-hidden rounded-[2rem]">
              <div className="grid lg:grid-cols-2">
                {/* PROJECT VISUAL */}
                <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden border-b border-white/[0.07] bg-[#060612] p-6 sm:min-h-[380px] sm:p-8 lg:border-b-0 lg:border-r">
                  <div className="absolute left-[10%] top-[12%] h-56 w-56 rounded-full bg-blue-600/20 blur-3xl" />
                  <div className="absolute bottom-[5%] right-[5%] h-64 w-64 rounded-full bg-violet-600/20 blur-3xl" />

                  <div className="floating relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b16] shadow-2xl">
                    <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

                      <div className="mx-auto rounded-md bg-white/[0.04] px-10 py-1 text-[10px] text-gray-600">
                        smart-tourism.app
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="mb-4 flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-cyan-500/20">
                        <div className="text-center">
                          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10">
                            <Cloud className="text-blue-300" />
                          </div>
                          <p className="font-semibold">Smart Tourism</p>
                          <p className="mt-1 text-xs text-gray-500">
                            Explore smarter. Travel better.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        {[1, 2, 3].map((item) => (
                          <div
                            key={item}
                            className="h-16 rounded-lg border border-white/[0.05] bg-white/[0.03]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* PROJECT INFO */}
                <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                  <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.07] px-3 py-1.5 text-xs font-medium text-violet-300">
                    <Database size={13} />
                    Full-Stack Application
                  </div>

                  <h3 className="text-3xl font-bold sm:text-4xl">
                    Smart Tourism Website
                  </h3>

                  <p className="mt-5 leading-8 text-gray-400">
                    A full-stack smart tourism web application created using the
                    MERN stack, combining a modern React frontend with a Node.js
                    and Express backend and MongoDB for data management.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {[
                      "MongoDB",
                      "Express.js",
                      "React.js",
                      "Node.js",
                      "JavaScript",
                      "REST API",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/[0.07] bg-white/[0.035] px-3 py-1.5 text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-9 flex flex-wrap gap-4">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 font-semibold text-white transition hover:text-violet-300"
                    >
                      <FaGithub size={18} />
                      View Code
                    </a>

                    <a
                      href="#"
                      className="inline-flex items-center gap-2 font-semibold text-white transition hover:text-cyan-300"
                    >
                      <ExternalLink size={18} />
                      Live Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </Reveal>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <SectionTitle
                label="Qualifications"
                title="Education & certifications."
              />
            </Reveal>

            <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <GraduationCap className="text-blue-400" />
                  <h3 className="text-xl font-bold">Education</h3>
                </div>

                <div className="space-y-4">
                  {education.map((item, index) => (
                    <Reveal key={item.title} delay={index * 80}>
                      <div className="glass card-hover flex gap-5 rounded-2xl p-6">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-sm font-bold text-blue-400">
                          0{index + 1}
                        </div>

                        <div>
                          <h4 className="font-semibold leading-6 text-gray-100">
                            {item.title}
                          </h4>

                          <p className="mt-2 text-sm text-gray-500">
                            {item.place}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-5 flex items-center gap-3">
                  <Award className="text-violet-400" />
                  <h3 className="text-xl font-bold">Certifications</h3>
                </div>

                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <Reveal key={cert.title} delay={index * 80}>
                      <div className="glass card-hover relative overflow-hidden rounded-2xl p-6">
                        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-600/10 blur-2xl" />

                        <div className="relative flex items-center gap-5">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/10">
                            <Award size={21} className="text-violet-400" />
                          </div>

                          <div>
                            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">
                              {cert.short}
                            </p>

                            <h4 className="mt-1 font-semibold text-gray-100">
                              {cert.title}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-24 sm:py-36">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-blue-600/[0.12] via-[#090910] to-violet-600/[0.15] px-6 py-14 text-center sm:px-12 sm:py-20">
              <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
              <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-cyan-600/20 blur-3xl" />

              <div className="relative mx-auto max-w-3xl">
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
                  Let's connect
                </span>

                <h2 className="mt-5 break-words text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
                  Let's build something{" "}
                  <span className="gradient-text">great.</span>
                </h2>

                <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
                  I'm interested in opportunities where I can contribute my IT
                  support and development experience while continuing to grow in
                  cloud engineering.
                </p>

                <div className="mt-9 flex flex-wrap justify-center gap-4">
                  <a
                    href={`mailto:${profile.email}`}
                    className="glow-button inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 px-7 py-3.5 font-semibold"
                  >
                    <Mail size={18} />
                    Contact Me
                  </a>

                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3.5 font-semibold transition hover:bg-white/[0.08]"
                  >
                    <FaLinkedin size={18} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-center text-sm text-gray-600 sm:flex-row sm:px-8">
          <p>© 2026 Afas Ahamed. All rights reserved.</p>

          <p>
            Built with React
            <span className="mx-2 text-violet-500">•</span>
            Tailwind CSS
            <span className="mx-2 text-cyan-500">•</span>
            Vite
          </p>
        </div>
      </footer>
      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`back-to-top ${showBackToTop ? "visible" : ""}`}
      >
        <ChevronDown className="rotate-180 text-gray-300" size={20} />
      </button>
    </div>
  );
}
export default App;
