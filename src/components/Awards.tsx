import { awards } from "../data/cv"
import { Award } from "lucide-react"
import { motion } from "motion/react"

export function Awards() {
  return (
    <section id="awards" className="px-5 pb-28 sm:px-10 md:px-16 lg:px-20">
      <p className="editor-comment mb-8 text-sm">{"<!-- Awards -->"}</p>

      <div className="space-y-4">
        {awards.map((award, index) => (
          <motion.div
            key={award}
            className="grid gap-3 border border-[#2d2d2d] bg-[#191919] p-5 text-[#b9b9b9] transition hover:border-[#d8d175] md:grid-cols-[120px_minmax(0,1fr)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.06 }}
            whileHover={{ x: 4 }}
          >
            <span className="flex items-center gap-2 text-sm text-[#7d7d7d]">
              <Award className="h-4 w-4" />
              award_{index + 1}
            </span>
            <span>{award}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
