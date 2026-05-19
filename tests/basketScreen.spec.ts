import { test, expect } from "@playwright/test";
import { HomePage } from "../page-objects/homePage";
import { CheckoutPage } from "../page-objects/checkoutPage";
import { PageManager } from "../page-objects/pageManager";

test.beforeEach(async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");
});

test.describe("Checkout page", () => {
    test.beforeEach(async ({page}) => {
        const onHomePage = new HomePage(page);
        onHomePage.productList();
    })

    test("Verify Basket", async ({ page }) => {
        const onCheckoutPage = new CheckoutPage(page);
        onCheckoutPage.basketList();
    });
});