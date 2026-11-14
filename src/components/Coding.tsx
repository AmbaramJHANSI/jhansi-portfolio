import { ArrowUpRight, Code2, Trophy } from "lucide-react";
import { codingProfiles } from "../data/portfolio";
import Section, { Reveal } from "./Section";

export default function Coding() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Competitive programming"
      subtitle="Consistent problem solving across two major platforms."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {codingProfiles.map((p, i) => (
          <Reveal key={p.platform} delay={i * 0.08}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.platform} profile (opens in a new tab)`}
              className="glass glass-hover group block p-7"
            >
              <div className="mb-7 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-electric/25 to-cyan/25 text-cyan">
                    {i === 0 ? <Code2 size={22} /> : <Trophy size={22} />}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-white">{p.platform}</h3>
                </div>
                <ArrowUpRight className="text-slate-500 transition group-hover:text-cyan" size={20} />
              </div>
              <dl className="grid grid-cols-3 gap-3">
                {p.stats.map((s) => (
                  <div key={s.label}>
                    <dd className="gradient-text font-display text-3xl font-bold sm:text-4xl">{s.value}</dd>
                    <dt className="mt-1 text-xs text-slate-400">{s.label}</dt>
                  </div>
                ))}
              </dl>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
