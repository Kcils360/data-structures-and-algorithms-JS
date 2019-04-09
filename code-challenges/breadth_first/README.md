# Breadth First Tree Traversal
Traverse a tree, breadth first.

## Challenge
Write a breadth first traversal method which takes a Binary Tree as its unique input. Without utilizing any of the built-in methods available to your language, traverse the input tree using a Breadth-first approach; print every visited node’s value.

## Approach  
First we instantiate a new queue.  Next, we perform a null check on the trees root, if it passes, then we enque the root.  Then, we start our while loop, while the `.peek ` method returns a node, we dequeue the head node, print its value, then enqueue its children.  This continues until the queue is empty and all nodes have been touched.

## Efficiency
Time: O(n) -- We have to hit every node.

Space: O(w) -- Where w = the width of the tree.

## Solution
![BreadthFirst Tree whiteboard image](https://github.com/Kcils360/data-structures-and-algorithms-JS/blob/master/assets/Breadthfirst.jpg "Breadth First Tree White Board")
