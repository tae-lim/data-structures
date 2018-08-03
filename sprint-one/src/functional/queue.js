var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var front = 0;
  var dequeued;

  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[count] = value;
    count ++;
  };

  someInstance.dequeue = function() {
    if (count - front > 0) {
      dequeued = storage[front];
      delete storage[front];
      front++;
      return dequeued;
    } else {
      count = 0;
      front = 0;
    }

  };

  someInstance.size = function() {
    if (count - front < 0) {
      return 0;
    } else {
      return count - front;
    }
  };

  return someInstance;
};

