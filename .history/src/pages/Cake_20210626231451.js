// import {motion} from 'framer-motion';
import image1 from '../images/cake1.jpg';

const Cake = () => {
  return (
    <div className=" flex m-5 ">
     
        <img
          src={image1}
          style={{
            width: '370px',
            height: '500px',
            top: '29px',
            left: '-347px',
          }}
          alt="cakepic"
        />
        <div
          className="m-10"
          style={{
            width: '528px',
            height: '611px',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Cake;
