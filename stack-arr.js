"use strict";

/** Node: node for a stack. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  top = null;
  size = 0;
  _arr = new Array;

  /** push(val): add new value to the top of the stack. Returns undefined.
   *
   * The "top of stack" in Array is the end.
  */

  push(val) {
    const newNode = new Node(val);

    if (this.size === 0) {
      this._arr.push(newNode);
      this.top = newNode;
      this.size += 1;
    } else {
      const prevTop = this._arr[this._arr.length - 1];
      newNode.next = prevTop;
      this._arr.push(newNode);
      this.top = newNode;
      this.size += 1;
    }
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    const removedNode = this._arr.pop();
    this.size -= 1;

    if (this.size > 0) {
      const currTop = this._arr[this._arr.length - 1];
      currTop.next = null;
    }

    return removedNode.val;
  }

  /** peek(): return the value of the top node in the stack. */

  peek() {
    return this._arr[this._arr.length - 1].val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return (this.size === 0) ? true : false;
  }
}

module.exports = Stack;
