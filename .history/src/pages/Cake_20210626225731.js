// import {motion} from 'framer-motion';
import image1 from '../images/cake1.jpg';

const Cake = () => {
  return (
    <div className=" m-5 ">
      <div
        className="flex"
        // style={{
        //   width: '1095px',
        //   height: '1098px',
        //   top: '-227px',
        //   left: '-549px',
        }}
      >
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
        <div
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
