import Video from '../videos/video.mp4';
import Colllink from './Colllink';

const Hero = () => {
  return (
    <div className="bg-blue-300">
      <video className="w-full max-h-screen flex flex-col" autoPlay={true} loop>
        <source src={Video} type="video/mp4" />
      </video>
      <Colllink/>
    </div>
  );
};

export default Hero;
