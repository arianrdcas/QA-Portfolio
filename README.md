# 🧪 QA Automation – Shopping Cart Tests (Playwright)

Proyecto de **automatización de pruebas** utilizando **Playwright** para validar la lógica del carrito de compras del sitio de pruebas:

https://academybugs.com/find-bugs/

El objetivo del proyecto es **automatizar casos de prueba manuales previamente diseñados**, detectando errores en la **lógica de cálculo del total del carrito**.

---

# 📌 Descripción del Proyecto

Este repositorio contiene:

- Casos manuales detallados: [manual-testing/](manual-testing/)
- Automatización de pruebas con **Playwright**: [automation-testing/](automation-testing/)
- Implementación de **DDT (Data-Driven Testing)** para ejecutar flujos con múltiples combinaciones de datos (valores límite).
- Validación de lógica de negocio del carrito
- Evidencias de ejecución mediante **screenshots**
  
---

# 🏗️ Arquitectura y Patrones

El proyecto no solo ejecuta scripts, sino que sigue una estructura profesional basada en:

- **Page Object Model (POM):** Se ha implementado este patrón para separar los selectores y la lógica de interacción de las páginas (`ShopPage`, `CartPage`) de los tests, garantizando un código limpio y mantenible.
- **Data-Driven Testing (DDT):** Utilización de archivos JSON externos para alimentar las pruebas. Esto permite ejecutar múltiples iteraciones con un solo script.
- **Análisis de Valores Límite:** Aplicado en el **TC-003**, donde se validan entradas críticas como **-5, 0, 1, 2 y 3** [1], permitiendo verificar el comportamiento del sistema ante particiones equivalentes válidas e inválidas de forma dinámica.
- **Utilidades Desacopladas:** Uso de helpers para la limpieza de datos (precios y strings), mejorando la legibilidad de las aserciones.

---

# 🧪 Casos de pruebas (Manuales y Automatizados)

Actualmente el proyecto automatiza los siguientes casos:

| ID | Caso de Prueba | Descripción | Estado |
|---|---|---|---|
| TC-001 | Agregar producto al carrito | Verifica que el total sea igual a subtotal + envío | FAIL (Bug conocido) |
| TC-002 | Actualizar cantidad de productos | Valida el recàlculo del total al modificar la cantidad | FAIL (Bug conocido) |
| TC-003 | Validación de límites en cantidad de producto | Valida valores limites | PASS |
| TC-004 |  Validar cálculo con múltiples productos | Valida càlculo del total al agregar diferentes productos | FAIL (Bug conocido) |

**Nota importante:**
Los resultados coinciden exactamente con las ejecuciones manuales previas, confirmando un **bug real** en la lògica del càlculo del total del carrito (subtotal + envío,no se actualiza correctamente). Esto valida que los test detectan defectos de negocio.

---

# 📸 Evidencias

Durante la ejecución se guardan screenshots automáticamente en: [automation-testing/screenshot/](automation-testing/screenshot/)

---

# 🛠️ Tecnologías Utilizadas

- **Lenguaje:** TypeScript
- **Framework de Pruebas:** Playwright
- **Motor de Ejecución:** Playwright Test Runner
- **Entorno:** Node.js
- **CI/CD:** GitHub Actions

---

# 🚀 Mejoras Futuras

- Incorporar pruebas de servicios backend (**API Testing**) para validar las respuestas del servidor.
- Integrar **consultas SQL** para la validación y consistencia de datos directamente en la base de datos (Backend Testing).

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
QA Automation   
Certified Manual QA Tester
