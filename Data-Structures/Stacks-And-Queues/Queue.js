'use strict';

var node = require('./Node.js');

module.exports = class Queue {
  Front = null;
  Rear = null;

  Enqueue(value){
    let newNode = new node(value);
    if(this.Front === null){
      this.Front = newNode;
      this.Rear = newNode;
      return;
    }
    this.Rear.next = newNode;
    this.Rear = newNode;
  }
  Dequeue(){
    let temp = this.Front.value;
    this.Front.next = this.Front;
    return temp;
  }
  Peek(){
    let temp = this.Front.value;
    return temp;
  }
}