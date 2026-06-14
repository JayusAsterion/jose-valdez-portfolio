import { motion } from "motion/react"
import { useLanguage } from "../context/language"

export function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="border-y border-[#2b2b31] px-5 py-20 sm:px-10 md:px-16 lg:px-20">
      <p className="editor-comment mb-5 text-sm">
        {t.experience.comment}
      </p>
      <div className="mb-10 grid gap-4 xl:grid-cols-[minmax(0,1fr)_360px] xl:items-end">
        <h2 className="font-display max-w-3xl text-3xl font-black leading-tight text-[#f7f7f7] md:text-5xl">
          {t.experience.heading}
        </h2>
        <p className="editor-copy max-w-xl text-sm leading-6 md:text-base">
          {t.experience.description}
        </p>
      </div>

      <div className="relative border-y border-[#2b2b31]">
        <div className="absolute bottom-0 left-[8px] top-0 hidden w-px bg-[#34343a] md:block" />
        {t.experience.jobs.map((job, index) => (
          <motion.article
            key={`${job.company}-${job.period}`}
            className="group relative grid gap-4 border-b border-[#2b2b31] bg-transparent py-5 text-sm last:border-b-0 md:grid-cols-[220px_minmax(0,1fr)] md:pl-9 xl:grid-cols-[250px_minmax(0,1fr)]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.04 }}
            whileHover={{ backgroundColor: "#1d1d21", x: 4 }}
          >
            <span className="absolute left-0 top-7 hidden h-4 w-4 border border-[#d8d175] bg-[#171719] shadow-[0_0_18px_rgba(216,209,117,0.12)] md:block" />
            <p className="font-bold text-[#e8e29a]">{job.period}</p>
            <div>
              <div className="grid gap-2 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-start">
                <div>
                  <h3 className="font-bold text-[#f3f3f3] transition group-hover:text-purple-200">
                    {job.role}
                  </h3>
                  <p className="mt-1 font-bold text-[#9d9d9d]">{job.company}</p>
                </div>
                <p className="font-medium text-[#7f7f86] lg:text-right">{job.location}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.points.map((point) => (
                  <span
                    key={point}
                    className="border border-[#34343a] bg-[#111113] px-2.5 py-1 text-[11px] font-bold text-[#bdbdbd] transition group-hover:border-purple-300/35 group-hover:text-purple-100"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
