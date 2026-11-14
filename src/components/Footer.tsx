import { Mail } from "lucide-react";
import { profile } from "../data/portfolio";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Footer() {
  const btn = "glass glass-hover grid h-10 w-10 place-items-center text-slate-300";
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex gap-3">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className={btn}>
            <GithubIcon className="h-4 w-4" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className={btn}>
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Send email" className={btn}>
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
