var Set = function() {
  var set = Object.create(setPrototype);
  set.count = 0;
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

//takes any string and adds it to the set
//Sets should not use up any more space than necessary. Once a value is added to a set, adding it a second time should not increase the size of the set.
setPrototype.add = function(item) {
  this._storage[this.count] = item;
  this.count++;
};

//takes any string and returns a boolean reflecting whether it can be found in a set
setPrototype.contains = function(item) {
  for (var node in this._storage) {
    if (this._storage[node] === item) {
      return true;
    }
  }
  return false;
};

//takes any string and removes it from the set, if present
setPrototype.remove = function(item) {
  for (var node in this._storage) {
    if (this._storage[node] === item) {
      delete this._storage[node];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
