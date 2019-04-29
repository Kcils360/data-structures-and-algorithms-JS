'use strict';

import ht from '../../Data-Structures/HashTable/hashTable.js'

function repeatedWord(string){
  let str = string.split(" ");
  temp = new ht();
  

  for(let i = 0; i < str.length; i++ ){
    if(temp.contains(str[i])){
      return str[i];
    }
    temp.add(str[i], str[i]);
  }
  return null;
}