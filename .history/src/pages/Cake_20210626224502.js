// import {motion} from 'framer-motion';
import image1 from '../images/cake1.jpg';

const Cake = () => {
  return (
    <div className="flex m-5 h-screen w-full">
      <div className="justify-center items-center">
        <img src={image1} className="w-3/12 h-80 -top-" alt="cakepic" />
      </div>
    </div>
  );
};

export default Cake;
