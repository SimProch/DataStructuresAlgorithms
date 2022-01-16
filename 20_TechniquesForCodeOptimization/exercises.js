// Find those that are present in both arrays in O(N)
function first(arr1, arr2) {
    const dict = {};
    arr1.forEach(i => {
        const fullname = i.firstName + " " + i.lastName
        dict[fullname] = true; 
    })
    return arr2.filter(i => {
        const fullname = i.firstName + " " + i.lastName
        return dict[fullname];
    })
}

const firstRes = first(
    [
        { firstName: "Jill", lastName: "Huang"},
        { firstName: "Wanda", lastName: "Vakulskas"},
        { firstName: "Janko", lastName: "Barton"},
    ],
    [
        { firstName: "Jill", lastName: "Huang"},
        { firstName: "Wanda", lastName: "Vakulskas"},
        { firstName: "Hanzla", lastName: "Radosti"},
    ],
);
console.log(firstRes);

// Find missing number in array in O(N)
// this, or calculate the sum of real array and calculate what the sum should be for array of same length
function second(arr) {
    const dict = {};
    arr.forEach(i => (dict[i] = true));
    for (let i = 0; i < arr.length; i++) {
        if (!dict[i]) return i;
    }
    return null
}
console.log(second([2,3,0,6,1,5]))
console.log(second([8,2,3,9,4,7,5,0,6]))

// get maximum number from stock trading
// basically array input and calculate which 2 consecutive numbers are furthest away
// aim for O(N)
function third(arr) {
    let previousGreatest = 0;
    let previous = arr[0];
    for (let i = 1; i < arr.length; i++) {
        const currentGreatest = previous - arr[i];
        if (previousGreatest < currentGreatest) previousGreatest = currentGreatest;
        previous = arr[i];
    }
    return previousGreatest
    
}
console.log(third([10,7,5,8,11,2,6]))

// function that calculates the product of two lowest numbers in O(N)
function fourth(arr) {
    let lowestIndex = 0;
    let lowest = Infinity
    let secondLowest = Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < lowest) {
            lowest = arr[i];
            lowestIndex = i;
        }
        if (arr[i] < secondLowest && i !== lowestIndex) secondLowest = arr[i];
    }
    return lowest * secondLowest
}
console.log(fourth([5, -10, -6, 9, 4]))
console.log(fourth([1, 1, 2, 3]))

// write a sort function for list of body temperatures that is O(N)
// we can sort from start to end IF we know precisely the highest and lowest value
// and if it's reasonable to iterate over it
// in this example, values are from 97 to 99 with one decimal place. Therefore, we can iterate over 97 to 99 (* 10 due to decimal)
// Then, we just push the occurences in the result
function fifth(arr) {
    const dict = {};
    arr.forEach(i => {
        dict[i] ??= 0;
        dict[i]++;
    });
    const result = [];
    for (let i = 970; i <= 990; i++) {
        const numberOfCurrentOccurences = dict[i / 10];
        for (let j = 0; j < numberOfCurrentOccurences; j++) {
            result.push(i / 10);
        }
    }
    return result;
}

console.log(fifth([98.6,98.0, 97.1, 99.0, 98.9, 97.8, 98.5, 98.2, 98, 97.1]))

// get longest consecutive sequence length in O(N)
function sixth(arr) {
    const dict = {};
    arr.forEach(i => dict[i] = true);
    let greatestSequenceLength = 0
    arr.forEach(number => {
        // skip all that are not first in sequence
        if (dict[number - 1]) return;
        let currentSequenceLength = 1;
        let currentNumber = number;
        while (dict[currentNumber + 1]) {
            currentNumber++;
            currentSequenceLength++;
            if (currentSequenceLength > greatestSequenceLength) greatestSequenceLength = currentSequenceLength
        }
    })
    return greatestSequenceLength
}

console.log(sixth([10,5,12,3,55,30,4,11,2])) // -> 2-3-4-5 (4)
console.log(sixth([19,13,15,12,18,14,17,11])) // -> 11-12-13-14-15 (5)
