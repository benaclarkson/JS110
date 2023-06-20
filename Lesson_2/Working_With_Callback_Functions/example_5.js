// Given the following code, break down what is happening.

[[1, 2], [3, 4]].map(arr => {
  return arr.map(num => num * 2);
});

/**
 * The return value of this example will be
 * `[[2, 4], [6, 8]]`
 *
 *
 * Action
 * Method call (`map`)
 *
 * Performed on
 * Outer array
 *
 * Side Effect
 * None
 *
 * Return Value
 * `[[2, 4], [6, 8]]`
 *
 * Is Return Value Used?
 * No
 *
 *
 * Action
 * Anonymous callback function invocation (`arr => ...`)
 *
 * Performed on
 * Each sub-array
 *
 * Side Effect
 * None
 *
 * Return Value
 * `[2, 4]` and `[6, 8]`
 *
 * Is Return Value Used?
 * Yes, used by outer `map` method call
 *
 *
 * Action
 * Method call (`map`)
 *
 * Performed on
 * Each sub-array
 *
 * Side Effect
 * None
 *
 * Return Value
 * Each element number, multiplied by 2
 *
 * Is Return Value Used?
 * Yes, returned to the outer `map` call
 *
 *
 * Action
 * Anonymous, concise arrow callback function invocation (`num => ...`)
 *
 * Performed on
 * Each element of each sub-array
 *
 * Side Effect
 * None
 *
 * Return Value
 * The current number, multiplied by 2
 *
 * Is Return Value Used?
 * Yes, implicitly returned to the inner `map` function call
 *
 *
 * Action
 * Multiplication (`num * 2`)
 *
 * Performed on
 * `num` at each iteration
 *
 * Side Effect
 * None
 *
 * Return Value
 * The value of `num` * 2
 *
 * Is Return Value Used?
 * Yes, returned implicitly to the inner callback
 */