const utils = require("./utils");
const array = utils.getArrayOf1_000_000_Sorted();

function linearSearch(searchFor) {
    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        if (current === searchFor) {
            return {
                index: i,
                numberOfSteps: i
            }
        }
    }
    throw new Error("Item does not exist");

}

// const for500000 = linearSearh(500_000);
// const for2 = linearSearh(2);
// const for1 = linearSearh(1);
// console.log(for500000);
// console.log(for2);
// console.log(for1);

module.exports = {
    linearSearch
}