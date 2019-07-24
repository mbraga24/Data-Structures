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