"use client";

import { ArrowDown, ArrowRight, ExternalLink } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCorporateMode } from "@/components/corporate-mode";
import { Reveal } from "@/components/reveal";
import { experience, obsessions, projects } from "@/data/content";

export function HomePage() {
  const { corporate, spotifyMode, setSpotifyMode, isScrolled } = useCorporateMode();

  const accentText = spotifyMode ? "text-[#1DB954]" : "text-signal-lime";
  const accentBg = spotifyMode ? "bg-[#1DB954]" : "bg-signal-lime";
  const accentBorder = spotifyMode ? "border-[#1DB954]" : "border-signal-lime";
  const groupHoverAccentBg = spotifyMode ? "group-hover:bg-[#1DB954]" : "group-hover:bg-signal-lime";

  if (corporate) {
    return <CorporateHome />;
  }

  return (
    <main className="relative overflow-hidden bg-ink-950 text-signal-paper">
      <section className="flex min-h-screen flex-col justify-between px-4 pb-10 pt-28 md:px-8 md:pb-12 md:pt-32">
        <div className="mx-auto w-full max-w-[1500px]">
          
          <div className="relative w-full h-[90px] sm:h-[130px] md:h-[190px] lg:h-[250px] xl:h-[320px]">
            {!isScrolled && (
              <motion.h1
                layoutId="aron-main-logo"
                className="absolute left-0 top-0 origin-top-left font-display text-[5.5rem] leading-none text-signal-paper sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem]"
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                ARON
              </motion.h1>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <p className="mt-6 max-w-4xl text-3xl leading-[1.05] text-pretty text-signal-paper md:text-5xl lg:text-6xl">
              I ask questions until something interesting happens.
            </p>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-signal-paper/72 md:text-2xl">
              <span className="block">Sometimes that becomes a campaign.</span>
              <span className="block">Sometimes it becomes a board game.</span>
              <span className="block">Sometimes it becomes a problem for everyone involved.</span>
            </p>
          </motion.div>
        </div>

        <motion.a
          href="#obsessions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-16 flex w-full max-w-[1500px] items-center gap-3 text-sm text-signal-paper/56"
          aria-label="Scroll to obsessions"
        >
          <span className="flex h-10 w-7 items-start justify-center rounded-full border border-white/18 pt-2">
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className={`block h-2 w-1 rounded-full transition-colors duration-500 ${accentBg}`}
            />
          </span>
          <span>Why are you still waiting here?</span>
          <ArrowDown aria-hidden="true" size={16} />
        </motion.a>
      </section>

      <section id="obsessions" className="scanline border-y border-white/10 px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <h2 className="max-w-4xl text-4xl leading-[1.05] text-balance md:text-6xl">
              Things I&apos;ve become obsessed with recently <span className="text-signal-paper/40 italic font-serif text-2xl md:text-4xl align-middle"> // Vol. 01</span>
            </h2>
          </Reveal>

          <ObsessionsCarousel spotifyMode={spotifyMode} setSpotifyMode={setSpotifyMode} accentBg={accentBg} />
        </div>
      </section>

      <section id="work" className="px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[1500px]">
          <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className={`mb-4 text-sm transition-colors duration-500 ${accentText}`}>Featured Work</p>
              <h2 className="max-w-5xl text-5xl leading-[0.98] text-balance md:text-7xl lg:text-8xl">
                The work is evidence of curiosity.
              </h2>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-signal-paper/62">
              Projects appear as questions first because the question is usually where the interesting bit lives.
            </p>
          </Reveal>

          <div className="mt-14 space-y-16 md:mt-20 md:space-y-24">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.08}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group block border-t border-white/14 pt-6"
                  aria-label={`Open ${project.title}`}
                >
                  <article className="grid gap-8 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1.26fr)] lg:items-end">
                    <div>
                      <p className="text-sm text-signal-paper/44">{project.eyebrow}</p>
                      <h3 className="mt-5 text-3xl leading-[1.08] text-pretty md:text-5xl">
                        {project.question}
                      </h3>
                    </div>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-brand bg-ink-850 shadow-image-edge">
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        sizes="(min-width: 1024px) 60vw, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-[1.035]"
                        priority={index === 0}
                      />
                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-black/58 p-5 backdrop-blur-sm md:p-7">
                        <div>
                          <p className={`text-sm transition-colors duration-500 ${accentText}`}>Reveal</p>
                          <p className="mt-1 font-display text-3xl leading-none text-white md:text-5xl">
                            {project.title}
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

      <section className="border-y border-white/10 bg-signal-paper px-4 py-24 text-ink-950 md:px-8 md:py-32">
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

      <section className="px-4 py-24 md:px-8 md:py-36">
        <Reveal className="mx-auto flex max-w-[1500px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-2xl text-signal-paper/58">Still here?</p>
            <h2 className="mt-3 max-w-4xl text-6xl leading-none text-balance md:text-8xl">
              Let&apos;s make something interesting.
            </h2>
          </div>
          <Link
            href="/contact"
            className={`inline-flex w-fit items-center gap-3 rounded-brand border ${accentBorder} ${accentBg} px-5 py-4 text-lg text-ink-950 transition-colors duration-500 hover:bg-signal-paper hover:border-signal-paper`}
          >
            Start the conversation
            <ExternalLink aria-hidden="true" size={20} />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}

function ObsessionsCarousel({
  spotifyMode,
  setSpotifyMode,
  accentBg,
}: {
  spotifyMode: boolean;
  setSpotifyMode: (value: boolean) => void;
  accentBg: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play interval that resets whenever the currentIndex changes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % obsessions.length);
    }, 4500); // Changes every 4.5 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  const item = obsessions[currentIndex];
  const isBranding = item.title === "Branding";

  return (
    <div className="mt-12 md:mt-20">
      {/* Clickable Dashed Progress Bar */}
      <div className="mb-10 flex items-center gap-2 border-b border-white/10 pb-8">
        {obsessions.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentIndex(idx);
            }}
            className="group py-2"
            aria-label={`Go to slide ${idx + 1}`}
          >
            <div
              className={`h-[3px] rounded-full transition-all duration-500 ${
                idx === currentIndex ? `w-8 md:w-12 ${accentBg}` : "w-3 bg-white/20 group-hover:bg-white/40"
              }`}
            />
          </button>
        ))}
      </div>

      <div className="relative min-h-[160px] md:min-h-[220px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.5 }}
            className={`group grid gap-4 md:grid-cols-[auto_1fr_1fr] md:items-center md:gap-8 ${
              isBranding ? "cursor-pointer" : ""
            }`}
            onClick={() => isBranding && setSpotifyMode(!spotifyMode)}
          >
            <span className="font-mono text-lg text-signal-paper/38 md:text-2xl">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>

            <h3
              className={`text-5xl leading-none transition-colors duration-500 md:text-7xl lg:text-8xl ${
                isBranding && spotifyMode ? "text-[#1DB954]" : "text-signal-paper"
              }`}
            >
              <span
                className={
                  isBranding && !spotifyMode
                    ? "underline decoration-white/30 decoration-dashed underline-offset-[10px] transition-colors group-hover:decoration-signal-lime"
                    : ""
                }
              >
                {item.title}
              </span>
              {isBranding && !spotifyMode && (
                <span className="ml-4 align-middle font-serif text-xl italic text-signal-lime opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:ml-6 md:text-3xl">
                  *don't click me
                </span>
              )}
            </h3>

            <div className="relative">
              <p
                className={`text-balance text-xl leading-relaxed transition-opacity duration-300 md:text-2xl lg:text-3xl ${
                  isBranding && spotifyMode
                    ? "pointer-events-none opacity-0"
                    : "text-signal-paper/60 opacity-100"
                }`}
              >
                {item.description}
              </p>
              {isBranding && (
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap text-lg transition-opacity duration-300 md:text-2xl ${
                    spotifyMode ? "text-[#1DB954] opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  How do you not know what Spotify looks like?
                </span>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function CorporateHome() {
  return (
    <main className="bg-white px-4 pb-20 pt-28 font-corporate text-black md:px-8">
      <section className="mx-auto max-w-5xl border-b border-neutral-300 pb-12">
        <h1 className="text-5xl leading-tight md:text-7xl">
          Results-driven media graduate with strong communication skills.
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-relaxed">
          A motivated candidate with experience across marketing, communications, research and creative problem-solving.
        </p>
        <a
          href="#work"
          className="mt-8 inline-block border border-signal-blue bg-signal-blue px-5 py-3 text-white"
        >
          View professional projects
        </a>
      </section>

      <section className="mx-auto max-w-5xl border-b border-neutral-300 py-12">
        <h2 className="text-3xl">Key Interests</h2>
        <ul className="mt-5 list-disc space-y-2 pl-6 text-lg">
          {obsessions.map((item) => (
            <li key={item.title}>{item.title}</li>
          ))}
        </ul>
      </section>

      <section id="work" className="mx-auto max-w-5xl border-b border-neutral-300 py-12">
        <h2 className="text-3xl">Selected Professional Work</h2>
        <div className="mt-6 space-y-6">
          {projects.map((project) => (
            <article key={project.slug} className="border border-neutral-300 p-5">
              <h3 className="text-2xl">{project.corporateTitle}</h3>
              <p className="mt-3 text-lg">
                Project delivered strategic recommendations through research, communication planning and stakeholder-focused creative outputs.
              </p>
              <Link
                href={`/work/${project.slug}`}
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