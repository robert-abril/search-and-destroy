"use strict";

//Complete this algo
const isLoop = (linkedlist) => {
  const arr = [];

  while (linkedlist.head !== null && !arr.includes(linkedlist.head)) {
    arr.push(linkedlist.head);
    linkedlist.head = linkedlist.head.next;
    if (arr.includes(linkedlist.head)) return true;
  }
  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
