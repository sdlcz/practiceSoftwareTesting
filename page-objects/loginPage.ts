import { Page } from "@playwright/test";


export class LoginPage {
    private readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async loginUsingDefaultAccountCredentials(email: string, password: string) {


        const loginForm = this.page.locator('[data-test="login-form"]');
        await loginForm.locator("[data-test=email]").fill(email);
        await loginForm.getByRole("textbox", { name: "password" }).fill(password);
        await loginForm.getByRole('button').click();
    }

}
