# ***Data Structure Implementation***
------------------------------

# Linked List
#### *Author: Gregory Dukes*

------------------------------

## Description

A JavaScript implementation of a `Singly Linked List`. Singly Linked Lists contain individual nodes that have a reference to the `Next` node in the list as well as a `Value`. The methods on this `Linked List` are `lnsert`, `includes`, `print`, `append`, `insertBefore`, and `insertAfter`.

------------------------------

## Methods

| Method | Summary | Big O Time | Big O Space | Example | 
| :----------- | :----------- | :-------------: | :-------------: | :----------- |
| insert | Adds a new `Node` to the `Linked List` | O(1) | O(1) | LList.insert(99) |
| includes | Takes in a value and returns a boolean depending on if the value is in the `LinkedList` | O(n) | O(1) | LList.includes(99) |
| print | Prints the `Linked List` to the console | O(n) | O(1) | LList.print() |
| append | Takes in a value and adds the value as a new node to the end of the `LinkedList` | O(n) | O(1) | Llist.append(99) |
| insertBefore | Takes in a Value and a Key, adds a new `Node` with Value directly in front of the `Node` with the Key value | O(n) | O(1) | Llist.insertBefore(3,2) |
| insertAfter | Takes in a Value and a Key, adds a new `Node` with Value directly after the `Node` with the Key value | O(n) | O(1) | Llist.insertBefore(3,4) |


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
##### Append Method
- The Append Method takes in a single value as a parameter.  It creates a new node and sets the correct references to Head and the new node.

*No image available*
##### InsertBefore Method
- The InsertBefore Method takes in two values as parameters.  The first is the Key by which to compare where to add the new node, and the second value is used to create the new node.  The method will iterate over the linked list and when it finds the correct node using `if(current.next.value === Key)`, will run the insert helper function with sets the correct references for the three nodes involved.  The method will return false if the Key is not found.

*No image available*
#### InsertAfter Method
- The InsertAfter Method takes in two values as parameters.  The first is the Key by which to compare where to add the new node, and the second value is used to create the new node.  The method will iterate over the linked list and when it finds the correct node using `if(current.value === Key)`, will run the insert helper function with sets the correct references for the three nodes involved.  The method will return false if the Key is not found.

*No image available*


------------------------------

## Change Log
1.1 -- Added append, insertBefore and insertAfter methods. 3/25/18
