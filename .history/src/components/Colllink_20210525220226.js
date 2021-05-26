import {Link} from 'react-router-dom';

function Colllink() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-blue-300">
      <h3 className=" text-white lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
        My Bakery Collections
      </h3>
      <Link
        to="/collections"
        className="py-6 px-10 rounded-full text-3xl text-white transition duration-300 ease-in-out flex items-center hover:text-black animate-bounce"
      >
        For more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {/* <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 5l7 7-7 7M5 5l7 7-7 7"
          /> */}
        </svg>
      </Link>
    </div>
  );
}

export default Colllink;
