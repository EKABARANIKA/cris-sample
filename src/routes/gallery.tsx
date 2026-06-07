import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/Section";
import { X } from "lucide-react";
import g1 from "@/assets/gallery1.jpg";
import g2 from "@/assets/gallery2.jpg";
import g3 from "@/assets/gallery3.jpg";
import g4 from "@/assets/gallery4.jpg";
import g5 from "@/assets/gallery5.jpg";
import g6 from "@/assets/gallery6.jpg";
import phonics from "@/assets/phonics.jpg";
import kg from "@/assets/kindergarten.jpg";
import handwriting from "@/assets/handwriting.jpg";
import numbers from "@/assets/numbers.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — CRIS Learning Centre" },
      { name: "description", content: "Glimpses of learning, joy and events at CRIS Learning Centre in Chennai." },
      { property: "og:title", content: "CRIS Learning Centre Gallery" },
      { property: "og:description", content: "Photos of our classrooms, activities and student moments." },
    ],
  }),
  component: Gallery,
});

const items = [
  { src: g1, alt: "Children doing art activity" },
  { src: phonics, alt: "Phonics reading session" },
  { src: handwriting, alt: "Child practising handwriting" },
  { src: g2, alt: "Student showing artwork" },
  { src: kg, alt: "Kindergarten classroom" },
  { src: g4, alt: "Annual day celebration" },
  { src: numbers, alt: "Learning numbers with blocks" },
  { src: g3, alt: "Children raising hands" },
  { src: g5, alt: "Neat handwriting practice" },
  { src: g6, alt: "Teacher reading to children" },
];

function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <PageHero eyebrow="Gallery" title={<>Moments of <span className="text-gradient">learning & joy</span></>} subtitle="Take a peek inside our classrooms, programs and celebrations." />

      <section className="container-app py-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => setLightbox(item.src)}
              aria-label={`View ${item.alt}`}
              className="block w-full group relative overflow-hidden rounded-3xl shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all break-inside-avoid focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <img src={item.src} alt={item.alt} loading="lazy" className="w-full h-auto group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent opacity-0 group-hover:opacity-100 transition" />
            </button>
          ))}
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur grid place-items-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 w-12 h-12 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          <img src={lightbox} alt="Gallery view" className="max-h-[88vh] max-w-[92vw] rounded-2xl object-contain" />
        </div>
      )}
    </>
  );
}
