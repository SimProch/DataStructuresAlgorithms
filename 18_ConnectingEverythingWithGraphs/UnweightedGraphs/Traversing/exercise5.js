const UndirectedVertex = require("../Vertex").UndirectedVertex;
const Queue = require("./Queue").Queue;

const idris = new UndirectedVertex("Idris");
const kamil = new UndirectedVertex("Kamil");
const talia = new UndirectedVertex("Talia");
const lina = new UndirectedVertex("Lina");
const ken = new UndirectedVertex("Ken");
const marco = new UndirectedVertex("Marco");
const sasha = new UndirectedVertex("Sasha");

idris.addAdjacentVertex(kamil);
kamil.addAdjacentVertex(lina);
idris.addAdjacentVertex(talia);
talia.addAdjacentVertex(ken);
ken.addAdjacentVertex(marco);
marco.addAdjacentVertex(sasha);
sasha.addAdjacentVertex(lina);

const vertex = breadthFirstSearch(idris, lina.value)
console.log(vertex);


function breadthFirstSearch(starting, searchValue) {
    const queue = new Queue();
    const visited = {};
    visited[starting.value] = true;
    queue.enqueue(starting)
    let current;
    while (queue.read()) {
        current = queue.dequeue();
        if (current.value === searchValue) break;
        console.log(current.value);
        current.adjacentVertices.forEach(adjacentVertex => {
            if (visited[adjacentVertex.value]) return;
            visited[adjacentVertex.value] = true;
            queue.enqueue(adjacentVertex);
        })
    }

    console.log(current);
    if (!current) return null;
    const shortestPath = [];
    while (current.value !== starting.value) {
        shortestPath.push(current.value);
        current = current.adjacentVertices.find(i => visited[i.value]);
    }
    shortestPath.push(current.value);

    return shortestPath.reverse();
}
