#!/usr/bin/env node
// Creates N rectangles on the tldraw canvas via window.app.createShapes().
//
// apps/www/components/Editor.tsx exposes the TldrawApp instance on window.app
// through onMount, so we just wait for it and call createShapes(...rects).
//
// Usage:
//   node scripts/create-rects.mjs
//   COUNT=1000 URL=http://localhost:3002 HEADLESS=1 node scripts/create-rects.mjs
import { chromium } from 'playwright'

const URL = process.env.URL ?? 'http://localhost:3002'
const HEADLESS = process.env.HEADLESS === '1'
const COUNT = Number(process.env.COUNT ?? 1000)

async function run() {
  const browser = await chromium.launch({ headless: HEADLESS })
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } })
  const page = await context.newPage()

  console.log(`→ opening ${URL}`)
  await page.goto(URL, { waitUntil: 'networkidle' })

  console.log('→ waiting for window.app')
  await page.waitForFunction(() => !!window.app, null, { timeout: 30_000 })

  console.log(`→ creating ${COUNT} rectangles`)
  const created = await page.evaluate((count) => {
    const app = window.app
    const cols = Math.ceil(Math.sqrt(count))
    const cellW = 80
    const cellH = 50
    const gap = 20
    const originX = -((cols * (cellW + gap)) / 2)
    const originY = -((Math.ceil(count / cols) * (cellH + gap)) / 2)

    const shapes = []
    for (let i = 0; i < count; i++) {
      const c = i % cols
      const r = Math.floor(i / cols)
      shapes.push({
        id: `rect_${Date.now().toString(36)}_${i}`,
        type: 'rectangle',
        point: [originX + c * (cellW + gap), originY + r * (cellH + gap)],
        size: [cellW, cellH],
      })
    }

    app.createShapes(...shapes)
    app.zoomToFit?.()
    return shapes.length
  }, COUNT)

  console.log(`✔ created ${created} rectangles`)

  // Park the mouse over the canvas so wheel events target it.
  const canvas = page.locator('.tl-container, [data-testid="tl-container"], canvas').first()
  const box = await canvas.boundingBox()
  if (!box) throw new Error('could not measure canvas bounding box')
  const cx = box.x + box.width / 2
  const cy = box.y + box.height / 2
  await page.mouse.move(cx, cy)

  const sleep = (ms) => page.waitForTimeout(ms)

  // tldraw: plain wheel = pan, ctrl+wheel = zoom (see packages/core/src/hooks/useZoomEvents.ts)
  const pan = async (dx, dy, steps = 24, stepDelay = 14) => {
    const sx = dx / steps
    const sy = dy / steps
    for (let i = 0; i < steps; i++) {
      await page.mouse.wheel(sx, sy)
      await sleep(stepDelay)
    }
  }
  const zoom = async (totalDeltaY, steps = 24, stepDelay = 18) => {
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

  console.log('→ pan right / left / down / up')
  await pan(700, 0)
  await sleep(200)
  await pan(-1400, 0)
  await sleep(200)
  await pan(700, 0)
  await sleep(300)
  await pan(0, 500)
  await sleep(200)
  await pan(0, -1000)
  await sleep(200)
  await pan(0, 500)
  await sleep(300)

  console.log('→ zoom out / in')
  await zoom(600)
  await sleep(300) // zoom out
  await zoom(-1200)
  await sleep(300) // zoom in past start
  await zoom(600)
  await sleep(500) // back to roughly start

  if (!HEADLESS) {
    await page.waitForTimeout(1500)
  }
  await browser.close()
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
