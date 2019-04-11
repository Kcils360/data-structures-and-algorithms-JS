'use strict';


function maxValue(tree){
  let temp = root.value;
  const queue = new queue;
  if (tree.root == null) { return null };
  queue.Enqueue(tree.root);
  while (queue.Peek != null) {
    let node = queue.Dequeue;
    queue.Enqueue(node.left && node.right);
    if(node.value > temp){
      temp = node.value
    }
  }
  return temp;
}