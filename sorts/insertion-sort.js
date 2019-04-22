'use strict';

function sort(array){
  for(let i = 1; i < array.length; i++){
    let anchor = array[i];
    let j = i-1;
    while(j >= 0 && array[j] > anchor){
      array[j+1] = array[j];
      j = j-1;
    }
    arr[j+1] = anchor;
  }
}