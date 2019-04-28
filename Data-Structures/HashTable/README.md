## ***Data Structure Implementation***
------------------------------

# Hash Table
#### *Author: Gregory Dukes*

------------------------------

## Description

- A JavaScript implementation of a `Hash Table`. It is an array with a Linked List at each position. Hopefully every key is unique and has it's own spot in the array, but if a collision occurs, the second value can be placed at the end of the Linked List. The methods on this `Hash Table` are `add`, `get`, `contains`, and `hash`.

------------------------------

## Methods

| Method | Summary | Big O Time | Big O Space | Example | 
| :----------- | :----------- | :-------------: | :-------------: | :----------- |
| hash | returns integer | O(1) | O(1) | hash("gregory") |
| add | returns nothing | O(1) | O(1) | add("gregory","human") |
| contains | returns boolean | O(1) | O(1) | contains("gregory") |
| get | returns value or null | O(1) | O(1) | get("gregory") |

------------------------------

## Approach 

### hash method
- The hash method takes in a `key` as a parameter, adds together the char value of each character in the `key`, multiplies by the large prime number 599, and finaly modulo by the length of the `Hash Table`.  This number is returned as a position in the `Hash Table`.

*No image available*
### add method
- The add method takes in a `key` and a `value` as parameters, then inserts the value into the `Hash Table` based on the `hash()` of the key. If there already exists a value at the position, the new value is appended to the end of a Linked List at the position.

*No image available*
### contains method
- The contains method takes in a `key` as a parameter, then returns true if there is a value at the position in the `Hash Table` based on the `hash()` of the `key`, or false if there is no value at the position in the `Hash Table`.

*No image available*
### get method
- The get method takes in a `key` as a parameter, then runs `contains()` on the `key`.  If `contains()` returns `true`, the get method returns the value[s] at that position.  If `contains()` returns `false`, the get method returns `null`.

*No image available*




------------------------------

## Change Log
1.0 -- 4/27/19 
