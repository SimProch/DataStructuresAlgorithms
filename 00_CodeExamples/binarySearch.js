const utils = require("./utils");
const array = utils.getArrayOf1_000_000();

function binarySearch(searchFor) {
    let lowerBound = 0;
    let upperBound = array.length - 1;
    const firstOrLast = getFirstAndLast();
    if (firstOrLast) return firstOrLast;
    const result = performBinarySearch();
    if (!result) throw new Error("Item does not exist");
    return result;

    /**
     * Looks at the first and last value to see if they are what we search for
     * We don't need to use this function - it takes 1 step to find this using this function
     * It takes 19 steps to find this using while loop below
     * @returns index and number of steps taken to find this index
     */
    function getFirstAndLast() {
        const firstItem = array[lowerBound];
        if (firstItem === searchFor) return {
            index: lowerBound,
            numberOfSteps: 1
        }
        const lastItem = array[upperBound];
        if (lastItem === searchFor) return {
            index: upperBound - 1,
            numberOfSteps: 1
        }
        return false;
    }

    /**
     * Halve the array each time we access a value
     * If the value at midpoint is higher than what we search for, update upper bound
     * If the value at midpoint is smaller than what we search for, update lower bound
     * If upper bound is updated, we will be effectively looking at lower half of the array
     * If lower bound is updated, we will be effectively looking at upper half of the array
     * @returns index and number of steps taken
     */
    function performBinarySearch() {
        let numberOfSteps = 0;
        while (upperBound >= lowerBound) {
            numberOfSteps++;
            const middlePoint = Math.floor((upperBound + lowerBound) / 2)
            const current = array[middlePoint];
            if (current === searchFor) {
                return {
                    index: middlePoint,
                    numberOfSteps
                }
            };
            if (current > searchFor) upperBound = middlePoint - 1;
            if (current < searchFor) lowerBound = middlePoint + 1;
        }
        throw new Error("Item does not exist");
    }
}

// const for500000 = binarySearch(500_000);
// const for2 = binarySearch(2);
// const for1 = binarySearch(1);
// console.log(for500000);
// console.log(for2);
// console.log(for1);

module.exports = {
    binarySearch
}