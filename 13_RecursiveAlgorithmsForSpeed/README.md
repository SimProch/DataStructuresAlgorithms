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
- Used to select nth element based on some condition from an array
- The implementation here shows how to select nth lowest element in an unsorted array
- The complexity is O(2N) -> O(N)
- Note that this is not searching, but selecting
  - Searching is based on some condition
  - Selection searches for nth element
  - See more on [SO](https://stackoverflow.com/questions/10863093/difference-between-quickselect-binary-search-selection)

### Why
Though sorting is part of most programming languages nowadays (and O(N log N) seems to be the fastest speed available),
it doesn't mean we shouldn't rlearn them. There are more similar algorithms, such as mergeSort.  
  
Furthermore, presorting array allows us to do faster operations. For example, checking for duplicate values would have to be something like O(N^2) due to nested search. However, if we sort the array first, we can compare just adjacent numbers and end up with O(N) (or rather N log N, due to sorting).

# Exercises start on page 224, solutions available on page 451
