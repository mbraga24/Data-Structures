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

  // 'For the 'next' parameter (next node) we will pass the 'this.head' which will refer to the current head or old head
  // of the linked list. The reason why we add 'this.head' is that if we add the new node to the beginnig of the linked
  // list the following node will be the old head or what it is now the 'this.head'.'

  // "For the 'prev' parameter we pass 'null' because there will be no nodes coming before the new node"
  
  let newNode = new Node(value, this.head, null);


}
