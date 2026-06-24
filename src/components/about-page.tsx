"use client";

import { useCorporateMode } from "@/components/corporate-mode";
import { Reveal } from "@/components/reveal";

export function AboutPage() {
  const { corporate } = useCorporateMode();

  if (corporate) {
    return (
      <main className="bg-white px-4 pb-20 pt-28 font-corporate text-black md:px-8 min-h-screen">
        <section className="mx-auto max-w-5xl">
          <h1 className="text-5xl leading-tight">Professional Profile</h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed">
            Aron is a First Class Media and Communications graduate with a proven track record in collaborative leadership, strategic ideation, and creative problem-solving.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-ink-950 px-4 pb-24 pt-28 text-signal-paper md:px-8 md:pt-36 min-h-screen">
      <section className="mx-auto max-w-[1500px]">
        <Reveal>
          <p className="text-sm text-signal-lime">Honestly,</p>
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
          
          <Reveal delay={0.08}>
            <div className="space-y-6 text-xl leading-relaxed text-signal-paper/68">
              <p>
                Most of my projects start the same way: I notice something interesting and refuse to leave it alone. I stay curious long enough and something interesting usually happens. Like how people say "comparison is the thief of joy", I'd like to trademark "curiosity is the giver of joy". I've also been told I don't have a life. They're probably right.
              </p>
              <p>
                I usually come across as shy and timid in the beginning, but give me a few business days and a pint and Aron will be up and running.
              </p>
              <p>
                My faith keeps me grounded whilst the creative industry lets my head live in the clouds. It reminds me that my value isn't tied to a campaign, a grade, or a job title. That's probably why I care more about people than portfolios.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-[1500px]">
        <Reveal className="rounded-brand border border-white/12 bg-white/[0.035] p-6 md:p-10">
          <p className="text-2xl text-signal-paper/58">Oh, and not that you care...</p>
          <p className="mt-4 max-w-4xl text-3xl leading-tight md:text-5xl">
            I also graduated with First Class Honours in Media &amp; Communications from the University of Greenwich.
          </p>
          <p className="mt-6 text-xl text-signal-lime">
            They said any agency "would be incredibly lucky to have him on the team". (Their words, not mine. But I agree.)
          </p>
        </Reveal>
      </section>
    </main>
  );
}