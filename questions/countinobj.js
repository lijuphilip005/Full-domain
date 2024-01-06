const arr = [{ a: 34, df: 9 }, { ad: 34, df: 39 }, { al: 34, df: 39, g: 3 }];

let numbers = arr.map((obj) => Object.values(obj));
let flat = numbers.flat();
let times = [];

for (let i = 0; i < flat.length ; i++) {
    let count = 1; // Reset count for each new element
    for (let j = i + 1; j <flat.length; j++) {
        if (flat[i] === flat[j]&&i!==j) {
            count++;
        }
    }
    // Push the element and its count only once
    if (!times.includes(flat[i])) {
        times.push(flat[i], count);
    }
}

console.log(times);
