import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import kgImgAbout from "@/assets/kindergarten.jpg";
import phonicsImgAbout from "@/assets/phonics.jpg";
import handwritingImgAbout from "@/assets/handwriting.jpg";
import numbersImg from "@/assets/numbers.jpg";
import butterflyMascot from "@/assets/butterfly-mascot.png";

export function AboutSection() {
  return (
    <section className="container-app py-20 md:py-28 relative">
      <div className="absolute -top-16 left-12 md:-top-24 md:left-24 lg:-top-32 lg:left-32 w-48 h-48 md:w-80 md:h-80 lg:w-[32rem] lg:h-[32rem] animate-float pointer-events-none z-[0] opacity-30 md:opacity-100" style={{ animationDelay: '1.5s' }}>
        <img src={butterflyMascot} alt="" className="w-full h-full object-contain filter drop-shadow-2xl" />
      </div>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wider uppercase">
            About CRIS
          </span>
          <h2 className="mt-4 font-display font-bold text-3xl md:text-5xl leading-tight">
            A premium early learning centre in <span className="text-gradient">Santhoshpuram</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Established in 2009, CRIS Learning Centre has been nurturing young minds through engaging educational programs that build confidence, academic readiness, and lifelong learning habits.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Starting its journey in Velachery, CRIS Learning Centre has steadily expanded over the years to become a trusted learning destination for families across Chennai, while staying true to the personalized approach that has been at the heart of our mission since day one.
          </p>
          <Link to="/about" className="mt-7 inline-flex items-center gap-2 font-display font-semibold text-primary group">
            Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="relative animate-fade-in">
          <div className="grid grid-cols-2 gap-4">
            {[kgImgAbout, phonicsImgAbout, numbersImg, handwritingImgAbout].map((img, i) => (
              <div key={i} className={`rounded-3xl overflow-hidden shadow-[var(--shadow-soft)] ${i % 2 ? "translate-y-8" : ""}`}>
                <img src={img} alt="" loading="lazy" className="w-full h-full object-cover aspect-[4/5]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
