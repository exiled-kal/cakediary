import {motion} from 'framer-motion';

import image1 from '../images/cake1.jpg';

const Cake = () => {
  return (
    <div className=" flex flex-wrap m-10 relative p-10 justify-center items-center">
    <div style={{margin:'3rem', position:'absolute',top:0, left:0, bottom:0, zIndex:-1,transform: rotate(300deg),}}>
      <h2>Tibetan Baker</h2>
    </div>
      <div className="overflow-x-hidden box-border " style={{width: '35rem'}}>
        <motion.img
          src={image1}
          className="transition duration-300 ease-in-out items-center bg-blue-300 rounded-lg underline transform hover:scale-110 motion-reduce:transform-none w-90 "
          alt="cakepic"
        />
      </div>
      <div className="m-4 p-4 rounded-2xl w-auto justify-center items-center">
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
  );
};

export default Cake;
