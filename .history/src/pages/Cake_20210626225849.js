// import {motion} from 'framer-motion';
import image1 from '../images/cake1.jpg';

const Cake = () => {
  return (
    <div className=" m-5 ">
      <div className="flex">
        <img
          src={image1}
          style={{
            width: '400px',
            height: '500px',
            top: '-86px',
            left: '-431px',
          }}
          alt="cakepic"
        />
        <div className="m-"
          style={{
            width: '528px',
            height: '611px',
            top: '-16px',
            left: '-115px',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Cake;
