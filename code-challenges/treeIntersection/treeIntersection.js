'use strict';

const hashTable = require('../../Data-Structures/HashTable/hashTable.js');
let ht = new hashTable();


function tree_intersection(tree1, tree2){
  let output = [];

  let hash = preOrder(tree1);
  postOrder(tree2)

  return output;


  function preOrder(node) {
    ht.add(node.value, node.value);
    if (node.left !== null) {
      preOrder(node.left);
    }
    if (node.right !== null) {
      preOrder(node.right);
    }
  }
  function postOrder(node) {
    if (node.left !== null) {
      preOrder(node.left);
    }
    if (node.right !== null) {
      preOrder(node.right);
    }
    if(hash.contains(node.value)){
      output.push(node.value);
    }
  }
}