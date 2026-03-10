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
  
---

# 🧪 Casos de pruebas (Manuales y Automatizados)

Actualmente el proyecto automatiza los siguientes casos:

| ID | Caso de Prueba | Descripción | Estado |
|---|---|---|---|
| TC-001 | Agregar producto al carrito | Verifica que el total sea igual a subtotal + envío | ❌ FAIL (Bug conocido) |
| TC-002 | Actualizar cantidad de producto | Valida el recalculo del total al modificar la cantidad | ❌ FAIL (Bug conocido) |

Resultados idénticos a los **tests manuales**, bug confirmado en la lógica de cálculo del carrito.

---

# 📸 Evidencias

Durante la ejecución se guardan screenshots automáticamente en:

automation-testing/screenshot/

---

# 🛠️ Tecnologías Utilizadas

- Node.js
- Playwright
- TypeScript
- Playwright Test Runner

---

# 🚀 Mejoras Futuras

- Automatizar TC-003 (validación de valores negativos)
- Automatizar TC-004 (múltiples ítems en carrito)
- Implementar Page Object Model
- Integrar CI/CD (GitHub Actions)

---
# ⚙️ Instalación y Ejecución

Clonar el repositorio
```bash
git clone https://github.com/arianrdcas/QA-Portfolio.git
 ```
Entrar al proyecto:
```bash
cd automation-testing
```
Instalar dependencias:
```bash
npm install
```
Instalar navegadores de Playwright:
```bash
npx playwright install
```
Ejecutar todos los tests:
```bash
npx playwright test
```
Ejecutar con interfaz visual:
```bash
npx playwright test --ui
```
Ver reporte de resultados:
```bash
npx playwright show-report
```

# 👨‍💻 Autor

**Arian Rodriguez**  
QA Automation Engineer  
Certified Manual QA Tester
