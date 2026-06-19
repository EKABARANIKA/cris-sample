import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProgramTemplate } from "@/components/site/ProgramTemplate";
import { programs, type ProgramSlug } from "@/lib/programs-catalog";

export const Route = createFileRoute("/programs/$programSlug")({
  loader: ({ params }) => {
    const slug = `/programs/${params.programSlug}` as ProgramSlug;
    const program = programs.find((p) => p.slug === slug);
    if (!program) throw notFound();
    return { program };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.program.title} — CRIS Learning Centre` },
      { name: "description", content: loaderData?.program.description },
    ],
  }),
  component: ProgramComponent,
});

function ProgramComponent() {
  const { program } = Route.useLoaderData();
  return <ProgramTemplate program={program} />;
}
