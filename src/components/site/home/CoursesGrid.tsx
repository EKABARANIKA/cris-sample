import { ChevronRight } from "lucide-react";
import { programs } from "@/lib/programs-catalog";
import { SectionHeader } from "@/components/site/Section";
import type { CourseDetail } from "@/components/site/CourseModal";

const courses = programs.map(p => ({
  ...p,
  href: p.slug,
}));

interface CoursesGridProps {
  onCourseClick: (course: CourseDetail) => void;
}

export function CoursesGrid({ onCourseClick }: CoursesGridProps) {
  return (
    <section className="bg-muted/40 py-20 md:py-28 relative overflow-hidden">
      <div className="container-app">
        <SectionHeader
          eyebrow="What We Offer"
          title={<>Courses We <span className="text-gradient">Offer</span></>}
          subtitle="Tap any card to see details, benefits and learning outcomes."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c, i) => (
            <button
              key={c.title}
              onClick={() => onCourseClick(c as CourseDetail)}
              style={{ animationDelay: `${i * 80}ms` }}
              className="course-card text-left group relative bg-card rounded-3xl overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] border border-border/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary animate-fade-up cursor-pointer flex flex-col p-0"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden shrink-0 bg-muted/20">
                <img src={c.image} alt={c.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover object-top scale-[1.01] group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 relative z-[1]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="grid place-items-center w-10 h-10 rounded-xl bg-accent/10 text-accent group-hover:bg-white/25 group-hover:text-white transition-colors">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-xl group-hover:text-white transition-colors">{c.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-white/90 transition-colors">{c.short}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.tags.map((t) => (
                    <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-secondary/60 text-secondary-foreground font-medium group-hover:bg-white/20 group-hover:text-white transition-colors">{t}</span>
                  ))}
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-white transition-colors">
                  View Details <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
