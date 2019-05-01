'use strict';

const LinkedList = require('./linkedList');

class hashTable{
  constructor(size){
    this.size = size;
    this.arr = new Array(size);
  }
  hash(key){
    //does neat math to create a hash value of the key into a position in the array
    return key.split('').reduce((p,n) => {
      return p + n.charCodeAt(0)
    }, 0) * 599 % this.size;
  }
  add(key, value){
    //inserts the value at the position in the array based on the hash
    let hash = this.hash(key);
    if(!this.arr[hash]){
      this.arr[hash] = new LinkedList();
    }
    let htValue = {[key]: value};
    this.arr[hash].append(htValue);
  }
  addNoHash(key, value){
    //inserts the value at the postition in the array without hashing  **NOT FOR EVERYDAY USE** 
    if(!this.arr[key]){
      this.arr[key] = new LinkedList();
    }
    let htValue = {key: value};
    this.arr[key].append(htValue);
    }
  get(key){
    //returns the value of of a matching key
    if(!contains(key)){
      return null;
    }
    return arr[find].values();
  }
  contains(key){
    //returns a boolean, is key in the hash table
    let find = hash(key);
    if (this.arr[find]) {
      let temp = arr[find].values();
      for(let i=0; i < temp.length; i++){
       if(temp[i] == find){
         return true;
      }
    }
    return false;
  }

}
