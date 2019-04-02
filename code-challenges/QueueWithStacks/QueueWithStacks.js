'use strict';

let Stack = require('./Stack');



function PseudoQue(stack, value){
  let stack1 = new Stack
  stack1 = stack;
  let stack2 = new Stack;

  function enque(stack, value){
    stack.push(value);
  }

  function dequeue(){
    if(this.stack1.Top == null){
      return null;
    }
    while(stack.Top.next !== null){
      let temp = stack1.Pop(this.Top);
      enque(stack2, temp.value);
    }
    let tempVal = stack1.Top.value;
    stack1.Pop(this.Top);
    while(stack.Top.next !== null){
      let temp = stack2.Pop(this.Top);
      enque(stack1, temp.value);
    }
    return tempVal;
  }
}