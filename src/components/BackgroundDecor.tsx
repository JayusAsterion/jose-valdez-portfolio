type BackgroundDecorProps = {
  variant?: "hero" | "about" | "projects"
}

const codeSnippets = [
  'const engineer = "Jose Valdez";',
  'build("scalable software");',
  'deploy("enterprise apps");',
]

export function BackgroundDecor({ variant = "hero" }: BackgroundDecorProps) {
  const isHero = variant === "hero"
  const isAbout = variant === "about"

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-editor-grid opacity-[0.45]" />
      <div className="absolute inset-0 bg-editor-scanlines opacity-[0.18]" />

      <div
        className={`ambient-glow absolute blur-[110px] ${
          isHero
            ? "right-[-8rem] top-12 h-[28rem] w-[34rem] bg-purple-500/10"
            : isAbout
              ? "left-[-10rem] top-24 h-[24rem] w-[30rem] bg-purple-400/10"
              : "right-[-12rem] top-0 h-[22rem] w-[32rem] bg-purple-500/10"
        }`}
      />

      {isHero ? (
        <div className="hidden md:block">
          {codeSnippets.map((snippet, index) => (
            <span
              key={snippet}
              className={`float-code absolute border border-[#34343a]/70 bg-[#111113]/55 px-3 py-2 text-[11px] font-medium text-[#8d8d93] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur ${
                index === 0
                  ? "right-[7%] top-[24%]"
                  : index === 1
                    ? "right-[15%] top-[47%]"
                    : "right-[6%] top-[66%]"
              }`}
              style={{ animationDelay: `${index * 1.2}s` }}
            >
              {snippet}
            </span>
          ))}
        </div>
      ) : null}

      {isHero ? (
        <div className="hidden border border-[#2b2b31] bg-[#111113]/70 p-4 text-[11px] font-medium text-[#a7a7a7] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur lg:absolute lg:bottom-24 lg:right-16 lg:block">
          <p>
            <span className="text-green-300">status:</span> available
          </p>
          <p>
            <span className="text-purple-200">stack:</span> React / .NET / AWS
          </p>
          <p>
            <span className="text-[#d8d175]">mode:</span> scalable systems
          </p>
        </div>
      ) : null}

      {isAbout ? (
        <div className="absolute bottom-10 right-8 hidden text-[11px] font-medium text-[#686870] lg:block">
          {"/* clean architecture + high quality delivery */"}
        </div>
      ) : null}
    </div>
  )
}
