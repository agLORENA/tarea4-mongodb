// Borrar colección si existe
use ecommerce_db;
db.products.drop();

const categories = ["Ropa","Electrónica","Hogar","Deportes","Accesorios"];
const brands = ["MarcaA","MarcaB","MarcaC","MarcaD"];
const tagsPool = [["nuevo"],["oferta"],["premium"],["eco"],["popular"]];

const docs = [];

for (let i = 1; i <= 100; i++) {
  const category = categories[i % categories.length];
  const brand = brands[i % brands.length];
  const price = parseFloat((Math.random() * 190 + 5).toFixed(2));
  const stock = Math.floor(Math.random() * 200);
  const avgRating = parseFloat((Math.random() * 4 + 1).toFixed(2));
  const reviewsCount = Math.floor(Math.random() * 200);

  docs.push({
    productId: i,
    name: `Producto ${i} - ${category}`,
    category: category,
    brand: brand,
    price: price,
    stock: stock,
    attributes: {
      color: ["rojo", "azul", "negro"].slice(0, 1 + (i % 3)),
      size: category === "Ropa" ? ["S", "M", "L"] : []
    },
    avgRating: avgRating,
    reviewsCount: reviewsCount,
    tags: tagsPool[i % tagsPool.length],
    createdAt: new Date(Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 365))
  });
}

db.products.insertMany(docs);
print("Inserted documents:", db.products.countDocuments());
