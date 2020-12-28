function range(x, y = null) {
  rangeArray = [];
  if (x === y || y === null) {
    rangeArray.push(x);
  } else if (x > y) {
    for (i = y; i <= x; i++) {
      rangeArray.unshift(i);
    }
  } else if (x < y) {
    for (i = x; i <= y; i++) {
      rangeArray.push(i);
    }
  }
  return rangeArray;
}

function sum(array) {
  let total = 0;
  for (let i of array) {
    total += i;
  }
  return total;
}
