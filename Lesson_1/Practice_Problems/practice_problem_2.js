// What is the return value of `map` in the following code? Why?

[1, 2, 3].map(num => {
  num * num;
});

/**
 * Solution:
 * The return value of the `map` method call in the above code is
 * `[ undefined, undefined, undefined ]`. This is due to the fact that `return`
 * is not explicitly called. The anonymous callback function returns `undefined`
 * by default.
 */