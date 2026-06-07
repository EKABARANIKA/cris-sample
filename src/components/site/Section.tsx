import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""} mb-12`}>
      {eyebrow && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display font-bold text-3xl md:text-5xl leading-[1.1] text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 bg-[var(--gradient-hero)]">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="container-app relative text-center">
        {eyebrow && (
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/70 backdrop-blur text-primary text-xs font-semibold tracking-wider uppercase mb-5 animate-fade-in">
            {eyebrow}
          </span>
        )}
        <h1 className="font-display font-bold text-4xl md:text-6xl leading-[1.05] text-foreground animate-fade-up">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-foreground/70 leading-relaxed animate-fade-up">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
