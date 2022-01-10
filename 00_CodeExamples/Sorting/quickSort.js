/**
 * The quicksort uses a combination of partition and recursion to iterate over array and sort portions of array until it is sorted
 * When first called, it sorts rightmost element (pivot) to its proper position
 * Then, it repeats this partition for various parts of the array until everything has been partitioned, resulting in sort
 * Note for me: The subarray is never created. We just use pointers in a clever way.
 * We do not create another array to iterate over
 * We only work with pointers so that next iteration end earlier/start later
 * 
 * @param {array} array is the array to sort
 * @param {number} leftPointer is the left comparing element position
 * @param {number} rightPointer is the right comparing element position
 */
function quickSort(array, leftPointer = 0, rightPointer = array.length - 1) {
    while (leftPointer < rightPointer) {
        const pivotIndex = partition(array, leftPointer, rightPointer);
        if (pivotIndex - leftPointer < rightPointer - pivotIndex) {
            quickSort(array, leftPointer, pivotIndex - 1);
            leftPointer = pivotIndex + 1;
        }
        else {
            quickSort(array, pivotIndex + 1, rightPointer);
            rightPointer = pivotIndex - 1;
        }
    }
}

function partition(arr, leftPointer, rightPointer) {
    let pivotIndex = rightPointer;
    let pivot = arr[pivotIndex];
    rightPointer--;
    while (true) {
        while (arr[leftPointer] < pivot) leftPointer++;
        while (arr[rightPointer] > pivot) rightPointer--;
        if (leftPointer >= rightPointer) break;
        else {
            swapArrayElements(arr, leftPointer, rightPointer);
            leftPointer++;
        }
    }
    swapArrayElements(arr, leftPointer, pivotIndex);
    return leftPointer;
}

function swapArrayElements(arr, first, second) {
    [arr[first], arr[second]] = [arr[second], arr[first]]
}

module.exports = { quickSort }