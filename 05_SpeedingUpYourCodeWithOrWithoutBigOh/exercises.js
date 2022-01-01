/**
 * Big Oh for 4N + 16 operations
 */
function one() {
    console.log("O(N)");
}

/**
 * Big Oh for 2N^2
 */
function two() {
    console.log("O(N^2)");
}

/**
 * Big Oh for 2 identical loops over N elements
 */
function three() {
    console.log("O(N)")
}

/**
 * Big Oh for 1 loop with 3 operations over N elements
 */
function four() {
    console.log("O(N)")
}

/**
 * Big Oh for one loop in which another is nested
 */
function five() {
    console.log("O(N^2)")
}

one();
two();
three();
four();
five();