import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/" className="pl-8">
        Home
      </Link>
      <div className="px-4 cursor-pointer "></div>
    </nav>
  );
};

export default NavBar;
