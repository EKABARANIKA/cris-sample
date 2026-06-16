import { GraduationCap, BookOpen, Pencil, Sparkles, Calculator, Cpu, Palette, Trophy, Users, Brain, Zap, ClipboardList, Search, Mic2, Library, FileText, Timer, Target, PenTool, MousePointer2, Lightbulb, Code, Binary, Brush, Map, Smile, type LucideIcon } from "lucide-react";
import kgImg from "@/assets/kindergarten.png";
import phonicsImg from "@/assets/phonics.png";
import handwritingImg from "@/assets/handwriting.png";
import prewritingImg from "@/assets/prewriting.png";
import abacusImg from "@/assets/abacus.png";
import roboticsImg from "@/assets/ai-robotics.png";
import drawingImg from "@/assets/drawing.png";
import chessImg from "@/assets/chess.png";

export type ProgramSlug =
  | "/programs/kindergarten-tuition"
  | "/programs/phonics"
  | "/programs/handwriting"
  | "/programs/pre-writing"
  | "/programs/abacus"
  | "/programs/ai-robotics"
  | "/programs/drawing"
  | "/programs/chess";

export interface Program {
  slug: ProgramSlug;
  title: string;
  short: string;
  subtitle: string;
  description: string;
  image: string;
  icon: LucideIcon;
  ageGroup: string;
  tags: string[];
  highlights: string[];
  benefits: { label: string; icon: LucideIcon }[];
  outcomes: string[];
}

export const programs: Program[] = [
  {
    slug: "/programs/kindergarten-tuition",
    title: "Kindergarten Tuition",
    short: "Personalised support for Pre-KG, LKG & UKG students.",
    subtitle: "Pre-KG · LKG · UKG",
    description:
      "An exclusive tuition program for Pre-KG, LKG and UKG children. Personalised, structured and joyful learning that builds school confidence and academic readiness.",
    image: kgImg,
    icon: GraduationCap,
    ageGroup: "Ages 3 – 6",
    tags: ["Pre-KG", "LKG", "UKG", "Small Batches"],
    highlights: [
      "Pre-KG, LKG and UKG support",
      "Daily homework guidance",
      "Concept-based teaching",
      "Personalised learning plans",
      "Progress tracking & parent updates",
    ],
    benefits: [
      { label: "Individual attention", icon: Users },
      { label: "Homework support", icon: BookOpen },
      { label: "Concept clarity", icon: Brain },
      { label: "Confidence building", icon: Zap },
      { label: "Personalised learning plans", icon: ClipboardList },
    ],
    outcomes: [
      "Strong alphabet & number sense",
      "Reading & writing readiness",
      "Improved school performance",
      "Joyful approach to learning",
    ],
  },
  {
    slug: "/programs/phonics",
    title: "Phonics Classes",
    short: "Letter sounds, blending & confident reading.",
    subtitle: "English · Tamil · Hindi",
    description:
      "Structured phonics training in English, Tamil and Hindi that turns letter sounds into fluent, confident reading.",
    image: phonicsImg,
    icon: BookOpen,
    ageGroup: "Ages 4+",
    tags: ["English", "Tamil", "Hindi", "Weekly 2 Classes"],
    highlights: [
      "Beginner, intermediate & advanced levels",
      "Three-language phonics expertise",
      "Sound-blending workshops",
      "Reading fluency drills",
      "Listening & pronunciation focus",
    ],
    benefits: [
      { label: "Letter sound recognition", icon: Search },
      { label: "Word blending", icon: Zap },
      { label: "Reading fluency", icon: BookOpen },
      { label: "Pronunciation improvement", icon: Mic2 },
      { label: "Vocabulary building", icon: Library },
    ],
    outcomes: [
      "Independent reading",
      "Stronger pronunciation",
      "Improved listening skills",
      "Reading confidence",
    ],
  },
  {
    slug: "/programs/handwriting",
    title: "Handwriting Classes",
    short: "Neat, fast and confident handwriting development.",
    subtitle: "Age 5+ · Personalised Coaching",
    description:
      "A focused program to develop beautiful, neat and confident handwriting through personalised coaching and regular practice.",
    image: handwritingImg,
    icon: Pencil,
    ageGroup: "Ages 5+",
    tags: ["Neatness", "Speed", "Confidence"],
    highlights: [
      "Personalised handwriting coaching",
      "Custom practice sheets",
      "Speed improvement drills",
      "Cursive & print styles",
      "Individual monitoring",
    ],
    benefits: [
      { label: "Personalised coaching", icon: Users },
      { label: "Regular practice sheets", icon: FileText },
      { label: "Speed improvement drills", icon: Timer },
      { label: "Neatness training", icon: Sparkles },
      { label: "Individual monitoring", icon: Target },
    ],
    outcomes: [
      "Improved writing speed",
      "Better presentation",
      "Enhanced confidence",
      "Cleaner handwriting",
    ],
  },
  {
    slug: "/programs/pre-writing",
    title: "Pre-Writing Skills",
    short: "Grip, tracing and fine motor readiness for writing.",
    subtitle: "Ages 2.5 – 4 · Foundations",
    description:
      "A foundational pre-writing program that builds pencil grip, tracing skills, hand-eye coordination and fine motor strength — the essential building blocks of writing.",
    image: prewritingImg,
    icon: Sparkles,
    ageGroup: "Ages 2.5 – 4",
    tags: ["Motor Skills", "Coordination", "Pre-Writing"],
    highlights: [
      "Correct pencil grip training",
      "Tracing & pattern practice",
      "Fine motor activities",
      "Hand-eye coordination games",
      "Confidence-first approach",
    ],
    benefits: [
      { label: "Correct pencil grip", icon: Pencil },
      { label: "Tracing & pattern practice", icon: PenTool },
      { label: "Fine motor development", icon: MousePointer2 },
      { label: "Hand-eye coordination", icon: Target },
      { label: "Focus & attention", icon: Brain },
    ],
    outcomes: [
      "Ready for formal writing",
      "Better hand control",
      "Improved concentration",
      "Confident strokes",
    ],
  },
  {
    slug: "/programs/abacus",
    title: "Abacus Classes",
    short: "Mental math mastery through colourful abacus learning.",
    subtitle: "Ages 5 – 12 · Mental Math",
    description:
      "Build lightning-fast mental math, sharper concentration and number confidence through structured, level-based abacus training.",
    image: abacusImg,
    icon: Calculator,
    ageGroup: "Ages 5 – 12",
    tags: ["Mental Math", "Focus", "Speed"],
    highlights: [
      "Level-based curriculum",
      "Mental math drills",
      "Speed & accuracy training",
      "Memory & focus exercises",
      "Confidence-building approach",
    ],
    benefits: [
      { label: "Strong mental calculation", icon: Calculator },
      { label: "Improved concentration", icon: Brain },
      { label: "Memory enhancement", icon: Zap },
      { label: "Logical thinking", icon: Lightbulb },
      { label: "Boosted academic confidence", icon: Trophy },
    ],
    outcomes: [
      "Quick mental math",
      "Stronger focus & memory",
      "Better problem-solving",
      "Confident numerical skills",
    ],
  },
  {
    slug: "/programs/ai-robotics",
    title: "AI & Robotics Classes",
    short: "STEM, coding & robotics for curious young innovators.",
    subtitle: "Ages 6 – 12 · STEM",
    description:
      "Hands-on AI, coding and robotics classes that spark curiosity, creativity and future-ready thinking through fun, age-appropriate projects.",
    image: roboticsImg,
    icon: Cpu,
    ageGroup: "Ages 6 – 12",
    tags: ["STEM", "Coding", "Robotics"],
    highlights: [
      "Introduction to block coding",
      "Hands-on robotics kits",
      "Real-world mini projects",
      "Teamwork & creativity",
      "Future-ready STEM thinking",
    ],
    benefits: [
      { label: "Introduction to coding", icon: Code },
      { label: "Hands-on robotics kits", icon: Cpu },
      { label: "Computational thinking", icon: Binary },
      { label: "Creativity & innovation", icon: Lightbulb },
      { label: "Teamwork & problem solving", icon: Users },
    ],
    outcomes: [
      "Foundational coding skills",
      "Confidence with technology",
      "Logical & analytical thinking",
      "Excitement for STEM",
    ],
  },
  {
    slug: "/programs/drawing",
    title: "Drawing Class",
    short: "Unleash creativity through structured art & drawing.",
    subtitle: "Creative Arts · SWASA ART",
    description:
      "A creative and structured drawing program in collaboration with SWASA ART, designed to help children express themselves and master foundational art techniques.",
    image: drawingImg,
    icon: Palette,
    ageGroup: "All Ages",
    tags: ["Drawing", "Painting", "Craft", "Creative"],
    highlights: [
      "Foundational drawing techniques",
      "Color theory and painting",
      "Creative craft projects",
      "Personalised guidance",
      "Online & direct options",
    ],
    benefits: [
      { label: "Fine motor skill development", icon: MousePointer2 },
      { label: "Enhanced creativity & expression", icon: Palette },
      { label: "Improved focus & patience", icon: Timer },
      { label: "Foundational art skills", icon: Brush },
      { label: "Confidence in self-expression", icon: Smile },
    ],
    outcomes: [
      "Mastery of basic drawing",
      "Confident use of colors",
      "Unique creative projects",
      "Joy of artistic creation",
    ],
  },
  {
    slug: "/programs/chess",
    title: "Chess Class",
    short: "Professional chess training for young strategists.",
    subtitle: "Strategy · White & Black Academy",
    description:
      "Strategic chess training in collaboration with White & Black Academy, helping children master the game of kings while building analytical and decision-making skills.",
    image: chessImg,
    icon: Trophy,
    ageGroup: "Ages 5+",
    tags: ["Strategy", "Focus", "Analysis", "Competitive"],
    highlights: [
      "Professional coaching",
      "Strategic opening & ending",
      "Tactical problem solving",
      "Competitive match practice",
      "Analytical thinking drills",
    ],
    benefits: [
      { label: "Critical thinking skills", icon: Brain },
      { label: "Improved concentration", icon: Target },
      { label: "Strategic planning", icon: Map },
      { label: "Patience & discipline", icon: Timer },
      { label: "Better decision making", icon: Lightbulb },
    ],
    outcomes: [
      "Strong chess foundations",
      "Tournament readiness",
      "Enhanced logical thinking",
      "Competitive sportsmanship",
    ],
  },
];

export const getProgram = (slug: ProgramSlug) =>
  programs.find((p) => p.slug === slug)!;

export const getRelatedPrograms = (slug: ProgramSlug) =>
  programs.filter((p) => p.slug !== slug);
