# Binary Search
Write a function called binarySearch which takes a sorted array and a key as arguments. 

## Challenge
Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

## Approach  
Declare 3 variables, Head, Middle, and End.  First I check if Key is within the bounds of the array.  Then I compare Key to values at Head, Middle, and End.  Using separate if statemets and recursion, I move End or Head to Middle based on if Key is greater than or less than Middle, checking Key agains Head, Middle, and End every time.  Once Head and End are at paired indecees, i've reached the end and I return -1.

## Efficiency
Time: O(logN) -- Recursion!
Space: O(n) -- Several variables extra.

## Solution
![binarySearch whiteboard image](https://github.com/Kcils360/data-structures-and-algorithms-JS/blob/master/assets/binary-search.jpg "binarySearch White Board")

