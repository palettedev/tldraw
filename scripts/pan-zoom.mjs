#!/usr/bin/env node
// Drives pan + zoom gestures on the tldraw www dev server using Playwright.
//
// Usage:
//   npx playwright install chromium        # one-time
//   node scripts/pan-zoom.mjs              # defaults to http://localhost:3002
//   URL=http://localhost:3000 node scripts/pan-zoom.mjs
//   HEADLESS=1 LOOPS=3 node scripts/pan-zoom.mjs
//
// tldraw (see packages/core/src/hooks/useZoomEvents.ts):
//   - plain wheel  => pan (deltaX, deltaY)
//   - ctrl/meta/alt + wheel => zoom
import { chromium } from 'playwright'

const URL = process.env.URL ?? 'http://localhost:3002'
const HEADLESS = process.env.HEADLESS === '1'
const LOOPS = Number(process.env.LOOPS ?? 2)
const SLOWMO = Number(process.env.SLOWMO ?? 0)

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function wheelPan(page, dx, dy, steps = 20, stepDelay = 16) {
  const sx = dx / steps
  const sy = dy / steps
  for (let i = 0; i < steps; i++) {
    await page.mouse.wheel(sx, sy)
    await sleep(stepDelay)
  }
}

async function wheelZoom(page, totalDeltaY, steps = 20, stepDelay = 20) {
  // Hold Control so tldraw treats the wheel as zoom (matches ctrl+scroll trackpad pinch).
  await page.keyboard.down('Control')
  try {
    const sy = totalDeltaY / steps
    for (let i = 0; i < steps; i++) {
      await page.mouse.wheel(0, sy)
      await sleep(stepDelay)
    }
  } finally {
    await page.keyboard.up('Control')
  }
}

async function run() {
  const browser = await chromium.launch({ headless: HEADLESS, slowMo: SLOWMO })
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } })
  const page = await context.newPage()

  console.log(`→ opening ${URL}`)
  await page.goto(URL, { waitUntil: 'networkidle' })

  // Wait for the tldraw canvas to mount.
  const canvas = page.locator('.tl-container, [data-testid="tl-container"], canvas').first()
  await canvas.waitFor({ state: 'visible', timeout: 30_000 })

  const box = await canvas.boundingBox()
  if (!box) throw new Error('could not measure canvas bounding box')
  const cx = box.x + box.width / 2
  const cy = box.y + box.height / 2

  // Park the mouse over the canvas so wheel events target it.
  await page.mouse.move(cx, cy)

  for (let loop = 0; loop < LOOPS; loop++) {
    console.log(`— loop ${loop + 1}/${LOOPS}`)

    // Pan in a square: right, down, left, up.
    await wheelPan(page, 600, 0)
    await sleep(150)
    await wheelPan(page, 0, 400)
    await sleep(150)
    await wheelPan(page, -600, 0)
    await sleep(150)
    await wheelPan(page, 0, -400)
    await sleep(250)

    // Zoom out, then back in (negative deltaY = zoom in on most platforms).
    await wheelZoom(page, 400) // zoom out
    await sleep(250)
    await wheelZoom(page, -800) // zoom in past original
    await sleep(250)
    await wheelZoom(page, 400) // back toward start
    await sleep(400)

    // Diagonal drift.
    await wheelPan(page, 300, 300, 30)
    await sleep(150)
    await wheelPan(page, -300, -300, 30)
    await sleep(400)
  }

  console.log('done')
  await sleep(500)

  // Force palette SDK to flush buffered events (see
  // palette/packages/client/browser/core/queue.ts onHidden).
  console.log('→ flushing palette events')
  await page.evaluate(() => {
    try {
      Object.defineProperty(document, 'visibilityState', {
        value: 'hidden',
        configurable: true,
      })
      Object.defineProperty(document, 'hidden', { value: true, configurable: true })
    } catch {}
    document.dispatchEvent(new Event('visibilitychange'))
    window.dispatchEvent(new Event('pagehide'))
  })
  await sleep(2500)

  await browser.close()
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
