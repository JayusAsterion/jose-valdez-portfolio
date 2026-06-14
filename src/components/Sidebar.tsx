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
    <aside className="border-r border-[#2d2d2d] bg-[#191919] lg:min-h-screen">
      <div className="lg:sticky lg:top-8 lg:h-[calc(100vh-56px)] lg:overflow-y-auto">
        <motion.div
          className="p-6 xl:p-7"
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="mb-8 flex gap-4">
            <div className="group relative h-16 w-12 shrink-0 overflow-hidden">
              <img
                src="/images/profile-1.png"
                alt="Jose Valdez"
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:opacity-0"
              />
              <img
                src="/images/profile-2.png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
              />
            </div>
            <div>
              <h1 className="text-[17px] font-bold text-[#f4f4f4]">{profile.name}</h1>
              <p className="mt-1 max-w-[150px] text-[14px] font-medium leading-[22px] text-[#d5d5d5]">
                {profile.title}
              </p>
            </div>
          </div>

          <p className="text-[15px] font-medium leading-[22px] text-[#d0d0d0]">
            {t.sidebar.intro}
          </p>

          <p className="mt-5 text-[15px] font-medium leading-[22px] text-[#d0d0d0]">
            {t.sidebar.passion}
          </p>

          <dl className="mt-8 space-y-6 text-[13px] font-medium text-[#d0d0d0]">
            {details.map((detail) => (
              <div key={detail.value} className="flex gap-4">
                <dt className="pt-0.5 text-[#9b9b9b]">
                  <detail.icon className="h-4 w-4" />
                </dt>
                <dd className="break-words">{detail.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-9 space-y-6">
            <motion.a
              href="/cv/Jose-Valdez-CV-English.pdf"
              download
              className="grid grid-cols-[1fr_42px] border border-[#2d2d2d] text-center text-sm font-bold text-[#f4f4f4] transition hover:border-[#d8d175] hover:text-[#d8d175]"
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.99 }}
            >
              <span className="px-4 py-3">{t.sidebar.downloadCvEnglish}</span>
              <span className="grid place-items-center border-l border-[#2d2d2d] bg-[#242424]">
                <Download className="h-4 w-4" />
              </span>
            </motion.a>

            <motion.a
              href="/cv/Jose-Valdez-CV-Espanol.pdf"
              download
              className="grid grid-cols-[1fr_42px] border border-[#2d2d2d] text-center text-sm font-bold text-[#f4f4f4] transition hover:border-[#d8d175] hover:text-[#d8d175]"
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.99 }}
            >
              <span className="px-4 py-3">{t.sidebar.downloadCvSpanish}</span>
              <span className="grid place-items-center border-l border-[#2d2d2d] bg-[#242424]">
                <Download className="h-4 w-4" />
              </span>
            </motion.a>
          </div>
        </motion.div>

        <div className="border-t border-[#2d2d2d] p-6 xl:p-7">
          <motion.a
            href="#contact"
            className="flex items-center justify-center gap-2 bg-white px-5 py-4 text-center text-sm font-semibold text-black transition hover:bg-[#d8d175]"
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
