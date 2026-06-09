import { profile } from "../data/cv"

export function Sidebar() {
  return (
    <aside className="hidden min-h-screen p-8 lg:block">
      <div className="sticky top-24">
        <div className="mb-8 flex items-center gap-4">
          <img
            src="/images/profile-1.png"
            alt="Jose Valdez"
            className="h-16 w-16 rounded object-cover"
          />

          <div>
            <h1 className="text-lg font-bold text-white">{profile.name}</h1>
            <p className="text-sm text-zinc-400">{profile.title}</p>
          </div>
        </div>

        <p className="mb-8 text-sm leading-6 text-zinc-400">
          Senior Full Stack Software Engineer focused on scalable enterprise software.
        </p>

        <div className="space-y-5 text-sm text-zinc-400">
          <p>💼 {profile.experience}</p>
          <p>📍 {profile.location}</p>
          <p>🌐 {profile.languages}</p>
          <p>✉️ {profile.email}</p>
          <p>📞 {profile.phone}</p>
        </div>

        <div className="mt-8 space-y-3">
          <a
            href="/cv/Jose-Valdez-CV-English.pdf"
            download
            className="block border border-zinc-700 px-4 py-3 text-center text-sm font-bold text-white hover:border-purple-400 hover:text-purple-400"
          >
            Download CV
          </a>

          <a
            href="#contact"
            className="block bg-white px-4 py-3 text-center text-sm font-bold text-black hover:bg-purple-300"
          >
            Work with me
          </a>
        </div>
      </div>
    </aside>
  )
}