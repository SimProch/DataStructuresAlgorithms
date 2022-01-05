/**
 * Function that creates list of anagram from a word
 * I really hate this solution
 * @param {string} word - word from which to create anagrams 
 * @returns array of anagrams
 */
function anagramGenerator(word) {
    if (word.length === 1) return [word[0]]
    const arr = [];
    const anagrams = anagramGenerator(word.slice(1));
    anagrams.forEach(anagram => {
        for (let i = 0; i <= anagram.length; i++) {
            let copy = anagram
            copy = copy.slice(0,i) + word[i] + copy.slice(i);
            arr.push(copy);
        }
    })
    return arr;
}

console.log(anagramGenerator("abc"));
// console.log(anagramGenerator("abcdefg"));