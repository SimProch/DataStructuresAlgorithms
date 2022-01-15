class Vertex {
    value;
    adjacentVertices;
    constructor(value) {
        this.value = value;
        this.adjacentVertices = [];
    }
}

class DirectedVertex extends Vertex {
    constructor(value) {
        super(value);
    }

    // Adjacency list
    addAdjacentVertex(vertex) {
        this.adjacentVertices.push(vertex);
    }
}

class UndirectedVertex extends Vertex {
    constructor(value) {
        super(value);
    }

    // Adjacency list
    addAdjacentVertex(vertex) {
        if (this.adjacentVertices.includes(vertex)) return;
        this.adjacentVertices.push(vertex);
        vertex.addAdjacentVertex(this);
    }
}

function createDirectedVertices() {
    const alice = new DirectedVertex("Alice");
    const bob = new DirectedVertex("Bob");
    const cynthia = new DirectedVertex("Cynthia");

    alice.addAdjacentVertex(bob);
    alice.addAdjacentVertex(cynthia);
    bob.addAdjacentVertex(cynthia);
    cynthia.addAdjacentVertex(bob);

    console.log(alice);
    console.log(bob);
    console.log(cynthia);
}

function createUndirectedVertices() {
    const alice2 = new UndirectedVertex("Alice");
    const bob2 = new UndirectedVertex("Bob");
    const cynthia2 = new UndirectedVertex("Cynthia");

    alice2.addAdjacentVertex(bob2);
    alice2.addAdjacentVertex(cynthia2);
    bob2.addAdjacentVertex(cynthia2);
    cynthia2.addAdjacentVertex(bob2);

    console.log(alice2);
    console.log(bob2);
    console.log(cynthia2);
}

module.exports = {
    DirectedVertex,
    UndirectedVertex
}