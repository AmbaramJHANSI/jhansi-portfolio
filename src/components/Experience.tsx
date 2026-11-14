import { Briefcase, Calendar } from "lucide-react";
import { experience } from "../data/portfolio";
import Section, { Reveal } from "./Section";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Hands-on security research">
      <ol className="relative space-y-8 border-l border-white/10 pl-8">
        {experience.map((item) => (
          <li key={item.title} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[45px] top-6 grid h-8 w-8 place-items-center rounded-full border border-electric/50 bg-navy-900 text-cyan shadow-glow"
            >
              <Briefcase size={14} />
            </span>
            <Reveal>
              <article className="glass glass-hover p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-slate-400">{item.org}</p>
                  </div>
                  <p className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-cyan">
                    <Calendar size={13} aria-hidden="true" /> {item.period}
                  </p>
                </div>
                <ul className="mt-5 list-disc space-y-2 pl-5 marker:text-violet">
                  {item.points.map((p) => (
                    <li key={p} className="text-slate-300">
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
