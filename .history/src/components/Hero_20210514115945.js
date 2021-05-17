import {Link} from 'react-router-dom';
import Video from '../images/video.mp4';

const Hero = () => {
  return (
    <>
      <video
        className="max-w-full max-h-screen flex flex-col"
        autoPlay="true"
        loop
      >
        <source src={Video} type="video/mp4" />
      </video>
      <div className="bg-white h-screen flex flex-col justify-center items-center bg-pink-300">
        <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
          My Bakery Collections
        </h1>
        <Link
          to="/"
          className="py-6 px-10 bg-pink-500 rounded-full text-3xl hover:bg-pink-300 transition duration-300 ease-in-out flex items-center animate-bounce"
        >
          For more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default Hero;
