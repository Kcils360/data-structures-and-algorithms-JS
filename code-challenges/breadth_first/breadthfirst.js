'use strict';

const queue = require('../../Data-Structures/Stacks-And-Queues/Queue.js');


function breadthFirst(tree){
  const temp = new queue;
  if(tree.root == null){return null};
  temp.Enqueue(tree.root);
  while(temp.Peek != null){
    let node = temp.Dequeue;
    temp.Enqueue(node.left && node.right);
    console.log(node.value);
  }

}