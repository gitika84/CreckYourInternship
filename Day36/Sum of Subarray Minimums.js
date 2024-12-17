var sumSubarrayMins = function (a) {
    const MOD = 1e9 + 7;
    const n = a.length;
    let finalSum = 0;
    const istack = [];
    istack.top = () => istack.at(-1);
    for (let i = 0; i <= n; i++) {
      while (istack.length && (i === n || a[istack.top()] >= a[i])) {
        const j = istack.pop();
        const L = istack.length ? istack.top() : -1;
        const R = i;
        const e = a[j];
        const times = (j - L) * (R - j);
        const tot = (e * times) % MOD;
        finalSum += tot;
        finalSum %= MOD;
      }
      istack.push(i);
    }
    return finalSum;
  };