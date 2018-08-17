class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
    this.first = 0;
    this.dequeued = null;
  }

  enqueue(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  dequeue() {
    if (this.count - this.first > 0) {
      this.dequeued = this.storage[this.first];
      delete this.storage[this.first];
      this.first++;
      return this.dequeued;
    } else {
      this.count = 0;
      this.first = 0;
    }
  }

  size() {
    return this.count - this.first;
  }

}
