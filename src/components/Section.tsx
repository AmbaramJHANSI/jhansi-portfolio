import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function Section({ id, eyebrow, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="relative px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 max-w-2xl"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-cyan">{eyebrow}</p>
          <h2 id={`${id}-title`} className="font-display text-3xl font-bold text-white sm:text-4xl">
            {title}
          </h2>
          {subtitle && <p className="mt-4 text-slate-400">{subtitle}</p>}
        </motion.header>
        {children}
      </div>
    </section>
  );
}

/** Staggered fade-up wrapper for grid children. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
