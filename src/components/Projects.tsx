import { useState } from "react"
import { Code2, ExternalLink, Grid2X2, Rows3 } from "lucide-react"
import { motion } from "motion/react"
import { useLanguage } from "../context/language"

type ProjectPreviewProps = {
  image: string
  fallbackLabel: string
  title: string
}

function ProjectPreview({ image, fallbackLabel, title }: ProjectPreviewProps) {
  const [hasError, setHasError] = useState(false)

  return (
    <div className="relative aspect-video overflow-hidden border border-[#2d2d2d] bg-[#111]">
      {hasError ? (
        <div className="absolute inset-0 grid place-items-center bg-[linear-gradient(rgba(168,85,247,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.08)_1px,transparent_1px)] bg-[size:28px_28px]">
          <div className="border border-purple-400/30 bg-black/40 px-4 py-3 text-center">
            <p className="text-xs font-bold text-purple-200">{title}</p>
            <p className="mt-1 text-[11px] text-[#8f8f8f]">{fallbackLabel}</p>
          </div>
        </div>
      ) : (
        <motion.img
          src={image}
          alt={`${title} live demo preview`}
          className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:opacity-100"
          onError={() => setHasError(true)}
          whileHover={{ scale: 1.035 }}
        />
      )}
      <div className="pointer-events-none absolute inset-0 border border-white/5 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
    </div>
  )
}

export function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="px-5 pb-28 sm:px-10 md:px-16 lg:px-20">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <p className="editor-comment text-sm">{t.projects.comment}</p>
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
        {t.projects.items.map((project, index) => (
          <motion.article
            key={project.title}
            className="group border border-[#2d2d2d] bg-[#171717] transition-colors hover:border-purple-400/80"
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.06 }}
            whileHover={{ y: -4 }}
          >
            <ProjectPreview
              image={project.previewImage}
              fallbackLabel={t.projects.previewUnavailable}
              title={project.title}
            />

            <div className="grid grid-cols-[1fr_52px] border-y border-[#2d2d2d]">
              <h3 className="px-4 py-3 text-sm font-bold text-[#f5f5f5] transition-colors group-hover:text-purple-300">
                {project.title}
              </h3>
              <span className="grid place-items-center border-l border-[#2d2d2d] text-purple-300 transition group-hover:bg-purple-400 group-hover:text-black">
                <ExternalLink className="h-5 w-5" />
              </span>
            </div>

            <div className="p-4">
              <p className="min-h-[120px] text-sm font-medium leading-6 text-[#b9b9b9]">
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
                  aria-label={`${t.projects.liveDemoAria} ${project.title}`}
                  className="inline-flex items-center justify-center gap-2 bg-purple-300 px-4 py-3 text-sm font-bold text-black transition hover:bg-purple-200"
                >
                  <ExternalLink className="h-4 w-4" />
                  {t.projects.viewDemo}
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${t.projects.githubAria} ${project.title}`}
                  className="inline-flex items-center justify-center gap-2 border border-[#2d2d2d] px-4 py-3 text-sm font-bold text-[#f4f4f4] transition hover:border-purple-400 hover:text-purple-200"
                >
                  <Code2 className="h-4 w-4" />
                  {t.projects.github}
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
