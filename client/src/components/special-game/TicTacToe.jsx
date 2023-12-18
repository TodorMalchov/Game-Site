// TicTacToe.js
import React, { useState, useEffect } from 'react';


const initialBoard = Array(9).fill(null);

const TicTacToe = () => {
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const winner = calculateWinner(board);
    if (winner) {
      setWinner(winner);
      setTimeout(() => {
        alert(`Game Over! Winner: ${winner}`);
        resetGame();
      }, 100);
    } else if (!isXNext) {
      // AI makes a move after player's move
      const aiMoveTimeout = setTimeout(() => {
        makeAiMove();
        setIsXNext(true); // Set back to player's turn after AI move
      }, 500);

      return () => clearTimeout(aiMoveTimeout);
    }
  }, [board, isXNext]);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  }

  const handleClick = (index) => {
    if (board[index] || winner || !isXNext) {
      return;
    }

    const newBoard = board.slice();
    newBoard[index] = 'X';
    setBoard(newBoard);
     setIsXNext(false); // Don't set this here, let AI make its move first
  };

  const makeAiMove = () => {
    const availableMoves = [];
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        availableMoves.push(i);
      }
    }

    if (availableMoves.length > 0) {
      const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
      const newBoard = board.slice();
      newBoard[randomMove] = 'O';
      setBoard(newBoard);
    }
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setIsXNext(true);
    setWinner(null);
  };

  const renderSquare = (index) => (
    <button className="square" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="tic-tac-toe">
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default TicTacToe;
