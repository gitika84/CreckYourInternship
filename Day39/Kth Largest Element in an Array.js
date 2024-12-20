
function Heap() {
    this.root = [];
}

Heap.prototype.heapifyDown = function (parent) {
    let leftInd = this.leftChild(parent);
    let rightInd = this.rightChild(parent);
    let maxHeap = this.root;
    let endindex = maxHeap.length - 1;
    while (leftInd <= endindex) {
        let indexToShift;
        if (rightInd <= endindex && maxHeap[rightInd] > maxHeap[leftInd]) {
            indexToShift = rightInd;
        } else {
            indexToShift = leftInd;
        }
        if (maxHeap[parent] < maxHeap[indexToShift]) {
            [maxHeap[parent], maxHeap[indexToShift]] = [
                maxHeap[indexToShift],
                maxHeap[parent],
            ];
            parent = indexToShift
            leftInd = this.leftChild(parent);
            rightInd = this.rightChild(parent);
        } else {
            return
        }
    }
};

Heap.prototype.buildheap = function (arr) {
    this.root = arr;
    let lastparent = this.parent(this.root.length - 1)
    for (let i = lastparent; i >= 0; i--) {
        this.heapifyDown(i);
    }

};

Heap.prototype.parent = function (i) {
    return Math.floor((i - 1) / 2);
}
Heap.prototype.leftChild = function (i) {
    return 2 * i + 1;
}

Heap.prototype.rightChild = function (i) {
    return 2 * i + 2;
};

Heap.prototype.remove = function () {
    const heap = this.root;
    [heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]];
    heap.pop();
    this.heapifyDown(0);
}

Heap.prototype.max = function () {
    return this.root[0]
}
var findKthLargest = function (nums, k) {
    let maxHeap = new Heap();
    maxHeap.buildheap(nums);
    for (let i = 0 ; i < k-1 ;i++) {
        maxHeap.remove()
    };
    return maxHeap.max()
};