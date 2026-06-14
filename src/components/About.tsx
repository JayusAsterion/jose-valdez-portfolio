import { Download } from "lucide-react"
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { useLanguage } from "../context/language"

export function About() {
  const { language, t } = useLanguage()
  const sinceRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sinceRef,
    offset: ["start end", "end start"],
  })
  const sinceX = useTransform(scrollYProgress, [0, 1], [-80, 60])
  const yearX = useTransform(scrollYProgress, [0, 1], [80, -60])
  const slashX = useTransform(scrollYProgress, [0, 1], [34, -34])

  return (
    <section id="about" className="border-y border-[#2d2d2d] pb-24">
      <motion.div
        ref={sinceRef}
        className="relative h-[300px] overflow-hidden px-5 sm:px-10 md:h-[360px] md:px-16 lg:px-20 xl:h-[410px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="absolute left-5 top-12 z-10 flex select-none items-start sm:left-10 md:left-16 lg:left-20"
          style={{ x: sinceX }}
        >
          <span className="font-display text-[92px] font-black leading-none text-white/[0.045] sm:text-[150px] md:text-[205px] xl:text-[260px]">
            {t.about.since}
          </span>
        </motion.div>

        <motion.div
          className="absolute left-5 top-[72%] h-16 w-[43vw] max-w-[680px] overflow-hidden sm:left-10 md:left-16 lg:left-20"
          style={{ x: slashX }}
        >
          <div className="h-full w-full bg-[repeating-linear-gradient(105deg,rgba(255,255,255,0.06)_0_5px,transparent_5px_24px)]" />
        </motion.div>

        <motion.div
          className="absolute left-[58%] top-[21%] h-16 w-[34vw] max-w-[550px] overflow-hidden md:left-[57%] lg:left-[56%]"
          style={{ x: slashX }}
        >
          <div className="h-full w-full bg-[repeating-linear-gradient(105deg,rgba(255,255,255,0.06)_0_5px,transparent_5px_24px)]" />
        </motion.div>

        <motion.div
          className="absolute bottom-5 right-5 z-10 select-none sm:right-10 md:right-16 lg:right-20"
          style={{ x: yearX }}
        >
          <span className="font-display text-[92px] font-black leading-none text-white/[0.045] sm:text-[150px] md:text-[205px] xl:text-[260px]">
            2020
          </span>
        </motion.div>
      </motion.div>

      <div className="px-5 sm:px-10 md:px-16 lg:px-20">
      <p className="editor-comment mb-5 text-sm">{t.about.comment}</p>

      <motion.div
        className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_250px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div>
          <h2 className="font-display max-w-4xl text-5xl font-black leading-tight text-[#f7f7f7] md:text-6xl">
            {t.about.titleStart} <span className="text-[#8f8f8f]">{t.about.titleAccent}</span>
          </h2>

          <div className="mt-9 grid max-w-5xl gap-10 lg:grid-cols-[360px_minmax(0,1fr)]">
            <div className="space-y-7 text-[17px] font-medium leading-7 text-[#b9b9b9]">
              {t.about.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <p className="max-w-[430px] text-[17px] font-medium leading-7 text-[#b9b9b9]">
              {t.about.collaborationStart}{" "}
              <span className="bg-[#d8d175]/25 px-1 text-[#e8e29a]">
                {t.about.collaborationHighlight}
              </span>{" "}
              {t.about.collaborationEnd}
            </p>
          </div>
        </div>

        <motion.aside
          className="self-start border border-[#2d2d2d] bg-[#191919]"
          whileHover={{ y: -4, borderColor: "#d8d175" }}
        >
          <img
            src="/images/profile-1.png"
            alt="Jose Valdez"
            className="aspect-[1.08] w-full object-cover object-[50%_22%]"
          />
          <div className="border-t border-[#2d2d2d] p-8 text-center">
            <p className="mb-3 text-sm font-bold text-[#9d9d9d]">{t.about.followMe}</p>
            <a
              href={language === "es" ? "/cv/Jose-Valdez-CV-Espanol.pdf" : "/cv/Jose-Valdez-CV-English.pdf"}
              download
              className="mx-auto grid max-w-[175px] grid-cols-[1fr_42px] border border-[#2d2d2d] text-sm font-bold text-[#f4f4f4] transition hover:border-[#d8d175] hover:text-[#d8d175]"
            >
              <span className="px-4 py-3">{t.about.downloadCv}</span>
              <span className="grid place-items-center border-l border-[#2d2d2d] bg-[#242424]">
                <Download className="h-4 w-4" />
              </span>
            </a>
          </div>
        </motion.aside>
      </motion.div>
      </div>
    </section>
  )
}
