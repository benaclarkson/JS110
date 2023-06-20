// Given the following code, break down what is happening:

let myArr = [[18, 7], [3, 12]].forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});

/**
 * The above code will log
 * 18
 * 7
 * 12
 *
 * The value of myArr will be `undefined`
 *
 *
 * Action
 * Assignment (`let myArr`)
 *
 * Performed on
 * None
 *
 * Side Effect
 * None
 *
 * Return Value
 * `undefined`
 *
 * Is Return Value Used?
 * No
 *
 *
 * Action
 * Method call (`forEach()`)
 *
 * Performed on
 * Outer array (`[[18, 7], [3, 12]]`)
 *
 * Side Effect
 * None
 *
 * Return Value
 * `undefined`
 *
 * Is Return Value Used?
 * Yes, stored in `myArr` variable
 *
 *
 * Action
 * Anonymous callback function (`arr => ...`)
 *
 * Performed on
 * Each element of outer array
 *
 * Side Effect
 * None
 *
 * Return Value
 * Return value of the `map()` method call upon each array, which will be
 * `[undefined, undefined]`
 *
 * Is Return Value Used?
 * No
 *
 *
 * Action
 * Method call (`map()`)
 *
 * Performed on
 * Each sub-array
 *
 * Side Effect
 * None
 *
 * Return Value
 * `[undefined, undefined]`
 *
 * Is Return Value Used?
 * Yes, it is returned to the callback function
 *
 *
 * Action
 * Anonymous callback function (`num => ...`)
 *
 * Performed on
 * Each element of each sub-array
 *
 * Side Effect
 * None
 *
 * Return Value
 * `undefined` each time
 *
 * Is Return Value Used?
 * Yes, it is used by `map`
 *
 *
 * Action
 * Comparison (`>`)
 *
 * Performed on
 * Each element of each sub-array
 *
 * Side Effect
 * None
 *
 * Return Value
 * Boolean value
 *
 * Is Return Value Used?
 * Yes, by `if`
 *
 *
 * Action
 * Method call (`console.log()`)
 *
 * Performed on
 * Each element of each sub-array
 *
 * Side Effect
 * Outputs each element in the form of a string to the console
 *
 * Return Value
 * `undefined`
 *
 * Is Return Value Used?
 * Yes, it is used by `map`
 */