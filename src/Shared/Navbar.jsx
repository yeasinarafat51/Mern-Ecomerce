import { Link } from "react-router-dom";
import logo from '../images/logo.png'


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow bg-[#c4c4c44d]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow bg-[#c4c4c44d]">
              <li><Link>Item 1</Link></li>
            <li>
            <Link>Submenu 1</Link>
            </li>
            <li><Link>Item 3</Link></li>
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl"><img src={logo} width={50} className='' alt="logo" />MERN E-Commerce</Link>
        </div>
        <div className="mx-auto hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li to='/'><Link>Home</Link></li>
            <li>
            <Link to='/product'>Meals</Link>
            </li>
            <li><Link to='/'>Cart</Link></li>
            <li><Link  to='/'>Profile</Link></li>
            <li><Link  to='/'>Dashboard</Link></li>
          </ul>
        </div>
       
      </div>
      
    );
};

export default Navbar;