import {useState} from 'react';
import ReactPlayer from 'react-player';
import {Slide} from 'react-slideshow-image';

import image1 from '../images/cake1.jpg';
import image2 from '../images/cake2.jpg';
import image3 from '../images/cake3.jpg';
import image4 from '../images/cake4.jpg';

const Content = () => {
  const [autoplay, setAutoplay] = useState(true);
  return (
    <div className="bg-blue-300 items-start">
      <div>
        <Slide autoPlay={autoplay}>
          <div className="items-center p-200 bg-green-700 h-10 w-full">
            <img src={image1} src="" />
          </div>
          <div className="items-center p-200 bg-green-700 h-10 w-full">
            <img src={image2} src="" />
          </div>
          <div className="items-center p-200 bg-green-700 h-10 w-full">
            <img src={image3} src="" />
          </div>
        </Slide>
      </div>
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
