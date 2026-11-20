// Captures desktop + mobile screenshots of live sites and the local demo build.
const { chromium } = require(process.env.PW);
const fs = require("fs");
const path = require("path");
const OUT = path.join(__dirname, "caps");

const JOBS = [
  { slug: "dadawala", url: "https://dadawalashop.vercel.app", pages: [["Home", "/"], ["Shop", "/products"], ["Offers", "/offers"], ["About", "/about"], ["Contact", "/contact"]] },
  { slug: "reasonmaster-web", url: "https://reasonmasterindia.vercel.app", pages: [["Home", "/"]] },
  { slug: "legal-portal", url: "https://pythonwithkaran.vercel.app", pages: [["Home", "/"]] },
  { slug: "paperbykaran", url: "https://paperbykaran.vercel.app", pages: [["Home", "/"]] },
  { slug: "seminarkaran", url: "https://seminarkaran.vercel.app", pages: [["Home", "/"]] },
];
const DEMOS = ["Home", "E-Commerce", "Clinic/Doctor", "Clothing Brand", "Catalogue/Products", "Business Profile", "Beauty & Salon", "Portfolio"];

(async () => {
  const browser = await chromium.launch({ executablePath: process.env.LOCALAPPDATA + '/ms-playwright/chromium-1234/chrome-win64/chrome.exe' });
  const desk = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  const mob = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  const shoot = async (ctx, url, file) => {
    const p = await ctx.newPage();
    try {
      await p.goto(url, { waitUntil: "networkidle", timeout: 45000 });
      await p.waitForTimeout(2500);
      await p.screenshot({ path: file });
      console.log("ok", file);
    } catch (e) {
      console.log("FAIL", url, e.message.split("\n")[0]);
    }
    await p.close();
  };
  for (const j of JOBS) {
    fs.mkdirSync(path.join(OUT, j.slug), { recursive: true });
    for (const [label, route] of j.pages) {
      const base = path.join(OUT, j.slug, label.toLowerCase());
      await shoot(desk, j.url + route, base + "_desktop.png");
      await shoot(mob, j.url + route, base + "_mobile.png");
    }
  }
  // Demo websites: one app, switch category by clicking the nav label.
  fs.mkdirSync(path.join(OUT, "demos"), { recursive: true });
  for (const [ctx, kind] of [[desk, "desktop"], [mob, "mobile"]]) {
    const p = await ctx.newPage();
    await p.goto("http://localhost:4173/", { waitUntil: "networkidle" });
    for (const label of DEMOS) {
      try {
        if (kind === "mobile") {
          const menu = p.locator("header button").last();
          await menu.click({ timeout: 3000 }).catch(() => {});
          await p.waitForTimeout(400);
        }
        await p.getByText(label, { exact: true }).locator("visible=true").first().click({ timeout: 5000 });
        await p.waitForTimeout(1500);
        await p.evaluate(() => window.scrollTo(0, 0));
        await p.waitForTimeout(500);
        const f = path.join(OUT, "demos", `${label.replace(/[^a-z]/gi, "").toLowerCase()}_${kind}.png`);
        await p.screenshot({ path: f });
        console.log("ok", f);
      } catch (e) {
        console.log("FAIL demo", label, kind, e.message.split("\n")[0]);
      }
    }
    await p.close();
  }
  await browser.close();
})();
