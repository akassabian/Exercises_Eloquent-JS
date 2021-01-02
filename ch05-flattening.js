let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((a, b) => a = a.concat(b)));
// → [1, 2, 3, 4, 5, 6]