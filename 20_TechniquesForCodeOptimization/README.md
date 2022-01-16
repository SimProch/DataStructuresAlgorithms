# Techniques for Code Optimization

## Summary
- Before optimizing, always determine current efficiency
- Then consider best imaginable Big Oh and compare it with current efficiency
    - If you can't think of anything better than current, then don't solve
    - If you can, then you have a goal to go towards
    - It's possible current solution can't be improved further, or just partially. Keep that in mind
    - Even partial optimization can be worth
        - for example, O(N^2) is current, O(N) is imaginable, O(NlogN) is realistic
        - That's still a great improvement!
- If I can find something in O(1), can I make my algorithm faster?
  - If yes, use suitable data structure (often hash table)
  - Example can be making `separate arrays of books and author` into a `map` containing `book -> author`
  - Just use hash tables where you can 🤣😂
- Two sum problem is ideal for using hash tables
```js
// for [2,0,4,1,7,9], find first two pairs that together make 10
// we could use nested loops and search for O(N) or
const sumToGet = 10;
const arr = [2,0,4,1,7,9];
const dict = {};
for (let i = 0; i < arr.length; i++) {
    const requires = sumToGet - arr[i];
    if (dict[requiredValue]) return true;
    dict[arr[i]] = true;
}
return false
```
- Finding patterns - sometimes a complex O(2^N) problem can be reduced to O(1) just because there is a math pattern
- Greedy algorithm - making naive assumptions might sometimes help
  - See maxSubsectionSum
  - We could take all subsections of an array, but that'd be very complicated (basically separating array into all possible combinations)
  - Here, the greedy assumption is that we are taking the greatest number at the moment we are moving through array, similarly to getting max value
  - That alone wouldn't work - we had to find the pattern that if any numbers causes the total sum go below 0, it's better off ignoring these numbers
- Greedy stock predictions
    - Find whether there is an upward trend (there are 3 prices that show an upward trend)
    - Find the lowest value
    - Determine whether there are 2 values that are higher than the lowest value
    - We greedily expect that each number we encounter is the lowest
    - From this lowest number, we then search for higher values
- Changing data structure
  - Finding whether 2 words are anagrams
    - Either sort, then compare with the other
    - Or create a hash table and take count of the values. Then compare the hash tables
    - Sort is slower - O(N log N + M log M), depending on algorithm, vs O(N + M) in second approach
  - Group sorting
    - ['a', 'b', 'a', 'a', 'b', 'c', 'c'] -> ['a', 'a', 'a', 'b', 'b', 'c', 'c']
    - Same as previously - use hash table to keep count, rather than sort. Sort is O(N log N), hash table is O(N)
# Exercises start on page 395, solutions available on page 464
