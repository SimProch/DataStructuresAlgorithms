# Recursive algorithms for speed

## Summary
- Quicksort was created as part of this example
- Quickselect was created as part of this example
- JS Subarrays performed on original arrays were also encountered. Not necessarily due to book contents
  - I was interested as to how we can modify original array from subarray, if we can

### Quicksort
- To quicksort, we use a combination of recursion and partitioning
- Partition
  - Set rightmost element to its proper position in an array
  - Move all lesser elements to the left side of the array
  - Move all higher elements to the right side of the array
- After partition is done once, it is then repeated for remaining numbers
  - Effectively two subarrays - one on the left, one on the right
  - Instead of `array.slice(0, pivotIndex)` and `array.slice(pivotIndex + 1)` to make subarrays, pointers are cleverly used
- Efficiency in worst case scenario is similar to SelectionSort/InsertionSort - O(N^2). 
- In best case and average case scenario, it is O(N log N)
- It is efficient when array is mixed up well
  - We "halve" the array
- It is inefficient if partitioning doesn't cause the pivot to be in the middle - typically reversed arrays (perfect ascending/descending order)
  - The array is not halved, rather we perform (N + N - 1 + N - 2 + N - 3 + ... + 1) steps (due to partitions being extremely uneven)

### QuickSelect


# Exercises start on page 197, solutions available on page 450
