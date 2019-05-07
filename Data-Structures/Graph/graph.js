'use strict';

const Vertex = require('./vertex.js');
const Edge = require('./edge.js');

module.exports = class graph {
  constructor() {
    this.adjacencyList = new Map();
    this._size = 0;
  }
  addVertex(value) {
    let vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    this._size++;
  }

  addDirectedEdge(startVertex, endVertex, weight) {
    this.adjacencyList.get(startVertex).push(new Edge(endVertex, weight));
  }

  addUndirectedEdge(startVertex, endVertex, weight) {
    this.addDirectedEdge(startVertex, endVertex, weight);
    this.addDirectedEdge(endVertex, startVertex, weight);
  }

  getVertices() {
    if (this._size > 0) {
      return [...this.adjacencyList.keys()];
    }
    else {
      return null;
    }
  }

  getNeighbors(vertex) {
    return [...this.adjacencyList.get(vertex)];
  }

  print() {
    for (const [key, value] of this.adjacencyList) {
      console.log(key, value);
    }
  }
}