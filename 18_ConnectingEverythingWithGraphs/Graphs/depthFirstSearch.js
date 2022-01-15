const UndirectedVertex = require("./Vertex").UndirectedVertex;

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

function depthFirstSearch(current, searchValue, path = {}) {
    if (current.value === searchValue) return current;
    path[current.value] = true;
    for (let i = 0; i < current.adjacentVertices.length; i++) {
        const adjacentVertex = current.adjacentVertices[i];
        if (path[adjacentVertex.value]) continue;
        if (adjacentVertex.value === searchValue) return adjacentVertex;
        const foundVertex = depthFirstSearch(adjacentVertex, searchValue, path);
        if (foundVertex) return foundVertex;
    }
    return null;
}

const vertex = depthFirstSearch(alice, "Bob")
console.log(vertex);