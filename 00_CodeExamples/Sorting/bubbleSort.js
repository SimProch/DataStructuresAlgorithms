
/**
 * We compare all adjacent items and swap them if they are out of order
 * If they are not out of order, we keep it
 * We repeat this process until the array is sorted 
 * Once an item is at the end, we know it is the highest one
 * Therefore, every next iteration has 1 less step
 * for example, if we've already sorted 3 items out of 5, we only need to compare 2 items
 * 
 * Extremely slow - log(N^2). For 100 elements, this takes 5k steps.
 */
function bubbleSort(array) {
    let numberOfSorted = 0;
    let numberOfSteps = 0;
    let sorted = false;
    while (!sorted) {
        const unsortedUntil = array.length - numberOfSorted
        sorted = true;
        for (let i = 0; i < unsortedUntil; i++) {
            numberOfSteps++;
            const previous = array[i];
            const next = array[i + 1];
            if (previous > next) {
                numberOfSteps++;
                array[i] = next;
                array[i + 1] = previous;
                sorted = false;
            }
        }
        numberOfSorted++;
    }
    console.log(numberOfSteps)
}

module.exports = {
    bubbleSort
}