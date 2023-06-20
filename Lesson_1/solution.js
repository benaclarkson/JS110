// Algorithm:
// 1. Create an empty 'rows' array to contain all of the rows
// 2. Create a 'row' array and add it to the overall 'rows' array
// 3. Repeat step 2 until all the necessary rows have been created
//   - All rows have been created when the length of the 'rows' array is equal to the input integer
// 4. Sum the final row
// 5. Return the sum

function sumEvenNumberRow(rowNumber) {
  let rows = [];
  let startInteger = 2;

  for (let currentRowNum = 1; currentRowNum <= rowNumber; currentRowNum += 1) {
    let row = createRow(startInteger, currentRowNum);
    rows.push(row);
    startInteger = row[row.length - 1] + 2;
  }

  let finalRow = rows.pop();
  return finalRow.reduce((a, b) => a + b);
}

// ================= 18:51 on video ===========================

// Algorithm:
// 1. Create an empty 'row' to contain the integers
// 2. Add the starting integer
// 3. Increment the starting integer by 2 to get the next integer in the sequence
// 4. Repeat steps 2 and 3 until the array has reached the correct length
// 5. Return the 'row' array

function createRow(startInteger, rowLength) {
  let row = [];
  let currentInteger = startInteger;

  for (let count = 0; row.length < rowLength; count += 2) {
    row.push(currentInteger + count);
  }

  return row;
}

console.log(sumEvenNumberRow(1)); // 2
console.log(sumEvenNumberRow(2)); // 10
console.log(sumEvenNumberRow(4)); // 68

console.log(createRow(2, 1)); // [2]
console.log(createRow(4, 2)); // [4, 6]
console.log(createRow(8, 3)); // [8, 10, 12]