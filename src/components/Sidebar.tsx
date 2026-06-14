import { BriefcaseBusiness, CalendarDays, Download, Languages, Mail, MapPin, Phone } from "lucide-react"
import { motion } from "motion/react"
import { useLanguage } from "../context/language"

export function Sidebar() {
  const { t } = useLanguage()
  const profile = t.profile
  const details = [
    { icon: BriefcaseBusiness, value: profile.experience },
    { icon: MapPin, value: profile.location },
    { icon: Languages, value: profile.languages },
    { icon: Mail, value: profile.email },
    { icon: Phone, value: profile.phone },
  ]

  return (
    <aside className="border-r border-[#2b2b31] bg-[#141416] lg:min-h-screen">
      <div className="lg:sticky lg:top-9 lg:h-[calc(100vh-60px)] lg:overflow-y-auto">
        <motion.div
          className="p-5 sm:p-6 xl:p-7"
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="mb-8 flex gap-4 border border-[#2b2b31] bg-[#18181b] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <div className="group relative h-16 w-12 shrink-0 overflow-hidden border border-[#34343a] bg-[#101011]">
              <img
                src="/images/profile-1.png"
                alt="Jose Valdez"
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-0"
              />
              <img
                src="/images/profile-2.png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
              />
            </div>
            <div>
              <h1 className="text-[17px] font-bold text-[#f4f4f4]">{profile.name}</h1>
              <p className="mt-1 max-w-[150px] text-[14px] font-medium leading-[22px] text-[#d5d5d5]">
                {profile.title}
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 border border-green-500/20 bg-green-500/10 px-2 py-1 text-[10px] font-bold uppercase text-green-300">
                <span className="h-1.5 w-1.5 bg-green-300" />
                {t.sidebar.available}
              </span>
            </div>
          </div>

          <p className="text-[14px] font-medium leading-[23px] text-[#d0d0d0]">
            {t.sidebar.intro}
          </p>

          <p className="mt-5 text-[14px] font-medium leading-[23px] text-[#bdbdbd]">
            {t.sidebar.passion}
          </p>

          <dl className="mt-8 space-y-3 text-[13px] font-medium text-[#d0d0d0]">
            {details.map((detail) => (
              <div
                key={detail.value}
                className="flex gap-3 border border-transparent py-1.5 transition hover:border-[#2b2b31] hover:bg-white/[0.025] hover:px-2"
              >
                <dt className="pt-0.5 text-[#a1a1aa]">
                  <detail.icon className="h-4 w-4" />
                </dt>
                <dd className="break-words">{detail.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-9 space-y-3">
            <motion.a
              href="/cv/Jose-Valdez-CV-English.pdf"
              download
              className="grid grid-cols-[1fr_42px] border border-[#34343a] bg-[#18181b] text-center text-sm font-bold text-[#f4f4f4] transition hover:border-[#d8d175] hover:text-[#d8d175]"
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.99 }}
            >
              <span className="px-4 py-3">{t.sidebar.downloadCvEnglish}</span>
              <span className="grid place-items-center border-l border-[#34343a] bg-[#242424]">
                <Download className="h-4 w-4" />
              </span>
            </motion.a>

            <motion.a
              href="/cv/Jose-Valdez-CV-Espanol.pdf"
              download
              className="grid grid-cols-[1fr_42px] border border-[#34343a] bg-[#18181b] text-center text-sm font-bold text-[#f4f4f4] transition hover:border-[#d8d175] hover:text-[#d8d175]"
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.99 }}
            >
              <span className="px-4 py-3">{t.sidebar.downloadCvSpanish}</span>
              <span className="grid place-items-center border-l border-[#34343a] bg-[#242424]">
                <Download className="h-4 w-4" />
              </span>
            </motion.a>
          </div>
        </motion.div>

        <div className="border-t border-[#2b2b31] p-5 sm:p-6 xl:p-7">
          <motion.a
            href="#contact"
            className="flex items-center justify-center gap-2 bg-white px-5 py-4 text-center text-sm font-bold text-black transition hover:bg-[#d8d175]"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <CalendarDays className="h-4 w-4" />
            {t.sidebar.scheduleCall}
          </motion.a>
        </div>
      </div>
    </aside>
  )
}
