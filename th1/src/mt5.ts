(() => {
    const fruits = ["apple", "banana", "orange"];
    const newFruits = [...fruits, "mango"];
    console.log(newFruits);
})();

(() => {
    const sumAll = (...numbers: number[]) => numbers.reduce((acc, num) => acc + num, 0);
    console.log(sumAll(1, 2, 3, 4));
})();