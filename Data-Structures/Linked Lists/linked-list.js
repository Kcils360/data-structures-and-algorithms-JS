'use strict';


let LinkList = module.exports = {
node = require('./node.js'),
  
//constructor that takes a node
//head = node
LinkList(node){
  this.Head = node;
  
  //methods
  this.insert = (value) => {
    let nnode = new node(value);
    nnode.next = this.Head;
    this.Head = nnode;
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
  //contains hidden code to return an array of values instead of console.log
  this.print = () => {
    let current = Head;
    // let values = [];
    while(current.next != null){
      console.log(current.value);
      // values.push(current.value);
      current = current.next;
    }
    if (current.next == null) { console.log(current.value) };
    // if(current.next == null){values.push(current.value)};
    // values.forEach(val => { 
    //   console.log(val)
    //   return values;
    // });
    current = Head;
  };

  this.append = (value) => {
    let nnode = new node(value);
    let current  = Head;
    while(current.next !== null){
      cuerrent = current.next;
    }
    current.next = nnode;    
  };

  this.insertAfter = (key, value) => {
    let nnode = new node(value);
    let current = Head;
    while(current.next !== null){
      if(current.value === key){
        if(insert(current, nnode)){
          return true;
        };
      }
      current = current.next;
    }
    return false;
  };

  this.insertBefore = (key, value) => {
    let nnode = new node(value);
    let current = Head;
    while(current.next !== null){
      if(current.next.value === key){
        if(insert(current, nnode)){
          return true;
        };
      }
      current = current.next;
    }
    return false;
  };

  const insert = function(current, nnode){
    nnode.next = current.next;
    current.next = nnode;
  }
  
}
};
