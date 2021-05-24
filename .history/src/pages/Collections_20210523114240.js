import image1 from '../images/cake1.jpg';

const Collections = ({title, description, price}) => {
  return (
    <div className="bg-blue-300 ">
      <img className="w-100 max-h-screen flex flex-col" src={image1} alt="" />
      <h2>{title}</h2>
      <h4>{description}</h4>
      <h3>{price}</h3>
      <h4>There are made by me</h4>
    </div>
  );
};

export default Collections;
