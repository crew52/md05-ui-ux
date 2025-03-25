import { Product } from "./product.js";

export class ProductManager {
    private products: Product[] = [];

    // Thêm sản phẩm vào danh sách
    addProduct(product: Product): void {
        this.products.push(product);
    }

    // Hiển thị tất cả sản phẩm
    displayProducts(): void {
        this.products.forEach(product => console.log(product.display()));
    }

    // Tính tổng giá trị hàng tồn kho
    calculateTotalValue(): number {
        return this.products.reduce((total, product) => total + product.price * product.quantity, 0);
    }

    // Lọc sản phẩm theo giá
    filterByPrice(minPrice: number): Product[] {
        return this.products.filter(product => product.price >= minPrice);
    }

    // Xóa sản phẩm theo ID
    removeProductById(id: number): void {
        this.products = this.products.filter(product => product.id !== id);
    }

    // Cập nhật số lượng sản phẩm theo ID
    updateQuantity(id: number, newQuantity: number): void {
        const product = this.products.find(product => product.id === id);
        if (product) {
            product.quantity = newQuantity;
        }
    }
}