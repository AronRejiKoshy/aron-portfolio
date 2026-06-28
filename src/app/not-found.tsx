"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-ink-950 p-4 text-center text-signal-paper">
      <h1 className="mb-4 font-display text-8xl text-signal-orange md:text-[10rem]">404</h1>
      <p className="mb-8 text-xl md:text-2xl text-signal-paper/70">Looks like this idea didn't make it past the pitch.</p>
      <Link
        href="/"
        className="group inline-flex items-center gap-3 rounded-full border border-white/14 bg-white/5 px-8 py-4 text-sm md:text-base transition-colors hover:border-signal-orange hover:text-signal-orange"
      >
        <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
        Let's head back
      </Link>
    </main>
  );
}