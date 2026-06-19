import { Award, GraduationCap, Heart, Users, BookOpen, ShieldCheck } from "lucide-react";
import { Marquee } from "@/components/site/Marquee";
import { SectionHeader } from "@/components/site/Section";

const reasons = [
  { icon: Award, title: "Since 2009", desc: "15+ years of experience nurturing young learners." },
  { icon: GraduationCap, title: "Qualified Trainers", desc: "Experienced educators specialised in early learning." },
  { icon: Heart, title: "Personalised Learning", desc: "Individual attention for every single child." },
  { icon: Users, title: "Small Batch Sizes", desc: "Better interaction and stronger relationships." },
  { icon: BookOpen, title: "Structured Curriculum", desc: "Progress-based learning that builds confidence." },
  { icon: ShieldCheck, title: "Child-Friendly Space", desc: "A safe, supportive and joyful environment." },
];

export function WhyChoose() {
  return (
    <section className="bg-[var(--gradient-hero)] py-20 md:py-28 overflow-hidden">
      <div className="container-app">
        <div className="relative">
          <SectionHeader
            eyebrow="Why Parents Choose Us"
            title={<>Why families trust <span className="text-gradient">CRIS</span></>}
            subtitle="Hover the cards to pause. Six reasons parents across Chennai choose CRIS."
          />
        </div>
      </div>
      <Marquee speed={45}>
        {reasons.map((r) => (
          <div
            key={r.title}
            className="w-[280px] md:w-[320px] shrink-0 bg-white/40 backdrop-blur-xl rounded-3xl p-7 border border-white/60 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition"
          >
            <div className="grid place-items-center w-12 h-12 rounded-2xl bg-[var(--gradient-primary)] text-white mb-4">
              <r.icon className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg">{r.title}</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
