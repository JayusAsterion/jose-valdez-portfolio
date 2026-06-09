import { profile } from "../data/cv"
import { motion } from "motion/react"

const reveal = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
}

export function Hero() {
  return (
    <section className="min-h-[690px] px-5 pb-24 pt-9 sm:px-10 md:px-16 lg:px-20">
      <motion.p
        className="editor-comment text-sm"
        variants={reveal}
        initial="hidden"
        animate="visible"
      >
        {"<!-- Hero section -->"}
      </motion.p>

      <motion.h2
        className="font-display mt-10 max-w-[780px] text-[56px] font-black leading-[0.92] text-[#f7f7f7] sm:text-[74px] md:text-[96px] lg:text-[118px]"
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.08 }}
      >
        Senior
        <br />
        Full Stack
        <br />
        Engineer
      </motion.h2>

      <motion.p
        className="editor-copy mt-9 max-w-3xl text-base leading-7 md:text-[17px]"
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.18 }}
      >
        {profile.summary}
      </motion.p>
    </section>
  )
}
