/**
 * @param {number} n
 * @return {number}
 */
var map = {}
var fib = function(n) {
    return n < 2 ? n : map[n] ? map[n] : map[n] = fib(n-1) + fib(n-2)
};