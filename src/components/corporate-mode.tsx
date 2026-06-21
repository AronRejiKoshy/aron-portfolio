"use client";

import { MotionConfig } from "framer-motion";
import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type CorporateModeContextValue = {
  corporate: boolean;
  setCorporate: (value: boolean) => void;
  toggleCorporate: () => void;
  spotifyMode: boolean;
  setSpotifyMode: (value: boolean) => void;
  isScrolled: boolean;
  setIsScrolled: (value: boolean) => void;
};

const CorporateModeContext = createContext<CorporateModeContextValue | null>(null);

export function CorporateModeProvider({ children }: { children: ReactNode }) {
  const [corporate, setCorporate] = useState(false);
  const [spotifyMode, setSpotifyMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.corporate = corporate ? "true" : "false";
  }, [corporate]);

  const value = useMemo(
    () => ({
      corporate,
      setCorporate,
      toggleCorporate: () => setCorporate((current) => !current),
      spotifyMode,
      setSpotifyMode,
      isScrolled,
      setIsScrolled,
    }),
    [corporate, spotifyMode, isScrolled],
  );

  return (
    <CorporateModeContext.Provider value={value}>
      <MotionConfig reducedMotion={corporate ? "always" : "user"}>{children}</MotionConfig>
    </CorporateModeContext.Provider>
  );
}

export function useCorporateMode() {
  const value = useContext(CorporateModeContext);

  if (!value) {
    throw new Error("useCorporateMode must be used inside CorporateModeProvider");
  }

  return value;
}