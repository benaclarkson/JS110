// What is the return value of the `filter` method call below? Why?

[1, 2, 3].filter(num => 'hi');

/**
 * Solution:
 * The return value of the `filter` method call above is `[ 1, 2, 3 ]`. This is
 * due to the fact that a concise arrow function is used, which implicity
 * returns the truthy value of the string `'hi'` upon each iteration. Because
 * a truthy value is returned upon each iteration, every element of the original
 * array is returned in the new array.
 */