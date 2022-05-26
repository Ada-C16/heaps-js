class HeapNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class MinHeap {
  constructor() {
    this.store = [];
  }

  // This method adds a HeapNode instance to the heap
  // Time Complexity: O(log n)
  // Space Complexity: O(1)
  add(key, value = key) {
    let newNode = new HeapNode(key, value);
    this.store.push(newNode);
    this.heapUp(this.store.length - 1);
  }

  // This method removes and returns an element from the heap
  //   maintaining the heap structure
  // Time Complexity: ?
  // Space Complexity: ?
  remove() {
    if (this.store.length) {
    this.swap(0, this.store.length - 1);
    let result = this.store.pop();
    this.heapDown(0);
    return result.value;
    }
  }

  // Used for Testing
  toString() {
    if (!this.store.length) {
      return "[]";
    }

    const values = this.store.map((item) => item.value);
    const output = `[${values.join(", ")}]`;
    return output;
  }

  // This method returns true if the heap is empty
  // Time complexity: O(1)
  // Space complexity: O(1)
  isEmpty() {
    return !this.store.length;
  }

  // This helper method takes an index and
  //  moves it up the heap, if it is less than it's parent node.
  //  It could be **very** helpful for the add method.
  // Time complexity: O(log n)
  // Space complexity: O(1)
  heapUp(index) {
    let temp = index;
    let parent = Math.floor((temp - 1) / 2);
    while (parent >= 0 && this.store[parent].key > this.store[temp].key) {
      this.swap(temp, parent);
      temp = parent;
      parent = Math.floor((temp - 1) / 2);
    }
  }

  /*
  This helper method takes an index and 
  moves the corresponding element down the heap if it's 
  larger than either of its children and continues until
  the heap property is reestablished.
  */
  heapDown(index) {
    let leftChild = 2 * index + 1;
    let rightChild = 2 * index + 2;
    let currentChild = 0;
    let store = this.store;

    if (leftChild < store.length ) {
      if (rightChild < store.length){
        if (store[leftChild].key < store[rightChild].key) {
          currentChild = leftChild;
        } else {
          currentChild = rightChild;
        }
      } else{
        currentChild = leftChild;
      }

      if (store[index].key > store[currentChild].key){
        this.swap(index, currentChild);
        this.heapDown(currentChild);
      }
    }

    // if (store[currentChild].key > store[index].key) {
    //   this.swap(currentChild, index);
    //   this.heapDown(currentChild);
    // }
  }

  // If you want a swap method... you're welcome
  swap(index1, index2) {
    const s = this.store;
    [s[index1], s[index2]] = [s[index2], s[index1]];
  }
}

module.exports = {
  MinHeap,
};
