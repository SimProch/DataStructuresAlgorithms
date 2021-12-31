/**
 * Time complexity for specific number of elements
 */
function one() {
    const elements = [100, 2000];
    elements.forEach(i => {
        console.log("O(n) = " + i);
        console.log("O(n) = " + Math.log2(i));
        console.log("O(n) = " + i ** 2);
    })
}

/**
 * Array length where O(N^2) algorithm takes 256 steps 
 */
function two() {
    console.log(Math.sqrt(256));
}

/**
 * Big Oh to describe time complexity of quadratic code
 */
function three() {
    console.log("O(N^2)")
}

/**
 * Rewrite quadratic function into linear
 */
function four(array) {
    let greatestNumber = 0;
    for (let i = 0; i < array.length; i++) {
        if (greatestNumber < array[i]) greatestNumber = array[i];
    }
    console.log(greatestNumber);
}

one();
two();
three();
four([1,2,3,4,5,6]);