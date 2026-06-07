import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageHero } from "@/components/site/Section";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

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
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <>
      <PageHero eyebrow="Contact" title={<>Get in <span className="text-gradient">touch</span></>} subtitle="We'd love to meet you and your child. Schedule a visit or send us a message." />

      <section className="container-app py-16 grid md:grid-cols-3 gap-5">
        {[
          { icon: MapPin, title: "Visit Us", lines: ["Santhoshpuram", "Chennai, Tamil Nadu"] },
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
            <div className="mb-5 flex items-center gap-3 p-4 rounded-2xl bg-primary/10 text-primary">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-sm font-medium">Thank you! We'll be in touch shortly.</span>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Parent Name" name="parentName" error={errors.parentName} />
            <Field label="Child Name" name="childName" error={errors.childName} />
            <Field label="Age" name="age" error={errors.age} />
            <Field label="Phone Number" name="phone" type="tel" error={errors.phone} />
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-1.5">Program Interested In</label>
              <select name="program" className="w-full px-4 py-3 rounded-2xl bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring">
                <option value="">Select a program</option>
                {programs.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
              {errors.program && <p className="text-xs text-destructive mt-1">{errors.program}</p>}
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-1.5">Message <span className="text-muted-foreground font-normal">(optional)</span></label>
              <textarea name="message" rows={4} maxLength={800} className="w-full px-4 py-3 rounded-2xl bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
            </div>
          </div>

          <button type="submit" className="btn-primary w-full mt-6 hover:[transform:translateY(-2px)] hover:shadow-[var(--shadow-glow)]">
            Schedule A Visit <Send className="w-4 h-4" />
          </button>
        </form>

        <div className="rounded-3xl overflow-hidden border border-border/50 shadow-[var(--shadow-soft)] min-h-[400px]">
          <iframe
            title="CRIS Learning Centre Location"
            src="https://www.google.com/maps?q=Santhoshpuram%20Chennai&output=embed"
            loading="lazy"
            className="w-full h-full min-h-[400px] border-0"
            referrerPolicy="no-referrer-when-downgrade"
          />
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
