var Stack = function() {
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.count = 0;
  instance.poppedValue = null;

  return instance;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.pop = function () {
  if (this.count > 0) {
    this.count--;
  }
  this.poppedValue = this.storage[this.count];
  delete this.storage[this.count];
  return this.poppedValue;
};

stackMethods.size = function () {
  return this.count;
};