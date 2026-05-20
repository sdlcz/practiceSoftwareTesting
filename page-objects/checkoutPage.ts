import { Page } from "@playwright/test";

export class CheckoutPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async basketList() {
    await this.page.locator("[data-test=nav-cart]").click();
  }
  totalAmount() {
    return this.page.locator("[data-test=cart-total]");
  }
}
