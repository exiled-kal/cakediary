import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/" className="pl-8">
        Home
      </Link>
      <div className="px-4 cursor-pointer md:hidden">
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
      .pr-8 md:block <hidden></hidden>
    </nav>
  );
};

export default NavBar;
