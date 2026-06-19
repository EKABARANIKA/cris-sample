import { ArrowRight, Sparkles, Heart, Star } from "lucide-react";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-children.png";

const stats = [
  { n: "15+", l: "Years of Experience" },
  { n: "1000+", l: "Students Guided" },
  { n: "4+", l: "Specialised Programs" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--gradient-hero)] pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="absolute -top-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-accent/20 blur-3xl" />

      <div className="container-app relative grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur text-primary text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" /> Trusted Since 2009
          </span>
          <h1 className="mt-5 font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.02] text-foreground">
            Empowering <span className="text-gradient">Young Minds</span> Through Early Learning
          </h1>
          <p className="mt-6 text-base md:text-lg text-foreground/70 leading-relaxed max-w-xl">
            Kindergarten tuition, phonics training, handwriting development and foundational learning programs designed to build confidence and academic success.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary hover:[transform:translateY(-2px)] hover:shadow-[var(--shadow-glow)]">
              Enroll Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/programs" className="btn-outline hover:border-primary hover:text-primary">
              Explore Programs
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="font-display font-bold text-2xl md:text-3xl text-primary">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-in">
          <div className="absolute -inset-4 bg-[var(--gradient-primary)] opacity-20 blur-2xl rounded-[2rem]" />
          <div className="relative rounded-[2rem] overflow-hidden shadow-[var(--shadow-card)] border-4 border-white">
            <img src={heroImg} alt="Happy children learning at CRIS Learning Centre" width={1600} height={1100} fetchPriority="high" decoding="async" className="w-full h-auto" />
          </div>
          <div className="hidden md:flex absolute -bottom-6 -left-6 items-center gap-3 bg-white rounded-2xl shadow-[var(--shadow-soft)] px-5 py-4 animate-float">
            <div className="grid place-items-center w-11 h-11 rounded-xl bg-primary/10 text-primary">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-semibold text-sm">1000+ Happy Families</div>
              <div className="text-xs text-muted-foreground">Trusted across Chennai</div>
            </div>
          </div>
          <div className="hidden md:flex absolute -top-6 -right-6 items-center gap-2 bg-white rounded-2xl shadow-[var(--shadow-soft)] px-4 py-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-xs font-semibold ml-1">5.0</span>
          </div>
        </div>
      </div>
    </section>
  );
}
