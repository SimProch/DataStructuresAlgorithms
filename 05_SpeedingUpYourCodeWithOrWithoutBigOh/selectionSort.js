
const utils = require("../00_CodeExamples/utils");
let array = utils.getArrayOf1_000_000_Randomized();
let arrayCopy = [...array];

/**
 * We compare first item with all others.
 * We swap them if they are out of order
 * If they are not out of order, we keep it
 * We repeat this process until the array is sorted 
 * In comparison to bubble sort, we have sorted on start rather than end.
 * Therefore, every next iteration has 1 less step
 * for example, if we've already sorted 3 items out of 5, we only need to compare 2 items
 * 
 * Extremely slow - log(N^2). For 100 elements, this takes ~3.2k steps.
 */
function selectionSort() {
    let numberOfSteps = 0;
    for (let i = 0; i < array.length; i++) {
        let lowestIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            numberOfSteps++
            if (array[lowestIndex] > array[j]) lowestIndex = j;
        }
        if (lowestIndex !== i) {
            numberOfSteps++
            const temp = array[i];
            array[i] = array[lowestIndex];
            array[lowestIndex] = temp;
        }
    }
    console.log(numberOfSteps);
}

arrayCopy = array.slice(0, 100);
console.time("JS sort")
arrayCopy.sort((x,y) => x - y);
console.timeEnd("JS sort")
console.time("Selection Sort")
array = array.slice(0, 10000); // make array smaller so it actually finishes
selectionSort();
console.timeEnd("Selection Sort")
