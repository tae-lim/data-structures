class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.storage = {};
    this.popped = null;
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    if (this.count > 0) {
      this.count--;
      this.popped = this.storage[this.count];
      delete this.storage[this.count];
      return this.popped;
    }
  }

  size() {
    return this.count;
  }

}

// ES6 instantiation: declare classes with the keyword class
// Do:
// -Capitalize your function name to indicate to others that it is intended to be run with the keyword new
// -Use the keyword new when instantiating your class
// -Use the keyword this in your constructor
// -Explicitly declare a class method named constructor
// -Declare all other class methods within the class declaration

// Don't:
// -Declare the instance explicitly
// -Return the instance explicitly
// -Add class methods to the class prototype directly
// Example: es6 instantiation example