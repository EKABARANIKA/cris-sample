import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageHero } from "@/components/site/Section";
import { Phone, Mail, MapPin, Send, CheckCircle2, ChevronDown } from "lucide-react";
import contactMascot from "@/assets/contact-mascot.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact CRIS Learning Centre — Santhoshpuram, Chennai" },
      { name: "description", content: "Get in touch with CRIS Learning Centre. Call 9884207073 or 9043480305, email crislearningcentre@gmail.com or visit us in Santhoshpuram, Chennai." },
      { property: "og:title", content: "Contact CRIS Learning Centre" },
      { property: "og:description", content: "Schedule a visit, ask about programs or enroll your child today." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  parentName: z.string().trim().min(1, "Parent name is required").max(80),
  childName: z.string().trim().min(1, "Child name is required").max(80),
  age: z.string().trim().min(1, "Age is required").max(20),
  phone: z.string().trim().min(7, "Valid phone required").max(20).regex(/^[0-9+\-\s]+$/, "Numbers only"),
  program: z.string().min(1, "Please choose a program"),
  message: z.string().trim().max(800).optional(),
});

const programs = ["Kindergarten Tuition", "Phonics Classes", "Handwriting Classes", "Pre-Writing Skills", "Abacus Classes", "AI & Robotics Classes", "Other"];

function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());
    const result = schema.safeParse(data);
    
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    
    setErrors({});
    setSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/crislearningcentre@gmail.com", {
        method: "POST",
        body: fd,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setSent(true);
        form.reset();
      } else {
        const errorData = await response.json();
        setErrors({ form: errorData.error || "Something went wrong. Please try again." });
      }
    } catch (error) {
      setErrors({ form: "Failed to send message. Please check your connection." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <PageHero eyebrow="Contact" title={<>Get in <span className="text-gradient">touch</span></>} subtitle="We'd love to meet you and your child. Schedule a visit or send us a message." />

      <section className="container-app py-16 grid md:grid-cols-3 gap-5">
        {[
          { icon: MapPin, title: "Visit Us", lines: ["6th, 8/106, Kalaignar Karunanidhi", "Valliammai Cross St, Santhosapuram", "Chennai, Tamil Nadu 600073"] },
          { icon: Phone, title: "Call Us", lines: ["+91 98842 07073", "+91 90434 80305"], hrefs: ["tel:9884207073", "tel:9043480305"] },
          { icon: Mail, title: "Email Us", lines: ["crislearningcentre@gmail.com"], hrefs: ["mailto:crislearningcentre@gmail.com"] },
        ].map((c) => (
          <div key={c.title} className="brand-hover-card group rounded-3xl p-7 text-center">
            <div className="mx-auto grid place-items-center w-14 h-14 rounded-2xl bg-primary/10 text-primary group-hover:bg-white/20 group-hover:text-white transition-colors mb-4">
              <c.icon className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg">{c.title}</h3>
            <div className="mt-2 space-y-0.5">
              {c.lines.map((l, i) => (
                c.hrefs?.[i]
                  ? <a key={l} href={c.hrefs[i]} className="block text-sm text-muted-foreground group-hover:text-white hover:underline break-words">{l}</a>
                  : <p key={l} className="text-sm text-muted-foreground group-hover:text-white">{l}</p>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="container-app pb-20 grid lg:grid-cols-2 gap-10">
        <form onSubmit={onSubmit} className="bg-card rounded-3xl p-8 md:p-10 border border-border/50 shadow-[var(--shadow-soft)]">
          <h2 className="font-display font-bold text-2xl mb-2">Schedule a Visit</h2>
          <p className="text-sm text-muted-foreground mb-6">Tell us about your child and we'll reach out within 24 hours.</p>

          {sent && (
            <div className="mb-5 flex items-start gap-3 p-4 rounded-2xl bg-success/10 text-success">
              <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" />
              <span className="text-sm font-medium leading-relaxed">Thank you for reaching out to us. We have received your enquiry and will get back to you as soon as possible.</span>
            </div>
          )}

          {errors.form && (
            <div className="mb-5 flex items-center gap-3 p-4 rounded-2xl bg-destructive/10 text-destructive">
              <span className="text-sm font-medium">{errors.form}</span>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-4">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Lead from Website Contact Form" />
            <Field label="Parent Name" name="parentName" error={errors.parentName} />
            <Field label="Child Name" name="childName" error={errors.childName} />
            <Field label="Age" name="age" error={errors.age} />
            <Field label="Phone Number" name="phone" type="tel" error={errors.phone} />
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-1.5">Program Interested In</label>
              <div className="relative">
                <select name="program" className="w-full px-4 py-3 rounded-2xl bg-background border border-input appearance-none focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="">Select a program</option>
                  {programs.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>

                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
              
              {errors.program && <p className="text-xs text-destructive mt-1">{errors.program}</p>}
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-1.5">Message <span className="text-muted-foreground font-normal">(optional)</span></label>
              <textarea name="message" rows={4} maxLength={800} className="w-full px-4 py-3 rounded-2xl bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={submitting}
            className="btn-primary w-full mt-6 hover:[transform:translateY(-2px)] hover:shadow-[var(--shadow-glow)] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
          >
            {submitting ? (
              <span className="flex items-center gap-2">Processing... <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /></span>
            ) : (
              <span className="flex items-center gap-2">Schedule A Visit <Send className="w-4 h-4" /></span>
            )}
          </button>
        </form>

        <div className="relative">
          <div className="rounded-3xl overflow-hidden border border-border/50 shadow-[var(--shadow-soft)] h-full min-h-[400px]">
            <iframe
              title="CRIS Learning Centre Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7777.758631252986!2d80.16856893386843!3d12.915477362364044!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f310b3a15a5%3A0xfa9eb30af5ad970b!2sThe%20CRIS%20Learning%20Centre!5e0!3m2!1sen!2sin!4v1781281377279!5m2!1sen!2sin"
              loading="lazy"
              className="w-full h-full min-h-[400px] border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="absolute -bottom-10 -right-6 w-32 h-32 md:-bottom-12 md:-right-10 md:w-48 md:h-48 lg:w-72 lg:h-72 animate-float pointer-events-none z-10">
            <img src={contactMascot} alt="" className="w-full h-full object-contain drop-shadow-xl" />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        maxLength={120}
        className="w-full px-4 py-3 rounded-2xl bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring"
      />
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
    </div>
  );
}
