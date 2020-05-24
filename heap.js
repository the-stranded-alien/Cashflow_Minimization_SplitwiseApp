export { BinaryHeap }

class BinaryHeap {
  constructor() {
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  empty() {
    return this.size() === 0;
  }
  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.size() - 1;
    while (index > 0) {
      let element = this.heap[index];
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];
      if (parent[0] > element[0]) break;
      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }
  extractMax() {
    const mx = this.heap[0];
    const tmp = this.heap.pop();
    if (!this.empty()) {
      this.heap[0] = tmp;
      this.sinkDown(0);
    }
    return mx;
  }
  sinkDown(index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let largest = index;
    let length = this.size();

    if (left < length && this.heap[left][0] > this.heap[largest][0]) {
      largest = left;
    }
    if (right < length && this.heap[right][0] > this.heap[largest][0]) {
      largest = right;
    }
    if (largest !== index) {
      let tmp = this.heap[largest];
      this.heap[largest] = this.heap[index];
      this.heap[index] = tmp;
      this.sinkDown(largest);
    }
  }
}

let maxHeap = new BinaryHeap();
maxHeap.insert([4, 1]);
maxHeap.insert([3, 1]);
maxHeap.insert([6, 1]);
maxHeap.insert([1, 1]);
console.log("Heap Size : ", maxHeap.size());
while (!maxHeap.empty()) {
  let maxEle = maxHeap.extractMax();
  console.log(maxEle);
}
