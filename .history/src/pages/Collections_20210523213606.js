import image1 from '../images/cake1.jpg';

const Collections = ({title, description, price, image}) => {
  return (
    // <div className="bg-blue-300 grid grid-cols-3 gap-4">
    <div className="grid grid-cols-3 gap-4">
      <div className="grid grid-cols-3 gap-4">
        <img
          className="object-contain w-246 h-138 cursor-pointer"
          src={image1}
          alt="image"
        />
        <img className="object-contain w-246 h-138" src={image1} alt="image" />
        <img className="object-contain w-246 h-138" src={image1} alt="image" />
        <img className="object-contain w-246 h-138" src={image1} alt="image" />
        <img className="object-contain w-246 h-138" src={image1} alt="image" />
        <img className="object-contain w-246 h-138" src={image1} alt="image" />
      </div>
    </div>
  );
};

export default Collections;
