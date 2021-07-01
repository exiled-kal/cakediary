import {motion} from 'framer-motion';
import image1 from '../images/cake1.jpg';

const Cake = () => {
  return (
    <div className="flex ">
      <motion.img src={image1} className="" />
    </div>
  );
};

export default Cake;
