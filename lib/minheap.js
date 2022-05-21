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
    // create new HeapNode
    const newNode = new HeapNode(key, value);

    // add the node to the end
    this.store.push(newNode);

    // perform heap-up where parent must be less than children
    const index = this.store.length - 1;
    this.heapUp(index);
  }

  // This method removes and returns an element from the heap
  //   maintaining the heap structure
  // Time Complexity: O(log n)
  // Space Complexity: O(1)
  remove() {
    // if MinHeap is empty
    if (this.store.length === 0) return;

    // if MinHeap is not empty
    this.swap(0, this.store.length - 1);
    // remove last 
    const removed = this.store.pop();
    // take the root and do a heap down
    this.heapDown(0);

    return removed.value;
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
    if (this.store.length === 0) return true

    return false;
  }

  // This helper method takes an index and
  //  moves it up the heap, if it is less than it's parent node.
  //  It could be **very** helpful for the add method.
  // Time complexity: O(log n)
  // Space complexity: O(1)
  heapUp(index) {
    // update position in heap/array
    const parentIndex = Math.floor((index - 1) / 2);

    const element = this.store[index];
    const parent = this.store[parentIndex];

    // base case
    if (index === 0 || parent.key < element.key) {
      // pass
    } else if (parent.key > element.key) {
      this.swap(parentIndex, index);
      index = parentIndex;
      this.heapUp(index);
    }

    return;
  }

  // This helper method takes an index and 
  //  moves it up the heap if it's smaller
  //  than it's parent node.
  heapDown(index) {
    const element = this.store[index];

    const rightChildIndex = (index * 2) + 2;
    const leftChildIndex = (index * 2) + 1;
    let leftChild, rightChild;
    let smallestItemIndex = index;

    if (leftChildIndex < this.store.length) {
      leftChild = this.store[leftChildIndex];
      if (leftChild.key < element.key) {
        smallestItemIndex = leftChildIndex;
      }
    }

    if (rightChildIndex < this.store.length) {
      rightChild = this.store[rightChildIndex];

      if (rightChild.key < this.store[smallestItemIndex].key) {
        smallestItemIndex = rightChildIndex;
      }
    }

    // base case
    if (smallestItemIndex === index) {
      return;
    }
    // swap
    // perform heapDown
    this.swap(index, smallestItemIndex);
    this.heapDown(smallestItemIndex);
  }

  // If you want a swap method... you're welcome
  swap(index1, index2) {
    const s = this.store;
    [s[index1], s[index2]] = [s[index2], s[index1]];
  }
}

module.exports = {
  MinHeap,
  HeapNode
};
