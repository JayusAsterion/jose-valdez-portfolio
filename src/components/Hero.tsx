import { motion } from "motion/react"
import { useLanguage } from "../context/language"
import { BackgroundDecor } from "./BackgroundDecor"

const reveal = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
}

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[650px] overflow-hidden px-5 pb-24 pt-9 sm:px-10 md:px-16 lg:min-h-[690px] lg:px-20">
      <BackgroundDecor variant="hero" />
      <motion.p
        className="editor-comment relative text-sm"
        variants={reveal}
        initial="hidden"
        animate="visible"
      >
        {t.hero.comment}
      </motion.p>

      <motion.h2
        className="font-display relative mt-10 max-w-[860px] text-[54px] font-black leading-[0.91] text-[#fafafa] sm:text-[74px] md:text-[96px] lg:text-[118px] xl:text-[132px]"
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.08 }}
      >
        {t.hero.title.map((line, index) => (
          <span key={line}>
            {line}
            {index < t.hero.title.length - 1 ? <br /> : null}
          </span>
        ))}
      </motion.h2>

      <motion.p
        className="editor-copy relative mt-9 max-w-3xl text-base leading-7 md:text-[17px]"
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.18 }}
      >
        {t.profile.summary}
      </motion.p>

      <motion.div
        className="relative mt-10 flex max-w-3xl flex-wrap gap-2"
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.26 }}
      >
        {["React", "Angular", ".NET", "Node.js", "AWS", "Azure"].map((item) => (
          <span
            key={item}
            className="border border-[#33333a] bg-[#151518]/80 px-3 py-1.5 text-xs font-bold text-[#d8d8d8] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </section>
  )
}
