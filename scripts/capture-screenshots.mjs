import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, '..', 'public', 'projects');

// Public URLs we can capture without login.
// Each entry: { slug, url, viewport, fullPage, waitMs, hideSelectors? }
const targets = [
  {
    slug: 'postypop',
    url: 'https://postypop.app/',
    viewport: { width: 1440, height: 900 },
    fullPage: false,
    waitMs: 4000,
  },
  {
    slug: 'kidsai-buddy',
    url: 'https://kidsaibuddy.com/',
    viewport: { width: 1440, height: 900 },
    fullPage: false,
    waitMs: 4000,
  },
  {
    slug: 'foundation-implants',
    url: 'https://foundationimplants.com/',
    viewport: { width: 1440, height: 900 },
    fullPage: false,
    waitMs: 4000,
  },
  {
    slug: 'prerna-kapoor',
    url: 'https://prernakapoor.com/',
    viewport: { width: 1440, height: 900 },
    fullPage: false,
    waitMs: 5000,
  },
];

async function run() {
  await mkdir(OUT, { recursive: true });
  const browser = await chromium.launch();
  const context = await browser.newContext({
    deviceScaleFactor: 2,
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  });

  for (const t of targets) {
    const page = await context.newPage();
    await page.setViewportSize(t.viewport);
    console.log(`→ ${t.slug}: loading ${t.url}`);
    try {
      await page.goto(t.url, { waitUntil: 'networkidle', timeout: 45000 });
    } catch (err) {
      console.warn(`  load issue (${err.message}) — continuing with what's there`);
    }
    // Hide cookie banners / chat widgets that vary across visits.
    await page.addStyleTag({
      content: `
        [class*="cookie" i],[id*="cookie" i],
        [class*="consent" i],[id*="consent" i],
        [class*="chat-widget" i],[class*="intercom" i],[class*="drift" i],
        [aria-label*="cookie" i],[aria-label*="consent" i] { display: none !important; }
      `,
    });
    if (t.waitMs) await page.waitForTimeout(t.waitMs);
    const out = resolve(OUT, `${t.slug}.png`);
    await page.screenshot({ path: out, fullPage: t.fullPage, type: 'png' });
    console.log(`  ✓ saved ${out}`);
    await page.close();
  }

  await browser.close();
  console.log('Done.');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
