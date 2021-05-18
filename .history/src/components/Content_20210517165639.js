import ReactPlayer from 'react-player';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import image1 from '../images/cake1.jpg';
import mage2 from '../images/cake2.jpg';
import image3 from '../images/cake3.jpg';
import ImageFour from '../images/cake4.jpg';

const Content = () => {
  return (
    <>
    <AliceCarousel autoPlay autoPlayInterval="3000">
      <img src={image1} className="sliderimg"/>
      <img src={image2} className="sliderimg"/>
      <img src={image3} className="sliderimg"/>
      <img src={image4} className="sliderimg"/>
</AliceCarousel>
    </>
  );
};

export default Content;
