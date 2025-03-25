const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // Kết quả: [2, 4, 6, 8, 10]


const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Kết quả: [2, 4]


const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Kết quả: 15