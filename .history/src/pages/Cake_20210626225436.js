// import {motion} from 'framer-motion';
import image1 from '../images/cake1.jpg';

const Cake = () => {
  return (
    <div
      className=" m-5 "
      
    >
      <div
        className="flex"
        
      >
        <img
          src={image1}
          style={{width: '881px', height: '739px', top: '-86px', left: '-431px'}}
          // style={{
          //   width: '197px',
          //   height: '255px',
          //   top: '29px',
          //   left: '-347px',
          // }}
          alt="cakepic"
        />
      </div>
    </div>
  );
};

export default Cake;
