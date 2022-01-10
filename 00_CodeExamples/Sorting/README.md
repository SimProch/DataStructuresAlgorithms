# Quick sort
- On par with js.sort()
- Probably same code used

# Comparison
- Bubble sort, Insertion Sort and Selection sort are all O(N^2)
- Each has different efficiency
- Speeds:
  - All O(N^2)
  - Sorted
    - Bubble sort - fastest - N steps
    - Selection sort - slowest - N^2 / 2 steps
    - Insertion sort - middle - 2N steps
    - Quick sort - slowest - N^2 steps
  - Randomized
    - Bubble sort - slowest - N^2 steps
    - Selection Sort - middle - N^2 / 2 steps
    - Insertion sort - middle - N^2 / 4 steps (variable)
    - Quick sort - fastest - N log N steps
  - Reversed
    - Bubble sort - slowest - N^2 steps
    - Selection Sort - middle - N^2 / 2 steps
    - Insertion sort - middle - N^2 / 2 steps
    - Quick sort - slowest - N^2 steps
- Quick sort works best on average for best-case and average-case scenarios
- Optimization should be done with regards of which case do we want to cover
- Most likely, we want to cover average-case scenario