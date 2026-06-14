import { projects } from "../data/cv"
import { Code2, ExternalLink, Grid2X2, Rows3 } from "lucide-react"
import { motion } from "motion/react"

const previewPatterns = {
  gesture: (
    <>
      <div className="absolute left-8 top-8 h-24 w-24 rounded-full border border-purple-300/30 bg-purple-400/10 blur-[1px]" />
      <div className="absolute left-16 top-16 h-2 w-32 rotate-12 bg-purple-300/40" />
      <div className="absolute bottom-8 right-8 grid grid-cols-5 gap-1.5">
        {Array.from({ length: 15 }, (_, index) => (
          <span
            key={index}
            className="h-8 w-1.5 rounded-full bg-purple-200/50"
            style={{ transform: `scaleY(${0.35 + (index % 5) * 0.16})` }}
          />
        ))}
      </div>
    </>
  ),
  studio: (
    <>
      <div className="absolute left-7 top-7 h-28 w-20 border border-white/15 bg-black/30" />
      <div className="absolute left-12 top-12 h-32 w-32 rounded-full border border-purple-300/30" />
      <div className="absolute bottom-9 right-8 h-16 w-40 border border-white/10 bg-white/5" />
      <div className="absolute bottom-14 right-14 h-2 w-28 bg-purple-300/50" />
    </>
  ),
  review: (
    <>
      <div className="absolute left-7 top-7 h-32 w-[58%] border border-white/10 bg-black/25 p-3">
        <div className="mb-3 h-2 w-28 bg-purple-300/50" />
        <div className="mb-2 h-2 w-full bg-white/10" />
        <div className="mb-2 h-2 w-4/5 bg-white/10" />
        <div className="h-2 w-2/3 bg-emerald-300/35" />
      </div>
      <div className="absolute bottom-8 right-8 h-24 w-36 border border-purple-300/20 bg-purple-950/25" />
      <div className="absolute bottom-14 right-14 h-8 w-20 border border-emerald-300/30" />
    </>
  ),
  sports: (
    <>
      <div className="absolute left-7 top-7 h-20 w-20 rounded-full border-[10px] border-purple-300/20" />
      <div className="absolute right-8 top-10 h-28 w-44 skew-x-[-12deg] border border-amber-300/25 bg-black/20" />
      <div className="absolute bottom-8 left-10 h-3 w-52 bg-purple-300/40" />
      <div className="absolute bottom-14 left-10 h-3 w-36 bg-amber-300/40" />
    </>
  ),
}

type ProjectPattern = keyof typeof previewPatterns

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
            className="group border border-[#2d2d2d] bg-[#171717] transition-colors hover:border-purple-400/80"
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.06 }}
            whileHover={{ y: -4 }}
          >
            <div className="grid grid-cols-[1fr_52px] border-b border-[#2d2d2d]">
              <h3 className="px-4 py-3 text-sm font-bold text-[#f5f5f5] transition-colors group-hover:text-purple-300">
                {project.title}
              </h3>
              <span className="grid place-items-center border-l border-[#2d2d2d] text-purple-300 transition group-hover:bg-purple-400 group-hover:text-black">
                <ExternalLink className="h-5 w-5" />
              </span>
            </div>

            <div className="p-4">
              <div className="overflow-hidden border border-[#2d2d2d] bg-[#111]">
                <motion.div
                  className={`relative aspect-[1.55] bg-gradient-to-br ${project.previewGradient}`}
                  whileHover={{ scale: 1.025 }}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />
                  {previewPatterns[project.previewPattern as ProjectPattern]}
                  <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-black/35 px-4 py-3">
                    <p className="text-xs font-bold text-purple-100">{project.title}</p>
                  </div>
                </motion.div>
              </div>

              <p className="mt-5 min-h-[96px] text-sm font-medium leading-6 text-[#b9b9b9]">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="border border-purple-400/20 bg-purple-400/5 px-2.5 py-1 text-xs font-semibold text-purple-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View live demo for ${project.title}`}
                  className="inline-flex items-center justify-center gap-2 bg-purple-300 px-4 py-3 text-sm font-bold text-black transition hover:bg-purple-200"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View GitHub repository for ${project.title}`}
                  className="inline-flex items-center justify-center gap-2 border border-[#2d2d2d] px-4 py-3 text-sm font-bold text-[#f4f4f4] transition hover:border-purple-400 hover:text-purple-200"
                >
                  <Code2 className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
