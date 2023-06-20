/**
 * Given the following data structure, sort the array so that the sub-arrays are
 * ordered based on the sum of the odd numbers that they contain.
 */

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

/**
 * Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:
 * [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]
 */

// Solution
arr.sort((a, b) => {
  let sumOfOddsA = a
    .filter(char => char % 2 === 1)
    .reduce((acc, curr) => acc + curr);

  let sumOfOddsB = b
    .filter(char => char % 2 === 1)
    .reduce((acc, curr) => acc + curr);

  return sumOfOddsA - sumOfOddsB;
});

console.log(arr);