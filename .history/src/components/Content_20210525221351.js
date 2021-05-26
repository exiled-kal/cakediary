import ReactPlayer from 'react-player';
import {Carousel} from 'react-responsive-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import image1 from '../images/cake1.jpg';
import image2 from '../images/cake2.jpg';
import image3 from '../images/cake3.jpg';
import image4 from '../images/cake4.jpg';

const Content = () => {
  return (
    <div className="bg-blue-300 items-center justify-items-center relative ">
      <Carousel className="absolute">
        <div><img src={image1} className="sliderimg" /></div>
        <div><img src={image2} className="sliderimg" /></div>
        <img src={image3} className="sliderimg" />
        <img src={image4} className="sliderimg" />
      </Carousel>
      <div className="menu-card">
        <h2 className="antialiased">
          {' '}
          Click on the video thumbnail to watch some of my baking videos
        </h2>
        <ReactPlayer url="https://www.youtube.com/watch?v=3ZAqNjnMfeE" />
      </div>
    </div>
  );
};

export default Content;
