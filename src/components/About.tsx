export function About() {
  return (
    <section id="about" className="border-t border-zinc-800 px-6 py-16 md:px-12">
      <p className="mb-6 text-sm text-purple-400">{"<!-- About me -->"}</p>

      <h2 className="mb-8 text-3xl font-bold text-white">About me</h2>

      <p className="max-w-3xl text-lg leading-8 text-zinc-400">
        I’m a <span className="bg-purple-500/20 text-purple-300">Senior Full Stack Software Engineer</span> with{" "}
        <span className="bg-purple-500/20 text-purple-300">6+ years</span> of experience designing,
        developing and deploying enterprise web applications. My experience includes frontend development with{" "}
        <span className="bg-purple-500/20 text-purple-300">React, Angular and TypeScript</span>, backend development with{" "}
        <span className="bg-purple-500/20 text-purple-300">C#, .NET, Node.js and Java</span>, SQL databases,
        cloud platforms such as <span className="bg-purple-500/20 text-purple-300">AWS and Microsoft Azure</span>,
        CI/CD pipelines, microservices and system integrations.
      </p>
    </section>
  )
}