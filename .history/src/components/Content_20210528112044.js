import {useState} from 'react';
import ReactPlayer from 'react-player';
import {Slide} from 'react-slideshow-image';

const slideImages = [
  '../images/cake1.jpg',
  '../images/cake2.jpg',
  '../images/cake3.jpg',
  '../images/cake4.jpg',
];

const Content = () => {
  const [autoplay, setAutoplay] = useState(true);
  return (
    <div className="bg-blue-300 items-start">
      <div>
        <Slide autoPlay={autoplay}>
          {slideImages.map(slideImage => )
            <div className="items-center p-200 bg-green-700 h-10 w-full">
            <img src={slideImages} alt="change" />
          </div>}
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
