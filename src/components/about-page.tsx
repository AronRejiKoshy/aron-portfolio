"use client";

import { useCorporateMode } from "@/components/corporate-mode";
import { Reveal } from "@/components/reveal";
import { lessons } from "@/data/content";

export function AboutPage() {
  const { corporate } = useCorporateMode();

  if (corporate) {
    return (
      <main className="bg-white px-4 pb-20 pt-28 font-corporate text-black md:px-8">
        <section className="mx-auto max-w-5xl">
          <h1 className="text-5xl leading-tight">Professional Profile</h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed">
            Aron is a First Class Media and Communications graduate with interests in marketing, branding,
            consumer culture and strategic communication.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-ink-950 px-4 pb-24 pt-28 text-signal-paper md:px-8 md:pt-36">
      <section className="mx-auto max-w-[1500px]">
        <Reveal>
          <p className="text-sm text-signal-lime">About, roughly</p>
          <h1 className="mt-5 max-w-6xl text-5xl leading-[1.02] text-balance md:text-7xl lg:text-8xl">
            I like people, patterns and ideas that refuse to sit still.
          </h1>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="text-2xl leading-relaxed text-signal-paper/72 md:text-3xl">
              I&apos;m Aron. I tend to get attached to questions, then follow them into campaigns,
              games, brand worlds, awkward conversations and occasionally a spreadsheet.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="space-y-6 text-xl leading-relaxed text-signal-paper/68">
              <p>
                The through-line is curiosity. Not the neat kind that looks good in a personal
                statement. The slightly inconvenient kind that asks why people trust a logo, why a
                football chant spreads, why a board game exposes someone faster than a focus group,
                and why AI feels magical until it suddenly feels very human.
              </p>
              <p>
                Faith keeps me grounded. People keep me interested. Advertising, branding,
                technology, football, beer and board games keep giving me new ways to look at the same
                old question: what makes us care?
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-[1500px] border-y border-white/10 py-16">
        <Reveal>
          <h2 className="text-5xl leading-none md:text-7xl">Things I&apos;ve learned</h2>
        </Reveal>
        <div className="mt-10 divide-y divide-white/10">
          {lessons.map((lesson, index) => (
            <Reveal key={lesson} delay={index * 0.04}>
              <p className="py-6 text-2xl leading-tight text-signal-paper/78 md:text-4xl">{lesson}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-[1500px]">
        <Reveal className="rounded-brand border border-white/12 bg-white/[0.035] p-6 md:p-10">
          <p className="text-2xl text-signal-paper/58">Oh, and not that you care...</p>
          <p className="mt-4 max-w-4xl text-4xl leading-tight md:text-6xl">
            I also graduated with First Class Honours in Media &amp; Communications from the University of Greenwich.
          </p>
        </Reveal>
      </section>
    </main>
  );
}