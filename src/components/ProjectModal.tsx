import { motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Project } from "../data/portfolio";
import { GithubIcon } from "./BrandIcons";
import ProjectVisual from "./ProjectVisual";

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      // Simple focus trap
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="glass max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-b-none bg-navy-900/95 p-6 shadow-glow sm:rounded-2xl sm:p-8"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-cyan">{project.date}</p>
            <h3 id="project-modal-title" className="mt-1 font-display text-xl font-semibold text-white sm:text-2xl">
              {project.title}
            </h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 text-slate-300 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        <ProjectVisual kind={project.visual} />

        <ul className="mt-6 list-disc space-y-2 pl-5 text-slate-300 marker:text-violet">
          {project.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap gap-3">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <GithubIcon className="h-4 w-4" /> GitHub
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
