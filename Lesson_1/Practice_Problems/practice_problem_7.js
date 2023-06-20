// What is the return value of map in the following code? Why?

['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

/**
 * Solution:
 * The above code returns `[ undefined, 'bear' ]`. This is due to the fact that,
 * because of the `if` conditional on `line 4`, there is no return value given
 * upon the first iteration. Upon the second iteration, the `return` statement
 * is reached, and thus, `'bear'` is returned.
 */