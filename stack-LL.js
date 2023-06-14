"use strict";

const LinkedList = require("./linked-list");

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
  _list = new LinkedList();

  /** push(val): add new value to the top of the stack. Returns undefined.
   *
   * For a LinkedList, adding to the "top of the stack" is adding to the head.
   * Trying to remove from end of LL is O(n), whereas removing from the front
   * is O(1).
  */

  push(val) {
    this._list.unshift(val);
    this.top = this._list.head;
    this.size += 1;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    const removed = this._list.shift();
    this.top = this._list.head;
    this.size -= 1;
    return removed;
  }

  /** peek(): return the value of the top node in the stack. */

  peek() {
    return this._list.getAt(0);
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return (this.size === 0) ? true : false;
  }
}

module.exports = Stack;
