import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/our-menu'>Our Menu</Link>
      </li>
      <li>
        <Link to='/our-shop'>Our Shop</Link>
      </li>
      <li>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
      <li>
        <Link to='/contact'>Contact Us</Link>
      </li>
      
    </>
  );

  return (
    <>
      <div className="navbar max-w-screen-xl mx-auto fixed z-50 opacity-70 bg-black lg:px-20 px-2 text-white ">
        <div className="navbar-start ">
          
          <a className="btn btn-ghost normal-case text-xl">Raiyan Restaurant</a>
        </div>
        <div className="navbar-center hidden lg:flex items-end">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100  text-black rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
