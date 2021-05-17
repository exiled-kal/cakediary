import {ImageOne} from '../assets/cake1.jpg';
import {ImageTwo} from '../assets/cake2.jpg';
import {ImageThree} from '../assets/cake3.jpg';
import {ImageOne} from '../assets/cake4.jpg';

const Content = () => {
  return (
    <div>
      <img src={ImageOne} alt="cake" className="h-full rounded mb-20" />
    </div>
  );
};

export default Content;
