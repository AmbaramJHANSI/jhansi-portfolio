import { Brain, Code2, Database, Globe, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";
import { skillGroups, type SkillIcon } from "../data/portfolio";
import Section, { Reveal } from "./Section";

const icons: Record<SkillIcon, ReactNode> = {
  code: <Code2 size={22} />,
  globe: <Globe size={22} />,
  database: <Database size={22} />,
  brain: <Brain size={22} />,
  shield: <ShieldCheck size={22} />,
};

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Technical skills" title="Tools and technologies I work with">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.06}>
            <article className="glass glass-hover h-full p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-electric/25 to-violet/25 text-cyan">
                  {icons[group.icon]}
                </span>
                <h3 className="font-display text-lg font-semibold text-white">{group.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="tag">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
