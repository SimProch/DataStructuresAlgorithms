function SortableArray(array) {
    this.arr = array;
    this.length = () => this.arr.length;

    /**
     * When called, swaps elements that are not in order in an array.
     * The array is traversed from both side using pointers.
     * The left poiter specifies the first comparing number.
     * The right pointer specifies the second comparing number.
     * The pivot specifies the element to be moved to its correct position. It is always the rightmost element of a partition
     * If the two numbers are out of order, they are swapped.
     * In the end, pivot is always in its correct spot, with lesser numbers on left and higher numbers on right
     * 
     * @param {number} leftPointer specifies the first number position from the start of the array.
     * @param {number} rightPointer specifies the second number position from the end of the array
     * @returns {number} final pivot index
     */
    this.partition = (leftPointer, rightPointer) => {
        let pivotIndex = rightPointer;
        let pivot = this.arr[pivotIndex];
        rightPointer--;
        while (true) {
            while (this.arr[leftPointer] < pivot) leftPointer++;
            while (this.arr[rightPointer] > pivot) rightPointer--;
            if (leftPointer >= rightPointer) break;
            else {
                this.swapArrayElements(leftPointer, rightPointer);
                leftPointer++;
            }
        }
        this.swapArrayElements(leftPointer, pivotIndex);
        return leftPointer;
    }
    
    this.swapArrayElements = (first, second) => [this.arr[first], this.arr[second]] = [this.arr[second], this.arr[first]]

    /**
     * Quicksort uses a combination of partition and recursion to get the job done
     * The array is partitioned so that the initial pivot is in it's proper place
     * The array is then split into 2 subarrays that are sorted on their own using partition
     * We know the array is unsorted while there are still some arrays with length higher than 1 to the left or right)
     * Therefore, the base case is when left pointer is bigger or equal to right pointer
     * @returns sorted array.
     */
    this.quickSort = (leftPointer, rightPointer) => {
        if (rightPointer - leftPointer <= 0) return;
        const pivotIndex = this.partition(leftPointer, rightPointer);
        this.quickSort(leftPointer, pivotIndex - 1);
        this.quickSort(pivotIndex + 1, rightPointer);
    }
}

const arr = new SortableArray([0,5,2,1,6,3])
arr.quickSort(0, arr.length() - 1);
console.log(arr);