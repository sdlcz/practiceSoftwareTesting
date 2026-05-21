import { Page } from "@playwright/test";
import { HomePage } from "../page-objects/homePage";
import { NavigationPage } from "../page-objects/navigationPage";
import { RegistrationPage } from "../page-objects/registrationPage";
import { LoginPage } from "../page-objects/loginPage";
import { CheckoutPage } from "../page-objects/checkoutPage";

export class PageManager {
  private readonly page: Page;
  private readonly homePage: HomePage;
  private readonly navigationPage: NavigationPage;
  private readonly registrationPage: RegistrationPage;
  private readonly loginPage: LoginPage;
  private readonly checkoutPage: CheckoutPage;

  constructor(page: Page) {
    this.page = page;
    this.homePage = new HomePage(this.page);
    this.navigationPage = new NavigationPage(this.page);
    this.registrationPage = new RegistrationPage(this.page);
    this.loginPage = new LoginPage(this.page);
    this.checkoutPage = new CheckoutPage(this.page);
  }

  navigateTo() {
    return this.navigationPage;
  }
  onHomePage() {
    return this.homePage;
  }
  onRegistrationPage() {
    return this.registrationPage
  }
  onLoginPage() {
    return this.loginPage;
  }
  onCheckoutPage() {
    return this.checkoutPage;
  }
}
