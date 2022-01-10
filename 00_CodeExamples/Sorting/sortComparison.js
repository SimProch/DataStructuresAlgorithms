const utils = require("../utils");
const selectionSort = require("./selectionSort");
const bubbleSort = require("./bubbleSort");
const insertionSort = require("./insertionSort");
const quickSort = require("./quickSort");
const sortedArray = utils.getArrayOf1_000_000_Sorted();
const randomizedArray = utils.getArrayOf1_000_000_Randomized();
const reversedArray = utils.getArrayOf1_000_000_Reversed();

performSort(sortedArray, "sorted");
performSort(randomizedArray, "randomized");
performSort(reversedArray, "reversed");


function performSort(array, type) {
    const arrayCopy = array.slice(0, 10000);
    const bubbleSortCopy = array.slice(0, 10000);
    const selectionSortCopy = array.slice(0, 10000);
    const insertionSortCopy = array.slice(0, 10000);
    const quickSortCopy = array.slice(0, 10000);

    console.log("");
    console.log(type);
    console.time(`JS sort ${type}`)
    arrayCopy.sort((x, y) => x - y);
    console.timeEnd(`JS sort ${type}`)

    console.time(`Selection Sort ${type}`)
    selectionSort.selectionSort(selectionSortCopy);
    console.timeEnd(`Selection Sort ${type}`)


    console.time(`Bubble Sort ${type}`)
    bubbleSort.bubbleSort(bubbleSortCopy);
    console.timeEnd(`Bubble Sort ${type}`)

    console.time(`Insertion Sort ${type}`)
    insertionSort.insertionSort(insertionSortCopy);
    console.timeEnd(`Insertion Sort ${type}`)

    console.time(`Quick Sort ${type}`)
    quickSort.quickSort(quickSortCopy);
    console.timeEnd(`Quick Sort ${type}`)
}
