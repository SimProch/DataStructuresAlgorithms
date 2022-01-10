# Node Based Data Structures

## Linked List
- Similar to array
- Terminology
  - First node is HEAD
  - Last node is TAIL
- Memory allocated across computer, rather then adjacent cells in contrast to array
- Reading time complexity is O(N)
  - Nodes are dispersed throughtout memory
  - Computer doesn't know where to look
  - We need to access nodes linked to one another
    - Start on first node and recursively look chain of nodes until we have one that we want
- Searching time complexity is O(N) - basically same concept as reading, only different value returned
- Insertion is O(1), HOWEVER, the node we want to extend first has to be found
  - In reality, it's more like O(N)
  - First item in 1 step
  - Last item in N steps due to search
- Deletion is O(1), HOWEVER, the node we want to delete first has to be found
  - Same as Insertion
  - In reality, O(N)
- Extension can be doubly linked lists
  - Basically reference to parent node
  - Can be used to make insertion and deletion faster via starting at the end
- When insertion and deletion is O(1), these are very useful. Such structure is queue!
  - Queue is FIFO
  - Adds on end in O(1), removes on start in O(1)

## Summary
- Doubly linked lists are perfect for queues
- They are basically two-way objects

# Exercises start on page 245, solutions available on page 453