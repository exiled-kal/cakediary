// import {motion} from 'framer-motion';
import image1 from '../images/cake1.jpg';

const Cake = () => {
  return (
    <div
      className=" m-5 "
      style={{width: '1095px', height: '1098px', top: '-227px', left: '-549px'}}
    >
      <div
        className="flex"
        style={{width: '881px', height: '739px', top: '-86px', left: '-431px'}}
      >
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
