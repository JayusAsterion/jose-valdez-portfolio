import { experience } from "../data/cv"
import { motion } from "motion/react"

export function Experience() {
  return (
    <section id="experience" className="border-y border-[#2d2d2d] px-5 py-16 sm:px-10 md:px-16 lg:px-20">
      <p className="editor-comment mb-7 text-sm">
        {"<!-- In a previous life -->"}
      </p>

      <div className="border-y border-[#292929]">
        {experience.map((job, index) => (
          <motion.article
            key={`${job.company}-${job.period}`}
            className="grid min-h-[60px] gap-3 border-b border-[#292929] py-5 text-sm last:border-b-0 md:grid-cols-[230px_minmax(0,1fr)_290px] md:items-center xl:grid-cols-[280px_minmax(0,1fr)_320px]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.04 }}
            whileHover={{ backgroundColor: "#222222", x: 4 }}
          >
            <p className="font-bold text-[#e8e29a]">{job.period}</p>
            <h3 className="font-bold text-[#f3f3f3]">{job.role}</h3>
            <p className="font-bold text-[#8f8f8f] md:text-left">{job.company}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
