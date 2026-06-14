import { ExternalLink, GitBranch, Mail } from "lucide-react"
import { motion } from "motion/react"
import { useLanguage } from "../context/language"

export function Contact() {
  const { t } = useLanguage()
  const profile = t.profile

  return (
    <section id="contact" className="px-5 pb-32 pt-6 sm:px-10 md:px-16 lg:px-20">
      <p className="editor-comment mb-8 text-sm">{t.contact.comment}</p>

      <motion.div
        className="relative grid gap-10 overflow-hidden border border-[#2b2b31] bg-[#151518] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] md:p-9 xl:grid-cols-[minmax(0,1fr)_320px]"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 bg-purple-500/10 blur-[100px]" />
        <div>
          <h2 className="font-display max-w-2xl text-4xl font-black leading-tight text-white md:text-6xl">
            {t.contact.title}
          </h2>
          <p className="mt-7 max-w-2xl text-[17px] font-medium leading-8 text-[#b9b9b9]">
            {t.contact.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <motion.a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 bg-white px-6 py-4 text-sm font-bold text-black transition hover:bg-[#d8d175]"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="h-4 w-4" />
              {t.contact.emailMe}
            </motion.a>
            <motion.a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-[#34343a] bg-[#111113] px-6 py-4 text-sm font-bold text-[#f4f4f4] transition hover:border-[#d8d175] hover:text-[#d8d175]"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink className="h-4 w-4" />
              LinkedIn
            </motion.a>
            <motion.a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-[#34343a] bg-[#111113] px-6 py-4 text-sm font-bold text-[#f4f4f4] transition hover:border-[#d8d175] hover:text-[#d8d175]"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <GitBranch className="h-4 w-4" />
              GitHub
            </motion.a>
          </div>
        </div>

        <div className="relative border border-[#2b2b31] bg-[#111113] p-5 text-sm font-medium leading-7 text-[#b9b9b9]">
          <p className="text-[#d8d175]">{t.contact.config}</p>
          <p className="mt-5">{t.contact.emailLabel}: {profile.email}</p>
          <p>{t.contact.phoneLabel}: {profile.phone}</p>
          <p>{t.contact.locationLabel}: {profile.location}</p>
        </div>
      </motion.div>
    </section>
  )
}
