import { Page } from "@playwright/test";
import { HomePage } from "../page-objects/homePage";
import { NavigationPage } from "../page-objects/navigationPage";
import { LoginPage } from "../page-objects/loginPage";
import { CheckoutPage } from "../page-objects/checkoutPage";

export class PageManager {
  private readonly page: Page;
  private readonly homePage: HomePage;
  private readonly navigationPage: NavigationPage;
  private readonly loginPage: LoginPage;
  private readonly checkoutPage: CheckoutPage;

  constructor(page: Page) {
    this.page = page;
    this.homePage = new HomePage(this.page);
    this.navigationPage = new NavigationPage(this.page);
    this.loginPage = new LoginPage(this.page);
    this.checkoutPage = new CheckoutPage(this.page);
  }

  navigateTo() {
    return this.navigationPage;
  }
  onLoginPage() {
    return this.loginPage;
  }
}
