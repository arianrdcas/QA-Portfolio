# 🛒 Test Suite & Execution: Carrito de Compras

## 📋 1. Información General

**Aplicación:** AcademyBugs (E-Commerce)  
**Tester:** Arian Rodriguez  
**Ambiente:** Chrome v144.0 / Windows 10  
**Fecha:** 15/02/2026

---

## 🎯 2. Estrategia y Sesión Exploratoria

Antes de la ejecución formal, se realizó una sesión de 40 min centrada en la **integridad de los cálculos**.

- **Riesgo:** Pérdida de conversión por desconfianza en el precio mostrado.

---

## 🧪 3. Detalle de Casos de Prueba y Resultados

### TC-001 – Agregar producto al carrito y validar cálculo del total

-**Módulo:** Carrito de compras
-**Tipo de prueba:** Funcional / Boundary Value Analysis (BVA)
-**Prioridad:** Alta

- **Precondición:** 
1.El usuario se encuentra en la página de principal del E-Commerce ("https://academybugs.com/find-bugs/").
- **Pasos:**
  1. Click en el botón **"Add to Cart**" del producto "Dark Grey Jeans".
  2. Observar la notificación de confirmación.
  3. Click en **View Cart**. / Resultado Esperado: Se visualiza el carrito con el producto añadido.
- **Resultado Esperado:** 
    -El carrito muestra:
    -Subtotal (1 item) "Dark Grey Jeans": $46.00
    -Costo de envio: $7.99
    -Total general: $53.99
    El total debe ser igual a la suma del subtotal + Costo de envio: 53.99
- **Resultado Obtenido:** El sistema muestra un total incorrecto de $153.99. Ver **[BUG-001](../assets/bug-tc-001.PNG)**
- **Estado:** ❌ **FAIL**

---

### TC-002 – Actualizar cantidad de producto en carrito y validar cálculo del total

-**Módulo:** Carrito de compras
-**Tipo de prueba:** Funcional 
-**Prioridad:** Alta

- **Precondición:** 
1.El usuario se encuentra en la página de principal del E-Commerce ("https://academybugs.com/find-bugs/")..
- **Pasos:**
  1. Click en el botón **"Add to Cart"** del producto "DNK Yellow Shoes".
  2. Observar la notificación de confirmación.
  3. Click en **View Cart**. / Resultado Esperado: Se visualiza el carrito con el producto añadido.
  4. Cambiar la cantidad del producto de **1** a **2**.
  5. Validar que tenemos 2 item del producto.
  6. Presionar **"Update"**.
- **Resultado Esperado:**
-El carrito muestra:
    -Subtotal (2 item) "DNK Yellow Shoes": $90.00
    -Costo de envio: $7.99
    -Total general: $97.99
    El total debe ser igual a la suma del Subtotal + Costo de envio: 97.99 
- **Resultado Obtenido:** El sistema muestra un total incorrecto de $197.99. Ver **[BUG-002](../assets/bug-tc-002.PNG)**.
- **Estado:** ❌ **FAIL**

---

### TC-003 – Validación de límites en cantidad de producto (Valores ≤ 0 y valores válidos)

- **Precondición**:
1. El usuario tiene el producto "DNK Yellow Shoes" agregado al carrito.
2. El usuario se encuentra en la pantalla View Cart.
3. El campo de cantidad es editable.

**-Datos de prueba:**

| Tipo                        | Valor |
|-----------------------------|-------|
| Límite inferior inválido    | 0     |
| Límite inferior válido      | 1     |
| Valor negativo inválido     | -5    |
| Valor válido dentro del rango | 10    |

**-Pasos:**
 1. Localizar el campo de entrada de cantidad (Input) del producto.
 2.
| # | Paso | Input | Clasificación | Resultado Esperado |
|---|------|------|--------------|-------------------|
| 1 | Ingresar valor límite inferior inválido en el campo de cantidad | 0 | Límite (Inválido) | El sistema muestra un mensaje de error o ajusta automáticamente el valor a 1. No debe permitir el valor 0. |
| 2 | Ingresar valor límite inferior válido | 1 | Límite (Válido) | El sistema acepta el valor y actualiza correctamente el carrito y el total. |
| 3 | Ingresar un valor negativo | -5 | Partición inválida | El sistema bloquea el valor, muestra error o lo convierte a un valor válido (≥1). |
| 4 | Ingresar un valor válido dentro del rango | 10 | Partición válida | El sistema actualiza correctamente la cantidad y recalcula el total sin errores. |
 3. Presionar el botón **"Update"**.
- **Resultado Esperado:** El sistema debe resetear el valor a 1 o eliminar el producto tras una confirmación. Nunca permitir valores ≤ 0.
- **Estado:** ✅ **PASS**

---

### TC-004 – Validar cálculo con múltiples productos

-**Módulo:** Carrito de compras
-**Tipo de prueba:** Funcional 
-**Prioridad:** Alta

- **Precondición**: 
1.El usuario se encuentra en la página principal del E-Commerce.
- **Pasos:**
  1. Click en el botón **Add to Cart** del producto "DNK Yellow Shoes" ($45.00).
  2. Click en el botón **Add to Cart** del producto "Dark Grey Jeans" ($46.00).
  3. Click en el botón **View Cart** (o navegar a la URL del carrito).
  4. Localizar los subtotales de cada producto y el Total General en la tabla del carrito.
- **Resultado Esperado:** 
  - El sistema debe realizar la suma aritmética correcta de los precios unitarios.
  - El campo Total (sin considerar envío) debe mostrar exactamente $91.00.
- **Resultado Obtenido:** El sistema muestra $198.99. Se sospecha que el software añade un valor constante de $100.00 de forma incorrecta al cálculo final del carrito. Ver **[BUG-004](../assets/bug-tc-004.PNG)**.
- **Estado:** ❌ **FAIL**

---

## 📊 4. Resumen de Ejecución

| Total Ejecutados | Pass | Fail | Bloqueados |
| :--------------- | :--- | :--- | :--------- |
| 4                | 1    | 3    | 0          |

**Conclusión:** El módulo de carrito presenta fallos críticos en la **lógica de negocio**. No se recomienda el despliegue a producción hasta corregir el cálculo de totales.
