import { Page, Locator, expect } from "@playwright/test";

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get cartTitles() {
    return this.page.locator(".ec_cartitem_title");
  }

  get subtotal() {
    return this.page.locator("#ec_cart_subtotal");
  }

  get shipping() {
    return this.page.locator("#ec_cart_shipping");
  }

  get total() {
    return this.page.locator("#ec_cart_total");
  }

  get quantityInput() {
    return this.page.locator("input.ec_quantity");
  }

  get updateButton() {
    return this.page.getByText("UPDATE");
  }

  get priceLocator() {
    return this.page.locator(".ec_cartitem_price");
  }

  async validateProduct(productName: string | string[]) {
    await expect(this.cartTitles).toContainText(productName);
  }

  async increaseQuantity() {
    await this.page.getByRole("button", { name: "+" }).click();
  }

  async updateCart() {
    await this.updateButton.click();
  }

  async setQuantity(value: string) {
    await this.quantityInput.first().fill(value);
  }

  async getSubtotalText() {
    return await this.subtotal.textContent();
  }

  async getShippingText() {
    return await this.shipping.textContent();
  }

  async getTotalText() {
    return await this.total.textContent();
  }

  async getAllPrices() {
    return await this.priceLocator.allTextContents();
  }
}
