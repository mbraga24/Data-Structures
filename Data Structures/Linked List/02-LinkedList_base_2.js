function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}
LinkedList.prototype.addToHead = function(value) {
  let newNode = new Node(value, this.head, null);
  // "If the Linked List has already nodes in it or if it already has a head set that head's previous pointer equal to our 'newNode'"
  if (this.head) {
    this.head.prev = newNode;
  } else {
  // If the Linked List is empty set the tail node to the newNode because the newNode will be the only one in the list, therefore
  // it will be both the head node and the tail node.
    this.tail = newNode;
  }
  // Whether the Linked List was previously empty or not we will assign the new node to be the head of the list.
  this.head = newNode;
}
