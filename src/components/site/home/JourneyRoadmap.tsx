import { Palette, BookMarked, BookOpen, PenTool, Calculator, Trophy } from "lucide-react";
import { SectionHeader } from "@/components/site/Section";

const journey = [
  { icon: Palette, label: "Pre-Writing Skills", emoji: "🎨", color: "from-pink-400 to-rose-500" },
  { icon: BookMarked, label: "Phonics Learning", emoji: "🔤", color: "from-orange-400 to-amber-500" },
  { icon: BookOpen, label: "Reading Confidence", emoji: "📖", color: "from-yellow-400 to-orange-500" },
  { icon: PenTool, label: "Handwriting Development", emoji: "✍️", color: "from-emerald-400 to-teal-500" },
  { icon: Calculator, label: "Fun With Numbers", emoji: "🧮", color: "from-sky-400 to-blue-500" },
  { icon: Trophy, label: "School Readiness", emoji: "🎓", color: "from-violet-500 to-fuchsia-500" },
];

export function JourneyRoadmap() {
  return (
    <section className="container-app py-20 md:py-28">
      <SectionHeader
        eyebrow="The CRIS Pathway"
        title={<>Your Child's <span className="text-gradient">Learning Journey</span></>}
        subtitle="A structured pathway from first learning experiences to school readiness."
      />

      {/* Desktop / tablet: horizontal roadmap */}
      <div className="hidden md:block relative">
        {/* Connecting path BEHIND circles */}
        <svg
          className="absolute left-0 right-0 top-[3rem] w-full h-6 pointer-events-none -z-0"
          viewBox="0 0 1200 24"
          preserveAspectRatio="none"
          aria-hidden="true"
          style={{ opacity: 0.4 }}
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
  );
}
