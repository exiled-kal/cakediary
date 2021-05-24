import {Link} from 'react-router-dom';
import Video from '../videos/video.mp4';
import Colllink from './Colllink';

const Hero = () => {
  return (
    <div className="bg-blue-300 w-full h-full">
      <video className="w-full max-h-screen flex flex-col" autoPlay={true} loop>
        <source src={Video} type="video/mp4" />
      </video>
      <Link
        to="/"
        className="p-4 mb- font-bold rounded-full  hover:text-white transition duration-300 ease-in-out items-center text-lg"
      >
        Tibetan Baker
      </Link>
      <Colllink />
    </div>
  );
};

export default Hero;
