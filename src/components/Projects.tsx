import { projects } from "../data/cv"

export function Projects() {
  return (
    <section id="projects" className="border-t border-zinc-800 px-6 py-16 md:px-12">
      <p className="mb-6 text-sm text-purple-400">{"<!-- Featured work -->"}</p>

      <h2 className="mb-8 text-3xl font-bold text-white">Projects</h2>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="group border border-zinc-800 p-6 hover:border-purple-400">
            <h3 className="mb-4 text-xl font-bold text-white group-hover:text-purple-300">
              {project.title}
            </h3>

            <p className="mb-5 text-sm leading-6 text-zinc-400">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="bg-zinc-900 px-2 py-1 text-xs text-zinc-400">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}