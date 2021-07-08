import {motion} from 'framer-motion';
import image1 from '../images/cake1.jpg';
import image2 from '../images/cake1.jpg';

const Cake = () => {
  return (
    <div
      className=" flex flex-wrap m-10 relative p-10 justify-center items-center rounded-lg"
      style={{
        height: '86vh',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundImage: `url(${image2})`,
      }}
    >
      <div className="overflow-x-hidden box-border " style={{width: '35rem'}}>
        <motion.img
          src={image1}
          className="transition duration-300 ease-in-out items-center bg-blue-300 rounded-lg underline transform hover:scale-110 motion-reduce:transform-none w-90 "
          alt="cakepic"
        />
      </div>
      <div className="m-4 p-4 rounded-2xl w-auto justify-center items-center">
        <strong>
          <span className="text w-36">Name:</span>
        </strong>
        <h2>Chocolate Cake</h2>
        <strong>
          <span className="text">Description:</span>
        </strong>
        <h2 className="font-serins">
          It is made out of chocolate, wheat flour lorem ipsum
        </h2>
        <strong>
          <span className="text">Price:</span>
        </strong>
        <h2>$20</h2>
      </div>
    </div>
  );
};

export default Cake;
