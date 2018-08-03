class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
    this.front = 0;
    this.dequeued = null;
  }

  enqueue(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  dequeue() {
    if (this.count - this.front > 0) {
      this.dequeued = this.storage[this.front];
      delete this.storage[this.front];
      this.front++;
      return this.dequeued;
    } else {
      this.front = 0;
      this.count = 0;
    }
  }

  size() {
    return this.count - this.front;
  }

}
