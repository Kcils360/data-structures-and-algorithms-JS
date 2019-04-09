# FizzBuzz Tree
Conduct “FizzBuzz” on a tree while traversing through it. Change the values of each of the nodes dependent on the current node’s value

## Challenge
Without utilizing any of the built-in methods available to your language, determine weather or not the value of each node is divisible by 3, 5 or both, and change the value of each of the nodes:
- If the value is divisible by 3, replace the value with “Fizz”
- If the value is divisible by 5, replace the value with “Buzz”
 -If the value is divisible by 3 and 5, replace the value with “FizzBuzz”

## Approach  
The first thing is to determine if the tree is valid. If it is, I call a helper function, passing the trees root. The helper funciton recursively traverses the tree, hitting each node and running the FizzBuzz check, changing values as necessary.  When the tree traversal is complete, the original function returns the updated tree.

## Efficiency
Time: O(n) -- We have to hit every node.
Space: O(1) -- Nothing exra created.

## Solution
![FizzBuzz Tree whiteboard image](https://github.com/Kcils360/data-structures-and-algorithms-JS/blob/master/assets/binary-search.jpg "FizzBuzz Tree White Board")

