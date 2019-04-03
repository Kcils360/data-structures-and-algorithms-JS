# ***Code*Challange**
------------------------------

# 
#### Gregory Dukes
###### *with Andy & Billy* 
------------------------------

## Description

Write a function that takes a string as its only argument, and returns a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets: `{}` | `[]` | `()`

------------------------------

## Methods

| Method | Summary | Big O Time | Big O Space | Example | 
| :----------- | :----------- | :-------------: | :-------------: | :----------- |
| Push | Adds a new `Node` to the `Stack` with the value of open bracket | O(1) | O(1) | stack.push(`'{'`) |
| Pop | Removies the top `Node` in the `Stack` | O(1) | O(1) | stack.pop(`top`) |
| Function | The function as a whole.  Loops over the entire `string`, compares each element. | O(n) | O(n) |  |

------------------------------

## Visuals

##### Algorithm
We start a for loop over the string, and first check to see if it matches an opening bracket `{` | `[` | `(`  If it does, we pop that value onto the stack.  The next value check is to see if it matches a closing bracket `}` | `}` | `)` If it does, we send it to it's corrosponding case in a switch statement which calls a helper function. The helper function compares the opposit of that value to what's on the top of the stack.  If they match, we pop the stack and move on.  If no match, we return `false` and that signifies the string is not balanced and the program ends.  If we get to the end of the string without returning false, the string is balanced and we return true.

[alt text](https://github.com/Kcils360/data-structures-and-algorithms-JS/blob/master/assets/multibracket.jpg,"multiBracketValidation.jpg")

------------------------------

## Change Log
1.0: 4/3/19
------------------------------
