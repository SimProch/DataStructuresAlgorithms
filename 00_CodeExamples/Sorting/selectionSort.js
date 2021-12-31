
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
function selectionSort(array) {
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


module.exports = {
    selectionSort
}