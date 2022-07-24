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
  // Space Complexity: O(log n) because of recursion
  add(key, value = key) {
    let newNode = new HeapNode(key, value);
    this.store.push(newNode);
    this.heapUp(this.store.length - 1);
  }

  // This method removes and returns an element from the heap
  //   maintaining the heap structure
  // Time Complexity: O(log n)
  // Space Complexity: O(log n) because of recursion
  remove() {
    if (this.isEmpty()) return;

    this.swap(0, this.store.length - 1);
    let minValue = this.store.pop()
    this.heapDown(0);
    
    return minValue.value;
  }


  // Used for Testing
  toString() {
    if (!this.store.length) {
      return "[]";
    }

    const values = this.store.map(item => item.value);
    const output = `[${values.join(', ')}]`;
    return output;
  }

  // This method returns true if the heap is empty
  // Time complexity: O(1)
  // Space complexity: O(1)
  isEmpty() {
    return this.store.length === 0;
  }

  // This helper method takes an index and
  //  moves it up the heap, if it is less than it's parent node.
  //  It could be **very** helpful for the add method.
  // Time complexity: O(log n)
  // Space complexity: O(1)
  heapUp(index) {
    let index1 = index;
    let parentIndex = Math.floor((index - 1)/2);

    while (parentIndex >= 0 && this.store[parentIndex].key > this.store[index1].key) {
      this.swap(index1, parentIndex);
      index1 = parentIndex;
      parentIndex = Math.floor((index1 - 1)/2);
    }
  }

  // This helper method takes an index and 
  //  moves it up the heap if it's smaller
  //  than it's parent node.
  heapDown(index) {
    let leftChildIndex = (2 * index) + 1;
    let rightChildIndex = (2 * index) + 2;
    let nextRootIndex;

    if (leftChildIndex < this.store.length && rightChildIndex < this.store.length) {
      if (this.store[leftChildIndex].key > this.store[rightChildIndex].key) {
        nextRootIndex = rightChildIndex;
      } else {
        nextRootIndex = leftChildIndex;
      }
    } else {
      nextRootIndex = leftChildIndex;
    }

    if (nextRootIndex < this.store.length && this.store[nextRootIndex].key < this.store[index].key) {
      this.swap(index, nextRootIndex);
      this.heapDown(nextRootIndex);
    }
  }

  // If you want a swap method... you're welcome
  swap(index1, index2) {
    const s = this.store;
    [s[index1], s[index2]] = [s[index2], s[index1]];
  }
}

module.exports = {
  MinHeap
};
