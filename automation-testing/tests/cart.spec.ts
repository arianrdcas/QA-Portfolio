import { test, expect } from "@playwright/test";
import { ShopPage } from "../Pages/ShopPage";
import { CartPage } from "../Pages/CartPage";
import { parsePrice, parsePriceTC4 } from "../utils/priceUtils";
import datos from "../utils/data_pruebas.json";

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
      path: "automation-testing/screenshot/TC-001/TC-001.png.png",
      fullPage: true,
    });

    expect(totalPrice).toBeCloseTo(totalRealPrice);
  });

  test("TC-002 Actualizar cantidad de producto en carrito y validar cálculo del total", async ({
    page,
  }) => {
    test.fail(true, "Known bug: incorrect cart total calculation");

    await page.locator("#ec_add_to_cart_5").click();

    await page.locator("#ec_add_to_cart_4").click();

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
      path: "automation-testing/screenshot/TC-002/TC-002.png",
      fullPage: true,
    });

    expect(totalPrice).toBeCloseTo(totalRealPrice);
  });

  for (const caso of datos) {
    test(`TC-003 Validación de límites en cantidad: ${caso.numero} (${caso.clasificacion})`, async ({
      page,
    }) => {
      await page.locator("#ec_add_to_cart_5").click();
      await page.waitForSelector(
        "text=Product successfully added to your cart",
      );
      await page.getByRole("link", { name: "View Cart" }).click();
      await expect(page.locator(".ec_cartitem_title")).toContainText(
        "DNK Yellow Shoes",
      );

      const input = page.locator("input.ec_quantity");
      await input.first().fill(caso.numero);
      await page.waitForTimeout(2000);

      await page.getByText("UPDATE").click();
      await page.waitForTimeout(2000);

      await expect(input.first()).toHaveValue(caso.esperado);
    });
  }

  test("TC-004 múltiples productos", async ({ page }) => {
    const shop = new ShopPage(page);
    const cart = new CartPage(page);

    await shop.goto();

    await shop.addProduct(4);
    await page.waitForTimeout(3000);
    await shop.addProduct(5);

    await shop.waitProductAdded();
    await shop.goToCart();

    const pricesArray = await cart.getAllPrices();

    const totalProductosCalculado = pricesArray
      .map((p) => parsePriceTC4(p))
      .reduce((sum, current) => sum + current, 0);

    const subtotal = parsePrice(await cart.getSubtotalText());
    const shipping = parsePrice(await cart.getShippingText());
    const total = parsePrice(await cart.getTotalText());

    expect(subtotal + shipping).toBeCloseTo(total);

    expect(totalProductosCalculado).toBeCloseTo(subtotal);
  });

});
