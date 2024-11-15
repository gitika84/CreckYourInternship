function gameOfLife(board) {
    const rows = board.length;
    const cols = board[0].length;

    function countLiveNeighbors(r, c) {
        const directions = [
            [-1, -1], [-1, 0], [-1, 1], 
            [0, -1],          [0, 1],  
            [1, -1], [1, 0], [1, 1]   
        ];

        let liveNeighbors = 0;

        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && Math.abs(board[nr][nc]) === 1) {
                liveNeighbors++;
            }
        }

        return liveNeighbors;
    }

    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const liveNeighbors = countLiveNeighbors(r, c);

            if (board[r][c] === 1) {
        
                if (liveNeighbors < 2 || liveNeighbors > 3) {
                    board[r][c] = -1; 
                }
            } else {
               
                if (liveNeighbors === 3) {
                    board[r][c] = 2;
                }
            }
        }
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === -1) {
                board[r][c] = 0; 
            } else if (board[r][c] === 2) {
                board[r][c] = 1; 
            }
        }
    }
}

const board = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
];

gameOfLife(board);
console.log(board);