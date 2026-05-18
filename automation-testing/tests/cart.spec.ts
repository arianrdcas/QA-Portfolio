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
    const shop = new ShopPage(page);
    const cart = new CartPage(page);

    await shop.goto();

    await shop.addProduct(4);
    await shop.waitProductAdded();
    await shop.goToCart();

    await cart.validateProduct("Dark Grey Jeans");

    const subtotal = parsePrice(await cart.getSubtotalText());
    const shipping = parsePrice(await cart.getShippingText());
    const total = parsePrice(await cart.getTotalText());

    await page.screenshot({
      path: "automation-testing/screenshot/TC-001/TC-001.png",
      fullPage: true,
    });

    expect(total).toBeCloseTo(subtotal + shipping);
  });

  test("TC-002 Actualizar cantidad", async ({ page }) => {
    const shop = new ShopPage(page);
    const cart = new CartPage(page);

    await shop.goto();

    await shop.addProduct(5);
    
    await shop.waitProductAdded();
    await shop.goToCart();

    await cart.validateProduct("DNK Yellow Shoes");

    await cart.increaseQuantity();
    await cart.updateCart();
    await page.waitForTimeout(3000);

    const subtotal = parsePrice(await cart.getSubtotalText());
    const shipping = parsePrice(await cart.getShippingText());
    const total = parsePrice(await cart.getTotalText());

    await page.screenshot({
      path: "automation-testing/screenshot/TC-002/TC-002.png",
      fullPage: true,
    });

    expect(total).toBeCloseTo(subtotal + shipping);
  });

  for (const caso of datos) {
    test(`TC-003 ${caso.numero}`, async ({ page }) => {
      const shop = new ShopPage(page);
      const cart = new CartPage(page);

      await shop.goto();

      await shop.addProduct(5);
      await shop.waitProductAdded();
      await shop.goToCart();

      await cart.setQuantity(caso.numero);
      await cart.updateCart();

      await expect(cart.quantityInput.first()).toHaveValue(caso.esperado);
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
