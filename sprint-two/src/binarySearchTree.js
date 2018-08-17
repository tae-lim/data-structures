var BinarySearchTree = function(value) {
  var node = Object.create(binaryTreeMethods);
  node.value = value;
  node.left = null;
  node.right = null;
  return node;
};

//A .left property, a binary search tree (BST) where all values are lower than the current value.
//A .right property, a BST where all values are higher than the current value.

//.insert() method, which accepts a value and places it in the tree in the correct position.

var binaryTreeMethods = {};
binaryTreeMethods.insert = function (value) {
  var insertNodes = function(node) {
    if (value < node.value) {
      if (node.left === null) {
        node.left = BinarySearchTree(value);
      } else {
        insertNodes(node.left);
      }
    }
    if (value > node.value) {
      if (node.right === null) {
        node.right = BinarySearchTree(value);
      } else {
        insertNodes(node.right);
      }
    }
  };
  insertNodes(this);
};


//.contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.

binaryTreeMethods.contains = function (value) { //3

  var result = false;

  var containsNodes = function (node) {
    if (value === node.value) {
      result = true;
    } else {
      if (value < node.value && node.left) {
        containsNodes(node.left);
      }
      if (value > node.value && node.right) {
        containsNodes(node.right);
      }
    }
  };
  containsNodes(this);
  return result;
};


//.depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
binaryTreeMethods.depthFirstLog = function (cb) {

  var allNodes = function(node) {
    cb(node.value);
    if (node.left) {
      allNodes(node.left);
    }
    if (node.right) {
      allNodes(node.right);
    }
  };

  allNodes(this);

};

