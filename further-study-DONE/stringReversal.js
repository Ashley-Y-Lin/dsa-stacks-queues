"use strict";

const Queue = require("../queue");
const Stack = require("../stack-LL");

/** stringReversal reverses a string by handling one letter at a time,
 * without using arrays or string-reversal built-in methods.
 */

function stringReversal(str) {
  let letterStack = new Stack();
  let reversedStr = "";

  for (let letter of str) {
    letterStack.push(letter);
  }

  while (letterStack.size > 0) {
    reversedStr = reversedStr + letterStack.pop();
  }

  return reversedStr;
}

module.exports = {
  stringReversal,
};
