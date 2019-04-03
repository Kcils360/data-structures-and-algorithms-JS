'use strict';

const stack = require('../../Data-Structures/Stacks-And-Queues/Stack');

function multiBracketValidation(string){
  let newStack = new stack();
  for (let i = 0; i < string.length; i++) {
    if (string[i] == '{' || string[i] == '[' || string[i] == '(') {
      newStack.Push(string[i]);
    }
    if (string[i] == '}' || string[i] == ']' || string[i] == '{') {
      switch (string[i]) {
        case '}': if (compare('{') === false) {
          return false
        };
          break;
        case ']': if (compare('[') === false) {
          return false
        };
          break;
        case ')': if (compare('(') === false) {
          return false
        };
          break;
      };
    };
    return true;
  };
  function compare(string) {
    let top = newStack.Peek(top);
    if (top == string) { return true }
    else { return false };
  }
}
  let string = "({ codeFellows rocks[]})"
