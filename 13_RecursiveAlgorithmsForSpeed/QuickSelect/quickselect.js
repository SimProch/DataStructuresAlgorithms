const arr = new Array(1000000).fill(false).map(i => Math.round(Math.random() * 1000000))
const fourthLowestElement = quickSelect(arr, 20, 0, arr.length - 1)
console.log(fourthLowestElement);

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
function quickSelect(array, nthLowestIndex, leftPointer, rightPointer) {
    if (rightPointer - leftPointer <= 0) return array[leftPointer];
    const pivotIndex = partition(array, leftPointer, rightPointer);
    if (nthLowestIndex < pivotIndex) return quickSelect(array, nthLowestIndex, leftPointer, pivotIndex - 1)
    else if (nthLowestIndex > pivotIndex) return quickSelect(array, nthLowestIndex, pivotIndex + 1, rightPointer)
    else return array[pivotIndex];
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

module.exports = { quickSelect };