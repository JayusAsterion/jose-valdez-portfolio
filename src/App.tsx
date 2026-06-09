import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { TechStack } from "./components/TechStack"
import { Experience } from "./components/Experience"
import { Projects } from "./components/Projects"
import { Awards } from "./components/Awards"
import { Contact } from "./components/Contact"
import { MotionConfig, motion } from "motion/react"

const indexLinks = [
  { href: "#projects", label: "Work" },
  { href: "#about", label: "About me" },
  { href: "#experience", label: "Experience" },
  { href: "#tech", label: "Tech stack" },
  { href: "#awards", label: "Awards" },
  { href: "#contact", label: "Contact me" },
]

const lineNumbers = Array.from({ length: 340 }, (_, index) => index + 1)

function App() {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
      <main className="min-h-screen bg-[#1b1b1b] font-mono text-[#c7c7c7]">
        <Header />

        <div className="grid w-full grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)_200px]">
          <Sidebar />

          <section className="relative min-w-0 border-x border-[#2d2d2d] bg-[#1c1c1c] pb-10">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-10 overflow-hidden border-r border-[#2d2d2d] bg-[#191919] text-right text-[12px] font-normal leading-[27px] text-[#6f7784] sm:w-14">
              <div className="px-3 py-1">
                {lineNumbers.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
            </div>

            <div className="pl-10 sm:pl-14">
              <Hero />
              <Projects />
              <About />
              <Experience />
              <TechStack />
              <Awards />
              <Contact />
            </div>
          </section>

          <aside className="hidden min-h-screen border-l border-[#2d2d2d] bg-[#181818] px-7 py-8 lg:block">
            <div className="sticky top-[60px]">
              <h3 className="border-b border-[#2d2d2d] pb-4 text-base font-normal text-[#c7c7c7]">
                Index
              </h3>

              <nav className="mt-7 space-y-5 text-sm font-medium text-[#9d9d9d]">
                {indexLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="block transition hover:text-[#d8d175]"
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </div>
          </aside>
        </div>

        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#2d2d2d] bg-[#111] px-3 py-1.5 text-xs text-[#8d8d8d]">
        <div className="flex w-full items-center justify-between">
          <span>Delivered 3 projects, tackled 2 challenges</span>
          <span className="hidden sm:inline">Welcome to my world!</span>
        </div>
        </div>
      </main>
    </MotionConfig>
  )
}

export default App
