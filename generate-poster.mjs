import puppeteer from "puppeteer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

await page.setViewport({ width: 1200, height: 1200, deviceScaleFactor: 2 });

const filePath = `file://${path.join(__dirname, "poster.html")}`;
await page.goto(filePath, { waitUntil: "networkidle0" });

const poster = await page.$(".poster");
await poster.screenshot({
  path: path.join(__dirname, "public", "poster.png"),
  type: "png",
});

console.log("Poster saved to public/poster.png");
await browser.close();
