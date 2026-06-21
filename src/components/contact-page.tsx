"use client";

import { Check, Copy, LoaderCircle, Mail } from "lucide-react";
import { useState } from "react";
import { useCorporateMode } from "@/components/corporate-mode";
import { email } from "@/data/content";

type CopyState = "idle" | "loading" | "copied";

export function ContactPage() {
  const { corporate } = useCorporateMode();
  const [copyState, setCopyState] = useState<CopyState>("idle");

  const copyEmail = async () => {
    setCopyState("loading");

    await new Promise((resolve) => window.setTimeout(resolve, 900));

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const area = document.createElement("textarea");
        area.value = email;
        area.style.position = "fixed";
        area.style.opacity = "0";
        document.body.appendChild(area);
        area.focus();
        area.select();
        document.execCommand("copy");
        area.remove();
      }
      setCopyState("copied");
    } catch {
      window.location.href = `mailto:${email}`;
      setCopyState("idle");
    }
  };

  const status =
    copyState === "loading"
      ? "Preparing networking opportunity..."
      : copyState === "copied"
        ? "Email copied. The rest is up to you."
        : "No form. No funnel. Just the useful bit.";

  if (corporate) {
    return (
      <main className="bg-white px-4 pb-20 pt-28 font-corporate text-black md:px-8">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-5xl">Contact</h1>
          <p className="mt-5 text-xl">Please contact Aron for professional opportunities.</p>
          <button
            type="button"
            onClick={copyEmail}
            className="mt-8 border border-signal-blue bg-signal-blue px-5 py-3 text-white"
          >
            Copy email address
          </button>
          <p className="mt-4 text-lg" aria-live="polite">
            {status}
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center bg-ink-950 px-4 py-28 text-signal-paper md:px-8">
      <section className="mx-auto grid w-full max-w-[1500px] gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="text-sm text-signal-lime">Contact</p>
          <h1 className="mt-5 max-w-5xl text-6xl leading-none text-balance md:text-8xl lg:text-[9rem]">
            Still here?
            <br />
            Let&apos;s make something interesting.
          </h1>
        </div>

        <div className="rounded-brand border border-white/12 bg-white/[0.035] p-6 md:p-8">
          <div className="flex items-center gap-3 text-signal-paper/60">
            <Mail aria-hidden="true" size={20} />
            <span>{email}</span>
          </div>

          <button
            type="button"
            onClick={copyEmail}
            disabled={copyState === "loading"}
            className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-brand border border-signal-lime bg-signal-lime px-5 py-4 text-lg text-ink-950 transition hover:bg-signal-paper disabled:cursor-wait disabled:opacity-80"
          >
            {copyState === "loading" ? (
              <LoaderCircle aria-hidden="true" className="animate-spin" size={20} />
            ) : copyState === "copied" ? (
              <Check aria-hidden="true" size={20} />
            ) : (
              <Copy aria-hidden="true" size={20} />
            )}
            Copy email
          </button>

          <p className="mt-5 min-h-8 text-xl leading-relaxed text-signal-paper/70" aria-live="polite">
            {status}
          </p>
        </div>
      </section>
    </main>
  );
}
