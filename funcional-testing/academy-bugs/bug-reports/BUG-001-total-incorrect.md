# 🐞 Bug Report

**ID:** BUG-001  
**Título:** Cálculo incorrecto del total al agregar dos productos al carrito  
## 🖥 Entorno

**Ambiente:** Staging / Practice Environment  
**Navegador:** Chrome  
**Versión navegador:** 144.0.7559.133  
**Sistema operativo:** Windows 10  
**Fecha de ejecución:** 2026-02-15

---

## 📌 Descripción

Al añadir dos productos al carrito, el total mostrado es incorrecto.  
El sistema muestra **198,99** cuando el valor esperado es **98,99**.

---

## 🔁 Pasos para reproducir

1. Ingresar a la tienda
2. Agregar el primer producto al carrito
3. Agregar el segundo producto al carrito
4. Ir al carrito

---

## ✅ Resultado esperado

El total debe reflejar la suma correcta de los productos:  

**Valor esperado:** 98,99

---

## ❌ Resultado actual

El sistema muestra:  

**Valor actual:** 198,99

---

## 🚨 Prioridad

**Alta**

---

## ⚠️ Impacto

- Cobros incorrectos
- Pérdida de confianza del usuario
- Riesgo financiero
- Posibles reclamos/devoluciones

---

## 🧠 Análisis QA

El defecto afecta directamente la lógica de cálculo del carrito, una funcionalidad central del E-Commerce.  
Este tipo de error puede generar pérdidas económicas y abandono de compra.

---

## 🖼 Evidencia

(Screenshot del carrito mostrando total incorrecto)
![BUG-001 Evidencia](../assets/BUG-001.png)

