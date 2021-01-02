// Might make a version of this that uses a regular loop inside of loop function, rather than recursion
function loop(value, test, update, body) {
  if (test(value) === true) {
    body(value);
    value = update(value);
    loop(value, test, update, body);
  } else {
    return;
  }
}
loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
// → 3
// → 2
// → 1
