// What is the return value of the following statement? Why?

['ant', 'bear', 'caterpillar'].pop().length;

/**
 * Solution:
 * The return statement of the above code is `11`. This is du to the fact that
 * the `Array.prototype.pop()` method returns the element it removed from the
 * array. Thus, `length` is actually being called on the string `'caterpillar'`.
 */