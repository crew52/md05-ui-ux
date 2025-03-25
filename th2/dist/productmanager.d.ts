import { Product } from "./product.js";
export declare class ProductManager {
    private products;
    addProduct(product: Product): void;
    displayProducts(): void;
    calculateTotalValue(): number;
    filterByPrice(minPrice: number): Product[];
    removeProductById(id: number): void;
    updateQuantity(id: number, newQuantity: number): void;
}
