const UndirectedVertex = require("../Vertex").UndirectedVertex;
const Queue = require("./Queue").Queue;

const alice = new UndirectedVertex("Alice");
const candy = new UndirectedVertex("Candy");
const bob = new UndirectedVertex("Bob");
const fred = new UndirectedVertex("Fred");
const helen = new UndirectedVertex("Helen");
const derek = new UndirectedVertex("Derek");
const elaine = new UndirectedVertex("Elaine");
const gina = new UndirectedVertex("Gina");
const irena = new UndirectedVertex("Irena");

alice.addAdjacentVertex(bob); 
alice.addAdjacentVertex(candy); 
bob.addAdjacentVertex(fred);
fred.addAdjacentVertex(helen);
candy.addAdjacentVertex(helen);
alice.addAdjacentVertex(derek);
alice.addAdjacentVertex(elaine);
derek.addAdjacentVertex(elaine);
derek.addAdjacentVertex(gina);
gina.addAdjacentVertex(irena);
/**
 * While DFS uses recursion, BFS find a specific vertex using queues
 */
function breadthFirstSearch(starting, searchValue) {
    const queue = new Queue();
    const visited = {};
    visited[starting.value] = true;
    queue.enqueue(starting)
    let current;
    while (queue.read()) {
        current = queue.dequeue();
        if (current.value === searchValue) return current;
        console.log(current.value);
        current.adjacentVertices.forEach(adjacentVertex => {
            if (visited[adjacentVertex.value]) return;
            visited[adjacentVertex.value] = true;
            queue.enqueue(adjacentVertex);
        })
    }
    return null;
}

const vertex = breadthFirstSearch(alice, "Irena")
console.log(vertex);
