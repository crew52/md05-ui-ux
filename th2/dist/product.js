export class Product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    display() {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`;
    }
}
//# sourceMappingURL=product.js.map