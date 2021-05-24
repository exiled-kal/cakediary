import image1 from '../images/cake1.jpg';
import image2 from '../images/cake2.jpg';
import image3 from '../images/cake3.jpg';
import image4 from '../images/cake4.jpg';

const Collections = ({title, description, price, image}) => {
  return (
    // <div className="bg-blue-300 grid grid-cols-3 gap-4">
    <div className="flex flex-wrap">
      <div className="grid grid-cols-3 gap-4">
        <img className="object-contain w-246 h-138" src={image2} alt="image" />
        <img className="object-contain w-246 h-138" src={image3} alt="image" />
        <img className="object-contain w-246 h-138" src={image4} alt="image" />
        <img className="object-contain w-246 h-138" src={image1} alt="image" />
      </div>
    </div>
  );
};

export default Collections;