//  build arrayToList with recursion?
function arrayToList(array) {
  let list = {};
  let objects = [];

  for (let i of array) {
    objects.push({ value: i, rest: null });
  }

  for (let i = 0; i < objects.length; i++) {
    console.log(i);
    objects[i].rest = objects[i + 1] || null;
  }

  list = objects[0];

  return list;
}

console.log(arrayToList([1, 2, 3]));
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
