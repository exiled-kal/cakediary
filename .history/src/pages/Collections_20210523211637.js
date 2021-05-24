import image1 from '../images/cake1.jpg';

const Collections = ({title, description, price, image}) => {
  return (
    // <div className="bg-blue-300 grid grid-cols-3 gap-4">
    <div className="grid grid-cols-3 ">
      <div className="images">
        <img
          className="w-100 max-h-screen flex flex-col"
          src={image1}
          alt="image"
        />
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
        <h4>Cake1</h4>
      </div>
      <div className="images">
        <img
          className="w-100 max-h-screen flex flex-col"
          src={image1}
          alt="image"
        />
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
        <h4>There are made by me</h4>
      </div>
    </div>
  );
};

export default Collections;
