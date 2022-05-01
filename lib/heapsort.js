const { MinHeap } = require('./minheap');
// This method uses a heap to sort an array.
// Time Complexity:  ?
// Space Complexity: ?
function heapsort(list) {
  let minHeap = new MinHeap();

  for (let num of list) {
    minHeap.add(num);
  }

  let i = 0;
  let currentMin;

  while (!minHeap.isEmpty()) {
    currentMin = minHeap.remove();
    list[i] = currentMin;
    i++;
  }
  
  return list;
};

module.exports = heapsort;
