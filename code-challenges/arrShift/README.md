# Array Shift
Write a function called arrayShift which takes an array and a value as arguments.

## Challenge
Without utilizing any of the built-in methods available to JavaScript (eg. arr.push() ), return an array with the value added to the middle index.

## Approach 
- Third refactor got me to a single for loop.
I declare an empty array and set a variable equal to half the length of the array (math.floor to handle odd numbered arrays)  I then iterate over the original array to the half index, checking with if statements to find the index, add the new value, then continue iterating over the array, adding each value to the new array.  At the end of the for loop, I return the new array.

## Efficiency
Time: O(n) -- I have to itterate over the full array.
Space: O(n) -- We start with 1 array, and declare a second.

## Solution
![arrayShift whiteboard image](https://github.com/Kcils360/data-structures-and-algorithms-JS/blob/master/assets/array-shift.jpg "arrayShift Wite Board")

### Collaberation
I worked alone today
