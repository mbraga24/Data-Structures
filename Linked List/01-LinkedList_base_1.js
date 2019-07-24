function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

let todoList = new LinkedList();
console.log(todoList)

let node1 = new Node(100, 'node2', null);
console.log(node1)
