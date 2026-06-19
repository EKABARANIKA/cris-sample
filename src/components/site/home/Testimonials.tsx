import { Star } from "lucide-react";
import familiesMascot from "@/assets/families-mascot.png";
import { SectionHeader } from "@/components/site/Section";

const testimonials = [
  { name: "Priya R.", role: "Parent of LKG Student", text: "My daughter blossomed at CRIS. Her reading and writing have improved tremendously and she actually loves going to class!" },
  { name: "Karthik S.", role: "Parent of UKG Student", text: "The personalised attention is unmatched. The teachers truly care about every child's progress." },
  { name: "Lakshmi M.", role: "Parent of Pre-KG Student", text: "A warm, safe and inspiring place. My son's confidence has grown so much since joining CRIS." },
];

export function Testimonials() {
  return (
    <section className="container-app py-20 overflow-hidden">
      <div className="relative">
        <SectionHeader
          eyebrow="Parent Stories"
          title={<>Loved by <span className="text-gradient">families</span></>}
          subtitle="Real reviews from parents whose children have grown with us."
        />
        <div className="absolute -top-20 -right-6 w-28 h-28 md:-top-32 md:-right-12 md:w-56 md:h-56 lg:w-[24rem] lg:h-[24rem] animate-float pointer-events-none z-[0] opacity-60 md:opacity-100">
          <img src={familiesMascot} alt="" className="w-full h-full object-contain mascot-optimize drop-shadow-2xl" />
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6 relative z-[1]">
        {testimonials.map((t) => (
          <figure key={t.name} className="bg-card rounded-3xl p-7 shadow-[var(--shadow-soft)] border border-border/50">
            <div className="flex gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-foreground/85 leading-relaxed">"{t.text}"</blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <div className="grid place-items-center w-11 h-11 rounded-full bg-[var(--gradient-primary)] text-white font-display font-bold">
                {t.name[0]}
              </div>
              <div>
                <div className="font-display font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
