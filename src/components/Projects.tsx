import { projects } from "../data/cv"
import { ArrowUpRight, Grid2X2, Rows3 } from "lucide-react"
import { motion } from "motion/react"

export function Projects() {
  return (
    <section id="projects" className="px-5 pb-28 sm:px-10 md:px-16 lg:px-20">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <p className="editor-comment text-sm">{"<!-- Featured work -->"}</p>
        <div className="hidden gap-1 border border-[#2d2d2d] p-1 md:flex">
          <span className="grid h-7 w-7 place-items-center bg-white text-black">
            <Grid2X2 className="h-4 w-4" />
          </span>
          <span className="grid h-7 w-7 place-items-center text-zinc-500">
            <Rows3 className="h-4 w-4" />
          </span>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="group"
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.06 }}
            whileHover={{ y: -4 }}
          >
            <div className="grid grid-cols-[1fr_52px] border border-[#2d2d2d] bg-[#171717]">
              <h3 className="px-4 py-3 text-sm font-bold text-[#f5f5f5]">
                {project.title}
              </h3>
              <span className="grid place-items-center border-l border-[#2d2d2d] text-2xl text-[#d8d175] transition group-hover:bg-[#d8d175] group-hover:text-black">
                <ArrowUpRight className="h-6 w-6" />
              </span>
            </div>

            <div className="overflow-hidden border-x border-b border-[#2d2d2d] bg-[#111]">
              <motion.img
                src={project.image}
                alt={project.title}
                className="aspect-[1.28] w-full object-cover grayscale transition duration-500 group-hover:scale-[1.035] group-hover:grayscale-0"
                whileHover={{ scale: 1.035 }}
              />
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 flex justify-end">
        <div className="max-w-[260px] text-right">
          <p className="mb-4 text-sm leading-5 text-[#7d7d7d]">
            Explore the full collection and selected enterprise work.
          </p>
          <motion.a
            href="#contact"
            className="inline-block bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#d8d175]"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View all works
          </motion.a>
        </div>
      </div>
    </section>
  )
}
