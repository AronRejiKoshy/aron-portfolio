"use client";

import { ArrowLeft, ArrowRight, Plus, X, Play, Pause, RotateCcw } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useCorporateMode } from "@/components/corporate-mode";
import { Reveal } from "@/components/reveal";
import { type Project, projects, experience, type Experience } from "@/data/content";

type ProjectPageProps = {
  project?: Project; // This is now optional
};

// Custom theme logic for specific projects
const getTheme = (slug?: string, spotifyMode?: boolean) => {
  if (spotifyMode) {
    return {
      color: "#1DB954",
      text: "text-[#1DB954]",
      hoverText: "hover:text-[#1DB954]",
      groupHoverText: "group-hover:text-[#1DB954]",
      groupHoverBg: "group-hover:bg-[#1DB954]",
    };
  }

  switch (slug) {
    case "face-value":
      return {
        color: "#9E4242",
        text: "text-[#9E4242]",
        hoverText: "hover:text-[#9E4242]",
        groupHoverText: "group-hover:text-[#9E4242]",
        groupHoverBg: "group-hover:bg-[#9E4242]",
      };
    case "twinings-loneliness":
      return {
        color: "#ffa81f",
        text: "text-[#ffa81f]",
        hoverText: "hover:text-[#ffa81f]",
        groupHoverText: "group-hover:text-[#ffa81f]",
        groupHoverBg: "group-hover:bg-[#ffa81f]",
      };
    case "what-do-you-call":
      return {
        color: "#db5e8d",
        text: "text-[#db5e8d]",
        hoverText: "hover:text-[#db5e8d]",
        groupHoverText: "group-hover:text-[#db5e8d]",
        groupHoverBg: "group-hover:bg-[#db5e8d]",
      };
    default:
      return {
        color: "#d9ff00", // Default signal-lime
        text: "text-signal-lime",
        hoverText: "hover:text-signal-lime",
        groupHoverText: "group-hover:text-signal-lime",
        groupHoverBg: "group-hover:bg-signal-lime",
      };
  }
};

export function ProjectPage({ project }: ProjectPageProps) {
  const { corporate, spotifyMode } = useCorporateMode();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Video Player State
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const resetVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  // Determine active theme based on current project (if rendering case study)
  const activeTheme = getTheme(project?.slug, spotifyMode);

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
                <h1 className="max-w-5xl text-5xl leading-[0.98] text-balance md:text-7xl lg:text-8xl">
                  Evidence of my curiosity.
                </h1>
              </div>
              <p className="max-w-md text-lg leading-relaxed text-signal-paper/62">
                I approach every project as a question first, because the question is usually where the interesting bit lives. The work below is just how I chose to answer them.
              </p>
            </Reveal>

            <div className="mt-14 space-y-16 md:mt-24 md:space-y-24">
              {projects.map((proj, index) => {
                const projTheme = getTheme(proj.slug, spotifyMode);
                return (
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
                            quality={100}
                            sizes="(min-width: 1024px) 60vw, 100vw"
                            className="object-cover transition duration-700 group-hover:scale-[1.035]"
                            priority={index === 0}
                          />
                          {/* Stripped the blur and title - leaving just the slick hover arrow */}
                          <div className="absolute inset-x-0 bottom-0 flex justify-end p-5 md:p-7">
                            <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-brand border border-white/18 transition-all duration-500 text-signal-lime ${projTheme.groupHoverBg} group-hover:text-ink-950 group-hover:border-transparent`}>
                              <ArrowRight aria-hidden="true" size={20} />
                            </span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-[1500px]">
            <Reveal>
              <h2 className="max-w-4xl text-5xl leading-none md:text-7xl">Other places the questions went.</h2>
            </Reveal>

            <div className="mt-14 border-t border-white/14">
              {experience.map((item) => (
                <Reveal key={item.title}>
                  <ExperienceItem item={item} accentText={activeTheme.text} />
                </Reveal>
              ))}
            </div>

            {/* About Page Teaser */}
            <Reveal className="mt-28 flex justify-center">
              <Link
                href="/about"
                className="group inline-flex items-center gap-4 rounded-full border border-white/14 bg-white/5 px-8 py-4 text-lg text-signal-paper transition-all hover:border-signal-lime hover:text-signal-lime"
              >
                <span>I take it you&apos;re still curious <i>about me</i></span>
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
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
  const nextTheme = getTheme(nextProject.slug, spotifyMode);

  if (corporate) {
    return <CorporateProject project={project} nextProject={nextProject} />;
  }

  return (
    <main className="bg-ink-950 text-signal-paper">
      <section className="px-4 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36">
        <div className="mx-auto max-w-[1500px]">
          <Link
            href="/work"
            className={`inline-flex items-center gap-2 text-sm text-signal-paper/56 transition ${activeTheme.hoverText}`}
          >
            <ArrowLeft aria-hidden="true" size={16} />
            Take me back to Aron&apos;s work
          </Link>

          <Reveal className="mt-12">
            <p className={`text-sm ${activeTheme.text}`}>{project.eyebrow}</p>
            <p className="mt-6 max-w-4xl text-2xl leading-snug text-signal-paper/70 md:text-4xl">
              {project.question}
            </p>
            <h1 className="mt-6 font-display text-6xl leading-none text-white md:text-8xl lg:text-[10rem]">
              {project.title}
            </h1>
          </Reveal>

          <Reveal className="mt-12">
            <div className="group relative aspect-[16/9] overflow-hidden rounded-brand bg-ink-850 shadow-image-edge">
              {project.video ? (
                <>
                  <video
                    ref={videoRef}
                    src={project.video}
                    poster={project.image}
                    className="h-full w-full object-cover cursor-pointer"
                    playsInline
                    onClick={togglePlay}
                    onEnded={() => setIsPlaying(false)}
                  />
                  {/* Custom Controls UI */}
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex items-center gap-4 rounded-full border border-white/10 bg-black/60 px-6 py-3 backdrop-blur-md">
                      <button 
                        onClick={togglePlay} 
                        className={`text-white transition-colors ${activeTheme.hoverText} focus:outline-none`}
                        aria-label={isPlaying ? "Pause" : "Play"}
                      >
                        {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
                      </button>
                      <div className="h-5 w-px bg-white/20"></div>
                      <button 
                        onClick={resetVideo} 
                        className={`text-white transition-colors ${activeTheme.hoverText} focus:outline-none`}
                        aria-label="Reset video"
                      >
                        <RotateCcw size={22} />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  quality={100}
                  sizes="100vw"
                  priority
                  className="object-cover"
                />
              )}
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
            <ProjectBlock title="Problem" body={project.problem} themeColor={activeTheme.color} />
            <ProjectBlock title="Insight" body={project.insight} themeColor={activeTheme.color} />
            <ProjectBlock title="Solution" body={project.solution} themeColor={activeTheme.color} />
            <ProjectBlock title="Outcome" body={project.outcome} themeColor={activeTheme.color} />
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <h2 className="text-5xl leading-none md:text-7xl">Gallery</h2>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {project.gallery.map((item, galleryIndex) => (
              <Reveal key={item.caption} delay={galleryIndex * 0.07}>
                <figure 
                  className="group cursor-zoom-in overflow-hidden rounded-brand border border-white/10 bg-ink-850"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      quality={100}
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{
                        objectPosition:
                          galleryIndex === 0 ? "top" : galleryIndex === 1 ? "top" : "center",
                      }}
                    />
                  </div>
                  <figcaption className="min-h-28 p-5 text-lg leading-relaxed text-signal-paper/68 transition-colors group-hover:text-white">
                    {item.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-16 md:px-8">
        <div className="mx-auto flex max-w-[1500px] justify-end">
          <Link
            href={`/work/${nextProject.slug}`}
            className="group inline-flex max-w-3xl items-center gap-5 text-right transition"
          >
            <div className="flex flex-col items-end">
              <span className="mb-2 text-sm text-signal-paper/58">Next question</span>
              <span className={`text-2xl leading-tight text-signal-paper transition-colors ${nextTheme.groupHoverText} md:text-4xl`}>
                {nextProject.question}
              </span>
            </div>
            <ArrowRight aria-hidden="true" size={32} className={`shrink-0 text-signal-paper/58 transition-colors ${nextTheme.groupHoverText}`} />
          </Link>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/90 p-4 backdrop-blur-sm md:p-10"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-6 top-6 z-50 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
              aria-label="Close image"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative h-full w-full max-h-[90vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Enlarged gallery view"
                fill
                quality={100}
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

// Passed dynamic themeColor to drive inline CSS variables for the links
function ProjectBlock({ title, body, themeColor }: { title: string; body: string; themeColor: string }) {
  return (
    <Reveal>
      <article 
        className="min-h-64 rounded-brand border border-white/10 bg-white/[0.035] p-6"
        style={{ "--theme-color": themeColor } as React.CSSProperties}
      >
        <h2 className="text-sm" style={{ color: themeColor }}>{title}</h2>
        <div 
          className="mt-5 text-xl leading-relaxed text-signal-paper/76 [&_a:hover]:underline [&_a]:transition-colors [&_a]:text-[var(--theme-color)] [&_i]:text-white"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </article>
    </Reveal>
  );
}

function ExperienceItem({ item, accentText }: { item: Experience; accentText: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!isOpen || !item.images) return;
    
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % item.images!.length);
    }, 3000); 
    
    return () => clearInterval(timer);
  }, [isOpen, item.images]);

  return (
    <div className="border-b border-white/14">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full items-center justify-between py-7 text-left outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <h3 className={`text-2xl transition-colors duration-300 md:text-4xl ${item.isWip ? "text-signal-paper/60 hover:text-white" : "group-hover:text-white"}`}>
            {item.title}
          </h3>
          {item.isWip && (
            <span className={`hidden rounded-full border border-white/20 bg-white/5 px-2 py-1 text-[10px] font-medium tracking-widest text-signal-paper/60 sm:inline-block`}>
              IN PROGRESS
            </span>
          )}
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`ml-4 shrink-0 rounded-full border border-white/18 p-2 transition-colors duration-300 group-hover:border-white/30 ${
            isOpen ? accentText : "text-signal-paper/40"
          }`}
        >
          <Plus aria-hidden="true" size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-7">
              <p className={`max-w-3xl text-lg leading-relaxed md:text-xl ${item.isWip ? "text-signal-paper/40" : "text-signal-paper/68"}`}>
                {item.detail}
              </p>
              
              {item.images && item.images.length > 0 && (
                <div className="relative mt-6 aspect-[16/9] w-full max-w-2xl overflow-hidden rounded-brand border border-white/10 bg-ink-850">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImage}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={item.images[currentImage]}
                        alt={`${item.title} image ${currentImage + 1}`}
                        fill
                        quality={100}
                        className="object-contain"
                        sizes="(min-width: 768px) 42rem, 100vw"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              )}

              {item.links && item.links.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-4">
                  {item.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 rounded-brand border border-white/18 bg-white/5 px-4 py-2 text-sm text-signal-paper transition-colors duration-300 hover:border-white/40`}
                    >
                      {link.label}
                      <ArrowRight aria-hidden="true" size={14} className="-rotate-45" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
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