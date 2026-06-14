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
import { useLanguage } from "./context/language"

const lineNumbers = Array.from({ length: 340 }, (_, index) => index + 1)

function App() {
  const { t } = useLanguage()

  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
      <main className="min-h-screen bg-[#101011] font-mono text-[#c7c7c7]">
        <Header />

        <div className="grid w-full grid-cols-1 lg:grid-cols-[292px_minmax(0,1fr)_212px]">
          <Sidebar />

          <section className="relative min-w-0 border-x border-[#2b2b31] bg-[#171719] pb-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-10 overflow-hidden border-r border-[#2b2b31] bg-[#121214] text-right text-[11px] font-normal leading-[28px] text-[#647080] sm:w-14">
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

          <aside className="hidden min-h-screen border-l border-[#2b2b31] bg-[#141416] px-6 py-8 lg:block">
            <div className="sticky top-[60px]">
              <h3 className="border-b border-[#2b2b31] pb-4 text-base font-medium text-[#e5e5e5]">
                Index
              </h3>

              <nav className="mt-6 space-y-2 text-sm font-medium text-[#9d9d9d]">
                {t.navigation.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="group flex items-center gap-3 py-2 transition hover:text-[#d8d175]"
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <span className="h-px w-4 bg-[#3a3a3f] transition group-hover:w-7 group-hover:bg-[#d8d175]" />
                    <span>{link.label}</span>
                  </motion.a>
                ))}
              </nav>
            </div>
          </aside>
        </div>

        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#2b2b31] bg-[#0d0d0e]/95 px-3 py-1.5 text-xs text-[#9b9b9b] backdrop-blur">
          <div className="flex w-full items-center justify-between">
            <span>{t.footer.status}</span>
            <span className="hidden text-[#d8d175] sm:inline">{t.footer.welcome}</span>
          </div>
        </div>
      </main>
    </MotionConfig>
  )
}

export default App
