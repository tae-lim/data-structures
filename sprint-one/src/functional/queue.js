var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
  //adds a string value to the back of the storage.

  var count = 1;
    storage[count] = value;
    count ++;
  };

  someInstance.dequeue = function() {
  //return and removes a string value at the front of the queue
  };

  someInstance.size = function() {
  //return the number of items in the queue.
  };

  return someInstance;
};

//First in first out
//Last in last out

// var groceryLine = Queue();

// console.log(groceryLine); ->
// groceryLine = {
//   enqueue: function
//   dequeue: function
//   size: function
// }

// groceryLine.enqueue('hi');

//every time you call queue, you get a new instance (aka object).
