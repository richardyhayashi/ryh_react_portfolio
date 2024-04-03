import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <div className="flex item justify-between items-center">
            <div className="m-3">
                <Link to="/"><h1>RYH</h1></Link>
            </div>
            <ul className="flex gap-5 m-3">
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/tic-tac-toe">Tic Tac Toe</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;