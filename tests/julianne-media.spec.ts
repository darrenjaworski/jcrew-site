import { expect, test } from "@playwright/test";

test("renders the page and matches screenshot", async ({ page }) => {
  await page.goto("https://julianne.media/");
  await expect(page).toHaveScreenshot({ fullPage: true });
});
