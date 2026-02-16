# 🛒 Test Cases – Carrito de Compras

**Módulo:** Carrito  
**Aplicación:** AcademyBugs  
**Tipo de pruebas:** Funcionales  

---

## ✅ TC-001 – Agregar producto al carrito

**Precondición:** Usuario en página de producto  

**Pasos:**
1. Seleccionar producto
2. Click en "Add to Cart"

**Resultado esperado:**
El producto se agrega correctamente al carrito.

---

## ✅ TC-002 – Actualizar cantidad

**Precondición:** Producto agregado al carrito  

**Pasos:**
1. Ir al carrito
2. Modificar cantidad

**Resultado esperado:**
El total debe actualizarse correctamente.

---

## ✅ TC-003 – Validar cantidad mínima

**Pasos:**
1. Ingresar cantidad = 0

**Resultado esperado:**
El sistema debe mostrar validación o impedir valor inválido.

---

## ✅ TC-004 – Validar cálculo del total

**Pasos:**
1. Agregar dos productos
2. Ir al carrito

**Resultado esperado:**
El total debe reflejar la suma correcta de precios.

---

## ✅ TC-005 – Eliminar producto

**Pasos:**
1. Click en eliminar producto

**Resultado esperado:**
El producto se elimina y el total se recalcula.
