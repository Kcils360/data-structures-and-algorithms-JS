# Repeated Word
Find the first repeated word in a book.

## Challenge
Write a function that accepts a lengthy string parameter. Without utilizing any of the built-in library methods available to your language, return the first word to occur more than once in that provided string.

## Approach  
We declare a new `Hash Table`, and then using `string.split()` we put all the words in an array.  We then iterate over the array. First, we check if the current word exists in the `Hash Table`, if it does, we return that word, all done.  If it doesn't exist yet, we add it.  If we get all the way through the array with no matches, we return `null`.

## Efficiency
Time: O(n) -- `.split()` is an O(n) operation, and then n to iterate over the array looking for matches. 

Space: O(n) -- We create both a new array of n length and a `Hash Table`, potetially n length also.  

## Solution
![repeatedWord whiteboard image](https:// "repeatedWord White Board")