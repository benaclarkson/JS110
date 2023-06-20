/**
 * Sort Strings by Most Adjacent Consonants
 *
 * Given an array of strings, return a new array where the strings are sorted
 * to the highest number of adjacent consonants a particular string contains.
 * If two strings contain the same highest number of adjacent consonants they
 * should retain their original order in relation to each other. Consonants are
 * considered adjacent if they are next to each other in the same word or if
 * there is a space between two consonants in adjacent words.
 *
 * Tasks
 *
 * You are provided with the problem description above. Your tasks for this
 * step are:
 *
 * - To make notes of your mental model for the problem, including explicit and
 *   implicit rules
 * - Write a list of questions for things that aren't clear about the problem
 *   from the description provided
 *
 *
 * P:
 *
 * Input:
 * - Array of strings
 * Output:
 * - A new array of sorted strings
 *
 * Rules:
 * - Strings must be sorted by highest number of adjacent consonants
 * - If two strings have same number of adjacent consonants, they should retain
 *   their original order in relation to one another.
 * - Consonants are considered adjacent if they are next to one another
 *   - Spaces are ignored within strings when looking at adjacent consonants
 * - Pay special attention to first test case. Both 'aa' and 'baa' have 0 consec
 *   consonants, so they retain their original order.
 *
 * Questions:
 * - Ascending or descending order? Descending
 * - What if more than two strings contain the same number of adjacent
 *   consonants? Keep in same order -- Maybe capture "groups" of strings with
 *   the same number of consonants in order of appearance, which can be added
 *   to the array after
 * - Validate string input? Unknown
 * - What to do with empty array input? Unknown
 * - What if consonants are separated by punctuation? Commas, semicolons, etc.?
 * - Is case important? Unknown
 * - Is there a possibility of more than one space between consonants? Unknown
 * - Does "y" count as a consonant?
 *
 * E:
 * - See below
 *
 *
 * D:
 * - We will need to use an object to track the number of consec consonants
 * - We will need to return the keys from that object, in order of their values
 *   as an array
 *
 *
 * A:
 * x For each string in the input array, determine the highest number of
 *   adjacent consonants within that string
 * - Sort the input array based on the calculated highest number of consonants
 *   from step 1
 * - Return the sorted array
 *
 * Sub-Process P:
 * Input: String
 * Output: Integer representing count of adjacent consonants in the string
 *
 * x Remove the spaces from the input string
 * x Initialize a count to zero
 * x Initialize a temp string to an empty string
 * x Iterate through the input string. For each letter:
 *   x If the letter is a consonant, concatenate it to the temp string
 *   x If the letter is a vowel:
 *     x If the temp string has has a length greater than 1 AND the temp string
 *       has a length greater than the current count, set the count to the
 *       length of the temp string
 *     x Reset the temp string to an empty string
 * x Return the count
 */

function sortStringsByConsonants(strings) {
  let sortedStrings = strings.sort((a, b) => {
    return countMaxAdjacentConsonants(b) - countMaxAdjacentConsonants(a);
  });

  return sortedStrings;
}

function countMaxAdjacentConsonants(str) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u', 'y'];
  str = str.replace(/ /g, '');
  let count = 0;
  let tempStr = '';

  for (let char of str) {
    if (!VOWELS.includes(char)) {
      tempStr += char;
      if (tempStr.length > 1 && tempStr.length > count) {
        count = tempStr.length;
      }
    } else {
      if (tempStr.length > 1 && tempStr.length > count) {
        count = tempStr.length;
      }

      tempStr = '';
    }
  }

  return count;
}

console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']