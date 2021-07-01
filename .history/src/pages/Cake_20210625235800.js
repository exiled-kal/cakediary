import {motion} from 'framer-motion';
import image1 from '../images/cake1.jpg';

const Cake = () => {
  return (
    <div className="flex ">
      <div className="h-screen w-screen">
        <motion.img src={image1} className="w-90 h-0" />
      </div>
    </div>
  );
};

export default Cake;
