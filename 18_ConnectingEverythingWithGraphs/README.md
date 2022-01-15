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

## Unweighted Graphs
- Searching
  - When searching we want to find a particular vertex somewhere in the graph, similarly to other structures
  - It can also have a more specific meaning - If there is access to one vertex, find another vertex that is somehow connected to current vertex
  - Since graphs can be connected in multiple ways, this basically means:
    - Vertex A can be connected to vertex B in multiple ways
    - Find this path from one vertex to another
  - Searching is also used for traversing
  - The key for searching is that we want to keep which vertices we've already visited
  - Well-known algorithms are Depth-first search and Breadth-first-search

### DFS
- Start at any vertex (`startingVertex`)
- Add current vertex to `visited` hash table
- Iterate over adjacent vertices
- For each adjacent vertex, if it has been visited, skip it
- If it has not been visited, recursively perform DFS (back to first step, new start is the adjacent vertex)

### BFS
- Start at any vertex (`startingVertex`)
- Add current vertex to `visited` hash table
- Add current vertex to a queue
- Start a loop that runs until queue is not empty
- Iterate over all adjacent vertices
- If adjacent vertice was already visited, ignore it
- If it has not been visited, mark it as visited using hash table, and at it to the queue
- Repeat loop that is based on queue

### DFS vs BFS
- Difference between BFS and DFS
- DFS goes as far as possible from the starting node until it was encountered again 
    - (In the example, Alice -> Bob -> Fred -> Helen -> Candy -> Alice)
- BFS goes never returns to starting node, rather it goes edge by edge
    - (In the example, Alice -> Bob -> Candy -> Fred -> Helen)
- It is not possible to say one is better than the other - in some scenarios, DFS may be faster. In others, BFS
- If we expect a vertex to be close to starting point, it's better to use BFS (goes edge by edge)
- If we expect it to be at the end, it's better to use DFS (goes as far as possible until dead end)
- We always need to ask ourselves if we want to stay close to the start (BFS), or if we want to go as far as possible first (DFS)
- Efficiency of BFS and DFS is related to number of vertices, as well as number of adjacent neighbors
- This in Big Oh is called O(V + E) (Vertex + Edges) for both DFS and BFS
- Graph can be stored in speciali databases. 
  - [Neo4J](https://neo4j.com/)
  - [ArangoDB](https://www.arangodb.com/)
  - [Giraph Apache](https://giraph.apache.org/)

## Weighted Graphs
- Weighted graphs has additional information about edges
- For example, distance between different cities
- It can also be directional graph (flight from city A to B is more expensive than vice versa)


# Exercises start on page 384, solutions available on page 561