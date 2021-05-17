import ImageOne from '../images/cake1.jpg';
import {ImageTwo} from '../assets/cake2.jpg';
import {ImageThree} from '../assets/cake3.jpg';
import {ImageFour} from '../assets/cake4.jpg';

const Content = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
      <img src={CakeOne} alt="imageone" className="h-full rounded mb-20" />
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl mb-2">Cake</h2>
      </div>
    </div>
  );
};

export default Content;
