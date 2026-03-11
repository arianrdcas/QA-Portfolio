import { test, expect } from "@playwright/test";
import { parsePrice, parsePriceTC4 } from "../utils/priceUtils";

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

  test("TC-004 Validar calculo con multiples productos", async ({ page }) => {
    //test.fail(true, "Known bug: incorrect cart total calculation");

    await page.locator("#ec_add_to_cart_4").click();

    await page.waitForLoadState("networkidle");

    await page.locator("#ec_add_to_cart_5").click();
    await page.waitForSelector("text=Product successfully added to your cart");

    await page.getByRole("link", { name: "View Cart" }).click();
    await expect(page.locator(".ec_cartitem_title")).toContainText([
      "Dark Grey Jeans",
      "DNK Yellow Shoes",
    ]);

    // 1. Definimos el locator de TODOS los precios
    const priceLocator = page.locator(".ec_cartitem_price");

    // 2. Esperamos a que aparezcan los 2 elementos
    await expect(priceLocator).toHaveCount(2);

    // 3. Capturamos y sumamos los precios de los productos
    const pricesArray = await priceLocator.allTextContents();

    // Sumamos los elementos del array convirtiéndolos a números con decimales
    const totalProductosCalculado = pricesArray
      .map((p) => parsePriceTC4(p))
      .reduce((sum, current) => sum + current, 0);

    console.log("Suma de productos individualmente:", totalProductosCalculado);

    // 4. Capturamos los textos de la web
    const productText = await page.locator("#ec_cart_subtotal").textContent();
    const shippingText = await page.locator("#ec_cart_shipping").textContent();
    const totalText = await page.locator("#ec_cart_total").textContent();

    // 5. Convertimos a números reales con decimales
    const subtotalWeb = parsePrice(productText);
    const shippingPrice = parsePrice(shippingText);
    const totalPriceWeb = parsePrice(totalText);

    // 6. Validaciones
    // A) Validar que la suma de los productos individuales coincide con el subtotal
    expect(totalProductosCalculado).toBeCloseTo(subtotalWeb);

    // B) Validar que Subtotal + Envío coincide con el Total Final
    const sumaRealFinal = subtotalWeb + shippingPrice;

    await page.screenshot({
      path: "automation-testing/screenshot/TC-004/TC-004.png",
      fullPage: true,
    });

    expect(sumaRealFinal).toBeCloseTo(totalPriceWeb);

    console.log("Validación exitosa: ", sumaRealFinal);
  });
});
