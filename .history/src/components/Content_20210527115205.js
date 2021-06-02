import ReactPlayer from 'react-player';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import image1 from '../images/cake1.jpg';
import image2 from '../images/cake2.jpg';
import image3 from '../images/cake3.jpg';
import image4 from '../images/cake4.jpg';


const images =

const Content = () => {
  return (
    <div className="bg-blue-300 relative ">
      <AliceCarousel
        className="items-center justify-center"
        autoPlay
        autoPlayInterval="3000"
      >
        <img src={image1} className="sliderimg" />
        <img src={image2} className="sliderimg" />
        <img src={image3} className="sliderimg" />
        <img src={image4} className="sliderimg" />
      </AliceCarousel>
      <div className="menu-card">
        <h2 className="antialiased text-white m-2 rounded-md">
          {' '}
          Click on the video thumbnail to watch some of my baking videos
        </h2>
        <ReactPlayer url="https://www.youtube.com/watch?v=3ZAqNjnMfeE" />
      </div>
    </div>
  );
};

export default Content;
