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

### TC-001 – Agregar producto al carrito
*   **Precondición:** El usuario se encuentra en la página de un producto específico.
*   **Pasos:**
    1. Click en el botón "Add to Cart".
    2. Observar la notificación de confirmación.
    3. Click en el botón "View Cart".
*   **Resultado Esperado:** El producto debe aparecer en el carrito con el precio unitario correcto (46.00) mas valor del shipping(7.99), total (53.99).
*   **Resultado Obtenido:** El producto aparece en el carrito con el precio total incorrecto (153.99). Ver **[BUG-001](../assets/bug-tc-001.PNG)**
*   **Estado:** ❌ **FAIL**

---

### TC-002 – Actualizar cantidad (Lógica de Precio)
*   **Precondición:** Existe al menos un producto en el carrito.
*   **Pasos:**
    1. Navegar a la vista `/my-cart`.
    2. Cambiar la cantidad del producto de **1** a **2**.
    3. Presionar "Update".
*   **Resultado Esperado:** El total debe ser el precio unitario multiplicado por 2 exactamente, debe mostrar $92.00.
*   **Resultado Obtenido:** El sistema muestra $199.99. Ver **[BUG-001](../assets/bug-tc-002.PNG)**.
*   **Estado:** ❌ **FAIL**


---

### TC-003 – Validación de cantidad mínima (Boundary)
*   **Pasos:**
    1. En el campo cantidad, intentar ingresar el valor **0**.
    2. Intentar ingresar un valor negativo **-1**.
*   **Resultado Esperado:** El sistema debe resetear el valor a 1 o eliminar el producto tras una confirmación. Nunca permitir valores ≤ 0.
*   **Estado:** ✅ **PASS**

---

### TC-004 – Validar cálculo con múltiples ítems
*   **Pasos:**
    1. Agregar Producto A ($45.00).
    2. Agregar Producto B ($46.00).
    3. Validar la suma total en el carrito.
*   **Resultado Esperado:** Total (sin considerar shipping) = $91.00.
*   **Resultado Obtenido:** El sistema muestra $198.99. Se sospecha de un error en la suma de variables tipo String. Ver **[BUG-004](../assets/bug-tc-004.PNG)**.
*   **Estado:** ❌ **FAIL**


---

## 📊 4. Resumen de Ejecución
| Total Ejecutados | Pass | Fail | Bloqueados |
| :--- | :--- | :--- | :--- |
| 4 | 1 | 3 | 0 |

**Conclusión:** El módulo de carrito presenta fallos críticos en la **lógica de negocio**. No se recomienda el despliegue a producción hasta corregir el cálculo de totales.
