function HashTable(size) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

HashTable.prototype.hash = function(key) {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    total += key.charCodeAt(i)
  }
  let buckets = total % this.buckets.length;
  return buckets;
}

HashTable.prototype.insert = function(key, value) {
  let index = this.hash(key);

  if (!this.buckets[index]) {
    this.buckets[index] = new HashNode(key, value)
  } else if (this.buckets[index].key === key) {
    this.buckets[index].value = value;
  } else {
    let currentNode = this.buckets[index];
    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode.next.value = value;
      }
      currentNode = currentNode.next;
    }
    currentNode.next = new HashNode(key, value);
  }
}

let myHT = new HashTable(30);


myHT.insert('Dane', 'dane@gmail.com');
myHT.insert('Becca', 'becca@gmail.com');
myHT.insert('Dean', 'dean@yahoo.com');
myHT.insert('Carlos', 'carlos@gmail.com');
myHT.insert('Mikael', 'mikael@yahoo.com');
myHT.insert('Joanne', 'joanne@hotmail.com');

myHT.insert('Dane', 'danesmith@gmail.com');
myHT.insert('Joanne', 'joanne1010@hotmail.com');
myHT.insert('Dean', 'deanmachine@yahoo.com');

console.log(myHT.buckets)