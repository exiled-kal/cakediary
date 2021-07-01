import {motion} from 'framer-motion';
import image1 from '../images/cake1.jpg';

const Cake = () => {
  return (
    <div className=" flex m-5 " style={{display: 'table -row'}}>
      <div style={{display: 'table-cell'}}>
        <div
          style={{
            display: 'flex',
            maxWidth: '1000px',
            marginLeft: 'auto',
            marginRight: 'auto',
            float: 'none',
          }}
        >
          <div className="overflow-x-hidden box-border">
            <motion.img
              src={image1}
              className=" transition duration-300 ease-in-out items-center bg-blue-300 rounded-lg underline transform hover:scale-110 motion-reduce:transform-none"
              style={{width: '520px', height: '500px'}}
              alt="cakepic"
            />
            <div className=""><h2></h2></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cake;
