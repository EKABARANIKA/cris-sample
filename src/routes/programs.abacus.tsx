import { createFileRoute } from "@tanstack/react-router";
import { ProgramTemplate } from "@/components/site/ProgramTemplate";
import { getProgram } from "@/lib/programs-catalog";

const program = getProgram("/programs/abacus");

export const Route = createFileRoute("/programs/abacus")({
  head: () => ({
    meta: [
      { title: `${program.title} — CRIS Learning Centre` },
      { name: "description", content: program.description },
    ],
  }),
  component: () => <ProgramTemplate program={program} />,
});
