// How does `Array.prototype.fill` work? Is it destructive? How can we find out?

let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);

/**
 * Solution:
 * `Array.prototype.fill` accepts 3 parameters: `value`, `start`, and `end`.
 * Because the `end` value in the above code is an index greater than the length
 * of the caller, the length of the caller is used by default. `fill` is a
 * destructive method and returns the mutated array. We can find all of this out
 * by checking the MDN documentation.
 */