var Queue = function() {
  var instance = {};
  instance.storage = {};
  instance.count = 0;
  instance.first = 0;
  instance.dequeued = null;

  _.extend(instance, queueMethods);

  return instance;
};

var queueMethods = {};
queueMethods.enqueue = function (value) {
  this.storage[this.count] = value;
  this.count++;
};

queueMethods.dequeue = function () {
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

queueMethods.size = function () {
  return this.count - this.first;
};


