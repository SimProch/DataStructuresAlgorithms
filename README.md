# README.md

This repository serves for code examples and notes from book [A Common-Sense Guide to Data Structures and Algorithms](https://www.amazon.com/Common-Sense-Guide-Data-Structures-Algorithms/dp/1680502441).  

## Summary
- All in all, great book for starting with algorithms and data structures
- O(N) - constants are skipped, so even if we loop 10 times over an array, it is realistically O(10), but uses O(N) notation
- This way, we can make faster code without improving Big Oh (BubbleSort -> SelectionSort)
- Stacks and queues were introduced. Stack example was great - a very basic linting done via stacks. Queues had worse example
- First, sorts were reviewed to introduce these concepts. Done sorts are bubble, selection, insertion and quick
  - Note that quicksort is not O(log N) in space, it could fail on large numbers unless updated
- Then, hash tables were introduced. In JS, this is very obvious, as every object is basically a hash table
- Recursion showed quick sort and memoization (passing object with previous results down the line)
- Then, node based data structures came
- Node based data structures showed linked lists, which are great data structure for insertion/deletion at the end/start. They are great for queues for example
- Then, Binary Search Trees were shown. These are great if we can afford to keep our numbers sorted from start
- Heaps showed that we can work with an array as we would with a tree, but it has to be specific
  - Heaps must be a complete tree, and complete tree can be rewritten into an array
  - This allows us to be very fast
- Then, tries were shown. Yet another tree, but with multiple children. Autocomplete and autocorrect was done here
- Graphs showed that they are a superset of trees - all trees are graphs, but not all graphs are trees
- Graphs focus on relationship between data
- We've looked at weighted and unweighted graphs
  - Unweighted - followers on twitter, friends on facebook. How are data related to one another. Followers were directed (one way), friends were undirected (2-way)
  - Weighted were a different view - we added values to edges. Basically, this allowed us to create a simple algorithm for calculating plane prices between cities
- As part of graphs, we looked at interesting algorithms for traversing/finding closest node/pathfinding
  - Breadth-first search, depth-first search (Unweighted graphs)
  - Dijkstra (Weighted)
- Small chapter on space constraints was also part of this book. Here, we learned what space constraints are and how to deal with them
- Lastly, there were some techniques for code optimization. Basically showed various tasks that at first glance can be achieved in slow time, but they could be improved by
  - Finding patterns
  - Using different data structure
  - Find better algorithm

### Potential feedback for author if I reach out
- Fantastic book
- Everything was written for beginners. Therefore, each step of algorithm is showed on a small example. This is great should one get lost in the code
- Even though examples are in 3 different languages (Ruby, Python, JS), they were very easy to follow
  - Except dijkstra's algorithm. That one was harder. My JS code does the same thing, but half of it is different
  - That might get better
- Quicksort is not O(log N) in space and throws error on own examples, I've implemented tail call recursion myself
- Queues could use a better example - printers is very basic example, but it was hard to find any other until I've found myself doing BFS
- I understand that this book deals with algorithms, but most of them are in place changes. The clean coder in me hates the idea of debugging such code. I think it'd be a nice idea to at least mention it, since tradeoffs are mentioned only as time vs space constraints, but don't consider anything else. This might be intentional though as to not introduce any more concepts.

## To be done as a result of reading this book
- Implement own queue using doubly linked list, rather than currently implemented array
- Use such queue in BFS
- Review BFS/DFS/Dijkstra
- Apply in AoC2021 task