import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";

export function CTA({
  title = "Give Your Child The Best Start To Learning",
  subtitle = "Join the CRIS family and watch your child grow into a confident, curious learner.",
}: { title?: string; subtitle?: string }) {
  return (
    <section className="container-app py-20">
      <div
        className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] px-6 py-16 md:p-16 text-center shadow-[var(--shadow-card)]"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.45 0.22 350) 0%, oklch(0.40 0.24 320) 50%, oklch(0.35 0.22 295) 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative">
          <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight max-w-2xl mx-auto text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
            {title}
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-white text-base md:text-lg font-medium">{subtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary font-display font-bold text-base hover:scale-[1.04] transition-transform shadow-xl"
            >
              Enroll Now <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:9884207073"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-foreground/30 backdrop-blur border-2 border-white text-white font-display font-bold text-base hover:bg-white hover:text-primary transition"
            >
              <Phone className="w-4 h-4" /> Book A Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
