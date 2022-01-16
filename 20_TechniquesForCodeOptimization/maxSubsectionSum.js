const arr = [3, -4, 4, -3, 5, -9];
console.log(maxSubsectionSum(arr));

function maxSubsectionSum(arr) {
    let currentSum = 0;
    let greatestSum = 0;
    arr.forEach(element => {
        if (currentSum + element < 0) currentSum = 0;
        else {
            currentSum += element;
            if (currentSum > greatestSum) greatestSum = currentSum
        }
    });
    return greatestSum;
}