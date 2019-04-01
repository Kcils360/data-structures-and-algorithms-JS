'use strict';

var node = require('./Node.js');

module.exports = class Stack {
  Top = null;

  Push(value){
    let newNode = new node(value);
    if(this.Top == null){
      this.Top = newNode;
      return;
    }
    newNode.next = this.Top;
    this.Top - newNode;
  }
  Pop(){
    let temp = this.Top.value;
    this.Top = this.Top.next;
    return temp;
  }
  Peek(){
    let temp = this.Top.value;
    return temp;
  }
}