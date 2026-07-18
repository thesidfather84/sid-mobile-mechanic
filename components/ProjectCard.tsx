import Image from "next/image";
import type { Project } from "@/data/projects";
import { publicFileExists } from "@/lib/publicFile";

/**
 * Browser-style frame around each project screenshot.
 * If the screenshot file exists in /public it is rendered with next/image;
 * otherwise a clearly labeled placeholder panel is shown so no fake
 * product imagery is ever displayed.
 */
function ScreenshotFrame({ project }: { project: Project }) {
  const hasScreenshot = publicFileExists(project.screenshot);

  return (
    <div className="overflow-hidden rounded-lg border border-line bg-ink shadow-lg">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-line bg-ink-soft px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
        </span>
        <span className="ml-2 truncate rounded bg-ink px-3 py-1 text-xs text-slate-400">
          {project.url ?? `${project.name.toLowerCase()} — live URL coming soon`}
        </span>
      </div>
      {hasScreenshot ? (
        <Image
          src={`/${project.screenshot}`}
          alt={project.screenshotAlt}
          width={1280}
          height={800}
          loading="lazy"
          className="h-auto w-full"
        />
      ) : (
        <div className="flex aspect-[16/10] flex-col items-center justify-center gap-3 bg-[linear-gradient(135deg,#131a22,#182029)] px-6 text-center">
          <span className="text-xl font-bold tracking-wide text-slate-300">
            {project.name}
          </span>
          <span className="max-w-xs text-sm leading-relaxed text-slate-500">
            Screenshot placeholder — add the homepage image at{" "}
            <code className="text-slate-400">public/{project.screenshot}</code>{" "}
            to replace this panel.
          </span>
        </div>
      )}
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-2xl border border-line bg-ink-soft p-6 sm:p-8">
      <ScreenshotFrame project={project} />
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <h3 className="text-2xl font-bold text-white">{project.name}</h3>
        <span className="rounded-full border border-accent/50 bg-accent/10 px-3 py-1 text-xs font-semibold tracking-wide text-accent-bright">
          {project.status}
        </span>
      </div>
      <p className="mt-1 text-sm font-semibold tracking-wide text-slate-400">
        {project.tagline}
      </p>
      <p className="mt-4 flex-1 leading-relaxed text-slate-300">
        {project.description}
      </p>
      <div className="mt-6">
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-bright"
          >
            Visit {project.name}
          </a>
        ) : (
          <p className="inline-block rounded-md border border-line px-5 py-3 text-sm font-medium text-slate-400">
            Live link coming soon — set the URL in{" "}
            <code className="text-slate-300">data/projects.ts</code>
          </p>
        )}
      </div>
    </article>
  );
}
