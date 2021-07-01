import {motion} from 'framer-motion';
import image1 from '../images/cake1.jpg';

const Cake = () => {
  return (
    <div>
      <motion.img src={image1} className="w-50 h-48" />
    </div>
  );
};

export default Cake;
