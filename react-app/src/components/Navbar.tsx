import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <ul className="">
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/tic-tac-toe">Tic Tac Toe</Link></li>
        </ul>
    </nav>
  );
}

export default Navbar;