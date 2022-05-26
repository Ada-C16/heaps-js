const { MinHeap } = require("./minheap");

// This method uses a heap to sort an array.
// Time Complexity:  ?
// Space Complexity: ?
function heapsort(list) {
  let heap = new MinHeap();
  let sortedHeap = [];

  for (let item of list) {
    heap.add(item);
  }

  while (heap.length > 0) {
    temp = heap.remove();
    sortedHeap.push(temp);
  }
  return sortedHeap;
};

module.exports = { heapsort };
