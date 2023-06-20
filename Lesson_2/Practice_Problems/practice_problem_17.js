/**
 * A UUID is a type of identifier often used to uniquely identify items, even
 * when some of those items were created on a different server or by a different
 * application. That is, without any synchronization, two or more computer
 * systems can create new items and label them with a UUID with no significant
 * risk of stepping on each other's toes. It accomplishes this feat through
 * massive randomization. The number of possible UUID values is approximately
 * 3.4 X 10E38, which is a huge number. The chance of a conflict is vanishingly
 * small with such a large number of possible values.
 *
 * Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the
 * letters a-f) represented as a string. The value is typically broken into 5
 * sections in an 8-4-4-4-12 pattern,
 * e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.
 *
 * Write a function that takes no arguments and returns a string that contains
 * a UUID.
 *
 *
 * Problem:
 * Given no arguments, write a function that returns a UUID.
 *
 * Input: None
 * Output: UUID
 *
 * Rules:
 * - UUID pattern is 8-4-4-4-12 with each number representing the number of
 *   hexadecimal characters between dashes.
 *
 *
 * Examples/Test Cases:
 * - Given below
 *
 *
 * Data Structure
 * - Maybe an array
 *
 *
 * Algorithm:
 * - Create an array containing the number of chars in each slot within the
 *   UUID i.e. [8, 4, 4, 4, 12]
 * - Create an empty array in which to store each hex num
 * - Iterate over the array
 *   - Create a count variable to track number of chars
 *   - Until the count reaches the current number in the array we're iterating
 *     over, add a new hexadecimal character to the string
 *   - Increment count by 1
 *   - Add completed string to result array
 * - Join together all strings with delimeter '-'
 * - Return joined string
 *
 * hexChar()
 * - Create a string that contains all possible hex characters
 * - Get a random number
 * - Return the character at the random number's index within the string of
 *   chars
 */

function hexChar() {
  const HEX_CHARS = '0123456789abcdef';
  let randomIndex = Math.floor(Math.random() * (HEX_CHARS.length - 1));
  return HEX_CHARS[randomIndex];
}

function uuid() {
  const UUID_PATTERN = [8, 4, 4, 4, 12];
  let result = [];

  UUID_PATTERN.forEach(charCount => {
    let currentSection = '';
    for (let totalChars = 1; totalChars <= charCount; totalChars += 1) {
      currentSection += hexChar();
    }
    result.push(currentSection);
  });

  return result.join('-');
}

console.log(uuid());