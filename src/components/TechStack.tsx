import { motion } from "motion/react"
import { useLanguage } from "../context/language"
import type { IconType } from "react-icons"
import {
  SiAngular,
  SiDocker,
  SiDotnet,
  SiGithub,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"

type TechItem = {
  accent: string
  fallback?: string
  icon?: IconType
  name: string
}

const techGroups: Array<{ key: "backend" | "frontend" | "cloud"; items: TechItem[] }> = [
  {
    key: "backend",
    items: [
      { name: "C# / .NET", icon: SiDotnet, accent: "#8d5cf6" },
      { name: "Node.js", icon: SiNodedotjs, accent: "#8cc84b" },
      { name: "Docker", icon: SiDocker, accent: "#2496ed" },
      { name: "GitHub", icon: SiGithub, accent: "#f5f5f5" },
    ],
  },
  {
    key: "frontend",
    items: [
      { name: "React", icon: SiReact, accent: "#61dafb" },
      { name: "Angular", icon: SiAngular, accent: "#dd0031" },
      { name: "TypeScript", icon: SiTypescript, accent: "#3178c6" },
      { name: "JavaScript", icon: SiJavascript, accent: "#f7df1e" },
      { name: "Tailwind", icon: SiTailwindcss, accent: "#38bdf8" },
    ],
  },
  {
    key: "cloud",
    items: [
      { name: "SQL Server", fallback: "SQL", accent: "#d8d8d8" },
      { name: "Oracle", fallback: "ORA", accent: "#f80000" },
      { name: "PostgreSQL", icon: SiPostgresql, accent: "#4169e1" },
      { name: "MySQL", icon: SiMysql, accent: "#4479a1" },
      { name: "AWS", fallback: "aws", accent: "#ff9900" },
      { name: "Azure", fallback: "Az", accent: "#4da3ff" },
    ],
  },
]

export function TechStack() {
  const { t } = useLanguage()

  return (
    <section id="tech" className="border-y border-[#2b2b31] px-5 py-20 sm:px-10 md:px-16 lg:px-20">
      <p className="editor-comment mb-8 text-sm">{t.techStack.comment}</p>
      <h2 className="font-display mb-10 max-w-3xl text-3xl font-black leading-tight text-[#f7f7f7] md:text-5xl">
        {t.techStack.heading}
      </h2>

      <div className="grid gap-5 xl:grid-cols-3">
        {techGroups.map((group, groupIndex) => (
          <motion.div
            key={group.key}
            className="border border-[#2b2b31] bg-[#151518] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: groupIndex * 0.05 }}
          >
            <h3 className="mb-4 border-b border-[#2b2b31] pb-3 text-sm font-bold text-[#d8d8d8]">
              {t.techStack.groups[group.key]}
            </h3>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-2">
              {group.items.map((tech) => {
                const Icon = tech.icon

                return (
                  <motion.article
                    key={tech.name}
                    className="group min-h-[118px] border border-[#2b2b31] bg-[#111113] p-4 transition-colors hover:bg-[#1c1c20]"
                    whileHover={{
                      borderColor: tech.accent,
                      y: -3,
                    }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs font-bold text-[#a7a7a7] transition group-hover:text-white">
                        {tech.name}
                      </p>
                      <motion.div
                        className="grid h-10 w-10 shrink-0 place-items-center border border-[#2b2b31] bg-[#151518] text-xl font-black"
                        style={{ color: tech.accent }}
                        whileHover={{ rotate: -2, scale: 1.08 }}
                      >
                        {Icon ? <Icon aria-hidden="true" /> : tech.fallback}
                      </motion.div>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
