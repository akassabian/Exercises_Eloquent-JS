function range(x, y = null, step = 1) {
  rangeArray = [];
  if (
    (step === Math.abs(0) && !(x === y || y === null)) ||
    (x > y && Math.sign(step) === 1) ||
    (x < y && Math.sign(step) === -1)
  ) {
    return "Start value will never equal end value, given current step value (default step is +1).";
  } else if (x === y || y === null) {
    rangeArray.push(x);
  } else if (x > y) {
    for (i = x; i >= y; i += step) {
      rangeArray.push(i);
    }
  } else if (x < y) {
    for (i = x; i <= y; i += step) {
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
