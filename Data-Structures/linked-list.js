'use strict';

let node = require('./node.js');

let LinkList = module.exports = {

//constructor that takes a node
//head = node
LinkList(node){
  this.Head = node;
  
  //methods
  this.insert = (node) => {
    node.next = Head;
    this.Head = node;
  };
  this.includes = (value) => {
    let current = Head;
    while(current.next != null){
      if(current.value === value){current == Head; return true;}
      current = current.next;
    }
    current = Head;
    return false;
  };
  this.print = () => {
    let current = Head;
    let values = [];
    while(current.next != null){
      values.push(current.value);
      current = current.next;
    }
    if(current.next == null){values.push(current.value)};
  };
}
};
