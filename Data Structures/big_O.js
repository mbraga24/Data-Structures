//========================================================================================
// SOURCE: https://bit.ly/2HkrVc0
//========================================================================================

// Big-O is used to classify how scalable an algorithm or function is. It allows to estimate the worst case runtime of an
// algorithm or how long it takes the algorithm to complete based on the input size. This means that Big O informs us of
// how much slower an algorithm will run if it's input size grows.
//
// Will the runtime of the function stay the same ?
// Will the runtime get proportionally larger as the input size increases ?
// Will the runtime get exponentially larger ?
// Will the runtime change in some other way ?
//
// This is what Big-O notation tells us. It describes how performant a function or algorithm is.

//========================================================================================
//========================================================================================

// CONSTANT RUNTIME
// Big-O Notation: "O (1)"

// :: We know that the runtime is constant because as the input size increases or in this case as we increase the
// :: size of the array, the number of operations that we perform never changes. We still logout the first 2 elements
// :: no matter how large the array gets. This is called Constant runtime,

function log(array) {
  console.log(array[0])
  console.log(array[1])
}

log([1,2,3,4]);
log([1,2,3,4,5,6,7,8,9,10]);


// ========================================================================================
// ========================================================================================

// LINEAR RUNTIME
// Big-O Notation: "O (n)"

// :: This function will do an operation on every single element in the array. As the input size increases the runtime
// :: will also increase. For this function the runtime will increase porportionally to how much the input increases.
// :: This is called Linear runtime.

function logAll(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

logAll([1,2,3,4]);
logAll([1,2,3,4,5,6,7,8]);
logAll([1,2,3,4,5,6,7,8,9,10,11,12]);


// ========================================================================================
// ========================================================================================

// EXPONENTIAL RUNTIME
// Big-O Notation: "0 (n^2)"

// :: This function gives every possible combination of pairs in the array. It iterates through the whole array
// :: and on every element that it hits and it goes through the whole array and hits on every element again. So all
// :: possible pairs are made that's why there is 2 nested for loops.

// !! If you write a function like this you won't notice the performance issue with very small inputs.
// !! But as your input start to scale and become very large a function with exponential time complexity
// !! becomes very inefficient and can slow down an application.

function addAndLog(array) {
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      console.log(array[i] + array[j]);
    }
  }
}

addAndLog(['A','B','C']) // 9 Pairs logged out
addAndLog(['A','B','C','D']) // 16 Pairs logged out
addAndLog(['A','B','C','D','E']) // 25 Pairs logged out

// ========================================================================================
// ========================================================================================

// LOGARITHMIC RUNTIME
// Big-O Notation: "O (log n)"

// :: Binary search has a logarithmic runtime because with every operation that we perform we are cutting
// :: the input in half. Thus, even if we have a huge input we are only going to be looking at a fraction of
// :: the elements to find the one that we are searching for. Binary Search is an example of LOGARITHMIC RUNTIME
// :: or TIME COMPLEXITY.

// !! On an input of 26 elements we could perform about 4 operations. As the input size grows the number of operations
// !! that we will perform will not grow porportionally but it will grow algorithmically.
// !! On a larger input of size of 4000 elements we could take about 12 operations to find an element.

function binarySearch(array, key) {
  let low = 0
  let high = array.length - 1;
  let mid;
  let element;

  while (low <= high) {
    mid = Math.floor((low + high) / 2, 10);
    element = array[mid];
    if (element < key) {
      low = mid + 1;
    } else if (element > key) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

// ========================================================================================
// ========================================================================================
