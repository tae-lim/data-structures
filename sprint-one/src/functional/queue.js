var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var front = 1;
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
    dequeued = storage[front];
    delete storage[front];
    front++;
    return dequeued;

    // var result = '';
    // var smallest = null;

    // // {
    // //   '1': a,
    // //   '2': b
    // // }

    // for (var key in storage) {
    //   // result += storage[key];
    //   // console.log(smallest);
    //   if (key < smallest || smallest === null) {
    //     smallest = key;
    //   }


    //   // delete storage[key];
    //   break;
    // }
    // result = storage[smallest];
    // delete storage[smallest];
    // return result;
  };

  someInstance.size = function() {
  //return the number of items in the queue.
  //return storage.length;
  };

  return someInstance;
};

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
