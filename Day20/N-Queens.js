function solveNQueens(n) {
    const results = [];

    // Helper to check if placing a queen is valid
    function isValid(board, row, col) {
        for (let i = 0; i < row; i++) {
            // Check the same column
            if (board[i][col] === 'Q') return false;
            // Check the top-left diagonal
            if (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') return false;
            // Check the top-right diagonal
            if (col + (row - i) < n && board[i][col + (row - i)] === 'Q') return false;
        }
        return true;
    }

    // Backtracking function
    function backtrack(row, board) {
        if (row === n) {
            results.push(board.map(row => row.join(''))); // Add the solution as a list of strings
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isValid(board, row, col)) {
                board[row][col] = 'Q'; // Place the queen
                backtrack(row + 1, board); // Recurse to the next row
                board[row][col] = '.'; // Remove the queen (backtrack)
            }
        }
    }

    // Initialize the board with '.'
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    backtrack(0, board);
    return results;
}

// Example usage:
const n = 4;
console.log(solveNQueens(n));
// Output:
// [
//   [".Q..",
//    "...Q",
//    "Q...",
//    "..Q."],
//   ["..Q.",
//    "Q...",
//    "...Q",
//    ".Q.."]
// ]
