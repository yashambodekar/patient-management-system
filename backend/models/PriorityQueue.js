class PriorityQueue {
  constructor() {
    this.queue = [];
  }

 
  swap(i, j) {
    [this.queue[i], this.queue[j]] = [this.queue[j], this.queue[i]];
  }


  enqueue(patient) {
    this.queue.push(patient);
    this.heapifyUp();
  }

 
  dequeue() {
    if (this.queue.length === 0) return null;
    if (this.queue.length === 1) return this.queue.pop();

  
    this.swap(0, this.queue.length - 1);
    const highestPriorityPatient = this.queue.pop();
    this.heapifyDown();

    return highestPriorityPatient;
  }

  peek() {
    return this.queue.length > 0 ? this.queue[0] : null;
  }


  heapifyUp() {
    let index = this.queue.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.queue[parentIndex].severity >= this.queue[index].severity) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }


  heapifyDown() {
    let index = 0;
    const length = this.queue.length;
    while (true) {
      let leftChild = 2 * index + 1;
      let rightChild = 2 * index + 2;
      let largest = index;

      if (leftChild < length && this.queue[leftChild].severity > this.queue[largest].severity) {
        largest = leftChild;
      }

      if (rightChild < length && this.queue[rightChild].severity > this.queue[largest].severity) {
        largest = rightChild;
      }

      if (largest === index) break;
      this.swap(index, largest);
      index = largest;
    }
  }


  isEmpty() {
    return this.queue.length === 0;
  }
}

module.exports = PriorityQueue;
