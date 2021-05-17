import {Link} from 'react-router-dom';

const Dropdown = ({isOpen, toggle}) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-row-4 text-center items-center bg-blue-400'
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link className="p-4 " to="/">
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
