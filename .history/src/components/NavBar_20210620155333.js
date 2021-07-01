import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {gsap} from 'gsap';

const NavBar = ({toggle}) => {
  const header = React.createRef();

  useEffect(() => {
    gsap.to(header.current, {color: '#8bc0', duration: 2});
  }, [header]);

  return (
    <nav
      className="flex justify-between items-center h-16 text-white relative shadow-sm font-mono bg-gray-400"
      role="navigation"
    >
      <NavLink
        to="/contact"
        className="p-4 font-bold hover:text-black transition duration-300 ease-in-out items-center text-lg bg-blue-300 rounded-lg underline transform hover:scale-110 motion-reduce:transform-none"
      >
        <h2 ref={header}>Tibetan Baker</h2>
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
