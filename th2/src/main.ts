import { Product } from "./product.js";
import { ProductManager } from "./productmanager.js";

const manager = new ProductManager();

// Thêm sản phẩm vào danh sách
manager.addProduct(new Product(1, "Laptop", 1500, 5));
manager.addProduct(new Product(2, "Smartphone", 800, 10));
manager.addProduct(new Product(3, "Tablet", 600, 7));

console.log("📌 Danh sách sản phẩm:");
manager.displayProducts();

console.log("\n💰 Tổng giá trị hàng tồn kho:", manager.calculateTotalValue());

console.log("\n🔎 Sản phẩm có giá từ $800 trở lên:", manager.filterByPrice(800));

console.log("\n➕ Thêm sản phẩm mới:");
manager.addProduct(new Product(4, "Smartwatch", 300, 15));
manager.displayProducts();

console.log("\n❌ Xóa sản phẩm có ID = 2:");
manager.removeProductById(2);
manager.displayProducts();

console.log("\n🔄 Cập nhật số lượng sản phẩm ID = 3 lên 20:");
manager.updateQuantity(3, 20);
manager.displayProducts();