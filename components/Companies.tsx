import { projects, projectsIntro } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function Companies() {
  return (
    <section id="companies" className="bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="Our Companies"
          title="Automotive Platforms We Own and Develop"
          description={projectsIntro}
          tone="dark"
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
