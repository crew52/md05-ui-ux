export class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public quantity: number
    ) {}

    // Phương thức hiển thị thông tin sản phẩm
    display(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`;
    }
}