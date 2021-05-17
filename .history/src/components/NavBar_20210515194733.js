import {Link} from 'react-router-dom';

const NavBar = ({toggle}) => {
  return (
    <nav
      className=" bg-pink-100 flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono"
      role="navigation"
    >
      <Link to="/" className="pl-8 font-bold">
        Tibetan Baker
      </Link>
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
      <div className="pr-8 md:block hidden">
        <Link className="p-4 rounded-full py-3 px-6" to="/">
          Home
        </Link>
        <Link className="p-4 rounded-full py-3 px-6" to="/collections">
          Collections
        </Link>
        <Link className="p-4 rounded-full py-3 px-6" to="/about">
          About
        </Link>
        <Link className="p-4" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
