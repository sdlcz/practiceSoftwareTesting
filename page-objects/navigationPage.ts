import { Page } from "@playwright/test";

export class NavigationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async loginPage() {
    await this.page.locator("[data-test=nav-sign-in]").click();
  }
}
