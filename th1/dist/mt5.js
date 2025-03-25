(() => {
    const fruits = ["apple", "banana", "orange"];
    const newFruits = [...fruits, "mango"];
    console.log(newFruits);
})();
(() => {
    const sumAll = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
    console.log(sumAll(1, 2, 3, 4));
})();
//# sourceMappingURL=mt5.js.map