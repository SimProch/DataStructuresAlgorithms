// first question shows a graph of tied products for recommendation. Based on the graph, we are asked to specify the result
    // the answer is 'hammer', 'pins', 'needles' and 'nail polish' as similar products for 'nails'
// second asks us to perform DFS on another a graph. It then asks in which order will it be done
    // A -> B -> E -> J -> F -> O -> C -> G -> K -> D -> H -> L -> M -> I -> N -> P
// third is the same as previous, but BFS
    // A -> B -> C -> D -> E -> F -> G -> H -> I -> J -> K -> L -> M -> N -> O -> P
// fourth wants us to update BFS so that it actually returns value, rather than logs. I did this previously.
// Fifth wants us to find path in unweighted graph.
    // It is very similar to Dijkstra - we first find the result node regularly, then work our way back
    // See exercise5.js in UnweightedGraphs/Traversing