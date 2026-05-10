import { useMemo } from "react";
import { useLandingLocale } from "@/contexts/landing-locale";
import { landingCopy, type LandingCopy } from "@/lib/landing-i18n";

export function useLandingCopy(): LandingCopy {
  const { locale } = useLandingLocale();
  return useMemo(() => landingCopy[locale], [locale]);
}
