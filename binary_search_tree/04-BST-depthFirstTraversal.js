// Constructor Function 
function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// Adding method "insert" to BST prototype
BST.prototype.insert = function(value) {
  if (value <= this.value) {
    if (!this.left) {
      this.left = new BST(value); 
    } else if (this.left) {
      this.left.insert(value)
    }
  } else if (value > this.value) {
    if (!this.right) {
      this.right = new BST(value)
    } else if (this.right) {
      this.right.insert(value);
    }
  }
}

// Adding method "contains" to BST prototype
BST.prototype.contains = function(value) {
  if (value === this.value) {
    return true;
  } else if (value < this.value) {
    if (!this.left) {
      return false
    } else {
      return this.left.contains(value)
    }
  } else if (value > this.value) {
    if (!this.right) {
      return false
    } else {
      return this.right.contains(value)
    }
  }
}

// Adding method "depthFirstTraversal" to BST prototype
BST.prototype.depthFirstTraversal = function(iteratorFunc) {
  if (this.left) {
    this.left.depthFirstTraversal(iteratorFunc);
  }
  iteratorFunc(this.value)
  if (this.right) {
    this.right.depthFirstTraversal(iteratorFunc);
  }
}

function log(value) {
  console.log(value)
}

let bst = new BST(50);
bst.insert(30)
bst.insert(70)
bst.insert(100)
bst.insert(60)
bst.insert(59)
bst.insert(20)
bst.insert(45)
bst.insert(85)
bst.insert(35)
bst.insert(105)
bst.insert(10)

bst.depthFirstTraversal(log);