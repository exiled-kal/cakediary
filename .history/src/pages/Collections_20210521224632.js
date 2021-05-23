import image1 from '../images/cake1.jpg';

const Collections = ({title, description, price}) => {
  return (
    <div className="bg-blue-300 h-screen flex justify-center items-center">
      <img className="object" src={image1} alt="" />
      <div className="">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
};

export default Collections;
