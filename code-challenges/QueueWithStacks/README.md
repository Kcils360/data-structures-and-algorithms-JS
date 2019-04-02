# ***Data Structure Implementation***
------------------------------

# Queue With Stacks
#### *Author: Gregory Dukes*

------------------------------

## Description

A JavaScript implementation of a `Queue With Stacks`. The implimentation uses two `stacks` to mimic the behavior of a `queue`.  This means that while a `stack` is LIFO, we want to force to be FIFO.  The methods of this `PseudoQueue` are `enqueue` and `dequeue`.

------------------------------

## Methods

| Method | Summary | Big O Time | Big O Space | Example | 
| :----------- | :----------- | :-------------: | :-------------: | :----------- |
| enqueue | Adds a new `Node` to the `stack` | O(1) | O(1) | pseudoQueue.enqueue(stack1,99) |
| dequeue | Removes the bottom `Node` from the `stack` | O(n) | O(n) | pseudoQueue.dequeue() |


------------------------------

## Visuals

##### Enqueue Method
- The Enqueue Method takes a stack and a value. Using the built in .Push method with the stack we create a new node and push it to the top of the stack.  This is the same behavior as a Queue so we don't have to do anything different.

*No image available*
##### Dequeue Method
- The Dequeue Method doesn't take any inputs, it returns the value of the node that gets Dequeued.  The challenge is to make the stack behave like a queue so we have to get to the bottom value of the stack, which would be the first out of a queue.  Using the .Pop method of the stack we pop the top node off and push it onto a second stack, untill we get to the bottom node.  We save the value of this node in a temp variable and pop it as well.  We then repeat the pop/push cycle from stack2 back to stack1 until stack2 is empty. We return the temp value and are done.

*No image available*
##### White Board 
![alt text](https://github.com/Kcils360/data-structures-and-algorithms-JS/blob/master/assets/QueueWithStacks.jpg "QueueWithStack jpg")
------------------------------

## Change Log
1.0 -- 4/1/19