"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCorporateMode } from "@/components/corporate-mode";
import { Reveal } from "@/components/reveal";
import { type Project, projects } from "@/data/content";

type ProjectPageProps = {
  project: Project;
};

export function ProjectPage({ project }: ProjectPageProps) {
  const { corporate } = useCorporateMode();
  const index = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(index + 1) % projects.length];

  if (corporate) {
    return <CorporateProject project={project} nextProject={nextProject} />;
  }

  return (
    <main className="bg-ink-950 text-signal-paper">
      <section className="px-4 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36">
        <div className="mx-auto max-w-[1500px]">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-signal-paper/56 transition hover:text-signal-lime"
          >
            <ArrowLeft aria-hidden="true" size={16} />
            Back to questions
          </Link>

          <Reveal className="mt-12">
            <p className="text-sm text-signal-lime">{project.eyebrow}</p>
            <h1 className="mt-5 max-w-6xl text-5xl leading-[1.02] text-balance md:text-7xl lg:text-8xl">
              {project.question}
            </h1>
            <p className="mt-8 font-display text-4xl leading-none text-signal-paper/42 md:text-7xl">
              {project.title}
            </p>
          </Reveal>

          <Reveal className="mt-12">
            <div className="relative aspect-[16/9] overflow-hidden rounded-brand bg-ink-850 shadow-image-edge">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="100vw"
                priority
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/10 px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <Reveal>
            <p className="text-3xl leading-tight text-signal-paper/72 md:text-5xl">{project.summary}</p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            <ProjectBlock title="Problem" body={project.problem} />
            <ProjectBlock title="Insight" body={project.insight} />
            <ProjectBlock title="Solution" body={project.solution} />
            <ProjectBlock title="Outcome" body={project.outcome} />
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1500px]">
          <Reveal className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="text-5xl leading-none md:text-7xl">Gallery</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-brand border border-white/14 px-3 py-2 text-sm text-signal-paper/62">
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {project.gallery.map((caption, galleryIndex) => (
              <Reveal key={caption} delay={galleryIndex * 0.07}>
                <figure className="overflow-hidden rounded-brand border border-white/10 bg-ink-850">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                      style={{
                        objectPosition:
                          galleryIndex === 0 ? "center" : galleryIndex === 1 ? "35% 50%" : "70% 50%",
                      }}
                    />
                  </div>
                  <figcaption className="min-h-28 p-5 text-lg leading-relaxed text-signal-paper/68">
                    {caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-16 md:px-8">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Link href="/about" className="text-signal-paper/58 transition hover:text-signal-lime">
            Read about Aron
          </Link>
          <Link
            href={`/work/${nextProject.slug}`}
            className="inline-flex items-center gap-3 text-2xl transition hover:text-signal-lime"
          >
            Next question: {nextProject.title}
            <ArrowRight aria-hidden="true" size={22} />
          </Link>
        </div>
      </section>
    </main>
  );
}

function ProjectBlock({ title, body }: { title: string; body: string }) {
  return (
    <Reveal>
      <article className="min-h-64 rounded-brand border border-white/10 bg-white/[0.035] p-6">
        <h2 className="text-sm text-signal-lime">{title}</h2>
        <p className="mt-5 text-xl leading-relaxed text-signal-paper/76">{body}</p>
      </article>
    </Reveal>
  );
}

function CorporateProject({ project, nextProject }: { project: Project; nextProject: Project }) {
  return (
    <main className="bg-white px-4 pb-20 pt-28 font-corporate text-black md:px-8">
      <article className="mx-auto max-w-5xl">
        <Link href="/#work" className="text-signal-blue underline">
          Back to portfolio overview
        </Link>
        <h1 className="mt-8 text-5xl leading-tight">{project.corporateTitle}</h1>
        <p className="mt-6 text-xl leading-relaxed">
          This project demonstrates transferable communication skills, research awareness, creative thinking and outcome-oriented delivery.
        </p>
        <div className="mt-8 border border-neutral-300 p-6">
          {["Problem", "Insight", "Solution", "Outcome"].map((title) => (
            <section key={title} className="border-b border-neutral-300 py-5 last:border-b-0">
              <h2 className="text-2xl">{title}</h2>
              <p className="mt-2 text-lg">
                Professional project activity supported by planning, ideation, presentation and implementation considerations.
              </p>
            </section>
          ))}
        </div>
        <Link
          href={`/work/${nextProject.slug}`}
          className="mt-8 inline-block border border-signal-blue bg-signal-blue px-5 py-3 text-white"
        >
          Next case study
        </Link>
      </article>
    </main>
  );
}
