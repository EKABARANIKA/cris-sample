import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { Marquee } from "@/components/site/Marquee";
import { Award, GraduationCap, Heart, Users, BookOpen, ShieldCheck, ArrowRight } from "lucide-react";
import storyImg from "@/assets/phonics.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About CRIS Learning Centre — Since 2009" },
      { name: "description", content: "Learn about CRIS Learning Centre — our story, mission, vision and why parents in Chennai trust us with their children's early education." },
      { property: "og:title", content: "About CRIS Learning Centre" },
      { property: "og:description", content: "A premium early learning centre in Santhoshpuram, Chennai. Established 2009." },
    ],
  }),
  component: About,
});

const trust = [
  { icon: Award, title: "15+ Years Experience", desc: "Over a decade of nurturing young learners with care." },
  { icon: GraduationCap, title: "Qualified Trainers", desc: "Trained educators who specialise in early childhood learning." },
  { icon: Heart, title: "Child-Centered Learning", desc: "Every plan is shaped around your child's unique pace." },
  { icon: Users, title: "Personalised Attention", desc: "Small batches mean every child is truly seen and heard." },
  { icon: BookOpen, title: "Strong Foundations", desc: "Structured curriculum that builds lifelong learning habits." },
  { icon: ShieldCheck, title: "Positive Environment", desc: "A safe, supportive and joyful space to grow." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="Our Story" title={<>About <span className="text-gradient">CRIS Learning Centre</span></>} subtitle="Building strong foundations for bright futures since 2009." />

      <section className="container-app py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-[2rem] overflow-hidden shadow-[var(--shadow-card)] border-4 border-white">
          <img src={storyImg} alt="CRIS Learning Centre classroom" loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">Our Story</span>
          <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl leading-tight">A journey of nurturing young minds</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Established in 2009, CRIS Learning Centre has been helping children build confidence, academic readiness and strong learning habits through engaging educational programs.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            What started as a small tuition initiative in Santhoshpuram has grown into a trusted premium early learning destination for families across Chennai — without ever losing the personal touch that defined us from day one.
          </p>
        </div>
      </section>

      <section className="container-app py-10 grid md:grid-cols-2 gap-6">
        {[
          { tag: "Our Mission", text: "To nurture confident learners through personalised and meaningful education that respects every child's unique pace and potential." },
          { tag: "Our Vision", text: "To be a trusted learning centre that helps children achieve lifelong success — academically, socially and emotionally." },
        ].map((b) => (
          <div key={b.tag} className="brand-hover-card rounded-3xl p-8 md:p-10 cursor-default">
            <h3 className="font-display font-bold text-xl text-primary uppercase tracking-wider">{b.tag}</h3>
            <p className="mt-4 font-display text-xl md:text-2xl leading-snug text-foreground/90">{b.text}</p>
          </div>
        ))}
      </section>

      <section className="py-20 overflow-hidden">
        <div className="container-app max-w-2xl text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wider uppercase">Trust & Care</span>
          <h2 className="mt-4 font-display font-bold text-3xl md:text-5xl leading-tight">Why parents <span className="text-gradient">trust us</span></h2>
        </div>
        <Marquee speed={40}>
          {trust.map((t) => (
            <div
              key={t.title}
              className="w-[280px] md:w-[320px] shrink-0 bg-white/60 backdrop-blur-xl rounded-3xl p-7 border border-white/70 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition"
            >
              <div className="grid place-items-center w-12 h-12 rounded-2xl bg-[var(--gradient-primary)] text-white mb-4">
                <t.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg">{t.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </Marquee>
        <div className="container-app text-center mt-12">
          <Link to="/programs" className="btn-primary hover:[transform:translateY(-2px)] hover:shadow-[var(--shadow-glow)]">
            Explore Our Programs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}
