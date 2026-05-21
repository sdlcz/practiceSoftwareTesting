import { Page } from "@playwright/test";

export class RegistrationPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async registerCredentials(
    firstName: string,
    lastName: string,
    country: string,
    email: string,
    password: string,
  ) {
      const registrationForm = this.page.locator('[data-test="register-form"]');
      await registrationForm.locator('[data-test="first-name"]').fill(firstName);
  }
    
    async registrationHeader() {
        await this.page.getByRole('heading', { name: 'Customer registration'});
  }
}
