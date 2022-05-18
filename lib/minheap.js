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
  // Time Complexity: ?
  // Space Complexity: ?
  add(key, value = key) {
    // create new HeapNode
    const newNode = new HeapNode(key, value);

    // if MinHeap is empty
    if (this.store.length === 0) this.store.push(newNode);

    // if MinHeap is not empty
    else {
      // add the node to the end
      this.store.push(newNode);

      // perform heap-up where parent must be less than children
      let newNodeIndex = this.store.length - 1;
      this.heapUp(newNodeIndex);
    }

    return;
  }

  // This method removes and returns an element from the heap
  //   maintaining the heap structure
  // Time Complexity: ?
  // Space Complexity: ?
  remove() {
    // if MinHeap is empty
    if (this.store.length === 0) return;

    // if MinHeap is not empty
    else {
      this.swap(0, this.store.length - 1);
      // take the root and do a heap down
      this.heapDown(0);
    }

    return;
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
  // Time complexity: ?
  // Space complexity: ?
  isEmpty() {
    if (this.store.length === 0) return true

    return false;
  }

  // This helper method takes an index and
  //  moves it up the heap, if it is less than it's parent node.
  //  It could be **very** helpful for the add method.
  // Time complexity: ?
  // Space complexity: ?
  heapUp(index) {
    // update position in heap/array
    let parentIndex;
    if (index % 2 === 0) parentIndex = (index - 2) / 2;
    else parentIndex = (index - 1) / 2;
    // console.log('index', index);
    // console.log('parentIndex:', parentIndex);
    let newNode = this.store[index];
    let parent = this.store[parentIndex];
    // console.log(newNode);
    // console.log(parent);

    // base case
    if (parentIndex < 0 || parent.key < newNode.key) {
      // move newNode to that index
      return;
    } else if (parent.key > newNode.key) {
      // swap
      // move newNode to new index, perform heapUp
      this.swap(parentIndex, index);
      this.heapUp(parentIndex);
    }
  }

  // This helper method takes an index and 
  //  moves it up the heap if it's smaller
  //  than it's parent node.
  heapDown(index) {
    const rightChildIndex = (index * 2) + 2;
    const rightChild = this.store[rightChildIndex];
    const currentNode = this.store[index];
    console.log('currentNode:', currentNode);
    console.log('rightChild:', rightChild);
    console.log(rightChildIndex);

    if (rightChildIndex >= this.store.length || currentNode.key < rightChild.key) {
      return;
    } else if (currentNode.key > rightChild.key) {
      this.swap(index, rightChildIndex);
      this.heapDown(rightChildIndex);
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
