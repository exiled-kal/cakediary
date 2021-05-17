import {Link} from 'react-router-dom';

const Dropdown = () => {
  return (
    <div className="grid grid-row-4 text">
      <Link className="p-4" to="/">
        Home
      </Link>
      <Link className="p-4" to="/collections">
        Collections
      </Link>
      <Link className="p-4" to="/about">
        About
      </Link>
      <Link className="p-4" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;
