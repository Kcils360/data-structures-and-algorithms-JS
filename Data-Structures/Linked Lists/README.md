# ***Data Structure Implementation***
------------------------------

# Linked List
#### *Author: Gregory Dukes*

------------------------------

## Description

A JavaScript implementation of a `Singly Linked List`. Singly Linked Lists contain individual nodes that have a reference to the `Next` node in the list as well as a `Value`. The methods of this `Linked List` are `lnsert`, `includes` and `print`.

------------------------------

## Methods

| Method | Summary | Big O Time | Big O Space | Example | 
| :----------- | :----------- | :-------------: | :-------------: | :----------- |
| insert | Adds a new `Node` to the `Linked List` | O(1) | O(1) | LList.insert(99) |
| includes | Takes in a value and returns a boolean depending on if the value is in the `LinkedList` | O(n) | O(1) | LList.includes(99) |
| print | Prints the `Linked List` to the console | O(n) | O(1) | LList.print() |


------------------------------

## Visuals

##### Insert Method
- The Insert Method takes in a value as a parameter, then creates a new node assigning the value to the new nodes value param.  Next, it sets new node.next equal to the current head.  Finally it sets the the linked list head to the new node.  Inserted!

*No image available*
##### Includes Method
- The Includes Method takes in a value and checks it against the value of each node in the list.  To iterate over the linked list, a runner is declared called Current, while current.next is not null we compare values.  If they match, *True* is returned, if no match, current is set to the next node.  At the end of the list, if no matches, *false* is returned.

*No image available*
##### Print Method
- The Print Method console.logs the .value of all nodes in the Linked List.

*No image available*

------------------------------

## Change Log
1.1 --
