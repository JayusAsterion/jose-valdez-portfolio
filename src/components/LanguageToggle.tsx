import { useLanguage } from "../context/language"
import type { Language } from "../data/i18n"

const languages: Language[] = ["en", "es"]

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div
      className="flex shrink-0 items-center border border-[#34343a] bg-[#151518] p-0.5 text-[11px] font-bold shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
      aria-label="Language selector"
    >
      {languages.map((item) => {
        const isActive = item === language

        return (
          <button
            key={item}
            type="button"
            onClick={() => setLanguage(item)}
            className={`px-2.5 py-1 uppercase transition ${
              isActive
                ? "bg-purple-300 text-black shadow-[0_0_14px_rgba(196,181,253,0.24)]"
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
