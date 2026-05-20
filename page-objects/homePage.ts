import { Page } from "@playwright/test";

export class HomePage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async selectProduct() {
    const product = this.page.locator('[data-test="product-name"]', {
      hasText: "Combination Pliers",
    });
    const addProductToCart = this.page.locator('[data-test="add-to-cart"]');
    await product.click();
    await addProductToCart.click();
  }
}
