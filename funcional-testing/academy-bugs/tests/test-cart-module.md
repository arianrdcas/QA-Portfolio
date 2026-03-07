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

- **Precondición:** El usuario se encuentra en la página de principal del E-Commerce ("https://academybugs.com/find-bugs/").
- **Pasos:**
  1. Click en el botón **"Add to Cart**" del producto (Dark Grey Jeans).
  2. Observar la notificación de confirmación.
  3. Click en el botón **"View Cart"**.
  4. Validar que existe un producto en el carrito de compras.
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

- **Precondición:** El usuario se encuentra en la página de principal del E-Commerce ("https://academybugs.com/find-bugs/")..
- **Pasos:**
  1. Click en el botón **"Add to Cart"** del producto (DNK Yellos Shoes)
  2. Observar la notificación de confirmación.
  3. Click en el botón **"View Cart"**.
  4. Validar que existe un producto en el carrito de compras.
  5. Cambiar la cantidad del producto de **1** a **2**.
  6. Validar que tenemos 2 item del producto.
  7. Presionar **"Update"**.
- **Resultado Esperado:**
-El carrito muestra:
    -Subtotal (2 item) "DNK Yellow Shoes": $90.00
    -Costo de envio: $7.99
    -Total general: $97.99
    El total debe ser igual a la suma del Subtotal + Costo de envio: 97.99 
- **Resultado Obtenido:** El sistema muestra un total incorrecto de $197.99. Ver **[BUG-002](../assets/bug-tc-002.PNG)**.
- **Estado:** ❌ **FAIL**

---

### TC-003 – Validación de límites en cantidad de producto (Valores ≤ 0)

- **Precondición**: El usuario tiene el producto "DNK Yellow Shoes" en el carrito y se encuentra en la pantalla de View Cart.
- **Pasos:**
 1. Localizar el campo de entrada de cantidad (Input) del producto.
 2. Limpiar el valor actual e ingresar el valor **0**.
 3. Presionar el botón **"Update"**.
 4. Limpiar el campo e ingresar un valor negativo **(-1)**.
 5. Presionar el botón **"Update"**.
- **Resultado Esperado:** El sistema debe resetear el valor a 1 o eliminar el producto tras una confirmación. Nunca permitir valores ≤ 0.
- **Estado:** ✅ **PASS**

---

### TC-004 – Validar cálculo con múltiples ítems

- **Pasos:**
  1. Agregar Producto A ($45.00).
  2. Agregar Producto B ($46.00).
  3. Validar la suma total en el carrito.
- **Resultado Esperado:** Total (sin considerar shipping) = $91.00.
- **Resultado Obtenido:** El sistema muestra $198.99. Se sospecha de un error en la suma de variables tipo String. Ver **[BUG-004](../assets/bug-tc-004.PNG)**.
- **Estado:** ❌ **FAIL**

---

## 📊 4. Resumen de Ejecución

| Total Ejecutados | Pass | Fail | Bloqueados |
| :--------------- | :--- | :--- | :--------- |
| 4                | 1    | 3    | 0          |

**Conclusión:** El módulo de carrito presenta fallos críticos en la **lógica de negocio**. No se recomienda el despliegue a producción hasta corregir el cálculo de totales.
