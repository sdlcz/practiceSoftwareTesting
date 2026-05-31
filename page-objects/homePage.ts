import { Page } from "@playwright/test";

export class HomePage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async selectProduct(productName: string = "Combination Pliers", quantity: number = 1) {
    const product = this.page.locator('[data-test="product-name"]', {
      hasText: productName,
    });
    const addProductToCart = this.page.locator('[data-test="add-to-cart"]');
    await product.click();
    for (let i = 0; i < quantity; i++){
      await addProductToCart.click();
      await this.page.waitForTimeout(300);
    }
  }
}
