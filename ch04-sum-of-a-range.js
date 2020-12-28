function range(x, y) {
  rangeArray = [];
  if (x === y) {
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
