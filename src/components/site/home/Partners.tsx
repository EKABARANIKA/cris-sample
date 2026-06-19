import { Instagram } from "lucide-react";
import swasaLogo from "@/assets/swasa-logo.jpg";
import ipaLogo from "@/assets/ipa.jpg";
import wbLogo from "@/assets/white-black-logo.jpeg";
import { SectionHeader } from "@/components/site/Section";

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

export function Partners() {
  return (
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
  );
}
