import { expect, test } from "@playwright/test";

const url = process.env.PLAYWRIGHT_URL || "https://julianne.media";

test("renders the page", async ({ page }) => {
  await page.goto(url);
  await expect(page).toHaveTitle("Julianne Reynolds - Performer and Teacher");
  await expect(page.getByTestId("media-header")).toBeVisible();
  await expect(page.getByTestId("contact-header")).toBeVisible();
});
