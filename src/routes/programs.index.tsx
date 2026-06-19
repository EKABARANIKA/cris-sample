import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight } from "lucide-react";
import { programs } from "@/lib/programs-catalog";


export const Route = createFileRoute("/programs/")({
  head: () => ({
    meta: [
      { title: "Our Learning Programs — CRIS Learning Centre" },
      { name: "description", content: "Kindergarten tuition, phonics, handwriting, pre-writing, abacus and AI & robotics programs for ages 2.5-12 in Chennai." },
      { property: "og:title", content: "CRIS Learning Programs" },
      { property: "og:description", content: "Building strong foundations through engaging learning experiences." },
    ],
  }),
  component: Programs,
});

function Programs() {
  return (
    <>
      <div>
        <PageHero
          eyebrow="Programs"
          title={<>Our <span className="text-gradient">Learning Programs</span></>}
          subtitle="Six premium programs designed to nurture confident, curious learners — from first scribbles to future-ready STEM thinking."
        />
      </div>

      <section className="container-app py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {programs.map((p, i) => (
            <Reveal key={p.slug} direction={i % 2 === 0 ? "left" : "right"} delay={(i % 3) * 80}>
              <Link
                to="/programs/$programSlug"
                params={{ programSlug: p.slug.split('/').pop() || '' }}
                className="group block h-full relative overflow-hidden rounded-[2rem] bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] border border-border/50 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="aspect-[16/11] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover object-top scale-[1.01] group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6 md:p-7">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="grid place-items-center w-10 h-10 rounded-xl bg-primary/10 text-primary">
                      <p.icon className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-primary">{p.subtitle}</div>
                  </div>
                  <h3 className="mt-1 font-display font-bold text-2xl">{p.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{p.short}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-display font-semibold text-primary">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
