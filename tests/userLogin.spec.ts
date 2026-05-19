import { test, expect } from "@playwright/test";
import { NavigationPage } from "../page-objects/navigationPage";
import { LoginPage } from "../page-objects/loginPage";

test.beforeEach(async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");
});

test("Navigate to login page", async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  await navigateTo.loginPage();
  await expect(page).toHaveURL(
    "https://practicesoftwaretesting.com/auth/login",
  );
});

test("login success", async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  const onLoginPage = new LoginPage(page);

  await navigateTo.loginPage();
  await onLoginPage.loginUsingDefaultAccountCredentials(
    "customer2@practicesoftwaretesting.com",
    "welcome01",
  );
  await expect(page.getByText("Jack Howe")).toBeVisible();
});

test("invalid login", async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  const onLoginPage = new LoginPage(page);

  await navigateTo.loginPage();
  await onLoginPage.loginUsingDefaultAccountCredentials(
    "test@test.com",
    "welcome",
  );
  await expect(onLoginPage.invalidLoginAssertions()).toBeTruthy();
});
