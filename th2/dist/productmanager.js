export class ProductManager {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    displayProducts() {
        this.products.forEach(product => console.log(product.display()));
    }
    calculateTotalValue() {
        return this.products.reduce((total, product) => total + product.price * product.quantity, 0);
    }
    filterByPrice(minPrice) {
        return this.products.filter(product => product.price >= minPrice);
    }
    removeProductById(id) {
        this.products = this.products.filter(product => product.id !== id);
    }
    updateQuantity(id, newQuantity) {
        const product = this.products.find(product => product.id === id);
        if (product) {
            product.quantity = newQuantity;
        }
    }
}
//# sourceMappingURL=productmanager.js.map