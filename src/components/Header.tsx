export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-[#111111]/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 text-sm">
        <span className="text-zinc-400">Welcome to my world!</span>

        <nav className="hidden gap-8 md:flex">
          <a href="#about" className="text-zinc-400 hover:text-purple-400">jose.info</a>
          <a href="#projects" className="text-zinc-400 hover:text-purple-400">work.done</a>
          <a href="#contact" className="text-zinc-400 hover:text-purple-400">contact.me</a>
        </nav>

        <span className="rounded bg-green-500/10 px-3 py-1 text-xs text-green-400">
          ● Available
        </span>
      </div>
    </header>
  )
}