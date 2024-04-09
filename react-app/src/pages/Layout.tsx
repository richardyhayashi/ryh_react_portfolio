import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = () => {
  return (
    <div className="h-screen">
        <Navbar />
        <Outlet />
    </div>
  );
}

export default Layout;