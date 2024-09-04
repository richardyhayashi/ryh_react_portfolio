import Game from "../components/ttt/Game"

const TicTacToePage = () => {
  return (
    <div>
        <h1 className="text-5xl text-center mb-5">Tic Tac Toe</h1>
        <div className="flex items-center justify-center">
          <Game />
        </div>
    </div>
  )
}

export default TicTacToePage