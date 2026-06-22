"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCorporateMode } from "@/components/corporate-mode";
import { Reveal } from "@/components/reveal";
import { obsessions } from "@/data/content";

export function HomePage() {
  const { corporate, spotifyMode, setSpotifyMode, isScrolled } = useCorporateMode();

  const accentBg = spotifyMode ? "bg-[#1DB954]" : "bg-signal-lime";
  const accentBorder = spotifyMode ? "border-[#1DB954]" : "border-signal-lime";

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

      <section className="px-4 py-24 md:px-8 md:py-36">
        <Reveal className="mx-auto flex max-w-[1500px] flex-col items-center text-center">
          <p className="mb-8 text-2xl text-signal-paper/60 md:text-3xl">Enough about my obsessions.</p>
          <Link
            href="/work"
            className={`inline-flex w-fit items-center gap-3 rounded-brand border ${accentBorder} ${accentBg} px-6 py-5 text-xl text-ink-950 transition-colors duration-500 hover:bg-signal-paper hover:border-signal-paper`}
          >
            Okay, I'm sure you'd like to see my actual work now.
            <ArrowRight aria-hidden="true" size={24} />
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % obsessions.length);
    }, 4500); 

    return () => clearInterval(timer);
  }, [currentIndex]);

  const item = obsessions[currentIndex];
  const isBranding = item.title === "Branding";

  return (
    <div className="mt-12 md:mt-20">
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
      </section>

      <section className="mx-auto max-w-5xl py-12">
        <h2 className="text-3xl">Key Interests</h2>
        <ul className="mt-5 list-disc space-y-2 pl-6 text-lg">
          {obsessions.map((item) => (
            <li key={item.title}>{item.title}</li>
          ))}
        </ul>
        <Link
          href="/work"
          className="mt-12 inline-block border border-signal-blue bg-signal-blue px-5 py-3 text-white"
        >
          View professional portfolio
        </Link>
      </section>
    </main>
  );
}