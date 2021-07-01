import {motion} from 'framer-motion';
import image1 from '../images/cake1.jpg';

const Cake = () => {
  return (
    <div className="flex ">
      <div><motion.img src={image1} className="" /></div>
    </div>
  );
};

export default Cake;
