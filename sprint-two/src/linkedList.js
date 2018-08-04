var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (!list.head) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      var current = list.head;
      while (current.next) {
        current = current.next;
      }
      current.next = Node(value);
      list.tail = current.next;
    }
  };

  list.removeHead = function() {
    var oldHeadValue = list.head.value;
    list.head = list.head.next;
    return oldHeadValue;
  };

  list.contains = function(target) {
    var current = list.head;
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

// node addNode(node head, int value){
//    node temp,p;// declare two nodes temp and p
//    temp = createNode();// assume createNode creates a new node with data = 0 and next pointing to NULL.
//    temp->data = value; // add element's value to data part of node
//    if(head == NULL){
//        head = temp;     //when linked list is empty
//    }
//    else{
//        p  = head;//assign head to p
//        while(p->next != NULL){
//            p = p->next;//traverse the list until p is the last node.The last node always points to NULL.
//        }
//        p->next = temp;//Point the previous last node to the new node created.
//    }
// //    return head;

// }