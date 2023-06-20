// Given the following code, breakdown what is happening.

[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});

/**
 * Action
 * Method call (`map`)
 *
 * Performed on
 * The outer array
 *
 * Side Effect
 * None
 *
 * Return Value
 * New array (`[1, 3]`)
 *
 * Is Return Value Used?
 * No
 *
 *
 * Action
 * Callback execution
 *
 * Performed on
 * Each sub-array
 *
 * Side Effect
 * None
 *
 * Return Value
 * Element at `arr[0]`
 *
 * Is Return Value Used?
 * Yes, used by `map` for transformation
 *
 *
 * Action
 * Element reference (`[0]`)
 *
 * Performed on
 * Each sub-array
 *
 * Side Effect
 * None
 *
 * Return Value
 * Element at index 0 of each sub-array
 *
 * Is Return Value Used?
 * Yes, used by `console.log`
 *
 *
 * Action
 * Method call (`console.log`)
 *
 * Performed on
 * Element at index 0 of each sub-array
 *
 * Side Effect
 * Outputs string representation of number at index 0 of each sub-array
 *
 * Return Value
 * `undefined`
 *
 * Is Return Value Used?
 * No
 *
 *
 * Action
 * Element reference (`[0]`)
 *
 * Performed on
 * Each sub-array
 *
 * Side Effect
 * None
 *
 * Return Value
 * Element at index 0 of each sub-array
 *
 * Is Return Value Used?
 * Yes, used as the return value of the callback
 */