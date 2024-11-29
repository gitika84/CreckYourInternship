class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(point, distance) {
        this.heap.push({ point, distance });
        this._heapifyUp();
    }

    extractMax() {
        if (this.size() === 1) return this.heap.pop();
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return max;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    _heapifyUp() {
        let index = this.size() - 1;
        while (
            index > 0 &&
            this.heap[index].distance > this.heap[Math.floor((index - 1) / 2)].distance
        ) {
            this._swap(index, Math.floor((index - 1) / 2));
            index = Math.floor((index - 1) / 2);
        }
    }

    _heapifyDown() {
        let index = 0;
        const size = this.size();
        while (true) {
            let largest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            if (left < size && this.heap[left].distance > this.heap[largest].distance) {
                largest = left;
            }

            if (right < size && this.heap[right].distance > this.heap[largest].distance) {
                largest = right;
            }

            if (largest === index) break;

            this._swap(index, largest);
            index = largest;
        }
    }

    _swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}

function kClosest(points, k) {
    const maxHeap = new MaxHeap();

    for (const point of points) {
        const distance = point[0] ** 2 + point[1] ** 2;
        maxHeap.insert(point, distance);

        if (maxHeap.size() > k) {
            maxHeap.extractMax();
        }
    }

    return maxHeap.heap.map(item => item.point);
}

// Example usage:
const points = [[1, 3], [-2, 2], [5, 8], [0, 1]];
const k = 2;
console.log(kClosest(points, k)); // Output: [[-2, 2], [0, 1]]
