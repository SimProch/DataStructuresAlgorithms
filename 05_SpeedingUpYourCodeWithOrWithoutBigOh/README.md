# Speeding up your code with or without Big Oh

## How
- Here we're talking smaller differences
- Bubble sort is slower than selection sort as bubble sort performs more operation inside loop - more swaps, same comparisons
- However, both are O(N^2) (Even though selection sort takes half steps due to less comparisons)
- That is because Big Oh ignores constant - if something always takes 100 steps, it's considered O(1) - constant time is ignored

## Without Big Oh
- Similarly to bubble sort and selection sort, we are dealing with same category
- However, one can be faster than another
- Example:
```js
// first
for (let i = 0; i < 1_000_000; i++) {
    const j = i;
    const c = i;
    console.log(i);
}
// second
for (let i = 0; i < 1_000_000; i++) {
    console.log(i);
}
```
- While they are both O(N), the latter is faster than the first one
- The reason for that is that it actually does less operations
- While the first one does 3 * 1m operations, the second one performs only 1m
- Therefore, Big Oh is same, but the result is different
- It's the same with bubble sort and selection sort - while they both are O(N^2), the latter is faster due to less operations done in each cycle.

## Summary
- In layman terms, we can optimize code via:
  - Wisely choosing data structure (Allows for better algorithms for specific problems)
  - Wisely choosing algorithm (Allows for better Big Oh classification)
  - Performing only necessary steps (Reducing number of steps yet retaining Big Oh notation)