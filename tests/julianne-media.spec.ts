import { expect, test } from "@playwright/test";

const url = process.env.PLAYWRIGHT_URL || "https://julianne.media";

test("renders the page and matches screenshot", async ({ page }) => {
  await page.goto(url);
  await page.waitForTimeout(5000);
  await expect(page).toHaveScreenshot({ fullPage: true });
});
