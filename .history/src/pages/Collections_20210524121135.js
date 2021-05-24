import image1 from '../images/cake1.jpg';
import image2 from '../images/cake2.jpg';
import image3 from '../images/cake3.jpg';
import image4 from '../images/cake4.jpg';

const Collections = () => {
  return (
    // <div className="bg-blue-300 grid grid-cols-3 gap-4">
    <div className="bg-blue-500 flex w-screen">
      <div className="grid grid-cols-3 gap-2 m-8 border-green-800 ">
        <img className="img" src={image1} alt="image" />
        <img className="img" src={image3} alt="image" />
        <img className="img" src={image4} alt="image" />
        <img className="img" src={image2} alt="image" />
        <img className="img" src={image2} alt="image" />
        <img className="img" src={image2} alt="image" />
        <img className="img" src={image2} alt="image" />
        <img className="img" src={image2} alt="image" />
        {/* <img className="img" src={image2} alt="image" />
        <img className="img" src={image2} alt="image" />
        <img className="img" src={image2} alt="image" />
        <img className="img" src={image2} alt="image" />
        <img className="img" src={image2} alt="image" />
        <img className="img" src={image2} alt="image" />
        <img className="img" src={image2} alt="image" />
        <img className="img" src={image2} alt="image" /> */}
      </div>
    </div>
  );
};

export default Collections;
