import { mkdir } from "node:fs/promises"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { chromium } from "playwright"

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(__dirname, "..")
const outputPath = resolve(rootDir, "public", "previews", "homepage.png")
const previewUrl = process.env.PREVIEW_URL ?? "http://localhost:4173"

let browser

try {
  await mkdir(dirname(outputPath), { recursive: true })

  browser = await chromium.launch()
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
    deviceScaleFactor: 1,
  })

  await page.goto(previewUrl, {
    waitUntil: "networkidle",
    timeout: 60_000,
  })

  await page.screenshot({
    path: outputPath,
    fullPage: true,
  })

  console.log(`Homepage preview saved to ${outputPath}`)
} catch (error) {
  console.error("Failed to generate homepage preview.")
  console.error(error)
  process.exitCode = 1
} finally {
  if (browser) {
    await browser.close()
  }
}
