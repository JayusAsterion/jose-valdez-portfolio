import { experience } from "../data/cv"

export function Experience() {
  return (
    <section id="experience" className="border-t border-zinc-800 px-6 py-16 md:px-12">
      <p className="mb-6 text-sm text-purple-400">{"<!-- Experience -->"}</p>

      <h2 className="mb-8 text-3xl font-bold text-white">Experience</h2>

      <div className="space-y-6">
        {experience.map((job) => (
          <article key={job.company} className="border border-zinc-800 p-6">
            <div className="mb-4 flex flex-col justify-between gap-2 md:flex-row">
              <div>
                <h3 className="text-xl font-bold text-white">{job.company}</h3>
                <p className="text-purple-400">{job.role}</p>
              </div>

              <div className="text-sm text-zinc-500 md:text-right">
                <p>{job.period}</p>
                <p>{job.location}</p>
              </div>
            </div>

            <ul className="space-y-3 text-sm leading-6 text-zinc-400">
              {job.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}