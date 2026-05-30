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

  async calculateExpectedTotal(): Promise<number> {
    // Get the displayed total text (e.g., "$14.15")
    const totalText = await this.totalAmount().innerText();
    // Parse and return as a number
    return this.parsePrice(totalText);
  }

  private parsePrice(text: string): number {
    // Remove all non-numeric characters except dots, then parse as float
    const cleaned = text.replace(/[^0-9.,-]/g, "").replace(",", ".");
    return parseFloat(cleaned) || 0;
  }
}
