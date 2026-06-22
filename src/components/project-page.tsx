"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCorporateMode } from "@/components/corporate-mode";
import { Reveal } from "@/components/reveal";
import { type Project, projects, experience } from "@/data/content";

type ProjectPageProps = {
  project?: Project; // This is now optional
};

export function ProjectPage({ project }: ProjectPageProps) {
  const { corporate, spotifyMode } = useCorporateMode();

  const accentText = spotifyMode ? "text-[#1DB954]" : "text-signal-lime";
  const groupHoverAccentBg = spotifyMode ? "group-hover:bg-[#1DB954]" : "group-hover:bg-signal-lime";

  // ==========================================
  // VIEW 1: WORK OVERVIEW (If no project is passed)
  // ==========================================
  if (!project) {
    if (corporate) {
      return (
        <main className="bg-white px-4 pb-20 pt-28 font-corporate text-black md:px-8 min-h-screen">
          <section className="mx-auto max-w-5xl">
            <h1 className="text-5xl leading-tight md:text-7xl mb-12">Selected Professional Work</h1>
            <div className="space-y-6">
              {projects.map((proj) => (
                <article key={proj.slug} className="border border-neutral-300 p-5">
                  <h2 className="text-2xl">{proj.corporateTitle}</h2>
                  <p className="mt-3 text-lg">
                    Project delivered strategic recommendations through research, communication planning and stakeholder-focused creative outputs.
                  </p>
                  <Link
                    href={`/work/${proj.slug}`}
                    className="mt-4 inline-block border border-signal-blue bg-signal-blue px-4 py-2 text-white"
                  >
                    Read case study
                  </Link>
                </article>
              ))}
            </div>
          </section>
        </main>
      );
    }

    return (
      <main className="bg-ink-950 text-signal-paper min-h-screen">
        <section className="px-4 py-24 pt-32 md:px-8 md:pt-40">
          <div className="mx-auto max-w-[1500px]">
            <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className={`mb-4 text-sm transition-colors duration-500 ${accentText}`}>Featured Work</p>
                <h1 className="max-w-5xl text-5xl leading-[0.98] text-balance md:text-7xl lg:text-8xl">
                  Evidence of my curiosity.
                </h1>
              </div>
              <p className="max-w-md text-lg leading-relaxed text-signal-paper/62">
                I approach every project as a question first, because the question is usually where the interesting bit lives. The work below is just how I chose to answer them.
              </p>
            </Reveal>

            <div className="mt-14 space-y-16 md:mt-24 md:space-y-24">
              {projects.map((proj, index) => (
                <Reveal key={proj.slug} delay={index * 0.08}>
                  <Link
                    href={`/work/${proj.slug}`}
                    className="group block border-t border-white/14 pt-6"
                    aria-label={`Open ${proj.title}`}
                  >
                    <article className="grid gap-8 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1.26fr)] lg:items-end">
                      <div>
                        <p className="text-sm text-signal-paper/44">{proj.eyebrow}</p>
                        <h2 className="mt-5 text-3xl leading-[1.08] text-pretty md:text-5xl">
                          {proj.question}
                        </h2>
                      </div>
                      <div className="relative aspect-[16/10] overflow-hidden rounded-brand bg-ink-850 shadow-image-edge">
                        <Image
                          src={proj.image}
                          alt={proj.alt}
                          fill
                          sizes="(min-width: 1024px) 60vw, 100vw"
                          className="object-cover transition duration-700 group-hover:scale-[1.035]"
                          priority={index === 0}
                        />
                        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-black/58 p-5 backdrop-blur-sm md:p-7">
                          <div>
                            <p className={`text-sm transition-colors duration-500 ${accentText}`}>Reveal</p>
                            <p className="mt-1 font-display text-3xl leading-none text-white md:text-5xl">
                              {proj.title}
                            </p>
                          </div>
                          <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-brand border border-white/18 transition-all duration-500 ${accentText} ${groupHoverAccentBg} group-hover:text-ink-950`}>
                            <ArrowRight aria-hidden="true" size={20} />
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-signal-paper px-4 py-24 text-ink-950 md:px-8 md:py-32">
          <div className="mx-auto max-w-[1500px]">
            <Reveal>
              <p className="mb-4 text-sm text-ink-950/58">Selected Experience</p>
              <h2 className="max-w-4xl text-5xl leading-none md:text-7xl">Other places the questions went.</h2>
            </Reveal>

            <div className="mt-14 divide-y divide-ink-950/14 border-y border-ink-950/14">
              {experience.map((item) => (
                <Reveal key={item.title}>
                  <article className="grid gap-3 py-7 md:grid-cols-[0.8fr_1.2fr] md:items-baseline">
                    <h3 className="text-2xl md:text-4xl">{item.title}</h3>
                    <p className="max-w-3xl text-lg leading-relaxed text-ink-950/68 md:text-xl">{item.detail}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  // ==========================================
  // VIEW 2: INDIVIDUAL CASE STUDY (If project IS passed)
  // ==========================================
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
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-signal-paper/56 transition hover:text-signal-lime"
          >
            <ArrowLeft aria-hidden="true" size={16} />
            Back to portfolio
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
        <Link href="/work" className="text-signal-blue underline">
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