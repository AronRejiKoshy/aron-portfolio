"use client";

import { ArrowUpRight, RotateCcw } from "lucide-react";
import { AnimatePresence, motion, useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { useCorporateMode } from "@/components/corporate-mode";

const nav = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Helper to return the exact hex code based on the URL
const getThemeColor = (pathname: string, spotifyMode: boolean) => {
  // Constrain Spotify Mode to ONLY the Home Page
  if (spotifyMode && pathname === "/") return "#1DB954";
  
  if (pathname.includes("/work/face-value")) return "#9E4242";
  if (pathname.includes("/work/twinings-loneliness")) return "#ffa81f";
  if (pathname.includes("/work/what-do-you-call")) return "#db5e8d";
  
  return "#d7ff3f"; // Default signal-lime
};

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { corporate, toggleCorporate, setCorporate, spotifyMode, isScrolled, setIsScrolled } = useCorporateMode();
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 28, mass: 0.18 });

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 300 && !isScrolled) {
      setIsScrolled(true);
    } else if (latest <= 300 && isScrolled) {
      setIsScrolled(false);
    }
  });

  // Calculate active hex color
  const themeHex = getThemeColor(pathname, spotifyMode);

  return (
    <div
      // Inject the hex code globally as a CSS variable
      style={{ "--theme-color": themeHex } as React.CSSProperties}
      className={
        corporate
          ? "min-h-screen bg-white font-corporate text-black"
          : "min-h-screen bg-ink-950 text-signal-paper"
      }
    >
      {!corporate ? (
        <>
          <motion.div
            className="fixed left-0 right-0 top-0 z-[70] h-1 origin-left transition-colors duration-500 bg-[var(--theme-color)]"
            style={{ scaleX }}
            aria-hidden="true"
          />
          <div className="grain" aria-hidden="true" />
        </>
      ) : null}

      <header
        className={
          corporate
            ? "fixed left-0 right-0 top-0 z-50 border-b border-neutral-300 bg-white px-4 py-3 md:px-8"
            : "fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8 md:py-6"
        }
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4">
          <Link
            href="/"
            className="relative flex h-8 items-center"
            aria-label="Aron home"
          >
            {corporate ? (
              <span className="font-corporate text-xl text-black">Aron Reji CV Website</span>
            ) : (
              <>
                <span className="font-display text-xl leading-none opacity-0 md:text-2xl">
                  ARON
                </span>
                {isScrolled && (
                  <motion.span
                    layoutId="aron-main-logo"
                    className="absolute left-0 font-display text-xl leading-none text-signal-paper md:text-2xl"
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    ARON
                  </motion.span>
                )}
              </>
            )}
          </Link>

          <nav aria-label="Main navigation" className="flex items-center gap-1">
            <AnimatePresence>
              {nav.map((item, index) => {
                const active = pathname.startsWith(item.href);
                const showNav = corporate || pathname !== "/" || isScrolled;

                return (
                  showNav && (
                    <motion.div
                      key={item.href}
                      initial={corporate ? false : { opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={corporate ? undefined : { opacity: 0, y: -10 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: corporate ? 0 : index * 0.1, 
                        ease: [0.16, 1, 0.3, 1] 
                      }}
                    >
                      <Link
                        href={item.href}
                        className={
                          corporate
                            ? `px-3 py-2 text-sm underline-offset-4 hover:underline ${
                                active ? "font-bold text-signal-blue" : "text-black"
                              }`
                            : `block rounded-brand border px-3 py-2 text-sm backdrop-blur-md transition-colors duration-300 hover:border-[var(--theme-color)] hover:text-[var(--theme-color)] ${
                                active
                                  ? "border-[var(--theme-color)] bg-[var(--theme-color)] text-ink-950"
                                  : "border-white/12 bg-black/30 text-signal-paper/72"
                              }`
                        }
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  )
                );
              })}
            </AnimatePresence>
          </nav>
        </div>
      </header>

      {children}

      <button
        type="button"
        onClick={toggleCorporate}
        aria-pressed={corporate}
        className={
          corporate
            ? "fixed bottom-4 left-4 z-[80] inline-flex items-center gap-2 border border-signal-blue bg-signal-blue px-4 py-3 font-corporate text-base text-white"
            : `fixed bottom-4 left-4 z-[80] inline-flex max-w-[13rem] items-center gap-2 rounded-brand border border-white/12 bg-black/45 px-3 py-2 text-left text-xs text-signal-paper/45 backdrop-blur-md transition-colors duration-300 hover:border-[var(--theme-color)] hover:text-[var(--theme-color)] focus:text-[var(--theme-color)]`
        }
      >
        {corporate ? <RotateCcw aria-hidden="true" size={16} /> : <ArrowUpRight aria-hidden="true" size={14} />}
        {corporate ? "Bring Aron back." : "Need the LinkedIn version?"}
      </button>

      {corporate ? (
        <footer className="border-t border-neutral-300 bg-white px-4 py-10 text-center font-corporate text-black">
          <p className="text-xl">This version tested poorly with humans.</p>
          <button
            type="button"
            onClick={() => setCorporate(false)}
            className="mt-4 border border-signal-blue bg-signal-blue px-5 py-3 text-white"
          >
            Bring Aron back.
          </button>
        </footer>
      ) : null}
    </div>
  );
}