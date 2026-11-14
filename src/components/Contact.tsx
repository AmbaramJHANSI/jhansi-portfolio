import { AlertCircle, CheckCircle2, Loader2, Mail, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { profile } from "../data/portfolio";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import Section, { Reveal } from "./Section";

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID?.trim();

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const values = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      subject: String(data.get("subject") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    // Honeypot: bots fill hidden fields. Pretend success and do nothing.
    if (String(data.get("company") ?? "") !== "") {
      setStatus("sent");
      return;
    }

    const next: Record<string, string> = {};
    if (!values.name) next.name = "Please enter your name.";
    if (!EMAIL_RE.test(values.email)) next.email = "Please enter a valid email address.";
    if (!values.subject) next.subject = "Please add a subject.";
    if (values.message.length < 10) next.message = "Message should be at least 10 characters.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // No backend configured: open the visitor's email client instead of faking a send.
    if (!FORMSPREE_ID) {
      const body = `${values.message}\n\n— ${values.name} (${values.email})`;
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const err = (key: string) =>
    errors[key] ? (
      <p id={`${key}-error`} className="mt-1 text-xs text-rose-300">
        {errors[key]}
      </p>
    ) : null;

  const aria = (key: string) => ({
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `${key}-error` : undefined,
  });

  return (
    <Section id="contact" eyebrow="Contact" title="Let's Build Something Meaningful Together.">
      <p className="-mt-6 mb-12 max-w-2xl text-slate-400">
        Interested in software development, cybersecurity, machine learning, or exciting technology opportunities? Let's
        connect.
      </p>

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="space-y-4">
          {[
            { icon: <Mail size={20} />, label: "Email", text: profile.email, href: `mailto:${profile.email}` },
            { icon: <LinkedinIcon className="h-5 w-5" />, label: "LinkedIn", text: "Ambaram Jhansi Lakshmi", href: profile.linkedin, external: true },
            { icon: <GithubIcon className="h-5 w-5" />, label: "GitHub", text: "AmbaramJHANSI", href: profile.github, external: true },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="glass glass-hover flex items-center gap-4 p-4"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-electric/25 to-violet/25 text-cyan">
                {c.icon}
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-xs uppercase tracking-wider text-slate-500">{c.label}</span>
                <span className="block truncate text-sm text-slate-100">{c.text}</span>
              </span>
            </a>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} noValidate className="glass space-y-5 p-6 sm:p-8" aria-label="Contact form">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm text-slate-300">Name</label>
                <input id="name" name="name" type="text" autoComplete="name" className="field" {...aria("name")} />
                {err("name")}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm text-slate-300">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" className="field" {...aria("email")} />
                {err("email")}
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm text-slate-300">Subject</label>
              <input id="subject" name="subject" type="text" className="field" {...aria("subject")} />
              {err("subject")}
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm text-slate-300">Message</label>
              <textarea id="message" name="message" rows={5} className="field resize-y" {...aria("message")} />
              {err("message")}
            </div>

            {/* Honeypot */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label>
                Company
                <input type="text" name="company" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === "sending"}>
              {status === "sending" ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              {status === "sending" ? "Sending…" : FORMSPREE_ID ? "Send Message" : "Open in Email App"}
            </button>

            <div role="status" aria-live="polite" className="min-h-[1.5rem] text-sm">
              {status === "sent" && (
                <p className="flex items-center gap-2 text-emerald-300">
                  <CheckCircle2 size={16} /> Thanks! Your message has been sent.
                </p>
              )}
              {status === "mailto" && (
                <p className="flex items-center gap-2 text-cyan">
                  <CheckCircle2 size={16} /> Your email app should open with the message ready to send.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-rose-300">
                  <AlertCircle size={16} /> Couldn't send right now. Please email me directly at {profile.email}.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
