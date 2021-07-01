import {motion} from 'framer-motion';
import image1 from '../images/cake1.jpg';

const Cake = () => {
  return (
    <div className=" flex m-5 " style={{display: 'table -row'}}>
      <div style={{display: 'table-cell'}}>
        <div style={{}}>
          <motion.img src={image1} style={{width:'50px'}} alt="cakepic" />
        </div>
      </div>
    </div>
  );
};

export default Cake;
