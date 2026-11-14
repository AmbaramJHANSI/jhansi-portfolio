import { AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useCallback, useState } from "react";
import { projects, type Project } from "../data/portfolio";
import { GithubIcon } from "./BrandIcons";
import ProjectModal from "./ProjectModal";
import ProjectVisual from "./ProjectVisual";
import Section, { Reveal } from "./Section";

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <article className="glass glass-hover flex h-full flex-col p-5">
      <ProjectVisual kind={project.visual} />

      <div className="mt-5 flex flex-1 flex-col">
        <p className="font-mono text-xs text-cyan">{project.date}</p>
        <h3 className="mt-1 font-display text-lg font-semibold leading-snug text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.summary}</p>

        <dl className="mt-5 grid grid-cols-2 gap-3">
          {project.metrics.map((m) => (
            <div key={m.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
              <dd className="gradient-text font-display text-xl font-bold">{m.value}</dd>
              <dt className="mt-0.5 text-xs text-slate-400">{m.label}</dt>
            </div>
          ))}
        </dl>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li key={t} className="rounded-md bg-violet/15 px-2 py-1 font-mono text-[11px] text-violet-200">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-xs font-semibold text-slate-100 transition hover:border-cyan/50 hover:text-cyan"
          >
            <GithubIcon className="h-4 w-4" /> GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-electric to-violet px-3 py-2 text-xs font-semibold text-white transition hover:brightness-110"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
          <button
            type="button"
            onClick={onOpen}
            className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-slate-300 transition hover:text-white"
            aria-label={`View details of ${project.title}`}
          >
            Details <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <Section
      id="projects"
      eyebrow="Featured projects"
      title="Work with measurable results"
      subtitle="Full-stack, machine learning and security projects built end to end."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08}>
            <ProjectCard project={p} onOpen={() => setSelected(p)} />
          </Reveal>
        ))}
      </div>

      <AnimatePresence>{selected && <ProjectModal project={selected} onClose={close} />}</AnimatePresence>
    </Section>
  );
}
