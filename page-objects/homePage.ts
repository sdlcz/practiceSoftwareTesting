import { Page } from "@playwright/test";

export class HomePage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async productList() {
    const productList = this.page.locator(
      "[data-test=product-01KS01QGX433F0CFH51X0QHXA4]",
    );
    await productList.hover();
    productList.click();
    // await this.page.locator("[data-test=increase-quantity]").dblclick();
  }
}
