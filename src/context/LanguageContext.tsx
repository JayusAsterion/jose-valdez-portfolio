import { useEffect, useMemo, useState } from "react"
import { translations, type Language } from "../data/i18n"
import type { ReactNode } from "react"
import { LanguageContext, type LanguageContextValue } from "./language"

const storageKey = "portfolio-language"

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "en"
  }

  const savedLanguage = window.localStorage.getItem(storageKey)
  return savedLanguage === "es" || savedLanguage === "en" ? savedLanguage : "en"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    window.localStorage.setItem(storageKey, language)
  }, [language])

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((current) => (current === "en" ? "es" : "en")),
      t: translations[language],
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
