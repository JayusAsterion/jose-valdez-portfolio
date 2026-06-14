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

const techStack: TechItem[] = [
  { name: "C# / .NET", icon: SiDotnet, accent: "#8d5cf6" },
  { name: "Node.js", icon: SiNodedotjs, accent: "#8cc84b" },
  { name: "SQL Server", fallback: "SQL", accent: "#d8d8d8" },
  { name: "Oracle", fallback: "ORA", accent: "#f80000" },
  { name: "AWS", fallback: "aws", accent: "#ff9900" },
  { name: "Azure", fallback: "Az", accent: "#4da3ff" },
  { name: "React", icon: SiReact, accent: "#61dafb" },
  { name: "Angular", icon: SiAngular, accent: "#dd0031" },
  { name: "TypeScript", icon: SiTypescript, accent: "#3178c6" },
  { name: "JavaScript", icon: SiJavascript, accent: "#f7df1e" },
  { name: "PostgreSQL", icon: SiPostgresql, accent: "#4169e1" },
  { name: "MySQL", icon: SiMysql, accent: "#4479a1" },
  { name: "Docker", icon: SiDocker, accent: "#2496ed" },
  { name: "GitHub", icon: SiGithub, accent: "#f5f5f5" },
  { name: "Tailwind", icon: SiTailwindcss, accent: "#38bdf8" },
]

export function TechStack() {
  const { t } = useLanguage()

  return (
    <section id="tech" className="border-y border-[#2d2d2d] px-5 py-16 sm:px-10 md:px-16 lg:px-20">
      <p className="editor-comment mb-8 text-sm">{t.techStack.comment}</p>

      <div className="grid border-l border-t border-[#2d2d2d] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {techStack.map((tech, index) => {
          const Icon = tech.icon

          return (
            <motion.article
              key={tech.name}
              className="group min-h-[160px] border-b border-r border-[#2d2d2d] bg-[#1c1c1c] p-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.035 }}
              whileHover={{
                backgroundColor: "#222222",
                borderColor: tech.accent,
                y: -4,
              }}
            >
              <p className="text-sm font-bold text-[#9d9d9d] transition group-hover:text-white">
                {tech.name}
              </p>

              <div className="mt-8 flex justify-center">
                <motion.div
                  className="grid h-16 w-16 place-items-center border border-[#2d2d2d] bg-[#151515] text-3xl font-black shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
                  style={{ color: tech.accent }}
                  whileHover={{ rotate: -2, scale: 1.12 }}
                >
                  {Icon ? <Icon aria-hidden="true" /> : tech.fallback}
                </motion.div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
