/**
 * First:
 * Draw a diagram of binary tree created from array [1,4,9,2,4,10,6,3,8]
 * See firstExercise.png
 */
/**
 * Second:
 * If a well balanced binary tree has 1000 values, what is the max number of steps to find something?
 * O(log 1000). Approximately 10 steps
 */
/**
 * Third:
 * Algorithm to find the greatest value of a binary tree
 */
function third(node) {
    if (node.rightChild) return third(node.rightChild);
    return node.value;
}
/**
 * Fourth:
 * Preorder traversal - write what is logged
 */
function fourth() {
    console.log("Moby Dick");
    console.log("Great Expectations");
    console.log("Alice in wonderland");
    console.log("Lord of the Flies");
    console.log("Robinson Crusoe");
    console.log("Pride and Prejudice");
    console.log("The Odyssey");
    // Basically parent node is first, rather than middle, resulting in different order of operations
    // No longer sorted - rather how it's built from top down
}
/**
 * Fifth:
 * Postorder traversal - write what is loggd
 */
function fifth() {
    console.log("Alice in wonderland");
    console.log("Lord of the Flies");
    console.log("Great Expectations");
    console.log("Pride and Prejudice");
    console.log("The Odyssey");
    console.log("Robinson Crusoe");
    console.log("Moby Dick");
    // Basically parent node is last
    // No longer sorted - first lowest level is logged, then the one above, then the one above - on specific branch
}