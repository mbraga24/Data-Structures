// Constructor Function 
function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// Adding method to BST prototype
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