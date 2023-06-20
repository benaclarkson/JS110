/**
 * Given the following data structure, use the map method to return a new array
 * identical in structure to the original but, with each number incremented by
 * 1. Do not modify the original data structure.
 */

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// Solution
let newArr = arr.slice().map(obj => {
  let newObj = Object.assign({}, obj);
  for (let [key, value] of Object.entries(newObj)) {
    newObj[key] = value + 1;
  }

  return newObj;
});

console.log(arr);
console.log(newArr);