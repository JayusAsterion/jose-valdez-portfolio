import { awards } from "../data/cv"

export function Awards() {
  return (
    <section id="awards" className="border-t border-zinc-800 px-6 py-16 md:px-12">
      <p className="mb-6 text-sm text-purple-400">{"<!-- Awards -->"}</p>

      <h2 className="mb-8 text-3xl font-bold text-white">Awards</h2>

      <div className="space-y-4">
        {awards.map((award) => (
          <div key={award} className="border border-zinc-800 p-5 text-zinc-300">
            {award}
          </div>
        ))}
      </div>
    </section>
  )
}