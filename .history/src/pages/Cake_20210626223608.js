// import {motion} from 'framer-motion';
import image1 from '../images/cake1.jpg';

const Cake = () => {
  return (
    <div className="flex m-5 h-screen w-full">
      <div className="">
        <img src={image1} className="w-85 h-80" alt="cakepic" />
      </div>
    </div>
  );
};

export default Cake;
