# Array Shift
Write a function called arrayShift which takes an array and a value as arguments.

## Challenge
Without utilizing any of the built-in methods available to JavaScript (eg. arr.push() ), return an array with the value added to the middle index.

## Approach  
I declare 2 empty arrays, and fill one by looping thru the first half of the array, and the second by looping over that back half of the array.  Then add the value to end of the first array, and finally add the second array by looping over it as well.

## Efficiency
Time: O(n) -- We have to itterate over the full array twice.
Space: O(n) -- We start with 1 array, and declare two more half-sized arrays.

## Solution
![arrayShift whiteboard image](https://github.com/Kcils360/data-structures-and-algorithms-JS/blob/master/assets/array-shift.jpg "arrayReverse Wite Board")

### Collaberation
I worked alone today
