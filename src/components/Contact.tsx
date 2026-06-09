import { profile } from "../data/cv"
import { ExternalLink, GitBranch, Mail } from "lucide-react"
import { motion } from "motion/react"

export function Contact() {
  return (
    <section id="contact" className="px-5 pb-32 sm:px-10 md:px-16 lg:px-20">
      <p className="editor-comment mb-8 text-sm">{"<!-- Contact me -->"}</p>

      <motion.div
        className="grid gap-10 border border-[#2d2d2d] bg-[#191919] p-6 md:p-9 xl:grid-cols-[minmax(0,1fr)_280px]"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
      >
        <div>
          <h2 className="max-w-2xl text-4xl font-black leading-tight text-white md:text-6xl">
            Let us build something reliable.
          </h2>
          <p className="mt-7 max-w-2xl text-[17px] font-medium leading-8 text-[#b9b9b9]">
            I am open to software engineering opportunities, freelance consulting,
            technical collaborations and enterprise web application projects.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <motion.a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 bg-white px-6 py-4 text-sm font-semibold text-black transition hover:bg-[#d8d175]"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="h-4 w-4" />
              Email me
            </motion.a>
            <motion.a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-[#2d2d2d] px-6 py-4 text-sm font-bold text-[#f4f4f4] transition hover:border-[#d8d175] hover:text-[#d8d175]"
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
              className="inline-flex items-center gap-2 border border-[#2d2d2d] px-6 py-4 text-sm font-bold text-[#f4f4f4] transition hover:border-[#d8d175] hover:text-[#d8d175]"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <GitBranch className="h-4 w-4" />
              GitHub
            </motion.a>
          </div>
        </div>

        <div className="text-sm font-medium leading-7 text-[#b9b9b9]">
          <p className="text-[#d8d175]">contact.config</p>
          <p className="mt-5">email: {profile.email}</p>
          <p>phone: {profile.phone}</p>
          <p>location: {profile.location}</p>
        </div>
      </motion.div>
    </section>
  )
}
