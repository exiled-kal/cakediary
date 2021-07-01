// import {motion} from 'framer-motion';
import image1 from '../images/cake1.jpg';

const Cake = () => {
  return (
    <div className="flex m-5">
      <div className="h-screen w-full">
        <img src={image1} className="w-85 h-80" alt="cakepic" />
      </div>
    </div>
  );
};

export default Cake;
