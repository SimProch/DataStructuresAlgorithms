// O(N^2) - multiple recursive calls
function getHighestNumberInArray(arr) {
    if (arr.length === 1) return arr[0];
    if (arr[0] > getHighestNumberInArray(arr.slice(1))) return arr[0]
    else return getHighestNumberInArray(arr.slice(1));
}

// O(N) - single recursive call
function getHighestNumberInArrayV2(arr) {
    if (arr.length === 1) return arr[0];
    const highestNum = getHighestNumberInArrayV2(arr.slice(1));
    if (arr[0] > highestNum) return arr[0]
    else return highestNum;
}

const numberArray = new Array(25).fill(true).map((x,i) => ++i);
// 1.25s
console.time("first")
console.log(getHighestNumberInArray(numberArray));
console.timeEnd("first")
// 0.3ms
console.time("second")
console.log(getHighestNumberInArrayV2(numberArray));
console.timeEnd("second")