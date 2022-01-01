/**
 * Placing on hold in call center
 */
function one() {
    console.log("queue")
}

/**
 * Pushed to stack [1,2,3,4,5,6] and popped 2 items, what will be read next
 */
function two() {
    console.log("4")
}

/**
 * Inserted numbers [1,2,3,4,5,6] to queue and dequeued two, what will be read next
 */
function three() {
    console.log("3")
}

/**
 * Stack function for reversing a string
 */
const Stack = require("../00_CodeExamples/StacksAndQueues/Stack").Stack;
function four(str) {
    const stack = new Stack();
    for (let i = 0; i < str.length; i++) stack.push(str[i]);
    let reversed = "";
    while (stack.read()) reversed += stack.pop();
    console.log(reversed);
}

one();
two();
three();
four("abcde");