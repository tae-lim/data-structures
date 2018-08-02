var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var poppedValue;

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

