import { createContext, useContext } from "react"
import type { Language, Translation } from "../data/i18n"

export type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  t: Translation
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }

  return context
}
