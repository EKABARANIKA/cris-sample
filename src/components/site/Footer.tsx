import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/cris-logo.gif?url";

export function Footer() {
  return (
    <footer className="mt-24 bg-gradient-to-br from-foreground to-[oklch(0.22_0.04_300)] text-white/85">
      <div className="container-app py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="bg-white rounded-2xl p-3 inline-block mb-4 shadow-[var(--shadow-soft)] overflow-hidden">
            <div 
              className="h-16 w-32 relative"
              style={{
                backgroundImage: `url(${logo})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }}
            >
              <img src={logo} alt="CRIS Learning Centre" className="h-full w-full object-contain [transform:translateZ(0)] opacity-[0.99] [filter:brightness(1.01)_contrast(1.01)] bg-transparent [isolation:isolate]" />
            </div>
          </div>
          <p className="text-sm text-white/75 leading-relaxed">
            Building strong foundations for bright futures through personalized early learning and tuition programs in Chennai since 2009.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="grid place-items-center w-9 h-9 rounded-full bg-white/10 hover:bg-primary transition-colors">
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
            <li><Link to="/programs/kindergarten-tuition" className="hover:text-primary-soft">Kindergarten Tuition</Link></li>
            <li><Link to="/programs/phonics" className="hover:text-primary-soft">Phonics Classes</Link></li>
            <li><Link to="/programs/handwriting" className="hover:text-primary-soft">Handwriting Classes</Link></li>
            <li><Link to="/programs/pre-writing" className="hover:text-primary-soft">Pre-Writing Skills</Link></li>
            <li><Link to="/programs/abacus" className="hover:text-primary-soft">Abacus Classes</Link></li>
            <li><Link to="/programs/ai-robotics" className="hover:text-primary-soft">AI &amp; Robotics</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 text-primary-soft" /> Santhoshpuram, Chennai</li>
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
