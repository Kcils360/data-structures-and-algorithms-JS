'use strict';

const zipmerge = function(lla, llb) {
  let currentA = lla.Head;
  let currentB = llb.Head;
  let tempA;
  let tempB;
  while(currentA.next !== null && currentB.next !==null){
    tempA = currentA.next;
    currentA.next = currentB;
    tempB = currentB.next;
    currentB = tempA;
  }
  currentA = lla.Head;
  return currentA;
  }
};


