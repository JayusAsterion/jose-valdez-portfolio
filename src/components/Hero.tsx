import { profile } from "../data/cv"

export function Hero() {
  return (
    <section className="px-6 py-20 md:px-12">
      <p className="mb-6 text-sm text-purple-400">{"<!-- Hero section -->"}</p>

      <h2 className="max-w-4xl text-6xl font-black leading-none tracking-tight text-white md:text-8xl">
        Senior <br />
        Full Stack <br />
        <span className="text-zinc-500">Engineer</span>
      </h2>

      <p className="mt-10 max-w-2xl text-lg leading-8 text-zinc-400">
        {profile.summary}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="border border-purple-400 px-5 py-3 text-sm font-bold text-purple-400 hover:bg-purple-400 hover:text-black"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="bg-white px-5 py-3 text-sm font-bold text-black hover:bg-purple-300"
        >
          Contact Me
        </a>
      </div>
    </section>
  )
}