"use client";

import { unfinishedNotes } from "@/data/content";

export function UnfinishedPage() {
  return (
    <main className="min-h-screen bg-signal-paper px-4 pb-24 pt-28 text-ink-950 md:px-8 md:pt-36">
      <section className="mx-auto max-w-5xl">
        <p className="font-serif text-xl italic text-ink-950/58">found under a pile of tabs</p>
        <h1 className="mt-4 font-serif text-6xl leading-none md:text-8xl">unfinished</h1>
        <p className="mt-6 max-w-2xl font-serif text-2xl leading-relaxed text-ink-950/68">
          Ideas, notes, observations, failed concepts and thoughts that have not earned a polished page yet.
        </p>

        <div className="mt-14 space-y-4">
          {unfinishedNotes.map((note, index) => (
            <article
              key={note}
              className="rounded-brand border border-ink-950/12 bg-white/55 p-5 font-serif text-2xl leading-snug shadow-sm"
              style={{ transform: `rotate(${index % 2 === 0 ? -0.35 : 0.35}deg)` }}
            >
              <span className="mr-4 text-lg text-ink-950/38">{String(index + 1).padStart(2, "0")}</span>
              {note}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
