
/**
 * Big Oh for 3N^2 + 2N + 1
 */
 function one() {
    console.log("O(N^2)");
}

/**
 * Big Oh for N + log N
 */
function two() {
    console.log("O(N)");
}

/**
 * Big Oh for searching 2 numbers that add up to 10 (nested for)
 */
function three() {
    console.log("O(N^2) Worst case, O(1) best case (early return)")
}

/**
 * Big Oh for finding X in string
 */
function four(array) {
    console.log("O(N) (Early break if foundX is true)")
}

one();
two();
three();
four();