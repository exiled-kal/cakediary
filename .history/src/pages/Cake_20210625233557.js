import {motion} from 'framer-motion';
import image1 from '../images/cake1.jpg';

const Cake = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
      <motion.img
      className="w-90"
        src={image1}
        alt="e"
        initial={{y: '-100vh'}}
        animate={{y: 0}}
      />
    </motion.div>
  );
};

export default Cake;
