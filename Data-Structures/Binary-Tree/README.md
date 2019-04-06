# ***Data Structure Implementation***
------------------------------

# Binary Tree
#### *Author: Gregory Dukes*

------------------------------

## Description

- A JavaScript implementation of a `Binary Tree`. Binary Trees contain individual nodes that have a reference to the `Left` child node and the `Right` child node. The methods on this `Binary Tree` are `preOrder`, `postOrder`, and `inOrder`.
The `Binary Search Tree` contains two methods `add` and `contains`. 
------------------------------

## Methods

| Method | Summary | Big O Time | Big O Space | Example | 
| :----------- | :----------- | :-------------: | :-------------: | :----------- |
| preOrder | returns the values of each node in the `tree` | O(n) | O(1) | binaryTree.preOrder(root) |
| postOrder | returns the values of each node in the `tree` | O(n) | O(1) | binaryTree.postOrder(root) |
| inOrder | returns the values of each node in the `tree` | O(n) | O(1) | binaryTree.inOrder(root) |
| add | Takes in a value and adds the value as a new node the tree in its appropriate location | O(logn) | O(n) | binaryTree.add(21) |
| contains | Takes in a value and return a boolean if the tree contains that value | O(logn) | O(1) | binaryTree.contains(21) |



------------------------------

## Approach 

##### preOrder Method
- The preOrder Method takes in a `node` as a parameter, then recursivly runs thru each child node and prints their value to the console.

*No image available*
##### postOrder Method
- The postOrder Method takes in a `node` as a parameter, then recursivly runs thru each child node and prints their value to the console.

*No image available*
##### inOrder Method
- The inOrder Method takes in a `node` as a parameter, then recursivly runs thru each child node and prints their value to the console.

*No image available*
##### add Method
- The add Method takes in a value as a parameter, creates a new `node`, and recursivly moves thru the tree until it finds the appropriate location to store the new `node`.

*No image available*
##### contains Method
- The InsertBefore Method takes in a value as a parameter, and recursivly moves thru the tree checking if the value exists in the tree.  It returns an appropriate boolean.

*No image available*



------------------------------

## Change Log
1.0 -- 4/6/19 
