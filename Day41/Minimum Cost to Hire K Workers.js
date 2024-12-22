
var mincostToHireWorkers = function (quality, wage, k) {
    let worker = quality.map((q, i) => [q, wage[i]]);
    worker.sort((a, b) => a[0] - b[0]);
    let maxHeap = new MaxPriorityQueue();
    let totalQuality = 0;
    let minPay = Infinity;

    for (let i = 0; i < worker.length; i++) {
        let [curQ, curW] = worker[i];
        maxHeap.enqueue(curQ, curW / curQ);
        totalQuality += curQ;
        if (i >= k - 1) {
            let mWorker = maxHeap.dequeue();
            let q = mWorker.element;
            let ratio = mWorker.priority;
            minPay = Math.min(totalQuality * ratio, minPay);
            totalQuality -= q;
        }
    }

    return minPay;
};