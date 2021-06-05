import Video from '../videos/video.mp4';
import Colllink from './Colllink';

const Hero = () => {
  return (
    <div className="w-full h-full bg-gradient-to-r from-green-400 to-blue-500;">
      <video className="w-full max-h-screen flex flex-col" autoPlay={true} loop>
        <source src={Video} type="video/mp4" />
      </video>
      <div>
        <Colllink />
      </div>
    </div>
  );
};

export default Hero;
