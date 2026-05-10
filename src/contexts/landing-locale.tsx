import * as React from "react";
import { landingCopy, type LandingLocale } from "@/lib/landing-i18n";

export type { LandingLocale };

const STORAGE_KEY = "medmcp-landing-locale";

type LandingLocaleContextValue = {
  locale: LandingLocale;
  setLocale: (locale: LandingLocale) => void;
};

const LandingLocaleContext = React.createContext<LandingLocaleContextValue | null>(null);

export function LandingLocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<LandingLocale>("en");

  React.useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw === "hr" || raw === "en") setLocaleState(raw);
    } catch {
      /* ignore */
    }
  }, []);

  React.useEffect(() => {
    document.documentElement.lang = locale;
    document.title = landingCopy[locale].meta.documentTitle;
  }, [locale]);

  const setLocale = React.useCallback((next: LandingLocale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const value = React.useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

  return <LandingLocaleContext.Provider value={value}>{children}</LandingLocaleContext.Provider>;
}

export function useLandingLocale(): LandingLocaleContextValue {
  const ctx = React.useContext(LandingLocaleContext);
  if (!ctx) throw new Error("useLandingLocale must be used within LandingLocaleProvider");
  return ctx;
}
