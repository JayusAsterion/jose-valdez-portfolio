import { mkdir } from "node:fs/promises"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { chromium } from "playwright"

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(__dirname, "..")
const outputDir = resolve(rootDir, "public", "previews", "projects")

const projects = [
  {
    title: "Hand Music Controller",
    url: "https://hand-music-controller.vercel.app/",
    output: "hand-music-controller.png",
  },
  {
    title: "Inkside Antigua",
    url: "https://inkside-antigua.vercel.app/",
    output: "inkside-antigua.png",
  },
  {
    title: "AI Review Copilot",
    url: "https://ai-review-copilot.vercel.app/review",
    output: "ai-review-copilot.png",
  },
  {
    title: "Rugby Buccaneers Landing",
    url: "https://rugby-buccaneers-landing.vercel.app/",
    output: "rugby-buccaneers-landing.png",
  },
]

let browser

try {
  await mkdir(outputDir, { recursive: true })

  browser = await chromium.launch()
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  })

  for (const project of projects) {
    const outputPath = resolve(outputDir, project.output)

    try {
      console.log(`Capturing ${project.title}...`)
      await page.goto(project.url, {
        waitUntil: "networkidle",
        timeout: 60_000,
      })
      await page.waitForTimeout(1500)
      await page.screenshot({
        path: outputPath,
        fullPage: false,
      })
      console.log(`Saved ${outputPath}`)
    } catch (error) {
      console.error(`Failed to capture ${project.title}.`)
      console.error(error)
    }
  }
} catch (error) {
  console.error("Failed to generate project previews.")
  console.error(error)
  process.exitCode = 1
} finally {
  if (browser) {
    await browser.close()
  }
}
