    let currentPlayer = 'X';
    let board = ['', '', '', '', '', '', '', '', ''];
    let gameOver = false;

    function makeMove(cell) {
        if (!gameOver && board[cell] === '') {
            board[cell] = currentPlayer;
            document.getElementsByClassName('cell')[cell].textContent = currentPlayer;
            checkWin();
            currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        }
    }

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

            for (const condition of winConditions) {
                const [a, b, c] = condition;
                if (board[a] && board[a] === board[b] && board[b] === board[c]) {
                    gameOver = true;
                    document.getElementById('message').textContent = `${currentPlayer} wins!`;
                }
            }

            if (!board.includes('') && !gameOver) {
                gameOver = true;
                document.getElementById('message').textContent = "It's a draw!";
            }
        }

        function resetBoard() {
            currentPlayer = 'X';
            board = ['', '', '', '', '', '', '', '', ''];
            gameOver = false;
            document.getElementById('message').textContent = '';
            const cells = document.getElementsByClassName('cell');
            for (let i = 0; i < cells.length; i++) {
                cells[i].textContent = '';
            }
        }