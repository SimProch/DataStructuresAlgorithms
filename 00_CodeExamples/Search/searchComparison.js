const utils = require("../utils");
const array = utils.getArrayOf1_000_000_Sorted();
const binarySearch = require("./binarySearch")
const linearSearch = require("./linearSearch");

console.time("binary upper half");
for (let i = 0; i < 1000; i++) {
    binarySearch.binarySearch(800000, array)
}
console.timeEnd("binary upper half")

console.time("linear upper half");
for (let i = 0; i < 1000; i++) {
    linearSearch.linearSearch(800000, array)
}
console.timeEnd("linear upper half")

console.time("binary lower half");
for (let i = 0; i < 1000; i++) {
    binarySearch.binarySearch(100, array)
}
console.timeEnd("binary lower half")

console.time("linear lower half");
for (let i = 0; i < 1000; i++) {
    linearSearch.linearSearch(100, array)
}
console.timeEnd("linear lower half")