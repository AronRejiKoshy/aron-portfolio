"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useCorporateMode } from "@/components/corporate-mode";
import { Reveal } from "@/components/reveal";
import { obsessions } from "@/data/content";

// Dynamically import the LiquidEther component
const LiquidEther = dynamic(() => import("@/components/liquid-ether"), { ssr: false });

export function HomePage() {
  const { corporate, spotifyMode, setSpotifyMode, isScrolled } = useCorporateMode();

  const accentBg = spotifyMode ? "bg-[#1DB954]" : "bg-signal-orange";
  const hoverBorderText = spotifyMode ? "hover:border-[#1DB954] hover:text-[#1DB954]" : "hover:border-signal-orange hover:text-signal-orange";

  if (corporate) {
    return <CorporateHome />;
  }

  return (
    <main className="relative bg-ink-950 text-signal-paper min-h-screen">
      
      {/* BACKGROUND SIMULATION - Now Brighter & White/Silver */}
      <div className="absolute inset-0 z-0 opacity-80 mix-blend-screen">
        <LiquidEther
          colors={['#ffffff', '#444444', '#050505']}
          mouseForce={40}
          cursorSize={200}
          isViscous={true}
          viscous={25}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={3.0}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 w-full">
        <section className="flex min-h-[90vh] flex-col justify-center px-4 pt-32 pb-8 md:px-8 md:pt-40">
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
              <p className="mt-2 max-w-4xl text-3xl leading-[1.05] text-pretty text-signal-paper md:text-5xl lg:text-6xl drop-shadow-md">
                I ask questions until something interesting happens.
              </p>
              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-signal-paper/72 md:text-2xl drop-shadow-md">
                <span className="block">Sometimes it becomes a campaign.</span>
                <span className="block">Sometimes it becomes a website or a board game.</span>
                <span className="block">Most of the times it becomes a problem for everyone involved.</span>
              </p>
            </motion.div>
          </div>

          <motion.a
            href="#obsessions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-12 md:mt-24 flex w-full max-w-[1500px] items-center gap-3 text-sm text-signal-paper/56 drop-shadow-md"
            aria-label="Scroll to obsessions"
          >
            <span className="flex h-10 w-7 items-start justify-center rounded-full border border-white/18 pt-2 backdrop-blur-sm bg-black/20">
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

        <section id="obsessions" className="px-4 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-[1500px]">
            <Reveal>
              <h2 className="max-w-4xl text-4xl leading-[1.05] text-balance md:text-6xl drop-shadow-md">
                Things I&apos;ve become obsessed with recently <span className="text-signal-paper/40 italic font-serif text-2xl md:text-4xl align-middle"> // Vol. 01</span>
              </h2>
            </Reveal>

            <ObsessionsCarousel spotifyMode={spotifyMode} setSpotifyMode={setSpotifyMode} accentBg={accentBg} />
          </div>
        </section>

        <section className="px-4 py-24 md:px-8 md:py-36">
          <Reveal className="mx-auto flex max-w-[1500px] flex-col items-center text-center">
            <p className="mb-8 text-2xl text-signal-paper/60 md:text-3xl drop-shadow-md">Enough about my obsessions.</p>
            <Link
              href="/work"
              className={`group inline-flex items-center gap-4 rounded-full border border-white/14 bg-black/40 backdrop-blur-md px-8 py-4 text-lg text-signal-paper transition-all shadow-lg ${hoverBorderText}`}
            >
              I'm sure you'd like to see my actual work now.
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </section>
      </div>
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
            <span className="font-mono text-lg text-signal-paper/38 md:text-2xl drop-shadow-md">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>

            <h3
              className={`text-5xl leading-none transition-colors duration-500 md:text-7xl lg:text-8xl drop-shadow-md ${
                isBranding && spotifyMode ? "text-[#1DB954]" : "text-signal-paper"
              }`}
            >
              <span
                className={
                  isBranding && !spotifyMode
                    ? "underline decoration-white/30 decoration-dashed underline-offset-[10px] transition-colors group-hover:decoration-signal-orange"
                    : ""
                }
              >
                {item.title}
              </span>
              {isBranding && !spotifyMode && (
                <span className="ml-4 align-middle font-serif text-xl italic text-signal-orange opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:ml-6 md:text-3xl">
                  *don't click me
                </span>
              )}
            </h3>

            <div className="relative">
              <p
                className={`text-balance text-xl leading-relaxed transition-opacity duration-300 md:text-2xl lg:text-3xl drop-shadow-md ${
                  isBranding && spotifyMode
                    ? "pointer-events-none opacity-0"
                    : "text-signal-paper/60 opacity-100"
                }`}
              >
                {item.description}
              </p>
              {isBranding && (
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap text-lg transition-opacity duration-300 md:text-2xl drop-shadow-md ${
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
    <main className="bg-[#f3f4f6] px-4 pb-32 pt-28 font-corporate text-black md:px-8 min-h-screen">
      <div className="mx-auto max-w-4xl bg-white p-8 md:p-16 shadow-sm border border-neutral-200">
        <header className="border-b border-neutral-300 pb-8 mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Aron Reji Koshy</h1>
          <div className="text-lg text-neutral-600 flex flex-col md:flex-row gap-2 md:gap-6">
            <span>aronreji05@gmail.com</span>
            <span>+44 7765 111 016</span>
            <a href="https://www.linkedin.com/in/aron-reji-/" target="_blank" rel="noopener noreferrer" className="text-signal-blue hover:underline">LinkedIn</a>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider text-neutral-500">Professional Profile</h2>
          <p className="text-lg leading-relaxed text-neutral-800">
            A final-year Media and Communications student with a passion for building imaginative worlds through advertising and storytelling. I'm drawn to the strategic and conceptual side of campaigns, crafting ideas that connect audiences emotionally while strengthening brand identity. With hands-on experience managing social media for real clients and leading creative teams, I bring both organisation and originality to collaborative creative projects.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider text-neutral-500">Experience</h2>
          <div className="space-y-8">
            <div className="border-l-2 border-neutral-200 pl-6">
              <h3 className="text-xl font-bold">Social Media Intern — Cray Valley PM FC</h3>
              <p className="text-neutral-500 font-sans text-sm mb-2">2024 - 2025</p>
              <p className="text-lg text-neutral-700">Recorded, edited, and posted match highlights for Instagram and X.</p>
            </div>
            <div className="border-l-2 border-neutral-200 pl-6">
              <h3 className="text-xl font-bold">Head of Marketing — Cinematic Arts Society</h3>
              <p className="text-neutral-500 font-sans text-sm mb-2">2024 - 2025</p>
              <p className="text-lg text-neutral-700">Designed and executed content planning, schedules and social media engagement.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider text-neutral-500">Key Projects</h2>
          <div className="space-y-8">
            <div className="border-l-2 border-neutral-200 pl-6">
              <h3 className="text-xl font-bold">Pokémon Catchables — Creative Campaign (2024)</h3>
              <p className="mt-2 text-lg text-neutral-700">Concept development, brand universe creation, and group leadership as Account Director.</p>
            </div>
            <div className="border-l-2 border-neutral-200 pl-6">
              <h3 className="text-xl font-bold">Pokémon Catchables — Brand Storytelling Film (2025)</h3>
              <p className="mt-2 text-lg text-neutral-700">Short film and campaign exploring emotional tone and intergenerational connection.</p>
            </div>
            <div className="border-l-2 border-neutral-200 pl-6">
              <h3 className="text-xl font-bold">PureGym — Brand Worldbuilding & Customer Journey (2025)</h3>
              <p className="mt-2 text-lg text-neutral-700">Developed a narrative-driven customer journey with creative touchpoints and interactive website concept.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider text-neutral-500">Education</h2>
          <div className="border-l-2 border-neutral-200 pl-6">
            <h3 className="text-xl font-bold">University of Greenwich, London</h3>
            <p className="text-neutral-500 font-sans text-sm mb-2">2023 - Present</p>
            <p className="text-lg text-neutral-700">B.A. (Hons) Media and Communications</p>
          </div>
        </section>
        
        <div className="mt-16 pt-8 border-t border-neutral-300">
          <a 
            href="/aron-reji-cv.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block border border-signal-blue bg-signal-blue px-6 py-3 text-white font-bold hover:bg-blue-700 transition-colors"
          >
            Download Original CV (PDF)
          </a>
        </div>
      </div>
    </main>
  );
}