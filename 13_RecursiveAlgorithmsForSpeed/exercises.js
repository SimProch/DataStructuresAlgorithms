/**
 * Function accepts array of numbers and returns the sum. If a sum is higher than 100, it is discarded
 * Some parts are unnecessary
 */
function one() {
    console.log("Calling thrice `add_until_100` with same arguments. It can be moved above to a single call");
}

/**
 * Function calculates Nth of Golomb sequence. It is inefficient. Use memoization.
 */
function two(n, dict = {}) {
    // Original
    // if (n === 1) return n;
    // return 1 + two(n - two(two(n - 1)));
    if (n === 1) return n;
    if (!dict[n]) dict[n] = 1 + two(n - two(two(n - 1, dict), dict), dict);
    return dict[n];
}

/**
 * Solution to unique paths. Use memoization to improve efficiency
 */
function three(rows, cols, dict = {}) {
    // Original
    // if (rows == 1 || cols == 1 ) return 1;
    // return three(rows - 1, cols) + three(rows, cols - 1);
    if (rows == 1 || cols == 1 ) return 1;
    if (!dict[rows + cols]) dict[rows + cols] = three(rows - 1, cols) + three(rows, cols - 1);
    return dict[rows + cols];

}


one();
console.log(two(1000));
console.log(three(5, 5));