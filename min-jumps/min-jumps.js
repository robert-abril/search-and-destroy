"use strict";
let counter = 0;
// Complete this algo
const minJumps = (arr) => {
  counter++;

  const smallerArr = arr.slice(0, arr[0]);
  const bigNum = Math.max(...smallerArr);
  const indexOfBig = arr.indexOf(bigNum);
  const biggerArr = arr.slice(indexOfBig);

  console.log("indexOfBig :>> ", indexOfBig);
  console.log("bigNum :>> ", bigNum);
  console.log("biggerArr :>> ", biggerArr);
  console.log("smallerArr :>> ", smallerArr);
  console.log("arr :>> ", arr);

  if (indexOfBig) {
    if (Math.max(smallerArr) >= biggerArr.length) return counter;

    return minJumps(biggerArr);
  } else return counter;
};

module.exports = minJumps;
