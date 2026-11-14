import { useEffect, useState } from "react";

function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Typewriter effect cycling through a list of phrases. */
export function useTypedRoles(roles: readonly string[]): string {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(prefersReducedMotion() ? roles[0] ?? "" : "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (roles.length === 0) return;
    const current = roles[index % roles.length];

    if (prefersReducedMotion()) {
      const t = window.setTimeout(() => {
        const next = (index + 1) % roles.length;
        setIndex(next);
        setText(roles[next]);
      }, 2600);
      return () => window.clearTimeout(t);
    }

    let delay = deleting ? 35 : 70;
    if (!deleting && text === current) delay = 1600;
    if (deleting && text === "") delay = 350;

    const t = window.setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % roles.length);
      } else {
        setText(current.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => window.clearTimeout(t);
  }, [text, deleting, index, roles]);

  return text;
}
