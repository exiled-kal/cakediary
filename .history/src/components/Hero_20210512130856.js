import {Link} from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-white h-screen flex flex-collectFields justify-center items-center">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
        My Bakery Collections
      </h1>
      <Link to="" className="bg-">Click to see more</Link>
    </div>
  );
};

export default Hero;
