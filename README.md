# Tarea 4 - Almacenamiento y Consultas en MongoDB

## Descripción
Implementación de scripts y consultas en MongoDB para la base de datos **ecommerce_db**.

---

## Base de Datos
- **Nombre:** ecommerce_db  
- **Colección:** products  
- **Documentos:** 100 productos generados automáticamente

---

## Estructura del Proyecto

- `script_insert.js` – Inserta los 100 documentos en la colección
- `queries_mongodb.js` – Contiene:
  - Consultas CRUD
  - Consultas con filtros avanzados
  - Operadores de actualización
  - Pipelines de agregación (group, sort, avg, sum)

---

## Estudiante
- KAREN LORENA ALVAREZ GONZALEZ
  
---

## Ejecución del Proyecto

### 📌 Insertar datos
```bash
mongo ecommerce_db script_insert.js
