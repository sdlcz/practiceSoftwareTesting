import { Page } from "@playwright/test";

export class LoginPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async loginUsingDefaultAccountCredentials(email: string, password: string) {
    const loginForm = this.page.locator('[data-test="login-form"]');
    await loginForm.locator("[data-test=email]").fill(email);
    await loginForm.locator("[data-test=password]").fill(password);
    await loginForm.locator("[data-test=login-submit]").click();
  }
}
