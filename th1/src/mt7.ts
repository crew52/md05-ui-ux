const processArray = (arr:number[]) => {
    const doubled = arr.map((num) => num * 2);
    const filtered = doubled.filter((num) => num > 5);
    return filtered.reduce((acc, num) => acc + num, 0);
};

console.log(processArray([1, 2, 3, 4])); // Kết quả: 14