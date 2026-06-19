import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CTA } from "@/components/site/CTA";
import { CourseModal, type CourseDetail } from "@/components/site/CourseModal";
import { Hero } from "@/components/site/home/Hero";
import { AboutSection } from "@/components/site/home/AboutSection";
import { Partners } from "@/components/site/home/Partners";
import { CoursesGrid } from "@/components/site/home/CoursesGrid";
import { JourneyRoadmap } from "@/components/site/home/JourneyRoadmap";
import { WhyChoose } from "@/components/site/home/WhyChoose";
import { StatsSection } from "@/components/site/home/StatsSection";
import { Testimonials } from "@/components/site/home/Testimonials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CRIS Learning Centre — Early Learning & Tuition in Chennai" },
      { name: "description", content: "Premium kindergarten tuition, phonics, handwriting & early learning programs in Santhoshpuram, Chennai. Building strong foundations since 2009." },
    ],
  }),
  component: Home,
});

function Home() {
  const [active, setActive] = useState<CourseDetail | null>(null);

  return (
    <>
      <Hero />
      <AboutSection />
      <Partners />
      <CoursesGrid onCourseClick={setActive} />
      <JourneyRoadmap />
      <WhyChoose />
      <StatsSection />
      <Testimonials />
      <CTA />
      <CourseModal course={active} onClose={() => setActive(null)} />
    </>
  );
}
