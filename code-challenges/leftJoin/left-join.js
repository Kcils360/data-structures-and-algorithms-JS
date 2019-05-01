'use strict';

const HashTable = require('./hashTable/hashTable.js');

function leftJoin(htLeft, htRight){
  let l = htLeft.length;
  //instatiate a new hash table for output, of 
  //the same length as the right hash table
  let htOutput = new HashTable(l);
  //iterate over the left hash table
  for(let key in htLeft){
    //get the value at the key in the left
    let value = htLeft.get(key);
    //the key should already be hashed, so add 
    //without hashing to the new output hash table
    htOutput.addNoHash(key, value);
    //if key also exists in right hash table, grab 
    //the value and add to the same key in output hash table
    if(htRight.contains(key)){
      htOutput.addNoHash(key, htRight.get(key));
    }
    //...otherwise put a null where the right value would go
    else{
      htOutput.addNoHash(key, NULL);
    }
  }
}