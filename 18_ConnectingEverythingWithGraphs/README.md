# Connecting Everything With Graphs

## Graphs
- Graph is a data strructure that specializes in relationships as it easily conveys how data is connected
- Graphs are similar to trees:
  - All trees are graphs. But not all graphs are trees.
  - Trees can't be circular and all nodes must be connected
  - Graph allows some nodes to be disconnected
  - Graph allows circular relationship. If a graph has cycle, it is nota tree
- Terminology
  - Node == vertex (nodes == vertices)
  - Link == edge
  - Two vertices connected by an edge (two nodes linked together) are `adjacent` or `neighbors`
  - If all vertices are connected, then it is a `connected graph`
- Directed graph - a graph that has one-way edges (followers on twitter)
- Undirected graph - a graph that has two-way edges (friends on facebook)
- Disconnected graph - It is possible we can't find all nodes from any node. Because of that, often another structure is used to store all the vertices (another graph perhaps)
- We can use adjacency list or adjacency matrix to find adjacent vertices. This book explores only adjacency list
- Searching
  - When searching we want to find a particular vertex somewhere in the graph, similarly to other structures
  - It can also have a more specific meaning - If there is access to one vertex, find another vertex that is somehow connected to current vertex
  - Since graphs can be connected in multiple ways, this basically means:
    - Vertex A can be connected to vertex B in multiple ways
    - Find this path from one vertex to another
  - The key for searching is that we want to keep which vertices we've already visited
  - Well-known algorithms are Depth-first search and Breadth-first-search
    - DFS
      - 
    - BFS
      - 


## Additional trees


# Exercises start on page 384, solutions available on page 561