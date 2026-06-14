import { Award } from "lucide-react"
import { motion } from "motion/react"
import { useLanguage } from "../context/language"

export function Awards() {
  const { t } = useLanguage()

  return (
    <section id="awards" className="px-5 py-20 sm:px-10 md:px-16 lg:px-20">
      <p className="editor-comment mb-5 text-sm">{t.awards.comment}</p>
      <h2 className="font-display mb-8 max-w-3xl text-3xl font-black leading-tight text-[#f7f7f7] md:text-5xl">
        {t.awards.heading}
      </h2>

      <div className="grid gap-4 lg:grid-cols-2">
        {t.awards.items.map((award, index) => (
          <motion.div
            key={award}
            className="grid gap-4 border border-[#2b2b31] bg-[#151518] p-5 text-[#b9b9b9] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:border-[#d8d175] md:grid-cols-[120px_minmax(0,1fr)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.06 }}
            whileHover={{ x: 4 }}
          >
            <span className="flex items-center gap-2 text-sm text-[#7d7d7d]">
              <Award className="h-4 w-4" />
              {t.awards.labelPrefix}_{index + 1}
            </span>
            <span className="font-medium leading-6">{award}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
