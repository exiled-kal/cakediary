import ImageOne from '../images/cake1.jpg';
import ImageTwo from '../images/cake2.jpg';
import ImageThree from '../images/cake3.jpg';
import ImageFour from '../images/cake4.jpg';

import Slider from 'react-slick';

const Dropdown = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="menu-card">
          <img src={ImageOne} alt="imageone" className="h-full rounded mb-20" />
        
          <img src={ImageTwo} alt="imageone" className="h-full rounded mb-20" />
        
          <img
            src={ImageThree}
            alt="imageone"
            className="h-full rounded mb-20"
          />
        </div>
        <div className="menu-card">
          <img
            src={ImageFour}
            alt="imageone"
            className="h-full rounded mb-20"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Dropdown;
