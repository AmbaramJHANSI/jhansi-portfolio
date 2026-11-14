import { Award, ExternalLink } from "lucide-react";
import { certifications } from "../data/portfolio";
import Section, { Reveal } from "./Section";

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Credentials and learning">
      <div className="grid gap-6 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.07}>
            <article className="glass glass-hover flex h-full flex-col p-6">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet/25 to-electric/25 text-violet-200">
                  <Award size={22} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold leading-snug text-white">{c.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{c.issuer}</p>
                </div>
              </div>
              <div className="mt-auto flex items-center justify-between pt-6">
                <span className="font-mono text-xs text-cyan">{c.date}</span>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View certificate: ${c.title} (opens in a new tab)`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-200 transition hover:text-cyan"
                >
                  View Certificate <ExternalLink size={14} />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
