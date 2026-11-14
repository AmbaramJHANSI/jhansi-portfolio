import { CheckCircle2, GraduationCap } from "lucide-react";
import { aboutPoints, profile } from "../data/portfolio";
import Section, { Reveal } from "./Section";

export default function About() {
  const { education } = profile;
  return (
    <Section
      id="about"
      eyebrow="About me"
      title="Engineering secure, intelligent software"
      subtitle="Where cybersecurity, machine learning and software engineering meet."
    >
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <ul className="glass space-y-4 p-7">
            {aboutPoints.map((point) => (
              <li key={point} className="flex gap-3 text-slate-300">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-cyan" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="space-y-6">
          <div className="glass relative overflow-hidden p-7 shadow-glow">
            <div aria-hidden="true" className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet/30 blur-3xl" />
            <p className="font-mono text-xs uppercase tracking-widest text-slate-400">CGPA</p>
            <p className="gradient-text mt-2 font-display text-6xl font-bold">{education.cgpa}</p>
            <p className="mt-2 text-sm text-slate-400">Current academic standing</p>
          </div>

          <div className="glass space-y-4 p-6">
            <div className="flex gap-4">
              <GraduationCap className="mt-1 shrink-0 text-electric" size={26} aria-hidden="true" />
              <div>
                <p className="font-semibold text-white">{education.degree}</p>
                <p className="mt-1 text-sm text-slate-400">{education.institute}</p>
                <p className="mt-1 font-mono text-xs text-cyan">{education.years}</p>
              </div>
            </div>

            <div className="space-y-3 border-t border-slate-700/80 pt-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                Additional qualifications
              </p>
              {education.previousEducation.map((item) => (
                <div key={item.institute} className="rounded-lg border border-slate-700/80 bg-slate-900/40 p-3">
                  <p className="font-medium text-white">{item.degree}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.institute}</p>
                  <div className="mt-1 flex items-center justify-between gap-3 text-xs text-cyan">
                    <span className="font-mono">{item.years}</span>
                    <span className="font-semibold text-slate-200">Percentage: {item.percentage}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
