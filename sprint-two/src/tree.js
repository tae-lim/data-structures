var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

// var limFamily = Tree();

//every node
//{value: 'hello', children: []}

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var result = false;

  var searchNodes = function (object) {
    if (object.value === target) {
      result = true;
    } else {
      object.children.forEach(function(child) {
        searchNodes(child);
      });
    }
  };
  searchNodes(this);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */