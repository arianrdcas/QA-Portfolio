import { test, expect } from "@playwright/test";
import { parsePrice } from "../utils/priceUtils";

test.describe("Pruebas del Carrito de Compras", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://academybugs.com/find-bugs/");
  });

  test("TC-001 Agregar producto al carrito y validar cálculo del total", async ({
    page,
  }) => {
    test.fail(true, "Known bug: incorrect cart total calculation");
    await page.locator("#ec_add_to_cart_4").click();

    await page.waitForSelector("text=Product successfully added to your cart");

    await page.getByRole("link", { name: "View Cart" }).click();

    await expect(page.locator(".ec_cartitem_title")).toContainText(
      "Dark Grey Jeans",
    );

    const productText = await page.locator("#ec_cart_subtotal").textContent();
    const shippingText = await page.locator("#ec_cart_shipping").textContent();
    const totalText = await page.locator("#ec_cart_total").textContent();

    const productPrice = parsePrice(productText);
    const shippingPrice = parsePrice(shippingText);
    const totalPrice = parsePrice(totalText);

    const totalRealPrice = productPrice + shippingPrice;

     await page.screenshot({
       path: "screenshot/TC-001/TC-001.png",
       fullPage: true,
     });

    expect(totalPrice).toBeCloseTo(totalRealPrice);
  });

  test("TC-002 Actualizar cantidad de producto en carrito y validar cálculo del total", async ({
    page,
  }) => {
    test.fail(true, "Known bug: incorrect cart total calculation");

    await page.locator("#ec_add_to_cart_5").click();

    await page.waitForSelector("text=Product successfully added to your cart");

    await page.getByRole("link", { name: "View Cart" }).click();

    await expect(page.locator(".ec_cartitem_title")).toContainText(
      "DNK Yellow Shoes",
    );

    await page.getByRole("button", { name: "+" }).click();

    await page.getByText("UPDATE").click();

    await page.waitForTimeout(2000);

    // Verifica que al menos hay 2 productos en el carrito
    await expect(page.locator(".ec_cartitem_total")).toContainText("$90.00");

    const productText = await page.locator("#ec_cart_subtotal").textContent();
    const shippingText = await page.locator("#ec_cart_shipping").textContent();
    const totalText = await page.locator("#ec_cart_total").textContent();

    const productPrice = parsePrice(productText);
    const shippingPrice = parsePrice(shippingText);
    const totalPrice = parsePrice(totalText);

    const totalRealPrice = productPrice + shippingPrice;

    await page.screenshot({
      path: "screenshot/TC-002/TC-002.png",
      fullPage: true,
    });

    expect(totalPrice).toBeCloseTo(totalRealPrice);
  });
});
