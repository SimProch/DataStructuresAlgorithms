class Vertex {
    name;
    adjacentVertices;
    constructor(name) {
        this.name = name;
        this.adjacentVertices = new Map();
    }
}


class WeightedVertex extends Vertex {
    constructor(name) {
        super(name);
    }

    // Adjacency list
    addAdjacentVertex(vertex, weight) {
        this.adjacentVertices.set(vertex, weight);
    }
}

function getDallasAndToronto() {
    const dallas = new WeightedVertex("Dallas")
    const toronto = new WeightedVertex("Toronto")
    
    dallas.addAdjacentVertex(toronto, 138);
    toronto.addAdjacentVertex(dallas, 216);
    
    console.log(dallas);
}

module.exports = {
    WeightedVertex
}