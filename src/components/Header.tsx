import { Circle } from "lucide-react"
import { motion } from "motion/react"

const tabs = [
  { href: "#about", label: "jose.info" },
  { href: "#projects", label: "work.done" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#2d2d2d] bg-[#181818]">
      <div className="grid h-8 w-full grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)_200px]">
        <div className="hidden items-center border-r border-[#2d2d2d] px-5 text-xs font-medium text-[#f1f1f1] lg:flex">
          Welcome to my world!
        </div>

        <div className="flex min-w-0 items-center overflow-hidden">
          <a
            href="#"
            className="flex h-8 w-10 items-center justify-center border-r border-[#2d2d2d] lg:hidden"
            aria-label="Home"
          >
            <img src="/images/profile-1.png" alt="" className="h-7 w-7 object-cover" />
          </a>

          {tabs.map((tab, index) => (
            <motion.a
              key={tab.href}
              href={tab.href}
              className="relative flex h-8 min-w-[115px] items-center justify-center border-r border-[#2d2d2d] px-8 text-sm font-medium text-[#c6c6c6] transition hover:text-white"
              whileHover={{ y: -1 }}
            >
              {tab.label}
              {index === 0 ? (
                <motion.span
                  layoutId="active-tab-line"
                  className="absolute inset-x-0 bottom-0 h-px bg-[#d8d175]"
                />
              ) : null}
            </motion.a>
          ))}

          <div className="ml-auto hidden h-8 items-center justify-end gap-3 border-l border-[#2d2d2d] px-4 text-[11px] font-bold text-[#f1f1f1] xl:flex">
            <span className="flex shrink-0 items-center gap-1.5 whitespace-nowrap border border-[#1e5d2a] bg-[#143619] px-2 py-0.5 text-green-400">
              <Circle className="h-2 w-2 fill-green-400" />
              Senior Software Engineer
            </span>
            <span className="shrink-0 whitespace-nowrap">Guatemala</span>
            <span className="shrink-0 whitespace-nowrap">My time: 02:56 AM</span>
          </div>
        </div>

        <div className="hidden border-l border-[#2d2d2d] lg:block">
        </div>
      </div>
    </header>
  )
}
