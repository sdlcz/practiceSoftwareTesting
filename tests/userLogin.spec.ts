import { test, expect } from "@playwright/test";
import { PageManager } from "../page-objects/pageManager";

test.beforeEach(async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");
});

test("Navigate to login page", async ({ page }) => {
  const pageManager = new PageManager(page);
  await pageManager.navigateTo().loginPage();
  await expect(page).toHaveURL(
    "https://practicesoftwaretesting.com/auth/login",
  );
});

test("login success", async ({ page }) => {
  const pageManager = new PageManager(page);

  await pageManager.navigateTo().loginPage();
  await pageManager
    .onLoginPage()
    .loginUsingDefaultAccountCredentials(
      "customer2@practicesoftwaretesting.com",
      "welcome01",
    );
  await expect(page.getByText("Jack Howe")).toBeVisible();
});

test("invalid login", async ({ page }) => {
  const pageManager = new PageManager(page);
  await pageManager.navigateTo().loginPage();
  await pageManager
    .onLoginPage()
    .loginUsingDefaultAccountCredentials("test@test.com", "welcome");
  await expect(pageManager.onLoginPage().invalidLoginAssertions()).toBeTruthy();
});
