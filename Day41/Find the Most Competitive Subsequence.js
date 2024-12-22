var mostCompetitive = function(N, K) {
    let len = N.length, moves = len - K
    for (let i = 0, j = 1; j < len;) {
        while (N[j] < N[i] && moves) i--, moves--
        if (!moves) return N.slice(0,i+1).concat(N.slice(j))
        N[++i] = N[j++]
    }
    return N.slice(0,K)
};