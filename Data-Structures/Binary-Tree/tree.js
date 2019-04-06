'use strict';

const node = require('./node.js');

module.exports = class binaryTree {
  root = null;

  constructor() {

    function preOrder(node) {
      console.log(node.value);
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
      console.log(node.value);
    }

    function inOrder(node) {
      if (node.left !== null) {
        preOrder(node.left);
      }
      console.log(node.value);
      if (node.right !== null) {
        preOrder(node.right);
      }
    }

  }





}

module.exports = class binarySearchTree {
  root = null;

  constructor() {

    function add(node, value) {
      let newNode = new node(value);
      if (this.root.value == null) { this.root = newNode };
      if (node.value > value) {
        if (node.left == null) {
          node.left = newNode;
        }
        else {
          node = node.left;
          return add(node, value);
        }
      }
      if (node.value < value) {
        if (node.right == null) {
          node.right = newNode;
        }
        else {
          node = node.right;
          return add(node, value);
        }
      }
    }

    function contains(node, value) {
      if (node.value == value) { return true };
      if (node.value > value) {
        node = node.left;
        return contains(node, value);
      }
      if (node.value < value) {
        node = node.right;
        return contains(node, value);
      }
      return false;
    }

  }
}