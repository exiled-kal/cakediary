import ReactPlayer from 'react-player';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';
import image1 from '../images/cake1.jpg';
import image2 from '../images/cake2.jpg';
import image3 from '../images/cake3.jpg';
import image4 from '../images/cake4.jpg';

const Content = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500;">
      <Carousel className="w-1/2 items-center m-auto bg-black rounded-md">
        <div>
          <img src={image1} className="sliderimg" />
        </div>
        <div>
          <img src={image2} className="sliderimg" />
        </div>
        <div>
          <img src={image3} className="sliderimg" />
        </div>
        <div>
          <img src={image4} className="sliderimg" />
        </div>
      </Carousel>
      <div className="menu-card">
        <h2 className="antialiased text-white m-2 rounded-md">
          {' '}
          <soa>Click on the video thumbna</soa>il to watch some of my baking videos
        </h2>
        <ReactPlayer url="https://www.youtube.com/watch?v=3ZAqNjnMfeE" />
      </div>
    </div>
  );
};

export default Content;
