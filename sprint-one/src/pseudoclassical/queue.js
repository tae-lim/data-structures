var Queue = function() {

  this.storage = {};
  this.count = 0;
  this.first = 0;
  this.dequeued = null;

};

Queue.prototype.enqueue = function (value) {
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function () {
  if (this.count - this.first > 0) {
    this.dequeued = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    return this.dequeued;
  } else {
    this.count = 0;
    this.first = 0;
  }
};

Queue.prototype.size = function () {
  return this.count - this.first;
};


