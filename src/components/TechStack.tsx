import { skills } from "../data/cv"

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border border-zinc-800 p-5">
      <h3 className="mb-4 text-purple-400">{title}</h3>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="border border-zinc-700 px-3 py-1 text-sm text-zinc-300">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export function TechStack() {
  return (
    <section id="tech" className="border-t border-zinc-800 px-6 py-16 md:px-12">
      <p className="mb-6 text-sm text-purple-400">{"<!-- Tech stack -->"}</p>

      <h2 className="mb-8 text-3xl font-bold text-white">Tech stack</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <SkillGroup title="Frontend" items={skills.frontend} />
        <SkillGroup title="Backend" items={skills.backend} />
        <SkillGroup title="Databases" items={skills.databases} />
        <SkillGroup title="Cloud & DevOps" items={skills.cloud} />
        <SkillGroup title="Practices" items={skills.practices} />
      </div>
    </section>
  )
}