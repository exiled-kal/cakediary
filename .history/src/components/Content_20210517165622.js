import ReactPlayer from 'react-player';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import ImageOne from '../images/cake1.jpg';
import ImageTwo from '../images/cake2.jpg';
import ImageThree from '../images/cake3.jpg';
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
