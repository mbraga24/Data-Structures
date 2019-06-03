// LinkedList Constructor Function
function LinkedList() {
  // Properties
  this.head = null;
  this.tail = null;
}

// Node Constructor Function
function Node(value, next, prev) {
  // Properties
  this.value = value;
  this.next = next;
  this.prev = prev;
}
// Method
// "Addind a function in the LinkedList prototype"
LinkedList.prototype.addToHead = function(value) {
  let newNode = new Node(value, this.head, null);
  if (this.head) {
    this.head.prev = newNode;
  } else {
    this.tail = newNode;
  }
  this.head = newNode;
}

LinkedList.prototype.addToTail = function(value) {
  let newNode = new Node(value, null, this.tail);
  if (this.tail) {
    this.tail.next = newNode;
  } else {
    this.head = newNode;
  }
  this.tail = newNode;
}

LinkedList.prototype.removeHead = function() {
  if (!this.head) return null;

  let value = this.head.value;
  this.head = this.head.next;
  if (this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }
  return value;
}

LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null;

  let value = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }
  return value;
}

LinkedList.prototype.search = function(searchValue) {
  let currentNode = this.head;

  while(currentNode) {
    if (currentNode.value === searchValue) {
      return "The list item: " + currentNode.value + " was found."
    }
    currentNode = currentNode.next;
  }
  return "This Node does not exist in this list."
}

LinkedList.prototype.indexOf = function(value) {
  let indexes = [];
  let currentIndex = 0;
  let currentNode = this.head;

  while(currentNode) {
    if (currentNode.value === value) {
      indices.push(currentIndex);
    }
    currentIndex++;
    currentNode = currentNode.next;
  }
  return indexes;
}

LinkedList.prototype.arrayList = function() {
  let currentNode = this.head;
  let list = [];
  while(currentNode) {
    list.push(currentNode.value)
    currentNode = currentNode.next;
  }
  return list
}
