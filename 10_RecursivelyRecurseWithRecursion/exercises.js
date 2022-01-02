/**
 * Base case of a function
 */
function one() {
    console.log("When first arg is bigger than second")
}

/**
 * Factorial recursion with n - 2
 */
function two() {
    console.log("Stack overflow - never hits base case")
}

/**
 * Add base case
 */
function three() {
    console.log("if (low === high) return 0")
}

/**
 * Function that prints all numbers in nested array
 */
function four(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) four(arr[i])
        else console.log(arr[i])
    }
}

one();
two();
three();
four([
    1,2,3,[4,5,6],7,8,9,[10,[11,[12],13,[14,15]],16]
]);