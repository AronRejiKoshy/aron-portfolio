"use client";

import { useCorporateMode } from "@/components/corporate-mode";
import { Reveal } from "@/components/reveal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, ArrowRight } from "lucide-react";
import Link from "next/link";

export function AboutPage() {
  const { corporate } = useCorporateMode();

  if (corporate) {
    return (
      <main className="bg-white px-4 pb-20 pt-28 font-corporate text-black md:px-8 min-h-screen">
        <section className="mx-auto max-w-5xl">
          <h1 className="text-5xl leading-tight">Professional Profile</h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed">
            Aron is a First Class Media and Communications graduate with a proven track record in collaborative leadership, strategic ideation, and creative problem-solving. Please view the homepage for my full CV.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-ink-950 px-4 pb-24 pt-28 text-signal-paper md:px-8 md:pt-36 min-h-screen overflow-hidden">
      <section className="mx-auto max-w-[1500px]">
        <Reveal>
          <p className="text-sm text-signal-orange">Honestly,</p>
          <h1 className="mt-5 max-w-6xl text-5xl leading-[1.02] text-balance md:text-7xl lg:text-8xl">
            I'm just a guy who gets obsessed with things.
          </h1>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="space-y-6 text-2xl leading-relaxed text-signal-paper/72 md:text-3xl">
              <p>
                I originally thought I'd play it safe. Maybe journalism? Maybe running a corporate social media account somewhere? Instead, I stumbled into advertising and realised that a well-placed idea can actually move hearts, change minds, and bring complete strangers together.
              </p>
              <p>
                I sit somewhere in the messy, exciting middle of strategy and art direction and occasionally vibe code websites into existence. I am a firm believer that no idea is a shit idea.
              </p>
            </div>
          </Reveal>
          
          <div className="flex flex-col gap-12">
            <Reveal delay={0.08}>
              <div className="space-y-6 text-xl leading-relaxed text-signal-paper/68">
                <p>
                  Most of my projects start the same way: I notice something interesting and refuse to leave it alone. I stay curious long enough and something interesting usually happens. Like how people say "Comparison is the thief of joy", I'd like to trademark "<span className="text-signal-orange">Curiosity is the giver of joy</span>". I've  been told I don't have a life. They're probably right.
                </p>
                <p>
                  I usually come across as shy and timid in the beginning, but give me a few business days and a pint and Aron will be up and running.
                </p>
                <p>
                  My faith keeps me grounded whilst the creative industry lets my head live in the clouds. It reminds me that my value isn't tied to a campaign, a grade, or a job title. That's probably why I care more about people than portfolios.
                </p>
              </div>
            </Reveal>

            {/* Graduation / University Block */}
            <Reveal delay={0.16}>
              <div className="rounded-brand border border-white/12 bg-white/[0.035] p-6 md:p-8">
                <p className="text-xl text-signal-paper/58">Oh, and not that you care...</p>
                <p className="mt-3 max-w-2xl text-2xl leading-tight md:text-4xl">
                  I also graduated with First Class Honours in Media &amp; Communications from the University of Greenwich.
                </p>
                <p className="mt-5 text-lg text-signal-orange">
                  They said any agency "would be incredibly lucky to have him on the team". (Their words, not mine.)
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* THE ARON PLAYGROUND */}
      <section className="mx-auto mt-24 max-w-[1500px] border-t border-white/10 pt-24">
        <Reveal>
          <h2 className="text-4xl leading-none md:text-6xl mb-12 text-balance">
            Ways to understand Aron without reading a CV.
          </h2>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal delay={0.1}>
            <AronLoadout />
          </Reveal>
          <Reveal delay={0.2}>
            <BriefGenerator />
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA TO CONTACT PAGE */}
      <section className="mx-auto mt-16 max-w-[1500px] flex justify-center">
        <Reveal>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-4 rounded-full border border-white/14 bg-white/5 px-8 py-4 text-lg text-signal-paper transition-all hover:border-signal-orange hover:text-signal-orange"
          >
            <span>Enough about Me, let's hear from You.</span>
            <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}

// --- INTERACTIVE COMPONENTS ---

const ARON_PRESETS = [
  { Strategy: 9, Absurdity: 3, Direction: 3, Pints: 1 }, 
  { Strategy: 1, Absurdity: 10, Direction: 2, Pints: 3 }, 
  { Strategy: 3, Absurdity: 2, Direction: 10, Pints: 1 }, 
  { Strategy: 2, Absurdity: 3, Direction: 1, Pints: 10 }, 
  { Strategy: 8, Absurdity: 8, Direction: 0, Pints: 0 }, 
  { Strategy: 4, Absurdity: 4, Direction: 4, Pints: 4 }, 
];

function AronLoadout() {
  const MAX_POINTS = 16;
  const [pointsLeft, setPointsLeft] = useState(11); 
  const [presetIndex, setPresetIndex] = useState(0);
  const [stats, setStats] = useState({
    Strategy: 2,
    Absurdity: 2,
    Direction: 1,
    Pints: 0,
  });

  const handleAdjust = (stat: keyof typeof stats, amount: number) => {
    if (amount > 0 && pointsLeft > 0 && stats[stat] < 10) {
      setStats({ ...stats, [stat]: stats[stat] + 1 });
      setPointsLeft((prev) => prev - 1);
    } else if (amount < 0 && stats[stat] > 0) {
      setStats({ ...stats, [stat]: stats[stat] - 1 });
      setPointsLeft((prev) => prev + 1);
    }
  };

  const handlePickAron = () => {
    const preset = ARON_PRESETS[presetIndex];
    setStats(preset);
    const totalAllocated = Object.values(preset).reduce((acc, val) => acc + val, 0);
    setPointsLeft(MAX_POINTS - totalAllocated);
    setPresetIndex((prev) => (prev + 1) % ARON_PRESETS.length);
  };

  const handleReset = () => {
    setStats({ Strategy: 0, Absurdity: 0, Direction: 0, Pints: 0 });
    setPointsLeft(MAX_POINTS);
  };

  let archetype = "The Generalist";
  let description = "A perfectly balanced build. Capable of doing a bit of everything without breaking a sweat.";
  let rating = "B";

  const totalStats = stats.Strategy + stats.Absurdity + stats.Direction + stats.Pints;

  if (totalStats === 0) {
    archetype = "The Blank Slate";
    description = "Aron is currently in standby mode, conserving energy for the actual work.";
    rating = "F";
  } else if (stats.Strategy >= 4 && stats.Absurdity >= 4 && stats.Direction >= 4 && stats.Pints >= 4) {
    archetype = "The Fully Upgraded Aron";
    description = "Maximum versatility achieved. Can write the brief, crack the idea, design the deck, and buy the first round.";
    rating = "SS";
  } else if (stats.Strategy >= 6 && stats.Absurdity >= 6) {
    archetype = "The Creative Menace";
    description = "Equal parts strategic thinking and absolute nonsense. Surprisingly effective.";
    rating = "S";
  } else if (stats.Strategy >= 8) {
    archetype = "The Strategist";
    description = "Can explain why your idea won't work. Will then spend three hours helping fix it.";
    rating = "A+";
  } else if (stats.Absurdity >= 8) {
    archetype = "The Menace";
    description = "Believes every problem can be solved with a board game. Has worrying evidence to support this claim.";
    rating = "A+";
  } else if (stats.Direction >= 8) {
    archetype = "The Perfectionist";
    description = "Will move a headline three pixels to the left. Will be right.";
    rating = "A";
  } else if (stats.Pints >= 8) {
    archetype = "The Networker";
    description = "Started the evening with one pint. Somehow knows everyone in the room.";
    rating = "A";
  }

  return (
    <div className="flex h-full flex-col justify-between rounded-brand border border-white/10 bg-ink-850 p-6 md:p-8">
      <div>
        <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-4">
          <div>
            <h3 className="text-2xl md:text-3xl">Build An Aron</h3>
            <p className="mt-1 text-sm text-signal-paper/40">Allocate {MAX_POINTS} points wisely.</p>
          </div>
          <span className="font-mono text-signal-orange">PTS: {pointsLeft}</span>
        </div>

        <div className="space-y-6">
          {Object.entries(stats).map(([stat, value]) => (
            <div key={stat} className="flex items-center justify-between">
              <span className="text-lg text-signal-paper/70 w-28">{stat}</span>
              <div className="flex flex-1 items-center gap-3 px-4">
                <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-white/5">
                  <motion.div 
                    className="bg-signal-orange" 
                    initial={{ width: 0 }}
                    animate={{ width: `${(value / 10) * 100}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => handleAdjust(stat as keyof typeof stats, -1)}
                  disabled={value === 0}
                  className="grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-white/5 transition hover:bg-white/10 disabled:opacity-30"
                >
                  -
                </button>
                <span className="w-4 text-center font-mono">{value}</span>
                <button 
                  onClick={() => handleAdjust(stat as keyof typeof stats, 1)}
                  disabled={pointsLeft === 0 || value === 10}
                  className="grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-white/5 transition hover:bg-white/10 disabled:opacity-30"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex gap-3">
          <button
            onClick={handlePickAron}
            className="flex-1 rounded-full border border-white/20 bg-white/5 py-3 text-sm text-signal-paper transition hover:bg-white/10 hover:border-signal-orange/50 hover:text-signal-orange"
          >
            Randomise Aron
          </button>
          <button
            onClick={handleReset}
            aria-label="Reset stats"
            className="grid w-14 place-items-center rounded-full border border-white/20 bg-white/5 transition hover:bg-white/10 hover:border-red-500/50 hover:text-red-400"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </div>

      <div className="mt-10 rounded-lg bg-black/40 p-5 border border-white/5 flex flex-col justify-center min-h-[140px]">
        <div className="flex items-start justify-between mb-3">
          <span className="text-xl md:text-2xl font-display text-signal-orange">{archetype}</span>
          <span className="text-xl md:text-2xl font-display text-white/50">{rating}</span>
        </div>
        <p className="text-signal-paper/60 italic leading-relaxed text-sm md:text-base">
          "{description}"
        </p>
      </div>
    </div>
  );
}

function BriefGenerator() {
  const brands = ["Life Insurance", "A Budget Airline", "Vegan Sausages", "A Local Council", "Detergent", "A Tech Startup"];
  const audiences = ["Gen Z", "Millennial Dog Owners", "Finance Bros", "Tired Parents", "Retirees", "Gamers"];
  const mediums = ["A Football Chant", "A TikTok Dance", "An Ambient Stunt", "A Board Game", "A Fake Apology", "A Spreadsheet"];

  const [isSpinning, setIsSpinning] = useState(false);
  const [spinCount, setSpinCount] = useState(0);
  const [result, setResult] = useState({ brand: brands[0], audience: audiences[0], medium: mediums[0] });

  const spin = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    let spins = 0;
    const maxSpins = 15;
    const interval = setInterval(() => {
      setResult({
        brand: brands[Math.floor(Math.random() * brands.length)],
        audience: audiences[Math.floor(Math.random() * audiences.length)],
        medium: mediums[Math.floor(Math.random() * mediums.length)],
      });
      spins++;

      if (spins >= maxSpins) {
        clearInterval(interval);
        setIsSpinning(false);
        setSpinCount((prev) => prev + 1);
      }
    }, 80);
  };

  return (
    <div className="flex h-full flex-col justify-between rounded-brand border border-white/10 bg-ink-850 p-6 md:p-8">
      <div>
        <div className="mb-8 border-b border-white/10 pb-4">
          <h3 className="text-2xl md:text-3xl">The Brief Generator</h3>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col">
            <span className="text-lg text-signal-paper/40 mb-1">Sell</span>
            <div className="relative h-10 md:h-12 overflow-hidden">
              <AnimatePresence>
                <motion.div 
                  key={result.brand}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 font-display text-3xl md:text-4xl text-signal-orange whitespace-nowrap"
                >
                  {result.brand}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          <div className="flex flex-col">
            <span className="text-lg text-signal-paper/40 mb-1">to</span>
            <div className="relative h-10 md:h-12 overflow-hidden">
              <AnimatePresence>
                <motion.div 
                  key={result.audience}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 font-display text-3xl md:text-4xl text-signal-orange whitespace-nowrap"
                >
                  {result.audience}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-lg text-signal-paper/40 mb-1">using</span>
            <div className="relative h-10 md:h-12 overflow-hidden">
              <AnimatePresence>
                <motion.div 
                  key={result.medium}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 font-display text-3xl md:text-4xl text-signal-orange whitespace-nowrap"
                >
                  {result.medium}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <button 
          onClick={spin}
          disabled={isSpinning}
          className="shrink-0 rounded-full border border-signal-orange bg-signal-orange/10 px-6 py-3 text-signal-orange transition hover:bg-signal-orange hover:text-ink-950 disabled:opacity-50 disabled:hover:bg-signal-orange/10 disabled:hover:text-signal-orange"
        >
          {isSpinning ? "Generating..." : "Generate Brief"}
        </button>

        <div className="flex min-h-[3rem] flex-col items-end justify-center text-right sm:ml-auto">
          <AnimatePresence mode="wait">
            {spinCount === 1 && (
              <motion.span 
                key="spin-1"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-sm text-signal-paper/40 italic"
              >
                I could probably make this work.
              </motion.span>
            )}
            {spinCount === 2 && (
              <motion.span 
                key="spin-2"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-sm text-signal-paper/40 italic"
              >
                I could probably make that work too.
              </motion.span>
            )}
            {spinCount >= 3 && (
              <motion.span 
                key="spin-3"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-signal-paper/40 italic"
              >
                You know what? Let's just make it happen.
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}