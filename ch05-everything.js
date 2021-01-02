// every func with some and loop
function every(array, test) {
    for (let i of array){
    let dummyArray = [i];
    if (dummyArray.some(test) === true){
    }else {
        return false;
    }
  }
    return true;
}

// every func with loop
function everyLoop(array, test) {
    for (let i of array){
    if (test(i) === true){
    }else {
        return false;
    }
  }
    return true;
}

// some function that truly relies on "some" func logic?
function everySome(array, test) {
    // if some of actual array !== some of requested array then false, otherwise true
    // but how to construct requested array?
    /**if (array.some(([...]) => {
      return array
  })){
  
  } else {
  
      return false;
  }
}**/
}

//console.log(characterScript(121));
// → {name: "Latin", …}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true