import {motion} from 'framer-motion';
import FlipMove from 'react-flip-move';
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
      <div
        className="overflow-x-hidden box-border bg-gradient-to-r from-green-400 to-blue-500"
        style={{width: '35rem'}}
      >
        <FlipMove>
          <motion.img
            src={image1}
            className="transition duration-300 ease-in-out items-center bg-blue-300 rounded-lg underline transform hover:scale-110 motion-reduce:transform-none w-90 "
            alt="cakepic"
          />
        </FlipMove>
      </div>
      <div className="m-4 p-4 rounded-2xl w-auto justify-center items-center bg-gradient-to-r from-green-400 to-blue-500">
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
          <span className="text">Price Range:</span>
        </strong>
        <h2>$20-$60</h2>
        <strong>
          <span className="text">Size Range:</span>
          <h5>16-32 inches</h5>
        </strong>
      </div>
      <h1>PS. I do take custom order</h1>
    </div>
  );
};

export default Cake;
