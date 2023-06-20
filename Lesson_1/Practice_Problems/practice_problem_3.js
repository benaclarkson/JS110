/**
 * The following code differs slightly from the above code. What is the return
 * value of `map` in this case? Why?
 */

[1, 2, 3].map(num => num * num);

/**
 * Solution:
 * The above code differs from the previous practice problem in that it employs
 * a concise arrow function, which implicity returns the expression `num * num`.
 * Due to this difference, the return value of the `map` method call here is
 * `[ 1, 4, 9 ]`.
 */