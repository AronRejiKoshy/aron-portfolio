"use client";

import { useCorporateMode } from "@/components/corporate-mode";
import { Reveal } from "@/components/reveal";
import { ArrowUpRight, Copy, Check, MousePointer2 } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamically import the Lanyard so it only renders on the client
const Lanyard = dynamic(() => import("@/components/lanyard"), { ssr: false });

export function ContactPage() {
  const { corporate } = useCorporateMode();
  const [copied, setCopied] = useState(false);
  const email = "aronreji05@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (corporate) {
    return (
      <main className="bg-white px-4 pb-20 pt-28 font-corporate text-black md:px-8 min-h-screen">
        <section className="mx-auto max-w-5xl">
          <h1 className="text-5xl leading-tight">Contact Information</h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed">
            Please feel free to reach out regarding professional opportunities, freelance collaborations, or networking.
          </p>
          <div className="mt-12 space-y-4 text-xl">
            <p><strong>Email:</strong> {email}</p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a href="https://www.linkedin.com/in/aron-reji-/" target="_blank" rel="noopener noreferrer" className="text-signal-blue underline hover:no-underline">
                linkedin.com/in/aron-reji-
              </a>
            </p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="relative bg-ink-950 px-4 pt-28 pb-12 text-signal-paper md:px-8 md:py-0 min-h-screen overflow-hidden flex flex-col md:flex-row items-center gap-12 lg:gap-20">
      
      {/* LEFT SIDE: Copy & Contact Details */}
      <div className="w-full md:w-1/2 flex flex-col justify-center max-w-2xl z-10 pt-10 md:pt-0">
        <Reveal>
          <h1 className="text-5xl leading-[1.02] text-balance md:text-7xl lg:text-8xl text-white">
            I see you're as curious as I am?
          </h1>
          <p className="mt-8 text-2xl leading-relaxed text-signal-paper/72 md:text-3xl max-w-xl">
            This could be me in your agency. I'm aware the lanyard is distracting. Trust me, I spent hours spinning it myself, but once you're done playing around, drop me a line so we can actually make something happen.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 space-y-12">
            
            {/* Email Section */}
            <div>
              <p className="text-sm text-signal-paper/40 mb-3">Drop me a line (Copy to paste)</p>
              <button 
                onClick={handleCopy}
                className="group flex items-center gap-4 text-left transition-all"
                aria-label="Copy email address"
              >
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-signal-lime group-hover:text-white transition-colors break-all">
                  {email}
                </span>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-signal-paper/60 transition-colors group-hover:border-signal-lime group-hover:text-signal-lime">
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </span>
              </button>
            </div>

            {/* LinkedIn Section */}
            <div>
              <p className="text-sm text-signal-paper/40 mb-3">Or find me here</p>
              <a 
                href="https://www.linkedin.com/in/aron-reji-/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-3xl md:text-4xl text-white transition-colors hover:text-signal-lime"
              >
                LinkedIn 
                <ArrowUpRight size={32} className="text-signal-paper/40 transition-colors group-hover:text-signal-lime group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>

          </div>
        </Reveal>
      </div>

      {/* RIGHT SIDE: Interactive Lanyard with boundary */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-[85vh] relative flex flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.02] overflow-hidden">
        
        {/* Interact Prompt Label */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 rounded-full border border-signal-lime/30 bg-signal-lime/10 px-4 py-2 text-sm text-signal-lime backdrop-blur-md pointer-events-none">
          <MousePointer2 size={16} />
          <span>Interact with me</span>
        </div>

        {/* Lanyard Canvas */}
        <div className="absolute inset-0">
          <Lanyard 
            position={[0, 0, 20]} 
            gravity={[0, -40, 0]} 
            frontImage="/front.png"
            backImage="/back.png"
            lanyardImage="/band.png"
            imageFit="contain"
          />
        </div>
      </div>

    </main>
  );
}