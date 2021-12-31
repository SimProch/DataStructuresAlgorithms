function linearSearch(searchFor, array) {
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

module.exports = {
    linearSearch
}