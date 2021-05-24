import ReactPlayer from 'react-player';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import image1 from '../images/cake1.jpg';
import image2 from '../images/cake2.jpg';
import image3 from '../images/cake3.jpg';
import image4 from '../images/cake4.jpg';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={image1} onDragStart={handleDragStart} />,
  <img src={image2} onDragStart={handleDragStart} />,
  <img src={image3} onDragStart={handleDragStart} />,
  <img src={image4} onDragStart={handleDragStart} />,
];

const Content = () => {
  return (
    <div className="bg-blue-300">
      <AliceCarousel
        className="items-center justify-items-center "
        autoPlay
        autoPlayInterval="3000"
      >
        <span className="m-auto flex space-x-2 md:space-x-8 w-2/5 h-1/5 rounded-md">
          {items.map()}
        </span>
      </AliceCarousel>
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
