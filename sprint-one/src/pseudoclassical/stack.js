var Stack = function() {
  this.storage = {};
  this.count = 0;
  this.poppedValue = null;
};

Stack.prototype.push = function (value) {
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function () {
  if (this.count > 0) {
    this.count--;
  }
  this.poppedValue = this.storage[this.count];
  delete this.storage[this.count];
  return this.poppedValue;
};

Stack.prototype.size = function () {
  return this.count;
};

