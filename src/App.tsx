import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { TechStack } from "./components/TechStack"
import { Experience } from "./components/Experience"
import { Projects } from "./components/Projects"
import { Awards } from "./components/Awards"
import { Contact } from "./components/Contact"

function App() {
  return (
    <main className="min-h-screen bg-[#111111] text-zinc-100 font-mono">
      <Header />

      <div className="mx-auto grid max-w-[1200px] grid-cols-1 border-x border-zinc-800 lg:grid-cols-[260px_1fr_220px]">
        <Sidebar />

        <section className="min-h-screen border-x border-zinc-800">
          <Hero />
          <About />
          <TechStack />
          <Experience />
          <Projects />
          <Awards />
          <Contact />
        </section>

        <aside className="hidden p-8 lg:block">
          <div className="sticky top-24">
            <h3 className="mb-8 text-lg text-zinc-300">Index</h3>

            <nav className="space-y-4 text-sm text-zinc-500">
              <a href="#about" className="block hover:text-purple-400">About me</a>
              <a href="#tech" className="block hover:text-purple-400">Tech stack</a>
              <a href="#experience" className="block hover:text-purple-400">Experience</a>
              <a href="#projects" className="block hover:text-purple-400">Projects</a>
              <a href="#awards" className="block hover:text-purple-400">Awards</a>
              <a href="#contact" className="block hover:text-purple-400">Contact</a>
            </nav>
          </div>
        </aside>
      </div>
    </main>
  )
}

export default App