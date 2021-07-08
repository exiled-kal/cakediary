import React, {useEffect, useRef} from 'react';
import {NavLink} from 'react-router-dom';
// import {gsap, ScrollTrigger} from 'gsap/all';
import {textIntro} from './Animate';

const NavBar = ({toggle}) => {
  let intro = useRef(null);
  useEffect(() => {
    textIntro(intro);
  }, []);

  return (
    <nav
      className="flex justify-between items-center h-16 text-white relative shadow-sm font-mono bg-gray-400"
      role="navigation"
    >
      <NavLink
        to="/about"
        className="p-4 m-4 font-bold hover:text-black transition duration-300 ease-in-out items-center text-lg rounded-lg underline transform hover:scale-110 motion-reduce:transform-none"
      >
        <h2 className="intro" ref={(el) => (intro = el)}>
          <span className="text-black">Ti</span>
          be</span>tan Bakery
        </h2>
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
