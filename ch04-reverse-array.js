//What is with the wierd behaviour when removing the -1s on line 16?
function reverseArray(array) {
  let newArray = [];
  for (let i of array) {
    newArray.unshift(array[i - 1]);
  }
  return newArray;
}
function reverseArrayInPlace(array) {
  let newArray = [];
  for (let i of array) {
    newArray.unshift(array[i - 1]);
  }

  for (let i of array) {
    array[i - 1] = newArray[i - 1];
  }

  return;
}
