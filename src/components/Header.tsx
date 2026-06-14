import { useEffect, useState } from "react"
import { Circle } from "lucide-react"
import { motion } from "motion/react"
import { useLanguage } from "../context/language"
import { LanguageToggle } from "./LanguageToggle"

function getCurrentTime() {
  return new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date())
}

export function Header() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime)
  const { t } = useLanguage()

  useEffect(() => {
    const updateTime = () => setCurrentTime(getCurrentTime())
    updateTime()

    const intervalId = window.setInterval(updateTime, 60_000)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-[#2b2b31] bg-[#111113]/95 backdrop-blur">
      <div className="grid h-9 w-full grid-cols-1 lg:grid-cols-[292px_minmax(0,1fr)_212px]">
        <div className="hidden items-center border-r border-[#2b2b31] px-5 text-[11px] font-semibold text-[#f1f1f1] lg:flex">
          {t.header.welcome}
        </div>

        <div className="flex min-w-0 items-center overflow-hidden">
          <a
            href="#"
            className="flex h-9 w-11 items-center justify-center border-r border-[#2b2b31] transition hover:bg-white/[0.03] lg:hidden"
            aria-label="Home"
          >
            <img src="/images/profile-1.png" alt="" className="h-7 w-7 object-cover" />
          </a>

          {t.header.tabs.map((tab, index) => (
            <motion.a
              key={tab.href}
              href={tab.href}
              className="relative flex h-9 min-w-[112px] items-center justify-center border-r border-[#2b2b31] px-5 text-[13px] font-semibold text-[#bdbdbd] transition hover:bg-white/[0.03] hover:text-white sm:min-w-[124px] sm:px-8"
              whileHover={{ y: -1 }}
            >
              {tab.label}
              {index === 0 ? (
                <motion.span
                  layoutId="active-tab-line"
                  className="absolute inset-x-0 bottom-0 h-px bg-[#d8d175] shadow-[0_0_14px_rgba(216,209,117,0.55)]"
                />
              ) : null}
            </motion.a>
          ))}

          <div className="ml-auto flex h-9 items-center justify-end gap-2 border-l border-[#2b2b31] px-2 text-[11px] font-bold text-[#f1f1f1] xl:gap-3 xl:px-4">
            <LanguageToggle />
            <div className="hidden items-center justify-end gap-3 xl:flex">
              <span className="flex shrink-0 items-center gap-1.5 whitespace-nowrap border border-[#1e5d2a] bg-[#143619]/80 px-2.5 py-1 text-green-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <Circle className="h-2 w-2 fill-green-400" />
                {t.header.status}
              </span>
              <span className="shrink-0 whitespace-nowrap text-[#d8d8d8]">{t.header.location}</span>
              <span className="shrink-0 whitespace-nowrap">
                {t.header.myTime}: {currentTime}
              </span>
            </div>
          </div>
        </div>

        <div className="hidden border-l border-[#2b2b31] bg-[#111113] lg:block" />
      </div>
    </header>
  )
}
