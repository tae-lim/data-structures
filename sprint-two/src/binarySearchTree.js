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

  var traverseNodes = function (node) {
    var currentNodeValue = node.value; //2
    var leftNode = node.left;//null
    var rightNode = node.right;//null

    if (currentNodeValue > value) { //if (2 > 3) ->
      if (leftNode === null) {
        node.left = BinarySearchTree(value);
      } else {
        traverseNodes(leftNode);
      }
    } else if (currentNodeValue < value) { //if (2 < 3) ->
      if (rightNode === null) {//rightnode is null
        node.right = BinarySearchTree(value); //rightnode is now BinarySearchTree(3)
      } else {
        traverseNodes(rightNode);//if a node is not null, call traverseNodes
      }
    }
  };

  traverseNodes(this);
};

//.contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
binaryTreeMethods.contains = function (value) { //3

  var result = false;

  var containsNodes = function (node) {
    var currentNodeValue = node.value;//2
    var leftNode = node.left;//null
    var rightNode = node.right;//null
    if (currentNodeValue) { // 2
      if (value === currentNodeValue) { // 3 != 2
        result = true;
      } else {
        if (value < currentNodeValue && node.left) { //if (2 > 3) ->
          containsNodes(node.left);
        }
        if (value > currentNodeValue && node.right) { //if (2 < 3) ->
          containsNodes(node.right);
        }
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
  }

  allNodes(this);

};

