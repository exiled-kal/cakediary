import ImageOne from '../images/cake1.jpg';
import ImageTwo from '../images/cake2.jpg';
import ImageThree from '../images/cake3.jpg';
import ImageFour from '../images/cake4.jpg';

import Slider from "react-slick";

const Dropdown = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return <div>
      <Slider {...settings}></Slider>
  </div>;
};

export default Dropdown;
