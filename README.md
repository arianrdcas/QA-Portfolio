# 🧪 QA Automation – Shopping Cart Tests (Playwright)

Proyecto de **automatización de pruebas E2E** utilizando **Playwright** para validar la lógica del carrito de compras del sitio de pruebas:

https://academybugs.com/find-bugs/

El objetivo del proyecto es **automatizar casos de prueba manuales previamente diseñados**, detectando errores en la **lógica de cálculo del total del carrito**.

---

# 📌 Descripción del Proyecto

Este repositorio contiene:

- Casos de prueba manuales documentados
- Automatización de pruebas con **Playwright**
- Validación de lógica de negocio del carrito
- Evidencias de ejecución mediante **screenshots**
- 
---

# 🧪 Casos de Prueba Automatizados

Actualmente el proyecto automatiza los siguientes casos:

| ID | Caso de Prueba | Descripción | Estado |
|---|---|---|---|
| TC-001 | Agregar producto al carrito | Verifica que el total sea igual a subtotal + envío | ❌ FAIL (Bug conocido) |
| TC-002 | Actualizar cantidad de producto | Valida el recalculo del total al modificar la cantidad | ❌ FAIL (Bug conocido) |

Los resultados coinciden con los **tests manuales**, donde se detectó un error en la lógica de cálculo del carrito.

---

# 🛠️ Tecnologías Utilizadas

- Node.js
- Playwright
- TypeScript
- Playwright Test Runner

---

# 📦 Instalación del Proyecto

## 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/academybugs-playwright-tests.git
