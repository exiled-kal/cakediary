import {motion} from 'framer-motion';
import image1 from '../images/cake1.jpg';

const Cake = () => {
  return (
    <div className="flex h-screen w-full">
      <motion.img src={image1} className="w-0 h-50" />
    </div>
  );
};

export default Cake;
