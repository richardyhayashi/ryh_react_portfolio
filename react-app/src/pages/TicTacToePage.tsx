import Navbar from "../components/Navbar"
import Game from "../components/ttt/Game"

const TicTacToePage = () => {
  return (
    <div>
        <Navbar />
        <h1 className="text-5xl text-center">Tic Tac Toe</h1>
        <Game />
    </div>
  )
}

export default TicTacToePage