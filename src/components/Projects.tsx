import { useState } from "react"
import { Code2, ExternalLink, Grid2X2, Rows3 } from "lucide-react"
import { motion } from "motion/react"
import { useLanguage } from "../context/language"
import { BackgroundDecor } from "./BackgroundDecor"

type ProjectPreviewProps = {
  image: string
  fallbackLabel: string
  title: string
}

function ProjectPreview({ image, fallbackLabel, title }: ProjectPreviewProps) {
  const [hasError, setHasError] = useState(false)

  return (
    <div className="relative aspect-video overflow-hidden border-b border-[#2b2b31] bg-[#0f0f10]">
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
          className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.035] group-hover:opacity-100"
          onError={() => setHasError(true)}
        />
      )}
      <div className="pointer-events-none absolute inset-0 border border-white/5 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
    </div>
  )
}

export function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="relative overflow-hidden px-5 pb-28 sm:px-10 md:px-16 lg:px-20">
      <BackgroundDecor variant="projects" />
      <div className="relative mb-9 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="editor-comment text-sm">{t.projects.comment}</p>
          <h2 className="font-display mt-4 max-w-3xl text-3xl font-black leading-tight text-[#f7f7f7] md:text-5xl">
            {t.projects.heading}
          </h2>
          <p className="editor-copy mt-4 max-w-2xl text-sm leading-6 md:text-base">
            {t.projects.description}
          </p>
        </div>
        <div className="hidden gap-1 border border-[#2d2d2d] p-1 md:flex">
          <span className="grid h-7 w-7 place-items-center bg-white text-black">
            <Grid2X2 className="h-4 w-4" />
          </span>
          <span className="grid h-7 w-7 place-items-center text-zinc-500">
            <Rows3 className="h-4 w-4" />
          </span>
        </div>
      </div>

      <div className="relative grid gap-6 md:grid-cols-2 xl:gap-8">
        {t.projects.items.map((project, index) => (
          <motion.article
            key={project.title}
            className="group flex h-full flex-col overflow-hidden border border-[#2b2b31] bg-[#151518] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors hover:border-purple-400/80 hover:shadow-[0_20px_70px_rgba(0,0,0,0.22),0_0_0_1px_rgba(196,181,253,0.08)]"
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

            <div className="grid grid-cols-[1fr_52px] border-b border-[#2b2b31]">
              <h3 className="px-4 py-4 text-base font-bold text-[#f5f5f5] transition-colors group-hover:text-purple-300">
                {project.title}
              </h3>
              <span className="grid place-items-center border-l border-[#2b2b31] text-purple-300 transition group-hover:bg-purple-400 group-hover:text-black">
                <ExternalLink className="h-5 w-5" />
              </span>
            </div>

            <div className="flex flex-1 flex-col p-4 sm:p-5">
              <p className="text-sm font-medium leading-6 text-[#bdbdbd] md:min-h-[144px] xl:min-h-[120px]">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="border border-purple-400/20 bg-purple-400/5 px-2.5 py-1 text-[11px] font-semibold text-purple-200 transition group-hover:border-purple-300/35"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-auto grid gap-3 pt-6 sm:grid-cols-2">
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
                  className="inline-flex items-center justify-center gap-2 border border-[#34343a] bg-[#111113] px-4 py-3 text-sm font-bold text-[#f4f4f4] transition hover:border-purple-400 hover:text-purple-200"
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
