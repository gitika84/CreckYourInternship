function maxScore(cardPoints, k) {
    const n = cardPoints.length;
    const totalSum = cardPoints.reduce((acc, val) => acc + val, 0);

    if (k === n) return totalSum;

   
    let windowSum = 0;
    for (let i = 0; i < n - k; i++) {
        windowSum += cardPoints[i];
    }

    
    let minWindowSum = windowSum;
    for (let i = n - k; i < n; i++) {
        windowSum += cardPoints[i] - cardPoints[i - (n - k)];
        minWindowSum = Math.min(minWindowSum, windowSum);
    }

    return totalSum - minWindowSum;
}

const cardPoints = [1, 2, 3, 4, 5, 6, 1];
const k = 3;
console.log(maxScore(cardPoints, k));