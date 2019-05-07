# ***Data Structure Implementation***
------------------------------

# Graph
#### *Author: Gregory Dukes*

------------------------------

## Description

A JavaScript implementation of a `Graph`. A `Graph` is a structure made up of `Vertices` that have a `Value`. The `Graph` also has an `Adjacency List` which contains all the connections between `Vertices` and each `Edge` contains a reference to its starting `Vertex`, ending `Vertex` and potentially its `Weight`. The methods on this `Graph` are `addVertex`, `addDirectedEdge`, `addUndirectedEdge`, `getVertices`, `getNeighbors`, and `print`.

------------------------------

## Methods

| Method | Summary | Big O Time | Big O Space | Example | 
| :----------- | :----------- | :-------------: | :-------------: | :----------- |
| addVertex() | Adds a new `Vertex` to the `Graph` | O(1) | O(1) | graph.addVertex(99) |
| addDirectedEdge() | Adds a new `Directed Edge` to the `Graph` | O(1) | O(1) | graph.addDirectedEdge(1,2,99) |
| addUndirectedEdge() | Adds a new `Undirected Edge` to the `Graph` | O(1) | O(1) | graph.addUndirectedEdge(1,2,99) |
| getVertices() | returns an array of `Vertices` | O(n) | O(n) | graph.getVertices() |
| getNeighbors() | returns an array of `Vertices` | O(n) | O(n) | graph.getNeighbors(1) |
| breadthFirst() | returns an array of values | O(nm) | O(n) | graph.breadthFirst(1) |
| print() | Prints a visual representation of each `Vertex` and `Edge` with `weight` to the console | O(n) | O(1) | graph.print() |

------------------------------

## Visuals

#### addVertex method
- The addVertex method takes in a value as a parameter, then creates a new vertex assigning the value to the new vertex value param.  Next, it places the vertex in the adjacency list then incriments the size value of the graph. Inserted!

*No image available*
#### addDirectedEdge method
- The addDirectedEdge method takes in a starting vertex, ending vertex and a weight.  This is a uni-directional edge.  It then adds the edge to the adjacency list between the two vertices.

*No image available*
#### addUndirectedEdge method
- The addUndirectedEdge method takes in a starting vertex, ending vertex and a weight.  This is a bi-directional edge.  It then adds the edge to the adjacency list between the two vertices.

*No image available*
#### getVertices method
- The getVertices method returns an array with the keys of all the vertices in the graph. If the graph has no vertices, it returns null.

*No image available*
#### getNeighbors method
- The getNeighbors method takes in a vertex as a parameter and returns an array of all the vertices that are connected to it by an edge.

*No image available*

#### breadthFirst 
- The breadthFirst method takes in a vertex as a starting point. Initialize an array to hold the values to return, and a queue for temporary vertex storage.  While the queue is not empty, we dequeue the first node in the queue, adding the value to the output array, set the vertex's `Visited` property to `true`, then enqueue any adjacent vertices.  When the queueue is empty, we have traversed the whole graph.

[Whiteboard Image of breadthFirst method](../../assets/graph_breadthFirst.jpg)
#### print method
- The print method console.logs each Vertex and Edge with weight to the console.

*No image available*

------------------------------

## Change Log
1.0 -- 5/6/19
