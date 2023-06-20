/**
 * Leftover Blocks
 *
 * You have a number of building blocks that can be used to build a valid
 * structure. There are certain rules about what determines the validity of a
 * structure:
 *
 * - The building blocks are cubes
 * - The structure is built in layers
 * - The top layer is a single block
 * - A block in an upper layer must be supported by four blocks in a lower layer
 * - A block in a lower layer can support more than one block in an upper layer
 * - You cannot leave gaps between blocks
 * - Write a program that, given the number for a specific amount of cubes,
 *   calculates the number of blocks left over after building the tallest
 *   possible valid structure.
 *
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
 * Build a structure using a certain number of blocks.
 *
 * Input:
 * - Integer representing number of cubes
 * Output:
 * - Number of blocks left over after building tallest possible valid structure
 *
 * Rules:
 * *Explicit:*
 * - All blocks are cubes
 *   - They are the same size on all six sides
 * - Top layer is a single block
 * - Every block needs 4 supporting blocks below it
 * - One block can support more than one block above it
 * - No gaps between any blocks
 * *Implicit:*
 * - Terms "cube(s)" and "block(s)" are used interchangeably
 * - Layer number correlates with blocks in a layer
 *
 * Questions:
 * - How are cubes represented in code?
 * - Account for negative input? Unclear
 * - Account for zero input? Yes
 * - Validate input as valid integer? Unclear
 * - Can we add more blocks than are necessary to support upper layer? No
 * - Will there always be left over blocks? No
 *
 *
 * E:
 * - Questions updated above based on test cases below
 *
 *
 * D:
 * - We could use an array.
 *
 *
 * A:
 * x Create guard clause to account for 0 as input and return 0
 * x Create a new variable, `structure`, and store an empty array in it
 * x While sum of `structure` is less than input number, loop:
 *   x Add to `structure`: Current index, increased by 1, and squared
 *   x Each index represents a level (+ 1 to get true level number).
 * x Once loop condition is false, subtract input from sum of `structure` and
 *   return that value
 */

function calculateLeftoverBlocks(blocks) {
  if (blocks === 0) return 0;

  let structure = [];
  let blocksUsed = 0;
  let layer = 1;

  while (true) {
    structure.push(layer * layer);

    blocksUsed = structure.reduce((acc, curr) => acc + curr);

    if (blocksUsed > blocks) {
      structure.pop();
      blocksUsed = structure.reduce((acc, curr) => acc + curr);
      break;
    }

    layer += 1;
  }

  return blocks - blocksUsed;
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true