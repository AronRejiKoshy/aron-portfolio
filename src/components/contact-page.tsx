"use client";

import { useCorporateMode } from "@/components/corporate-mode";
import { Reveal } from "@/components/reveal";
import { ArrowUpRight, Copy, Check, MousePointer2, FileText } from "lucide-react";
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
            <p><strong>Phone:</strong> +44 7765 111 016</p>
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
    <main className="relative bg-ink-950 px-4 pt-24 pb-8 text-signal-paper md:px-8 md:pt-24 min-h-[100dvh] md:h-[100dvh] overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-16">
      
      {/* LEFT SIDE: Copy & Contact Details */}
      <div className="w-full md:w-1/2 flex flex-col justify-center max-w-2xl z-10">
        <Reveal>
          <h1 className="text-5xl leading-[1.02] text-balance md:text-6xl lg:text-[5rem] text-white">
            I see you're as curious as I am.
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-signal-paper/72 md:text-2xl max-w-xl">
            I'm aware the 3D lanyard is distracting. Trust me, I spent hours spinning it myself, but once you're done playing around, drop me a line so that I can get <i>this</i> lanyard in your agency.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 space-y-8 md:space-y-10">
            
            {/* Email Section */}
            <div>
              <p className="text-sm text-signal-paper/40 mb-2">Drop me a line</p>
              <button 
                onClick={handleCopy}
                className="group flex items-center gap-4 text-left transition-all"
                aria-label="Copy email address"
              >
                <span className="text-3xl md:text-4xl lg:text-5xl font-display text-signal-orange group-hover:text-white transition-colors break-all">
                  {email}
                </span>
                <span className="grid h-8 w-8 md:h-10 md:w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-signal-paper/60 transition-colors group-hover:border-signal-orange group-hover:text-signal-orange">
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </span>
              </button>
            </div>

            {/* Phone Section */}
            <div>
              <p className="text-sm text-signal-paper/40 mb-2">Or give me a ring</p>
              <p className="text-2xl md:text-3xl font-display text-white">
                +44 7765 111 016
              </p>
            </div>

            {/* LinkedIn & CV Section */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
              <div>
                <p className="text-sm text-signal-paper/40 mb-2">Find me here</p>
                <a 
                  href="https://www.linkedin.com/in/aron-reji-/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-xl md:text-2xl text-white transition-colors hover:text-signal-orange"
                >
                  LinkedIn 
                  <ArrowUpRight size={24} className="text-signal-paper/40 transition-colors group-hover:text-signal-orange group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>

              <div>
                <p className="text-sm text-signal-paper/40 mb-2">The Boring Stuff</p>
                <a 
                  href="/aron-reji-cv.pdf" 
                  download
                  className="group inline-flex items-center gap-3 text-xl md:text-2xl text-white transition-colors hover:text-signal-orange"
                >
                  Download CV 
                  <FileText size={24} className="text-signal-paper/40 transition-colors group-hover:text-signal-orange" />
                </a>
              </div>
            </div>

          </div>
        </Reveal>
      </div>

      {/* RIGHT SIDE: Interactive Lanyard with boundary */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-[80vh] relative flex flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.02] overflow-hidden">
        
        {/* Interact Prompt Label - Lowered from bottom-6 to bottom-3 */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 rounded-full border border-signal-orange/30 bg-signal-orange/10 px-4 py-2 text-sm text-signal-orange backdrop-blur-md pointer-events-none">
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