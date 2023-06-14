"use strict";

const Stack = require("../stack-LL");

/** balancedBrackets takes as input a string, and determine whether the brackets
 * in it {}, [], or () are properly closed.
 */

function balancedBrackets(str) {
  let bracketStack = new Stack();
  let toFind = null;

  const allBrackets = ["{", "}", "[", "]", "(", ")"];

  for (let letter of str) {
    if (allBrackets.includes(letter)) {
      let currTop = bracketStack.peek();
      if (currTop === "{") {
        toFind = "}";
      } else if (currTop === "(") {
        toFind = ")";
      } else if (currTop === "[") {
        toFind = "]";
      }

      if (letter === toFind) {
        bracketStack.pop();
        toFind = null;
      } else {
        bracketStack.push(letter);
      }
    }
  }

  return (bracketStack.size === 0) ? true : false;
}

module.exports = {
  balancedBrackets,
};
