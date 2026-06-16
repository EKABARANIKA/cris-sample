import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { X, ArrowRight, Check, Sparkles } from "lucide-react";

export interface CourseDetail {
  title: string;
  image: string;
  description: string;
  ageGroup: string;
  benefits: { label: string; icon: any }[];
  outcomes: string[];
  href: string;
}

export function CourseModal({ course, onClose }: { course: CourseDetail | null; onClose: () => void }) {
  useEffect(() => {
    if (!course) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onEsc);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = prev;
    };
  }, [course, onClose]);

  if (!course) return null;

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center p-0 sm:p-6 md:p-8 bg-foreground/60 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={course.title}
    >
      <div
        className="relative w-full sm:max-w-5xl bg-card sm:rounded-3xl overflow-hidden shadow-[var(--shadow-card)] grid md:grid-cols-2 h-[100dvh] sm:h-auto sm:max-h-[90dvh] animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute top-3 right-3 z-20 grid place-items-center w-10 h-10 rounded-full bg-white/95 text-foreground hover:bg-white shadow-[var(--shadow-soft)] transition hover:rotate-90 duration-300"
        >
          <X className="w-5 h-5" />
        </button>

        {/* IMAGE */}
        <div className="relative h-44 sm:h-64 md:h-auto overflow-hidden shrink-0">
          <img
            src={course.image}
            alt={course.title}
            loading="eager"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-foreground/40 via-transparent" />
          <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-primary text-xs font-semibold">
            <Sparkles className="w-3 h-3" /> {course.ageGroup}
          </span>
        </div>

        {/* RIGHT / BOTTOM column: flex column with scrollable content + sticky footer */}
        <div className="flex flex-col min-h-0 flex-1 md:max-h-[90dvh]">
          <div className="overflow-y-auto p-5 sm:p-6 md:p-8 flex-1 min-h-0">
            <h3 className="font-display font-bold text-2xl md:text-3xl leading-tight">{course.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{course.description}</p>

            <div className="mt-5">
              <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-primary">Benefits</h4>
              <ul className="mt-2 space-y-1.5">
                {course.benefits.map((b) => (
                  <li key={b.label} className="flex items-start gap-2 text-sm">
                    <b.icon className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                    <span>{b.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5">
              <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-accent">Learning Outcomes</h4>
              <ul className="mt-2 space-y-1.5">
                {course.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* STICKY FOOTER CTA */}
          <div className="shrink-0 border-t border-border/60 bg-card/95 backdrop-blur px-5 sm:px-6 md:px-8 py-4 flex flex-wrap gap-3 [padding-bottom:max(1rem,env(safe-area-inset-bottom))]">
            <Link to="/contact" onClick={onClose} className="btn-primary flex-1 justify-center hover:[transform:translateY(-2px)] hover:shadow-[var(--shadow-glow)]">
              Enquire Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to={course.href} onClick={onClose} className="btn-outline flex-1 justify-center hover:border-primary hover:text-primary">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
