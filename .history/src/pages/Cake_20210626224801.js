// import {motion} from 'framer-motion';
import image1 from '../images/cake1.jpg';

const Cake = () => {
  return (
    <div className="flex m-5 " style={{width: '1095px', height:''}}>
      <div className="justify-center items-center">
        <img
          src={image1}
          className="w-3/12 h-80 -top-86 -left-431"
          alt="cakepic"
        />
      </div>
    </div>
  );
};

export default Cake;
