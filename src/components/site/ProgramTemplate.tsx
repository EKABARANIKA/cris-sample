import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Sparkles, Phone, Star } from "lucide-react";
import { CTA } from "@/components/site/CTA";
import { Marquee } from "@/components/site/Marquee";
import { Reveal } from "@/components/site/Reveal";
import { getRelatedPrograms, type Program } from "@/lib/programs-catalog";
import { SectionHeader } from "@/components/site/Section";

export function ProgramTemplate({ program }: { program: Program }) {
  const related = getRelatedPrograms(program.slug);

  return (
    <>
      {/* BACK */}
      <div className="container-app pt-6">
        <Link
          to="/programs"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Programs
        </Link>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--gradient-hero)] pt-8 pb-16 md:pt-12 md:pb-24 mt-4">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-accent/15 blur-3xl" />

        <div className="container-app relative grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <Reveal direction="left" className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur text-primary text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" /> {program.subtitle}
            </span>
            <h1 className="mt-5 font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              {program.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-gradient">{program.title.split(" ").slice(-1)}</span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-foreground/75 leading-relaxed">
              {program.description}
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/70 backdrop-blur p-4 border border-white">
                <div className="text-[11px] uppercase tracking-wider font-semibold text-primary">Age Group</div>
                <div className="mt-1 font-display font-bold text-lg">{program.ageGroup}</div>
              </div>
              <div className="rounded-2xl bg-white/70 backdrop-blur p-4 border border-white">
                <div className="text-[11px] uppercase tracking-wider font-semibold text-accent">Highlights</div>
                <div className="mt-1 font-display font-bold text-lg">{program.highlights.length}+ Focus Areas</div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {program.tags.map((t) => (
                <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-white/80 backdrop-blur border border-white font-semibold text-foreground/80">{t}</span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary hover:[transform:translateY(-2px)] hover:shadow-[var(--shadow-glow)]">
                Enquire Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-outline hover:border-primary hover:text-primary">
                <Phone className="w-4 h-4" /> Contact Us
              </Link>
            </div>
          </Reveal>

          <Reveal direction="right" className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-[var(--gradient-primary)] opacity-20 blur-2xl rounded-[2rem]" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-[var(--shadow-card)] border-4 border-white">
                <img
                  src={program.image}
                  alt={program.title}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="hidden md:flex absolute -top-5 -right-5 items-center gap-2 bg-white rounded-2xl shadow-[var(--shadow-soft)] px-4 py-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-xs font-semibold ml-1">5.0</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="container-app py-20 md:py-24">
        <SectionHeader
          eyebrow="Why Choose This Program"
          title={<>Built for <span className="text-gradient">real progress</span></>}
          subtitle="Carefully designed features that make every class count."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {program.benefits.map((b, i) => (
            <Reveal key={b.label} direction={i % 2 === 0 ? "left" : "right"} delay={i * 70}>
              <div className="h-full bg-card rounded-3xl p-6 border border-border/60 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] hover:-translate-y-1.5 transition-all duration-300">
                <div className="grid place-items-center w-12 h-12 rounded-2xl bg-accent/10 text-accent mb-4 shadow-sm">
                  <b.icon className="w-6 h-6" strokeWidth={2.5} />
                </div>
                <h3 className="font-display font-bold text-lg leading-tight">{b.label}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  A focused approach that helps your child build this skill with confidence.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LEARNING OUTCOMES */}
      <section className="bg-muted/40 py-20 md:py-24">
        <div className="container-app">
          <SectionHeader
            eyebrow="Learning Outcomes"
            title={<>What your child <span className="text-gradient">will achieve</span></>}
            subtitle="Tangible, measurable progress every parent can see."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {program.outcomes.map((o, i) => (
              <Reveal key={o} direction="up" delay={i * 90}>
                <div className="h-full bg-card rounded-3xl p-6 border border-border/60 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] hover:-translate-y-1.5 transition-all duration-300 text-center">
                  <div className="mx-auto grid place-items-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
                    <Sparkles className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-semibold text-base leading-snug">{o}</h3>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Highlights list */}
          <Reveal direction="up" delay={120}>
            <div className="mt-10 rounded-[2rem] bg-card border border-border/60 shadow-[var(--shadow-soft)] p-7 md:p-10">
              <h3 className="font-display font-bold text-xl md:text-2xl">Course Highlights</h3>
              <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {program.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm md:text-base">
                    <span className="mt-0.5 grid place-items-center w-6 h-6 rounded-full bg-primary/10 text-primary shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-foreground/85">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RELATED PROGRAMS */}
      <section className="py-20 md:py-24 overflow-hidden">
        <div className="container-app">
          <SectionHeader
            eyebrow="Explore More"
            title={<>Related <span className="text-gradient">Programs</span></>}
            subtitle="Discover other CRIS programs designed to grow with your child."
          />
        </div>
        <Marquee speed={50}>
          {related.map((r) => (
            <Link
              key={r.slug}
              to={r.slug}
              className="group block w-[280px] md:w-[320px] shrink-0 bg-card rounded-3xl overflow-hidden border border-border/60 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={r.image} alt={r.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="text-[11px] uppercase tracking-wider font-semibold text-primary">{r.subtitle}</div>
                <h3 className="mt-1 font-display font-bold text-lg leading-tight">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{r.short}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </Marquee>
      </section>

      <CTA
        title="Ready to get started?"
        subtitle="Talk to our team or book a friendly visit to the centre — we'd love to meet you."
      />
    </>
  );
}
