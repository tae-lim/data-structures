var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var poppedValue;

  // var storage = {
  //   '1': _____,
  //   '2': _____,
  //   '3': _____  <-push <-pop
  // };
  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
    if (count > 0) {
      count--;
    }
    poppedValue = storage[count];
    delete storage[count];
    return poppedValue;
  };
  someInstance.size = function() {
    return count;
  };

  return someInstance;
};

// var pancake = Stack();

// console.log(pancake); ->
// pancake = {
//   push: function
//   pop: function
//   size: function
// }

// count = 0
// pancake.push('hi');
// count = 1

// count = 2

// pancake.push('hey');
// count = 3
// pancake.pop(); - > ('hey');

