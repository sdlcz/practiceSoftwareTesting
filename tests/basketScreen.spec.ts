import { test, expect } from "@playwright/test";
import { PageManager } from "../page-objects/pageManager";

test.beforeEach(async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");
});

test.describe("Checkout page", () => {
  // test.beforeEach(async ({ page }) => {
  //   const pageManager = new PageManager(page);
  //   await pageManager.onHomePage().selectProduct();
  //   await pageManager.onCheckoutPage().basketList();
  // });

  test("Verify Basket", async ({ page }) => {
    const pageManager = new PageManager(page);
    await pageManager.onHomePage().selectProduct();
    await pageManager.onCheckoutPage().basketList();

    await expect(page).toHaveURL(
      "https://practicesoftwaretesting.com/checkout",
    );

    const expected = await pageManager
      .onCheckoutPage()
      .calculateExpectedTotal();
    await expect(pageManager.onCheckoutPage().totalAmount()).toHaveText(
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(expected),
    );
  });
});
