import { profile } from "../data/cv"

export function Contact() {
  return (
    <section id="contact" className="border-t border-zinc-800 px-6 py-16 md:px-12">
      <p className="mb-6 text-sm text-purple-400">{"<!-- Contact me -->"}</p>

      <h2 className="mb-6 text-3xl font-bold text-white">Let’s build something reliable.</h2>

      <p className="mb-8 max-w-2xl text-zinc-400">
        I’m open to software engineering opportunities, freelance consulting,
        technical collaborations and enterprise web application projects.
      </p>

      <div className="flex flex-wrap gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="bg-white px-5 py-3 text-sm font-bold text-black hover:bg-purple-300"
        >
          Email me
        </a>

        <a
          href={profile.linkedin}
          target="_blank"
          className="border border-zinc-700 px-5 py-3 text-sm font-bold text-white hover:border-purple-400 hover:text-purple-400"
        >
          LinkedIn
        </a>

        <a
          href={profile.github}
          target="_blank"
          className="border border-zinc-700 px-5 py-3 text-sm font-bold text-white hover:border-purple-400 hover:text-purple-400"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}