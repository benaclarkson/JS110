/**
 * Create an object that expresses the frequency with which each letter occurs
 * in this string:
 */

let statement = "The Flintstones Rock";

/**
 * The output will look something like the following:
 * { T: 1, h: 1, e: 2, F: 1, l: 1, ... }
 */

let letterOccurrences = {};

for (let letter of statement.replace(/ /g, '')) {
  if (Object.keys(letterOccurrences).includes(letter)) {
    letterOccurrences[letter] += 1
  } else {
    letterOccurrences[letter] = 1;
  }
}

console.log(letterOccurrences);