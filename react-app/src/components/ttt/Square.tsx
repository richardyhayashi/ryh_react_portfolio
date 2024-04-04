import './style.css';

type SquareProps = {
    value: string | null,
    onSquareClick: () => void
}

const Square = ({ value, onSquareClick }: SquareProps) => {
  return (
    <div className="square" onClick={onSquareClick}>
      {value}
    </div>
  );
}

export default Square;