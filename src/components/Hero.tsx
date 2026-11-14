import { motion } from "framer-motion";
import { ArrowRight, Download, ShieldCheck, Terminal } from "lucide-react";
import { useState } from "react";
import { profile } from "../data/portfolio";
import { useTypedRoles } from "../hooks/useTypedRoles";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md" aria-hidden="true">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-electric/20 via-violet/20 to-cyan/10 blur-3xl" />
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full animate-spin-slow">
        <defs>
          <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#4f8cff" />
            <stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="185" fill="none" stroke="url(#ring)" strokeOpacity="0.35" strokeDasharray="2 10" strokeWidth="2" />
        <circle cx="200" cy="200" r="150" fill="none" stroke="#8b5cf6" strokeOpacity="0.3" strokeDasharray="40 14" />
        <circle cx="200" cy="15" r="6" fill="#22d3ee" />
        <circle cx="385" cy="200" r="5" fill="#8b5cf6" />
        <circle cx="75" cy="330" r="5" fill="#4f8cff" />
      </svg>

      <div className="absolute inset-[18%] animate-float">
        <div className="glass relative flex h-full flex-col items-center justify-center gap-3 rounded-3xl shadow-glow">
          <svg viewBox="0 0 64 64" className="h-24 w-24">
            <defs>
              <linearGradient id="shield" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#4f8cff" />
                <stop offset="1" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <path d="M32 6 52 14v16c0 13-9 22-20 28C21 52 12 43 12 30V14z" fill="rgba(79,140,255,0.08)" stroke="url(#shield)" strokeWidth="2.5" strokeLinejoin="round" />
            <text x="32" y="38" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="18" fill="#22d3ee">
              {profile.initials}
            </text>
          </svg>
          <div className="flex items-center gap-2 font-mono text-[11px] text-cyan">
            <Terminal size={12} /> secure.build()
          </div>
        </div>
      </div>

      <div className="glass absolute -left-2 top-10 flex items-center gap-2 px-3 py-2 font-mono text-[11px] text-slate-200 sm:left-0">
        <ShieldCheck size={14} className="text-cyan" /> IDS · 98.63% recall
      </div>
      <div className="glass absolute -right-2 bottom-12 px-3 py-2 font-mono text-[11px] text-slate-200 sm:right-0">
        ML · 96.67% acc
      </div>
    </div>
  );
}

export default function Hero() {
  const role = useTypedRoles(profile.roles);
  const [resumeNote, setResumeNote] = useState<string | null>(null);

  // Only starts the download if the file actually exists, so the button never 404s.
  const downloadResume = async () => {
    setResumeNote(null);
    try {
      const res = await fetch(profile.resumePath, { method: "HEAD" });
      const type = res.headers.get("content-type") ?? "";
      if (!res.ok || type.includes("text/html")) throw new Error("missing");
      const a = document.createElement("a");
      a.href = profile.resumePath;
      a.download = "Ambaram_Jhansi_Lakshmi_Resume.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch {
      setResumeNote(
        "Resume is not available for download yet. Please email me and I will send it right away.",
      );
    }
  };

  return (
    <section id="home" aria-label="Introduction" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
          <p className="mb-4 font-mono text-sm text-cyan">Hi, I'm {profile.shortName}.</p>
          <h1 className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            {profile.headline[0]} <span className="gradient-text">{profile.headline[1]}</span>
          </h1>

          <p className="mt-5 flex h-8 items-center font-mono text-base text-slate-200 sm:text-lg" aria-live="off">
            <span className="mr-2 text-violet">&gt;</span>
            <span>{role}</span>
            <span className="ml-0.5 inline-block h-5 w-0.5 animate-blink bg-cyan" />
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">{profile.intro}</p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              Explore My Work <ArrowRight size={16} />
            </a>
            <button type="button" onClick={downloadResume} className="btn-secondary">
              <Download size={16} /> Download Resume
            </button>
          </div>
          {resumeNote && (
            <p role="status" className="mt-4 max-w-md text-sm text-amber-300">
              {resumeNote}{" "}
              <a className="underline" href={`mailto:${profile.email}?subject=Resume request`}>
                Email me
              </a>
            </p>
          )}

          <div className="mt-8 flex items-center gap-3">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="glass glass-hover grid h-11 w-11 place-items-center text-slate-200">
              <GithubIcon className="h-5 w-5" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="glass glass-hover grid h-11 w-11 place-items-center text-slate-200">
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
