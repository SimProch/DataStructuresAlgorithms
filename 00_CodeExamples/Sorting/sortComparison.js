const utils = require("../utils");
const selectionSort = require("./selectionSort");
const bubbleSort = require("./bubbleSort");
const insertionSort = require("./insertionSort");
const array = utils.getArrayOf1_000_000_Randomized();
const arrayCopy = array.slice(0, 10000);
const bubbleSortCopy = array.slice(0, 10000);
const selectionSortCopy = array.slice(0, 10000);
const insertionSortCopy = array.slice(0, 10000);


console.time("JS sort")
arrayCopy.sort((x,y) => x - y);
console.timeEnd("JS sort")

console.time("Selection Sort")
selectionSort.selectionSort(selectionSortCopy);
console.timeEnd("Selection Sort")


console.time("Bubble Sort")
bubbleSort.bubbleSort(bubbleSortCopy);
console.timeEnd("Bubble Sort")

console.time("Insertion Sort")
insertionSort.insertionSort(insertionSortCopy);
console.timeEnd("Insertion Sort")
