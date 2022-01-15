const WeightedVertex = require("../WeightedGraphVertex").WeightedVertex

const denver = new WeightedVertex("Denver");
const elPaso = new WeightedVertex("El Paso");
const chicago = new WeightedVertex("Chicago");
const boston = new WeightedVertex("Boston");
const atlanta = new WeightedVertex("Atlanta");

denver.addAdjacentVertex(elPaso, 140);
denver.addAdjacentVertex(chicago, 40);
chicago.addAdjacentVertex(elPaso, 80);
elPaso.addAdjacentVertex(boston, 100);
boston.addAdjacentVertex(chicago, 120);
boston.addAdjacentVertex(denver, 180);
atlanta.addAdjacentVertex(boston, 100);
atlanta.addAdjacentVertex(denver, 160);

const atlantaToPaso = dijkstraShortestPath(atlanta, elPaso.name);
console.log(atlantaToPaso);
const denverToPaso = dijkstraShortestPath(denver, elPaso.name);
console.log(denverToPaso);
const bostonToChicago = dijkstraShortestPath(boston, chicago.name);
console.log(bostonToChicago);
const denverToBoston = dijkstraShortestPath(denver, boston.name);
console.log(denverToBoston);

/**
 * function to get shortest path from one vertex to another
 * The core function is "getCityStopsAndPriceList", which gets all the important data
 * The rest of the function is just building the path back fro mthe end node via previousStopsMap
 */
function dijkstraShortestPath(startVertex, destination) {
    const { cheapestCityToValue, previousStopsMap } = getCityStopsAndPriceList(startVertex);
    
    const shortestPath = [];
    let currentCityName = destination;

    while (currentCityName !== startVertex.name) {
        shortestPath.push(currentCityName);
        currentCityName = previousStopsMap[currentCityName];
    }

    shortestPath.push(currentCityName);
    return { path: shortestPath.reverse(), price: cheapestCityToValue[destination] };
}

/**
 * 
 * @param startVertex specifies the vertex from which to traverse other nodes 
 * @returns a dictionary of city to price, relative to start vertex
 * @returns a dictionary of previous stops for each city (path)
 */
function getCityStopsAndPriceList(startVertex) {
    const cheapestCityToValue = {};
    const previousStopsMap = {};
    const unvisited = [];
    const visited = {};
    cheapestCityToValue[startVertex.name] = 0;
    let current = startVertex;
    while (current) {
        visited[current.name] = true;
        deleteFromUnvisited();
        visitAdjacentVertices();
        const cheapest = getNextCheapest();
        current = cheapest;

        /**
         * Deletes current node from yet-to-visit nodes
         * From unvisited nodes, next vertices to visit is chosen
         */
        function deleteFromUnvisited() {
            const index = unvisited.findIndex(vertex => current.name === vertex.name);
            if (index >= 0) unvisited.splice(index, 1)
        }

        /**
         * On each visit, we basically
         * - add node to unvisited, if it has not yet been visited
         * - compare current visit value with previously found value
         * - if previous was higher, we replace it with current
         */
        function visitAdjacentVertices() {
            const adjacentEntries = current.adjacentVertices.entries();
            for (const [adjacentVertex, value] of adjacentEntries) {
                if (!visited[adjacentVertex.name]) unvisited.push(adjacentVertex)
                const passingValue = (cheapestCityToValue[current.name] || 0) + value
                const alreadyFoundValue = cheapestCityToValue[adjacentVertex.name];
                const currentHasValue = alreadyFoundValue != null
                if (!currentHasValue || passingValue < alreadyFoundValue) {
                    cheapestCityToValue[adjacentVertex.name] = passingValue;
                    previousStopsMap[adjacentVertex.name] = current.name
                }
            }
        }

        /**
         * Function to get next cheapest city relative to our starting point
         * Next cheapest city must be taken from unvisited, so that we will traverse all the vertices
         */
        function getNextCheapest() {
            let cheapest;
            for (let i = 0; i < unvisited.length; i++) {
                if (!cheapest) {
                    cheapest = unvisited[i];
                    continue;
                }
                if (unvisited[i].value < cheapest.value) cheapest = unvisited[i];
            }
            return cheapest;
        }
    }
    return { cheapestCityToValue, previousStopsMap }
}