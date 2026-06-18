import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, BookOpen, Pencil, Calculator, Sparkles, GraduationCap, Star, Users, Award, Heart, ShieldCheck, ChevronRight, Palette, BookMarked, PenTool, Trophy, Cpu, Handshake, Instagram } from "lucide-react";
import heroImg from "@/assets/hero-children.png";
import kgImg from "@/assets/kindergarten.png";
import kgImgAbout from "@/assets/kindergarten.jpg";
import phonicsImg from "@/assets/phonics.png";
import phonicsImgAbout from "@/assets/phonics.jpg";
import handwritingImg from "@/assets/handwriting.png";
import handwritingImgAbout from "@/assets/handwriting.jpg";
import prewritingImg from "@/assets/prewriting.png";
import abacusImg from "@/assets/abacus.png";
import roboticsImg from "@/assets/ai-robotics.png";
import drawingImg from "@/assets/drawing.png";
import chessImg from "@/assets/chess.png";
import numbersImg from "@/assets/numbers.jpg";
import swasaLogo from "@/assets/swasa-logo.jpg";
import ipaLogo from "@/assets/ipa.jpg";
import wbLogo from "@/assets/white-black-logo.jpeg";
import coursesMascot from "@/assets/courses-mascot.png";
import familiesMascot from "@/assets/families-mascot.png";
import faqMascot from "@/assets/faq-mascot.png";
import butterflyMascot from "@/assets/butterfly-mascot.png";
import { SectionHeader } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { CourseModal, type CourseDetail } from "@/components/site/CourseModal";
import { Marquee } from "@/components/site/Marquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CRIS Learning Centre — Early Learning & Tuition in Chennai" },
      { name: "description", content: "Premium kindergarten tuition, phonics, handwriting & early learning programs in Santhoshpuram, Chennai. Building strong foundations since 2009." },
    ],
  }),
  component: Home,
});

import { programs } from "@/lib/programs-catalog";

const courses = programs.map(p => ({
  ...p,
  href: p.slug,
}));

const partners = [
  { 
    name: "SWASA ART", 
    tag: "Creative Arts Partner", 
    desc: "Drawing, Painting, and Craft classes (Online & Direct) for all age groups.", 
    color: "from-pink-400 to-rose-500",
    logo: swasaLogo,
    url: "https://www.instagram.com/reel/DZWpkLcva3z/?igsh=MTRmcnZicHFtNWUxOQ=="
  },
  { 
    name: "Ideal Play Abacus", 
    tag: "Mental Math Partner", 
    desc: "Abacus and brain development program for children to boost memory and concentration.", 
    color: "from-violet-500 to-fuchsia-500",
    logo: ipaLogo,
    url: "https://www.instagram.com/ipa_santhoshpuram?igsh=MTF3OTcya2VrdmxsYg=="
  },
  { 
    name: "White & Black Academy", 
    tag: "Strategic Learning Partner", 
    desc: "Professional chess training for young strategists to master the game.", 
    color: "from-amber-400 to-orange-500",
    logo: wbLogo,
    url: "https://www.instagram.com/whiteandblackacademy/" 
  },
];



const reasons = [
  { icon: Award, title: "Since 2009", desc: "15+ years of experience nurturing young learners." },
  { icon: GraduationCap, title: "Qualified Trainers", desc: "Experienced educators specialised in early learning." },
  { icon: Heart, title: "Personalised Learning", desc: "Individual attention for every single child." },
  { icon: Users, title: "Small Batch Sizes", desc: "Better interaction and stronger relationships." },
  { icon: BookOpen, title: "Structured Curriculum", desc: "Progress-based learning that builds confidence." },
  { icon: ShieldCheck, title: "Child-Friendly Space", desc: "A safe, supportive and joyful environment." },
];

const journey = [
  { icon: Palette, label: "Pre-Writing Skills", emoji: "🎨", color: "from-pink-400 to-rose-500" },
  { icon: BookMarked, label: "Phonics Learning", emoji: "🔤", color: "from-orange-400 to-amber-500" },
  { icon: BookOpen, label: "Reading Confidence", emoji: "📖", color: "from-yellow-400 to-orange-500" },
  { icon: PenTool, label: "Handwriting Development", emoji: "✍️", color: "from-emerald-400 to-teal-500" },
  { icon: Calculator, label: "Fun With Numbers", emoji: "🧮", color: "from-sky-400 to-blue-500" },
  { icon: Trophy, label: "School Readiness", emoji: "🎓", color: "from-violet-500 to-fuchsia-500" },
];

const stats = [
  { n: "15+", l: "Years of Experience" },
  { n: "1000+", l: "Students Guided" },
  { n: "4+", l: "Specialised Programs" },
  { n: "100%", l: "Child-Focused Learning" },
];

const testimonials = [
  { name: "Priya R.", role: "Parent of LKG Student", text: "My daughter blossomed at CRIS. Her reading and writing have improved tremendously and she actually loves going to class!" },
  { name: "Karthik S.", role: "Parent of UKG Student", text: "The personalised attention is unmatched. The teachers truly care about every child's progress." },
  { name: "Lakshmi M.", role: "Parent of Pre-KG Student", text: "A warm, safe and inspiring place. My son's confidence has grown so much since joining CRIS." },
];

function Home() {
  const [active, setActive] = useState<CourseDetail | null>(null);

  return (
    <>
      {/* HERO */}
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
              {stats.slice(0, 3).map((s) => (
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

      {/* ABOUT */}
      <section className="container-app py-20 md:py-28 relative">
        <div className="absolute -top-16 left-12 md:-top-24 md:left-24 lg:-top-32 lg:left-32 w-48 h-48 md:w-80 md:h-80 lg:w-[32rem] lg:h-[32rem] animate-float pointer-events-none z-[0] opacity-30 md:opacity-100" style={{ animationDelay: '1.5s' }}>
          <img src={butterflyMascot} alt="" className="w-full h-full object-contain filter drop-shadow-2xl" />
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
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

          <div className="relative">
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

      {/* ACADEMIC PARTNERS */}
      <section className="container-app py-20 md:py-24">
        <SectionHeader
          eyebrow="Collaborations"
          title={<>Our <span className="text-gradient">Academic Partners</span></>}
          subtitle="Collaborating with leading educational organizations to deliver high-quality learning experiences."
        />
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {partners.map((p, i) => (
            <a
              key={i}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl bg-card border border-border/60 p-7 md:p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] hover:-translate-y-1.5 transition-all duration-300 animate-fade-up block"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className={`absolute -top-16 -right-16 w-44 h-44 rounded-full bg-gradient-to-br ${p.color} opacity-15 group-hover:opacity-30 blur-2xl transition-opacity`} />
              <div className="relative w-20 h-20 rounded-2xl bg-white overflow-hidden shadow-md flex items-center justify-center p-2">
                <img src={p.logo} alt={p.name} className="w-full h-full object-contain" />
              </div>
              <div className="relative mt-6">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-primary">{p.tag}</span>
                <div className="flex items-center gap-2">
                  <h3 className="mt-1 font-display font-bold text-2xl">{p.name}</h3>
                  <Instagram className="w-4 h-4 text-muted-foreground group-hover:text-pink-500 transition-colors" />
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
              <div className="relative mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors">
                View Profile <Instagram className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>
      </section>

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
                onClick={() => setActive(c)}
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

      {/* JOURNEY — premium roadmap */}
      <section className="container-app py-20 md:py-28">
        <SectionHeader
          eyebrow="The CRIS Pathway"
          title={<>Your Child's <span className="text-gradient">Learning Journey</span></>}
          subtitle="A structured pathway from first learning experiences to school readiness."
        />

        {/* Desktop / tablet: horizontal roadmap */}
        <div className="hidden md:block relative">
          {/* Connecting path BEHIND circles, aligned with circle vertical center */}
          <svg
            className="absolute left-0 right-0 top-[3rem] w-full h-6 pointer-events-none -z-0"
            viewBox="0 0 1200 24"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M 40 12 Q 240 -12, 440 12 T 840 12 T 1160 12"
              stroke="url(#journeyGrad)"
              strokeWidth="3"
              strokeDasharray="6 10"
              fill="none"
              strokeLinecap="round"
              className="animate-[fade-in_1s_ease-out]"
            />
            <defs>
              <linearGradient id="journeyGrad" x1="0" x2="1">
                <stop offset="0%" stopColor="#fb7185" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>

          <ol className="relative grid grid-cols-3 lg:grid-cols-6 gap-x-3 gap-y-10">
            {journey.map((step, i) => (
              <li
                key={step.label}
                className="group flex flex-col items-center text-center animate-fade-up"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${step.color} grid place-items-center text-white shadow-xl ring-4 ring-background group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-10 h-10" strokeWidth={2.2} />
                  <span className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-white text-foreground font-display font-bold text-sm grid place-items-center shadow-lg border-2 border-background">
                    {i + 1}
                  </span>
                </div>
                <div className="mt-5 font-display font-semibold text-sm md:text-[15px] leading-tight max-w-[10rem]">
                  {step.label}
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Mobile: vertical roadmap */}
        <ol className="md:hidden relative max-w-sm mx-auto">
          <span className="absolute left-[2.75rem] top-4 bottom-4 w-[3px] bg-gradient-to-b from-rose-400 via-amber-400 to-violet-500 rounded-full" aria-hidden="true" />
          {journey.map((step, i) => (
            <li
              key={step.label}
              className="relative flex items-center gap-5 py-4 animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={`relative shrink-0 w-[5.5rem] h-[5.5rem] rounded-full bg-gradient-to-br ${step.color} grid place-items-center text-white shadow-xl ring-4 ring-background`}>
                <step.icon className="w-8 h-8" strokeWidth={2.2} />
                <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-white text-foreground font-display font-bold text-xs grid place-items-center shadow-lg border-2 border-background">
                  {i + 1}
                </span>
              </div>
              <div className="font-display font-semibold text-base leading-tight">{step.label}</div>
            </li>
          ))}
        </ol>
      </section>


      {/* WHY CHOOSE — auto-scrolling marquee */}
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

      {/* STATS */}
      <section className="container-app py-20">
        <div className="rounded-[2rem] bg-card border border-border shadow-[var(--shadow-soft)] p-10 md:p-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display font-bold text-4xl md:text-5xl text-gradient">{s.n}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-app py-20">
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
        <div className="grid md:grid-cols-3 gap-6">
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

      <CTA />

      <CourseModal course={active} onClose={() => setActive(null)} />
    </>
  );
}
