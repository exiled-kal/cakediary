import {motion} from 'framer-motion';
import image1 from '../images/cake1.jpg';

const Cake = () => {
  return (
    <div className="flex h-screen w-screen">
      <motion.img src={image1} className="w-40 h-45" />
    </div>
  );
};

export default Cake;
