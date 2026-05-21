import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright"; // 1
// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

test.describe("Homepage accessibility scan", () => {
  // 2
  test("should not have any automatically detectable accessibility issues", async ({
    page,
  }, testinfo) => {
    await page.goto("https://practicesoftwaretesting.com/"); // 3

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4

    await testinfo.attach("accessibility-scan-results", {
      body: JSON.stringify(accessibilityScanResults, null, 2),
      contentType: "application/json",
    });

    expect(accessibilityScanResults.violations).toEqual([]); // 5
  });
});
