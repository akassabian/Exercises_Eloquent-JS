function deepEqual(value1, value2) {
  if (
    typeof value1 === "object" &&
    typeof value2 == "object" &&
    value1 !== null &&
    value2 !== null
  ) {
    //loop through each object
    for (let i = 0; i < Object.keys(value1).length; i++) {
      if (value1[Object.keys(value1)[i]] === value2[Object.keys(value2)[i]]) {
        // passes on towards returning true
      } else if (typeof value1[Object.keys(value1)[i]] === "object") {
        // compare nested objects passes on towards returning true - probably needs recursion
        if (
          !deepEqual(
            value1[Object.keys(value1)[i]],
            value2[Object.keys(value2)[i]]
          )
        ) {
          return false;
        }
      } else {
        return false;
      }
    }

    return true;
  } else {
    return value1 === value2;
  }
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
