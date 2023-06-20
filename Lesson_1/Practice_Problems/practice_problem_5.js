/**
 * What is the callback's return value in the following code? Also, what is the
 * return value of `every` in this code?
 */

[1, 2, 3].every(num => {
  return num = num * 2;
});

/**
 * Solution:
 * The callback's return value in the above code is `true`. The return value of
 * `every` in the above code is the value of `num * 2` at each iteration, which
 * is always a truthy value.
 */