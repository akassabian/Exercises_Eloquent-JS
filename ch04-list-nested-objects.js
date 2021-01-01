// Exercise seems to ask for recursive versio of listToArray
// arrayToList: with recursion?
// listToArray: use recursion, maps/reducers. move if conditions, break into smaller functions?
// refactor, increase readability
function arrayToList(array) {
  let list = {};
  let objects = [];

  for (let i of array) {
    objects.push({ value: i, rest: null });
  }

  for (let i = 0; i < objects.length; i++) {
    objects[i].rest = objects[i + 1] || null;
  }

  list = objects[0];

  return list;
}

function listToArray(list, array = []) {
  //let array = array || [];
  for (let i = 0; i < Object.keys(list).length; i++) {
    array.push(list[Object.keys(list)[i]]);
  }

  for (let i of array) {
    //why did I need to add this condition to avoid prepend function from trying to conver null to object?
    //add base case to break recursion once the object is iterated
    if (typeof i === "object" && i !== null) {
      //call listToArray(i);
      listToArray(i, array);
      //for (let x = 0; x < Object.keys(i).length; x++) {
      //array.push(i[Object.keys(i)[x]]);
      //}
      // remove old object from array
      if (typeof array[array.length - 3] === "object") {
        array = remove(array, array.length - 3);
      }
      // remove null at end of array
      if (array[array.length - 1] === null) {
        array = remove(array, array.length - 1);
      }
    }
  }

  return array;
}

function prepend(newValue, list) {
  let returnList = {};
  let array = [];

  //make this function also able to handle arrays and single values as "list"?
  //create an array of values from the object passed as list (does null object need special case or is this a shortcoming of listToArray?)
  if (list !== null) {
    array = listToArray(list);
  } else {
    array = [null];
  }

  //prepend newValue
  array.unshift(newValue);

  //call arrayToList;
  returnList = arrayToList(array);

  return returnList;
}

function nth(list, position) {
  return listToArray(list)[position];
}

function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}

//console.log(arrayToList([1, 2, 3]));
//console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
//console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
