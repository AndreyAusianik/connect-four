module.exports = function connectFour(board) {
    const fourEqual = (board, i, j, iDir, jDir) => 
        board[i][j] == board[i + iDir][j + jDir] &&
        board[i][j] == board[i + iDir * 2][j + jDir * 2] &&
        board[i][j] == board[i + iDir * 3][j + jDir * 3];
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            if(board[i][j] !== '-' && 
                (i > 2 && j < board[i].length - 3 && fourEqual(board, i, j, -1, 1) ||
                 j < board[i].length - 3 && fourEqual(board, i, j, 0, 1) ||
                 i < board.length - 3 && j < board[i].length - 3 && fourEqual(board, i, j, 1, 1) ||
                 i < board.length - 3 && fourEqual(board, i, j, 1, 0))) {
                return board[i][j];
            }
        }
    }


    return 'That is not the end!';   
}
