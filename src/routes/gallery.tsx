import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/Section";
import { X } from "lucide-react";
import g1 from "@/assets/gallery1.jpeg";
import g2 from "@/assets/gallery2.jpeg";
import g3 from "@/assets/gallery3.jpeg";
import g4 from "@/assets/gallery4.jpeg";
import g5 from "@/assets/gallery5.jpeg";
import g6 from "@/assets/gallery6.jpeg";
import phonics from "@/assets/7.jpeg";
import kg from "@/assets/8.jpeg";
import handwriting from "@/assets/group-image-main.jpeg";
import numbers from "@/assets/founder-certificate.jpeg";
import g10 from "@/assets/gallery10.jpeg";
import g11 from "@/assets/gallery11.jpeg";
import g12 from "@/assets/gallery12.jpeg";
import g13 from "@/assets/gallery13.jpeg";
import g14 from "@/assets/gallery14.jpeg";
import g15 from "@/assets/gallery15.jpeg";
import g16 from "@/assets/gallery16.jpeg";
import g17 from "@/assets/gallery17.jpeg";

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
  { src: handwriting },
  { src: g1 },
  { src: phonics },
  { src: g2 },
  { src: numbers },
  { src: kg },
  { src: g4 },
  { src: g3},
  { src: g5},
  { src: g6},
  { src: g10},
  { src: g11},
  { src: g12},
  { src: g13},
  { src: g14},
  { src: g15},
  { src: g16},
  { src: g17},
];

function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <PageHero eyebrow="Gallery" title={<>Moments of <span className="text-gradient">learning & joy</span></>} subtitle="Take a peek inside our classrooms, programs and celebrations." />

      <section className="container-app py-16">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Column 1 - 6 Images */}
          <div className="flex-1 flex flex-col gap-6">
            {[items[0], items[1], items[2], items[3], items[12], items[13]].map((item, i) => (
              <button key={i} onClick={() => setLightbox(item.src)} className="group relative overflow-hidden rounded-[2.5rem] shadow-[var(--shadow-soft)] transition-all block w-full focus:outline-none">
                <img src={item.src} alt="Gallery" loading="lazy" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
              </button>
            ))}
          </div>

          {/* Column 2 - 6 Images */}
          <div className="flex-1 flex flex-col gap-6">
            {[items[4], items[5], items[10], items[6], items[14], items[15]].map((item, i) => (
              <button key={i} onClick={() => setLightbox(item.src)} className="group relative overflow-hidden rounded-[2.5rem] shadow-[var(--shadow-soft)] transition-all block w-full focus:outline-none">
                <img src={item.src} alt="Gallery" loading="lazy" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
              </button>
            ))}
          </div>

          {/* Column 3 - 6 Images */}
          <div className="flex-1 flex flex-col gap-6">
            {[items[7], items[8], items[9], items[11], items[16], items[17]].map((item, i) => (
              <button key={i} onClick={() => setLightbox(item.src)} className="group relative overflow-hidden rounded-[2.5rem] shadow-[var(--shadow-soft)] transition-all block w-full focus:outline-none">
                <img src={item.src} alt="Gallery" loading="lazy" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
              </button>
            ))}
          </div>
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
