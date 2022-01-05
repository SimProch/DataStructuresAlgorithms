/**
 * Use recursion to write a function that accepts an array of strings and returns total number of chars across strings
 * ['ab', 'c', 'def', 'ghij'] => 10
 */
function one(stringOrArray, count = 0) {
    if (stringOrArray.length === 0) return 0;
    return stringOrArray[0].length + one(stringOrArray.slice(1))
}

/**
 * Recursion to write function that accepts arr of numbers and returns new with only even
 * [1,2,3,4,5,6] => [2,4,6];
 */
function two(arr) {
    if (arr.length === 0) return [];
    const nextElement = two(arr.slice(1))
    if (arr[0] % 2 === 0) return [arr[0]].concat(nextElement)
    else return two(nextElement)
}

/**
 * Triangular numbers
 * 1,3,6,10,15,21
 * 1 + 2 + 3 + 4 + 5 + 6 + ... + N
 * Write a function that accepts Nth number and calculate triangular numbers from N via recursion
 */
function three(n) {
    if (n === 1) return n;
    return n + three(n - 1);
}

/**
 * Recursion function that accepts a string and returns the first position of 'x'
 */
function four(str, index = 0) {
    if (str[index] === 'x') return index;
    return four(str, index + 1);
}

/**
 * Unique paths
 * A grid of rows and cols
 * Write a function that accepts number of rows and number of columns
 * Function calculates shortest path from top-left to bottom-right
 * Moves only left or right
 */
// I really like book solution
function five(cols,rows) {
    if (rows === 1 || cols === 1) return 1;
    return five(rows - 1, cols) + five(rows, cols - 1)
}
// My solution
// function five(cols,rows,numberOfSteps = 0, result = []) {
//     const arr = Array.from({ length: cols }, _ => Array.from({ length: rows}).fill(false));
//     numberOfSteps++;
//     if (cols == 1 && rows == 1) {
//         result.push(numberOfSteps);
//         return result;
//     }
//     if (cols > 1) five(cols - 1, rows, numberOfSteps, result); 
//     if (rows > 1) five(cols, rows - 1, numberOfSteps, result);
//     return result.length;
// }

console.log(one(['ab', 'c', 'def', 'ghij']));
console.log(two([1,2,3,4,5,6,7,8]));
console.log(three(7));
console.log(four('abcdefghijklmnopqrstuvwxyz'))
console.log(five(5,5))