import {NavLink} from 'react-router-dom';

const NavBar = ({toggle, active}) => {
  return (
    <nav
      className=" bg-blue-200 flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono"
      role="navigation"
    >
      <NavLink
        to="/contact"
        className="p-4 font-bold hover:text-white transition duration-300 ease-in-out items-center text-lg bg-blue-300 rounded-lg"
      >
        Tibetan Baker
      </NavLink>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden ">
        <NavLink className="navbar" to="/">
          Home
        </NavLink>
        <NavLink className="navbar" to="/collections">
          Collections
        </NavLink>
        <NavLink className="navbar" to="/about">
          About
        </NavLink>
        <NavLink className="navbar" to="/contact">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
