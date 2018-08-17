var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      currentNode = list.head;
      while (currentNode.next) {
        currentNode = current.next;
      }
      currentNode.next = Node(value);
      list.tail = currentNode.next;
    }
  };

  list.removeHead = function() {
      var removedHead = list.head.value;
      list.head = list.head.next;
      if (list.head === null) {
        list.tail = null;
      }
      return removedHead;
  };

  list.contains = function(target) {
    if (list.head) {
      current = list.head;
      if (current.value === target) {
        return true;
      } else {
        while (current.next) {
          current = current.next;
          if (current.value === target) {
            return true;
          }
        }
      }
    }
    return false;
  };


  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// var newList = LinkedList() ->
// {
//   list.head = null
//   list.tail = null
//   list.addToTail = function(){}
//   list.removeHead = function(){}
//   list.contains = function(){}
// }

// var newNode = Node() ->
// {
//   node.value = value;
//   node.next = null;
// }