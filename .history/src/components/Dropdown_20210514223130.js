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
        <div className="menu-card h-100 w-100">
          <img src={ImageOne} alt="imageone" />
          <img src={ImageTwo} alt="imageone" />
          <img src={ImageThree} alt="imageone" />
          <img src={ImageFour} alt="imageone" />
        </div>
      </Slider>
    </div>
  );
};

export default Dropdown;
