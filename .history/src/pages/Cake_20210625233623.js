import {motion} from 'framer-motion';
import image1 from '../images/cake1.jpg';

const Cake = () => {
  return (
    <motion.div >
      <motion.img
      className="w-90"
        src={image1}
        alt="e"
        
      />
    </motion.div>
  );
};

export default Cake;
