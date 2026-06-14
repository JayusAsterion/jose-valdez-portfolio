import { useLanguage } from "../context/language"
import type { Language } from "../data/i18n"

const languages: Language[] = ["en", "es"]

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div
      className="flex shrink-0 items-center border border-[#2d2d2d] bg-[#151515] p-0.5 text-[11px] font-bold"
      aria-label="Language selector"
    >
      {languages.map((item) => {
        const isActive = item === language

        return (
          <button
            key={item}
            type="button"
            onClick={() => setLanguage(item)}
            className={`px-2 py-0.5 uppercase transition ${
              isActive
                ? "bg-purple-300 text-black"
                : "text-[#a8a8a8] hover:bg-purple-400/10 hover:text-purple-200"
            }`}
            aria-pressed={isActive}
          >
            {item}
          </button>
        )
      })}
    </div>
  )
}
