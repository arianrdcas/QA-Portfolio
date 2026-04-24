import { expect, Locator, Page } from "@playwright/test";


export class ShopPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("https://academybugs.com/find-bugs/");
  }

  async addProduct(productId: number) {
    await this.page.locator(`#ec_add_to_cart_${productId}`).click();
    //await this.page.waitForLoadState("networkidle");

    
  }

  async waitProductAdded() {
    await this.page.waitForSelector(
      "text=Product successfully added to your cart",
    );
  }

  async goToCart() {
    await this.page.getByRole("link", { name: "View Cart" }).click();
  }
}