import Square from "./Square";
import { calculateWinner } from "./utils";

type BoardProps = {
  xIsNext: boolean,
  squares: (string|null)[],
  onPlay: (nextSquares: (string|null)[]) => void,
  onGameEnd: () => void,
}

const isFull = (squares: (string|null)[]):boolean => {
  return !squares.includes(null);
}

const Board = ({ xIsNext, squares, onPlay, onGameEnd}: BoardProps) => {
  const handleClick = (i: number) => {
        if (squares[i] || calculateWinner(squares)) return;

        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? 'X' : 'O';
        onPlay(nextSquares);
        
        if (calculateWinner(nextSquares) || isFull(nextSquares)) {
          onGameEnd();
        }
  }

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <>
      <div className="">{status}</div>
      <div className="flex flex-col">
        <div className="flex">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="flex">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="flex">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}

export default Board;