'use strict';

//write a function that takes a tree of ints and performs a FizzBuzz check on each node
//return the tree with the new values

function FizzBuzzTree(tree){
  if(tree.root == null){
    return null;
  }
  else{
    _recursiveFizBuz(tree.root);
  }
  return tree;
}

function _recursiveFizBuz(node){
  if(node == null){
    return null;
  }
  if(node.value % 15){
    node.value = 'FuzzBuzz';
  }
  else if(node.value % 5){
    node.value = 'Buzz';
  }
  else if(node.value % 3){
    node.value = 'Fizz';
  }
  _recursiveFizBuz(node.left);
  _recursiveFizBuz(node.right);
}