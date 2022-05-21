const { MinHeap } = require('./minheap');
// This method uses a heap to sort an array.
// Time Complexity: O(n log n)
// Space Complexity: O(n)
function heapsort(list) {
  if (list.length === 0) return list;

  const heap = new MinHeap();

  for (const num of list) {
    heap.add(num);
  }
  
  for (let i = 0; i < list.length; i++) {
    list[i] = heap.remove();
  }

  return list;
};

module.exports = heapsort;
