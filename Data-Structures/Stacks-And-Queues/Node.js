'use strict';

module.exports = class Node {
  next = null;
  constructor(value){
    this.value = value;
  }
};