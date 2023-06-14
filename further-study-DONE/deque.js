"use strict";

// TODO: this should be implemented with Doubly Linked List for O(1) runtime.
// Right now, popRight is O(n).

const LinkedList = require("../linked-list");

/** Node: node for a deque. */

class Node {
  val = null;
  next = null;
  prev = null;

  constructor(val) {
    this.val = val;
  }
}

/** Deque: chained-together nodes where you can
 *  add to the end or beginning and remove from the end or beginning. */

class Deque {
  first = null;
  last = null;
  size = 0;
  _list = new LinkedList();

  /** appendRight(val): add new value to end of the deque.
   * Returns undefined.
   *
   * "End of deque" is tail of LL. */

  appendRight(val) {
    this._list.push(val);
    this.first = this._list.head;
    this.last = this._list.tail;
    this.size += 1;
  }

  /** popRight(): remove a node from the end of the deque.
   * Return it's value.
   * Should throw an error if the deque is empty. */

  popRight() {
    const removed = this._list.pop();
    this.tail = this._list.tail;
    this.size -= 1;
    return removed;
  }

  /** appendLeft(val): add new value to beginning of the deque.
   * Returns undefined. */

  appendLeft(val) {
    this._list.unshift(val);
    this.first = this._list.head;
    this.last = this._list.tail;
    this.size += 1;
  }

  /** popLeft(): remove a node from the beginning of the deque.
   * Return it's value.
   * Should throw an error if the deque is empty. */

  popLeft() {
    const removed = this._list.shift();
    this.first = this._list.head;
    this.size -= 1;
    return removed;
  }

  /** peekRight(): return the value of the end node in the deque. */

  peekRight() {
    return this._list.getAt(this.size - 1);
  }

  /** peekLeft(): return the value of the beginning node in the deque. */

  peekLeft() {
    return this._list.getAt(0);
  }

  /** isEmpty(): return true if the deque is empty, otherwise false */

  isEmpty() {
    return (this.size === 0) ? true : false;
  }
}

module.exports = Deque;
