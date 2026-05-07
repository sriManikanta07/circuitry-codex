import { createFileRoute } from "@tanstack/react-router";
import { NetworkDiagram } from "@/components/NetworkDiagram";
import { DataStream } from "@/components/DataStream";
import {
  ArrowDownToLine,
  Mail,
  Github,
  Linkedin,
  Cpu,
  Database,
  Code2,
  Braces,
  Atom,
  Server,
  Boxes,
  Sparkles,
  Activity,
  Terminal,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sri Manikanta P — AI / Full-Stack Developer" },
      {
        name: "description",
        content:
          "Cinematic portfolio of Sri Manikanta P — AI / Full-Stack developer building scalable APIs, real-time platforms, and LLM-powered products.",
      },
      { property: "og:title", content: "Sri Manikanta P — AI / Full-Stack Developer" },
      {
        property: "og:description",
        content: "Scalable systems · Real-time platforms · LLM/RAG engineering.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
});

const experiences = [
  {
    tag: "MODULE.01",
    role: "AI Research Intern",
    org: "Infosys Springboard",
    period: "Aug 2025 — Oct 2025",
    accent: "cyan" as const,
    bullets: [
      "Engineered a real-time face emotion detection system with an ensemble of CNN models — +14% accuracy, +22% inference efficiency over baseline.",
      "Designed an intelligent capture mechanism that triggers shutter at peak emotional expression, fixing timing inconsistencies in conventional systems.",
    ],
  },
];

const projects = [
  {
    tag: "PRJ.01",
    name: "SANDESHA",
    sub: "Real-Time AI-Powered Chat Platform",
    stack: "MERN · Socket.io · LLM APIs",
    accent: "cyan" as const,
    live: "https://chat-app-frontend-op3h.onrender.com",
    repo: "https://github.com/p-sri-manikanta/chat_app",
    metrics: [
      { k: "Latency", v: "<120ms" },
      { k: "Uptime", v: "99.9%" },
      { k: "Concurrent", v: "500+" },
    ],
    bullets: [
      "Scalable real-time chat with typing, delivery/read state, presence — 500+ concurrent users via optimized event handling.",
      "LLM-driven summarization, key-message highlights, spam/toxic detection — cut information overload by 50%.",
    ],
  },
  {
    tag: "PRJ.02",
    name: "HEALTHIFY",
    sub: "AI-Powered Public Health Assistant",
    stack: "LLM APIs · RAG · Node.js · Vector DB",
    accent: "magenta" as const,
    live: null,
    repo: "https://github.com/p-sri-manikanta",
    metrics: [
      { k: "Agents", v: "Multi" },
      { k: "Mode", v: "RAG" },
      { k: "Geo", v: "Live" },
    ],
    bullets: [
      "Multi-agent chatbot for disease awareness, symptom guidance and preventive care.",
      "Location-based hospital recommendations for real-world accessibility.",
    ],
  },
  {
    tag: "PRJ.03",
    name: "CODEINSIGHT AI",
    sub: "Smart Code Review Engine",
    stack: "LLM APIs · RAG · Node.js · Vector DB",
    accent: "gold" as const,
    live: null,
    repo: "https://github.com/p-sri-manikanta",
    metrics: [
      { k: "Latency", v: "<2s" },
      { k: "Accuracy", v: ">95%" },
      { k: "Effort", v: "−50%" },
    ],
    bullets: [
      "AI code-review system: bug detection, optimization hints, complexity estimation across multiple languages.",
      "GitHub PR integration with inline feedback simulation; scalable backend pipelines.",
    ],
  },
  {
    tag: "PRJ.04",
    name: "Bakes OF GOOD",
    sub: "Production Bakery Management (Freelance)",
    stack: "MERN · WhatsApp API · REST",
    accent: "cyan" as const,
    live: "https://bakesofgood.netlify.app",
    repo: "https://github.com/p-sri-manikanta/sweet-order-system",
    metrics: [
      { k: "Engagement", v: "+40%" },
      { k: "Manual ops", v: "−60%" },
      { k: "Scale", v: "1k+ users" },
    ],
    bullets: [
      "End-to-end catalog, WhatsApp ordering and order management for a real client; 99.9% uptime.",
      "K6 load testing + load balancing scaled 100 → 1000+ concurrent users; −35% API latency.",
    ],
  },
  {
    tag: "PRJ.05",
    name: "COMPILY",
    sub: "High-Performance Image Compression",
    stack: "MERN Stack",
    accent: "magenta" as const,
    live: "https://image-compressor-pro-cracked.netlify.app/",
    repo: "https://github.com/p-sri-manikanta/Compify",
    metrics: [
      { k: "Process", v: "<1s" },
      { k: "Reduction", v: "65–80%" },
      { k: "Parallel", v: "500+" },
    ],
    bullets: [
      "Drag-and-drop compression UI with sub-second processing and 65–80% size reduction at preserved quality.",
      "Concurrent upload pipelines handle 500+ parallel requests with low latency.",
    ],
  },
];

const stack = [
  { icon: Database, label: "MongoDB", color: "cyan" },
  { icon: Atom, label: "React", color: "cyan" },
  { icon: Server, label: "Node.js", color: "magenta" },
  { icon: Code2, label: "HTML/CSS", color: "gold" },
  { icon: Braces, label: "Python", color: "cyan" },
  { icon: Sparkles, label: "AI / LLM", color: "magenta" },
  { icon: Activity, label: "ML Pulse", color: "gold" },
  { icon: Boxes, label: "Express", color: "cyan" },
  { icon: Cpu, label: "Vector DB", color: "magenta" },
  { icon: Terminal, label: "SQL", color: "gold" },
];

const accentClass = (a: "cyan" | "magenta" | "gold") =>
  a === "cyan" ? "text-cyan" : a === "magenta" ? "text-magenta" : "text-gold";
const glowClass = (a: "cyan" | "magenta" | "gold") =>
  a === "cyan" ? "glow-cyan" : a === "magenta" ? "glow-magenta" : "glow-gold";
const borderClass = (a: "cyan" | "magenta" | "gold") =>
  a === "cyan"
    ? "border-[oklch(0.85_0.18_200/0.4)]"
    : a === "magenta"
      ? "border-[oklch(0.70_0.28_340/0.4)]"
      : "border-[oklch(0.85_0.16_90/0.4)]";

function SectionLabel({ id, label }: { id: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs tracking-[0.4em] text-cyan/80 mb-6">
      <span className="text-magenta">[{id}]</span>
      <span>{label}</span>
      <div className="flex-1 h-px bg-gradient-to-r from-cyan/40 via-magenta/30 to-transparent" />
    </div>
  );
}

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <DataStream />

      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#top"
            className="font-mono text-sm tracking-[0.3em] text-gradient-cyber font-bold"
          >
            {`<S_MK/>`}
          </a>
          <nav className="hidden md:flex gap-8 font-mono text-xs tracking-[0.25em] text-muted-foreground">
            <a href="#experience" className="hover:text-cyan transition-colors">
              EXPERIENCE
            </a>
            <a href="#projects" className="hover:text-cyan transition-colors">
              PROJECTS
            </a>
            <a href="#stack" className="hover:text-cyan transition-colors">
              STACK
            </a>
            <a href="#contact" className="hover:text-cyan transition-colors">
              CONTACT
            </a>
          </nav>
          <a
            href="/SriManikanta_Resume.pdf"
            download
            className="font-mono text-xs tracking-[0.25em] px-4 py-2 rounded-md border border-cyan/40 text-cyan hover:bg-cyan/10 transition"
          >
            ↓ RESUME
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.3em] px-3 py-1.5 rounded-full border border-cyan/30 bg-cyan/5 text-cyan">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse-glow" />
              SYSTEM ONLINE · v2026.05
            </div>

            <h1 className="font-mono text-[clamp(1.6rem,3.2vw,2.6rem)] leading-[1.15] font-bold tracking-tight">
              <span className="text-gradient-cyber">AI</span>
              <span className="text-foreground"> / </span>
              <span className="text-gradient-cyber">FULL-STACK DEVELOPER</span>
              <span className="block mt-3 text-foreground/90">| SRI MANIKANTA P</span>
            </h1>

            <p className="text-muted-foreground max-w-xl text-base leading-relaxed">
              I am a Computer Science student and AI Research Intern specializing in building
              scalable MERN stack and LLM-powered applications. I focus on engineering
              high-performance, real-time systems designed to scale for over 1,000+ concurrent users
              while maintaining low-latency infrastructure.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-cyber text-primary-foreground font-mono text-sm tracking-wider font-semibold shadow-neu glow-cyan transition hover:scale-[1.02]"
              >
                EXPLORE.MODULES{" "}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-surface-elevated border border-border font-mono text-sm tracking-wider text-foreground shadow-neu hover:border-magenta/50 transition"
              >
                <Mail className="w-4 h-4 text-magenta" /> INITIATE.CONTACT
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 max-w-lg">
              {[
                { k: "Projects", v: "10+" },
                { k: "API perf", v: "+40%" },
                { k: "Uptime", v: "99.9%" },
              ].map((s) => (
                <div key={s.k} className="holo-block rounded-lg p-4 text-center">
                  <div className="font-mono text-2xl font-bold text-gradient-cyber">{s.v}</div>
                  <div className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground mt-1">
                    {s.k.toUpperCase()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative iso-tilt-r animate-float">
            <NetworkDiagram />
          </div>
        </div>
      </section>

      {/* EXPERIENCE & PROJECTS */}
      <section id="experience" className="relative max-w-7xl mx-auto px-6 py-24">
        <SectionLabel id="02" label="EXPERIENCE.LOG" />
        <div className="grid gap-6 mb-20">
          {experiences.map((e) => (
            <div
              key={e.role}
              className={`holo-block rounded-2xl p-8 relative overflow-hidden scanline iso-tilt`}
            >
              <div className="absolute top-4 right-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                {e.tag}
              </div>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className={`font-display text-2xl font-bold ${accentClass(e.accent)}`}>
                  {e.role}
                </h3>
                <span className="text-foreground/80">@ {e.org}</span>
                <span className="font-mono text-xs text-muted-foreground ml-auto">{e.period}</span>
              </div>
              <ul className="mt-5 space-y-3">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <ChevronRight className="w-4 h-4 mt-0.5 text-cyan shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div id="projects">
          <SectionLabel id="03" label="PROJECT.MODULES" />
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <article
                key={p.name}
                className={`group holo-block rounded-2xl p-7 relative overflow-hidden border ${borderClass(p.accent)} ${
                  i % 2 === 0 ? "iso-tilt" : "iso-tilt-r"
                } hover:scale-[1.015] transition-transform duration-500`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-1">
                      {p.tag}
                    </div>
                    <h3 className={`font-display text-2xl font-bold ${accentClass(p.accent)}`}>
                      {p.name}
                    </h3>
                    <p className="text-sm text-foreground/70">{p.sub}</p>
                  </div>
                  <div
                    className={`w-10 h-10 rounded-lg border ${borderClass(p.accent)} flex items-center justify-center ${glowClass(
                      p.accent,
                    )}`}
                  >
                    <Cpu className={`w-5 h-5 ${accentClass(p.accent)}`} />
                  </div>
                </div>

                <div className="font-mono text-[11px] tracking-wider text-muted-foreground mb-4">
                  {p.stack}
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  {p.metrics.map((m) => (
                    <div
                      key={m.k}
                      className="rounded-md bg-background/50 border border-border p-2 text-center"
                    >
                      <div className={`font-mono text-sm font-bold ${accentClass(p.accent)}`}>
                        {m.v}
                      </div>
                      <div className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground mt-0.5">
                        {m.k.toUpperCase()}
                      </div>
                    </div>
                  ))}
                </div>

                <ul className="space-y-2 mb-5">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-2 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span
                        className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${
                          p.accent === "cyan"
                            ? "bg-cyan"
                            : p.accent === "magenta"
                              ? "bg-magenta"
                              : "bg-gold"
                        }`}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/60">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className={`group/btn inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md font-mono text-[11px] tracking-[0.2em] font-semibold gradient-cyber text-primary-foreground shadow-neu hover:scale-[1.04] transition`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> SEE LIVE
                    </a>
                  )}
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md font-mono text-[11px] tracking-[0.2em] bg-surface-elevated border border-border text-foreground hover:border-cyan/50 hover:text-cyan transition"
                  >
                    <Github className="w-3.5 h-3.5" /> GIT REPO
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="stack" className="relative max-w-7xl mx-auto px-6 py-24">
        <SectionLabel id="04" label="TECH.STACK.ARRAY" />
        <div className="holo-block rounded-2xl p-10 relative overflow-hidden scanline">
          <div className="absolute -inset-1 bg-[linear-gradient(110deg,transparent,oklch(0.85_0.18_200/0.06),transparent)] pointer-events-none" />
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
            style={{ transform: "perspective(1200px) rotateX(4deg)" }}
          >
            {stack.map((s, i) => {
              const Icon = s.icon;
              const color = s.color as "cyan" | "magenta" | "gold";
              return (
                <div
                  key={s.label}
                  className="group flex flex-col items-center gap-3 p-5 rounded-xl bg-surface-elevated border border-border shadow-neu transition hover:border-cyan/40"
                  style={{
                    animation: `pulse-glow ${2 + (i % 4) * 0.5}s ease-in-out ${i * 0.15}s infinite`,
                  }}
                >
                  <Icon
                    className={`w-8 h-8 ${accentClass(color)} drop-shadow-[0_0_8px_currentColor]`}
                  />
                  <div className="font-mono text-[11px] tracking-[0.2em] text-foreground/80">
                    {s.label.toUpperCase()}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative max-w-7xl mx-auto px-6 py-24">
        <SectionLabel id="05" label="ESTABLISH.UPLINK" />
        <div className="holo-block rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-cyan/10 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-cyber">Let&apos;s build the next system.</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10">
              Open to internships, collaborations and ambitious engineering problems. Drop a signal
              — response time &lt; 24h.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <a
                href="mailto:srimanikantapulapakura@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-cyber text-primary-foreground font-mono text-sm tracking-wider font-semibold shadow-neu glow-cyan hover:scale-[1.03] transition"
              >
                <Mail className="w-4 h-4" /> SEND.MESSAGE
              </a>
              <a
                href="/SriManikanta_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-surface-elevated border border-gold/40 text-gold font-mono text-sm tracking-wider shadow-neu glow-gold hover:scale-[1.03] transition"
              >
                <ArrowDownToLine className="w-4 h-4" /> DOWNLOAD.RESUME
              </a>
            </div>

            <div className="flex justify-center gap-3 font-mono text-xs">
              <a
                href="https://linkedin.com/in/p-sri-manikanta"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border hover:border-cyan/40 hover:text-cyan transition"
              >
                <Linkedin className="w-4 h-4" /> LINKEDIN
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border hover:border-magenta/40 hover:text-magenta transition"
              >
                <Github className="w-4 h-4" /> GITHUB
              </a>
              <span className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border text-muted-foreground">
                +91 70956 58244
              </span>
            </div>
          </div>
        </div>

        <footer className="mt-12 flex flex-col md:flex-row justify-between items-center gap-3 font-mono text-[11px] tracking-[0.25em] text-muted-foreground">
          <div>© 2026 · SRI MANIKANTA P · ALL.SYSTEMS.NOMINAL</div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse-glow" />
            UPLINK.STABLE — 0x42
          </div>
        </footer>
      </section>
    </main>
  );
}
