var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] === undefined) {
    this._storage[index] = [[k, v]];
  } else {
    var inserted = false;
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        this._storage[index][i][1] = v;
        inserted = true;
      }
    }
    if (inserted === false) {
      this._storage[index].push([k, v]);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] === undefined) {
    return undefined;
  } else {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        return this._storage[index][i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index].length === 1 && this._storage[index][0][0] === k) {
    delete this._storage[index];
  } else {
    for (var i = 0; i < this._storage[index]; i++) {
      if (this._storage[index][i][0] === k) {
        delete this._storage[index][i];
      }
    }
  }
};
// var HashTable = function() {
//   this._limit = 8;
//   this._storage = LimitedArray(this._limit);
// };

// HashTable.prototype.insert = function(k, v) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   if (this._storage.get(index) === undefined) {
//     this._storage.set(index, v);
//   } else {
//     this._storage.each(function(bucket, index) {
//       bucket.each(function(keyValue, index) {
//         if (keyValue[index])
//       });
//     });
//   }
// };
// [['frog', 'toad'], ['hip', 'hop']], [['dragon', 'berry']], [], [], [], [], [], []


// HashTable.prototype.retrieve = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);

// };

// HashTable.prototype.remove = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);

// };


/*
 * Complexity: What is the time complexity of the above functions?
 */

// A hash table would be great for....
// A contact list you might add to or remove from over time.

// Do...
// A hashTable class, in pseudoclassical style:
// First: Play with each of the helper functions provided to get a sense of what they do.
// You will use the provided hash function to convert any key into an array index. Try interacting with it from the console first.
// A limitedArray helper has been provided for you, check out the source code for it in src/hashTableHelpers.js. Use it to store all inserted values rather than using a plain JavaScript array. The limitedArray, as you will see in the source code, provides get, set, and each methods which you should use in order to interact with it. Do not use the typical bracket notation for arrays when interacting with a limitedArray instance. Try interacting with it from the console first.

// Make the following properties appear on all instances:
// An .insert() method
// A .retrieve() method
// A .remove() method

// What is the time complexity of the above functions?
// Using your understanding of hash tables, refactor your set implementation from above to run in constant time
// On Objects and Hash Tables: An astute hacker might find themself wondering "Is it not so that a JavaScript object is a hash table?" or even further, "Why would I ever need to create a hash table in JavaScript?" While it is true that objects and hash tables are functionally similar, knowing how a hash table works is hugely important as they are an incredibly useful and fundamental data structure. To have detailed knowledge of how a hash table is constructed will give you valuable insight on your path to code mastery. Additionally, other languages might not provide the convenience of JavaScript's object class, meaning you may someday have to put your hash table construction abilities to good use.

// **Interesting Aside: JavaScript objects aren't necessarily backed by hash tables. Despite the similarities, the ECMA-262 standard makes no restrictions on how JavaScript objects are implmented. The V8 JavaScript engine, which is used in Chrome, implements objects in a way that is significantly faster than using a hash table.



