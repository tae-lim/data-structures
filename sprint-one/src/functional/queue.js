var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var front = 0;
  var dequeued;
  // var storage = {
  //   '1': _____, <-dequeue
  //   '2': _____,
  //   '3': _____  <-enqueue
  // };

  // Implement the methods below

  someInstance.enqueue = function(value) {
  //adds a string value to the back of the storage.
    storage[count] = value;
    count ++;
  };

  someInstance.dequeue = function() {
    if (count - front >= 0) {
      dequeued = storage[front];
      delete storage[front];
      front++;
    }
    return dequeued;
  };

  someInstance.size = function() {
  //return the number of items in the queue.
  //return storage.length;
    if (count - front < 0) {
      return 0;
    } else {
      return count - front;
    }
  };

  return someInstance;
};

//test comment

// First in first out
// Last in last out

// var groceryLine = Queue();

// console.log(groceryLine); ->
// groceryLine = {
//   enqueue: function
//   dequeue: function
//   size: function
// }

// groceryLine.enqueue('hi');
// groceryLine.dequeue(); - > ???

//every time you call queue, you get a new instance (aka object).
