import {motion} from 'framer-motion';

import image1 from '../images/cake1.jpg';

const Cake = () => {
  return (
    <div className=" flex m-5 relative ">
      <div
        style={{
          display: 'flex',
          // maxWidth: '1000px',
          float: 'none',
        }}
      >
        <div
          className="overflow-x-hidden box-border md:w-32 lg:w-48"
          style={{width: '35rem'}}
        >
          <motion.img
            src={image1}
            className=" m-4 transition duration-300 ease-in-out items-center bg-blue-300 rounded-lg underline transform hover:scale-110 motion-reduce:transform-none w-90 "
            // style={{width: '600px', height: '520px'}}
            alt="cakepic"
          />
        </div>
        <div className="rounded-2xl w-auto">
          <span className="text-white ">Name:</span>
          <h2> Chocolate Cake</h2>
          <span className="text-white">Description:</span>
          <h2 className="font-serins">
            It is made out of chocolate, wheat flour lorem ipsum
          </h2>
          <span className="text-white">Price:</span>
          <h2>$20</h2>
        </div>
      </div>
    </div>
  );
};

export default Cake;
