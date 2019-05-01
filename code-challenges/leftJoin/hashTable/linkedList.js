'use strict';

const node = require('./node.js');

class LinkedList{
  constructor(){
    this.head = null;
  }
  append(value){
    const nn = new node(value);
    if(!this.head){
      this.head = nn;
      return;
    }
    let current = this.head;
    while(current.next){
      current = current.next
    }
    current.next = nn;
  }
  values(){
    let values = [];
    let current = this.head;
    while(current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

module.exports(LinkedList);