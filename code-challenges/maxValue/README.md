# Find Max Value
Find the Maximum Value in a Binary Tree

## Challenge
Write a function called `find-maximum-value` which takes binary tree as its only input. Without utilizing any of the built-in methods available to your language, return the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.

## Approach  
First we instantiate a temp variable to hold a value and new queue.  Next, we perform a null check on the trees root, if it passes, then we set max value to root.value and enque the root.  Then, we start our while loop, while the `.peek ` method returns a node, we dequeue the head node, check if it's value is greater than current max and set value if true, then enqueue that nodes children.  This continues until the queue is empty and all nodes have been touched. Finally we return the value which is the max value in the tree.

## Efficiency
Time: O(n) -- We have to hit every node.

Space: O(w) -- Where w = the width of the tree.

## Solution
![maxValue Tree whiteboard image](https://github.com/Kcils360/data-structures-and-algorithms-JS/blob/master/assets/maxValue.jpg "maxValue Tree White Board")