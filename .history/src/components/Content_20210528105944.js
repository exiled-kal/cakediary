import ReactPlayer from 'react-player';
import AliceCarousel from 'react-alice-carousel';

import image1 from '../images/cake1.jpg';
import image2 from '../images/cake2.jpg';
import image3 from '../images/cake3.jpg';
import image4 from '../images/cake4.jpg';

const Content = () => {
  return (
    <div className="bg-blue-300 items-start">
      <AliceCarousel
        className="items-start justify-center flex"
        autoPlay
        autoPlayInterval="3000"
      >
        <img src={image1} />
        <img src={image2} />
        <img src={image3} />
        <img src={image4} />
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
