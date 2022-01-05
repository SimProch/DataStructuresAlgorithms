/**
 * Calculates the number of available paths on a staircase if one can take 1, 2 or 3 steps at a time
 * For 1 stepped staircase, there is only 1 way to go (1) 
 * For 2 stepped staircase, there are 2 ways to go (1,1 and 2) 
 * For 3 stepped staircase, there are 4 ways to go (1,1,1 and 1,2 and 2,1 and 3) 
 * @param {number} numberOfSteps defines
 * @returns number of available paths
 */
function staircase(numberOfSteps) {
    if (numberOfSteps < 0) return 0
    if (numberOfSteps == 1 || numberOfSteps == 0) return 1
    return staircase(numberOfSteps - 3) + staircase(numberOfSteps - 2) + staircase(numberOfSteps - 1)
}

console.log(staircase(5))
console.log(staircase(11))