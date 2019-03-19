# Array Shift
Write a function called arrayShift which takes an array and a value as arguments.

## Challenge
Without utilizing any of the built-in methods available to JavaScript (eg. arr.push() ), return an array with the value added to the middle index.

## Approach  
I declare an empty array and set a variable equal to half the length of the array (math.floor to handle odd numbered arrays)  I then iterate over the original array to the half index, add the new value to it, then iterate over the rest of the array adding each value declaritively to the new array.

## Efficiency
Time: O(n) -- I have to itterate over the full array.
Space: O(n) -- We start with 1 array, and declare a second.

## Solution
![arrayShift whiteboard image](https://github.com/Kcils360/data-structures-and-algorithms-JS/blob/master/assets/array-shift.jpg "arrayShift Wite Board")

### Collaberation
I worked alone today
