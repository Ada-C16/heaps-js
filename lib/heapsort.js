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
  console.log(heap);
  
  let count = 0;
  while (count < list.length) {
    let temp = heap.remove();
    sortedHeap.push(temp);
    count += 1;
  }
  return sortedHeap;
};

module.exports = { heapsort };
