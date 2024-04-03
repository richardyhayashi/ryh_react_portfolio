import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [squares, setSquares] = useState<(string|null)[]>(Array<string|null>(9).fill(null));

  const handleClick = (i: number) => {
        if (squares[i] || calculateWinner(squares)) return;

        const nextSquares = squares.slice();
        
        nextSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
  }

  return (
    <div className="">
        {squares.map((value, index) => (
            <Square key={index} value={value} onSquareClick={() => handleClick(index)} />)
        )}
    </div>
  );
}

/**
 * 
 * @param squares 
 * @returns 
 */
const calculateWinner = (squares: (string|null)[]): string|null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  
  return null;
}

export default Board;