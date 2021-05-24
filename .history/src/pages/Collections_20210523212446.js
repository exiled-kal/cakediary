import image1 from '../images/cake1.jpg';

const Collections = ({title, description, price, image}) => {
  return (
    // <div className="bg-blue-300 grid grid-cols-3 gap-4">
    <div className="flex mb-30 max-w-700">
      <img className="object-contain" src={image1} alt="image" />
      <div>
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
        <h4>Cake1</h4>
      </div>
    </div>
  );
};

export default Collections;
