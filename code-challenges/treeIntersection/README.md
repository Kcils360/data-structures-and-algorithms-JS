# Repeated Word
Find common values in 2 binary trees.

## Challenge
Write a function called `tree_intersection` that takes two binary trees as parameters. Without utilizing any of the built-in library methods available to your language, return a set of values found in both trees.

## Approach  
The very first thing we do in the function is declare a new `Hash Table` and an `Array` called *output*.  Next, we itterate over the first tree, using the `pre-order` method, adding the value of each node into the `Hash Table`.  Next, we itterate over the second tree using the `post-order` method, and at each node we check if that value is in the `Hash Table`. If it is, we add the value to our output array. When the `post-order` finishes, return the *output* array.

## Efficiency
Time: O(n) -- We have to hit every node in both trees. 

Space: O(n) -- We create a hash table that is the size of one tree, we also create an array that could potentially be the size of one tree.  

## Solution
![treeIntersection whiteboard image](https://github.com/Kcils360/data-structures-and-algorithms-JS/blob/master/assets/treeInterseciton.jpg "treeIntersection White Board")
