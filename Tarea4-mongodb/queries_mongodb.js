// ===============================
// CONSULTAS CRUD
// ===============================

// Mostrar 5 documentos
db.products.find().limit(5).pretty();

// Buscar productos por categoría
db.products.find({ category: "Electrónica" }).pretty();

// Buscar productos con precio mayor a 100
db.products.find({ price: { $gt: 100 } }).pretty();

// Actualizar un producto (productId 10)
db.products.updateOne(
  { productId: 10 },
  { $set: { price: 49.99 }, $inc: { stock: 10 } }
);

// Eliminar un producto (productId 3)
db.products.deleteOne({ productId: 3 });


// ===============================
// CONSULTAS DE AGREGACIÓN
// ===============================

// Conteo de productos por categoría
db.products.aggregate([
  { $group: { _id: "$category", count: { $sum: 1 } } },
  { $sort: { count: -1 } }
]);

// Precios promedio, mínimo y máximo por categoría
db.products.aggregate([
  { $group: {
      _id: "$category",
      avgPrice: { $avg: "$price" },
      minPrice: { $min: "$price" },
      maxPrice: { $max: "$price" }
    }
  },
  { $sort: { avgPrice: -1 } }
]);

// Stock total por categoría
db.products.aggregate([
  { $group: { _id: "$category", totalStock: { $sum: "$stock" } } },
  { $sort: { totalStock: -1 } }
]);

// Top 5 productos con mejor rating
db.products.find().sort(
  { avgRating: -1, reviewsCount: -1 }
).limit(5).pretty();
