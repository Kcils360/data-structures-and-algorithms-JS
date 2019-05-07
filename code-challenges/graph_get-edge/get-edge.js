'use strict';

const graph = require('../../Data-Structures/Graph/graph.js');
let newgraph = new graph();

function getEdges(graph, array){
  newgraph = graph;
  let totalCost = 0;
  let nodes = newgraph.getVertices();
  if(!nodes.includes(array[0])){
    return 0;
  }
  for(let i=0; i<array.Length-1; i++){
    let neighbors = newgraph.getNeighbors(array[i]);
    if(!neighbors.includes(array[i+1])){
      return 0;
    }
    else{
      totalCost += edge.weight;
    }
  }
  return totalCost;
}