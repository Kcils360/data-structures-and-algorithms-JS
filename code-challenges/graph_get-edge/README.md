# Graph Get-Edges
Given a business trip itinerary, and an Alaska Airlines route map, is the trip possible with direct flights? If so, how much will the total trip cost be?

## Challenge
Write a function based on the specifications above, which takes in a graph, and an array of city names. Without utilizing any of the built-in methods available to your language, return whether the full trip is possible with direct flights, and how much it would cost.

## Approach  
The first thing is to declare an output value for the total cost of the trip.  Next, I run `getVertices()` on the graph and check that the first value in the array exists in the graph. If false, we return $0 as the total trip cost. If true, for loop through the array, we check if the next value in the array is the adjacency list of the current value.  If true, we add the weight of the edge to the output array.  If false, return 0.  At the end of the loop, return the output array.

## Efficiency
Time: O(n) -- We have to hit each vertex at least once, then we potientially hit every value in the array, pluys the time of each adjacency list lookup.

Space: O(n) -- We create several arrays during the process.

## Solution
![Graph Get-Edges whiteboard image](https://github.com/Kcils360/data-structures-and-algorithms-JS/blob/master/assets/get-edges.jpg "Graph Get-Edges White Board")
