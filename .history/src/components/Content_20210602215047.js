import ReactPlayer from 'react-player';

import Carousel from 'react-bootstrap/Carousel';
import image1 from '../images/cake1.jpg';
import image2 from '../images/cake2.jpg';
import image3 from '../images/cake3.jpg';
import image4 from '../images/cake4.jpg';

const Content = () => {
  return (
    <div className="items-center">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />

          <img className="d-block w-100" src={image2} alt="Second slide" />

          <img className="d-block w-100" src={image3} alt="Third slide" />

          <img className="d-block w-100" src={image4} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
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
