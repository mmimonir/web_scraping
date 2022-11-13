const puppeteer = require("puppeteer");

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://bajajpoint.blogspot.com");
  //   await page.screenshot({ path: "example.png", fullPage: true });

  const links = await page.evaluate(() =>
    Array.from(document.querySelectorAll("a"), (a) => a.href)
  );

  console.log(links);

  await browser.close();
}
run();
