import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/Footer-Logo.png";

export function Footer() {
  return (
    <footer className="mt-24 bg-gradient-to-br from-foreground to-[oklch(0.22_0.04_300)] text-white/85">
      <div className="container-app py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="bg-white rounded-2xl p-3 inline-block mb-4 shadow-[var(--shadow-soft)] overflow-hidden">
            <div className="h-16 w-32 relative">
              <img 
                src={logo} 
                alt="CRIS Learning Centre" 
                loading="lazy"
                className="h-full w-full object-contain [transform:translateZ(0)] bg-transparent" 
              />
            </div>
          </div>
          <p className="text-sm text-white/75 leading-relaxed">
            Building strong foundations for bright futures through personalized early learning and tuition programs in Chennai since 2009.
          </p>
          <div className="flex gap-3 mt-5">
            {[
              { Icon: Facebook, href: "https://www.facebook.com/share/1EE26WbdMK/" },
              { Icon: Instagram, href: "https://www.instagram.com/cris_learning_centre?igsh=MWw3MDQ4eTB5eXB3cQ==" }
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="social link"
                className="grid place-items-center w-9 h-9 rounded-full bg-white/10 hover:bg-primary transition-colors hover:text-white"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", l: "Home" },
              { to: "/about", l: "About Us" },
              { to: "/programs", l: "Programs" },
              { to: "/gallery", l: "Gallery" },
              { to: "/contact", l: "Contact Us" },
            ].map((i) => (
              <li key={i.to}>
                <Link to={i.to} className="hover:text-primary-soft transition-colors">{i.l}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-4">Programs</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/programs/kindergarten-tuition", l: "Kindergarten Tuition" },
              { to: "/programs/phonics", l: "Phonics Classes" },
              { to: "/programs/handwriting", l: "Handwriting Classes" },
              { to: "/programs/pre-writing", l: "Pre-Writing Skills" },
              { to: "/programs/abacus", l: "Abacus Classes" },
              { to: "/programs/ai-robotics", l: "AI & Robotics" },
            ].map((p) => {
              const slug = p.to.split('/').pop() || '';
              return (
                <li key={p.to}>
                  <Link 
                    to="/programs/$programSlug" 
                    params={{ programSlug: slug }}
                    className="hover:text-primary-soft transition-colors"
                  >
                    {p.l}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 text-primary-soft" />Santhosapuram, Chennai</li>
            <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 text-primary-soft" />
              <span><a href="tel:9884207073" className="hover:text-primary-soft block">98842 07073</a>
                <a href="tel:9043480305" className="hover:text-primary-soft block">90434 80305</a></span>
            </li>
            <li className="flex gap-3"><Mail className="w-4 h-4 mt-0.5 text-primary-soft" /><a href="mailto:crislearningcentre@gmail.com" className="hover:text-primary-soft break-all">crislearningcentre@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-app py-5 text-xs text-white/70 flex flex-wrap items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} CRIS Learning Centre. All rights reserved.</p>
          <p>Building Strong Foundations For Bright Futures.</p>
        </div>
      </div>
    </footer>
  );
}
