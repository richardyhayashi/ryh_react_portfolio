import { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [history, setHistory] = useState<Array<string|null>[]>([Array<string|null>(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares: (string|null)[]) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1)
    setXIsNext(!xIsNext);
  }

  const jumpTo = (nextMove: number) => {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  } 

  const moves = history.map((_, move) => {
    const description: string
        = (move > 0)
            ? `Go to move #${move}`
            :  `Go to game start`;
    return (
      <li key={move}>
        <button className="border p-1 hover:bg-slate-200 min-w-40" onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="flex">
        <div className="mx-7">
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info">
            <ol>{moves}</ol>
        </div>
    </div>
  );
}

export default Game;