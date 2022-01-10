const quickSelect = require("./QuickSelect/quickselect").quickSelect;
/**
 * Array of positive numbers.
 * Write a function to find the greatest product of any three numbers
 * Use sorting to make it O(N log N)
 */
function one(arr) {
    arr.sort((x, y) => x - y);
    const highestProductOfThree = arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3];
    console.log(highestProductOfThree)
    return highestProductOfThree
}

/**
 * Function that attempts to find missing number in an array of integers
 * Original function is O(N^2)
 * Improve to O(log N)
 */
function two(arr) {
    // original
    // for (let i = 0; i < array.length; i++) {
    //     if (!array.includes(i)) return i;
    // }
    // return null
    arr.sort((x, y) => x - y);
    for (let i = 0; i < arr.length; i++) {
        if (i !== arr[i]) return i;
    }
    return null;
}

/**
 * Write three different implementations of finding greatest number in an array
 */
function three(arr) {
    const firstArr = [...arr];
    let first;
    for (let i = 0; i < firstArr.length; i++) {
        let isFirstGreatest = true;
        for (let j = 0; j < firstArr.length; j++) {
            if (firstArr[j] > firstArr[i]) isFirstGreatest = false;
        }
        if (isFirstGreatest) {
            first = firstArr[i];
            break;
        }
    }

    // O(N log N) - sort using quicksort
    const secondArr = [...arr].sort((x, y) => x - y);
    console.log(secondArr);
    const second = secondArr[secondArr.length - 1];

    // O(N) - quickselect or Math.max
    const thirdArr = [...arr];
    const third = quickSelect(thirdArr, thirdArr.length - 1, 0, thirdArr.length - 1);

    return { first, second, third };
}


one([2, 3, 7, 8, 1, 11, 20, 100, 100]);
console.log(two([0, 1, 3, 4]));
console.log(two([0, 1, 2, 3, 4]));
console.log(three([10, 2, 4, 1, 3, 5, 6, 8, 7, 9]));