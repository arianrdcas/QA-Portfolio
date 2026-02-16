# 📊 Test Execution – Carrito

**Aplicación:** AcademyBugs  
**Módulo:** Carrito  
**Tester:** Arian Rodriguez  
**Fecha:** 15/02/2026  

---

## ✅ TC-001 – Agregar producto al carrito

**Resultado:** PASS ✅  
**Notas:** Producto agregado correctamente.

---

## ✅ TC-002 – Actualizar cantidad

**Resultado:** FAIL ❌  

**Observación:**  
El total no se actualiza correctamente al modificar la cantidad.

**Defecto relacionado:** BUG-001

---

## ✅ TC-003 – Validar cantidad mínima

**Resultado:** PASS ✅  
**Notas:** El sistema impide cantidad 0.

---

## ✅ TC-004 – Validar cálculo del total

**Resultado:** FAIL ❌  

**Observación:**  
El total mostrado es incorrecto al agregar dos productos.

**Defecto relacionado:** BUG-001

---

## ✅ TC-005 – Eliminar producto

**Resultado:** PASS ✅  
**Notas:** Producto eliminado correctamente.

---

# 📌 Resumen de ejecución

**Total casos ejecutados:** 5  
**PASS:** 3  
**FAIL:** 2  

---

# ⚠️ Riesgos detectados

- Cálculos financieros incorrectos
- Posible impacto en cobros
