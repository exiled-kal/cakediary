import ReactPlayer from 'react-player';
import {Carousel} from 'react-responsive-carousel';

import ImageOne from '../images/cake1.jpg';
import ImageTwo from '../images/cake2.jpg';
import ImageThree from '../images/cake3.jpg';
import ImageFour from '../images/cake4.jpg';

const Content = () => {
  return (
    <>
      <div
        className=""
        style={{width: '600px', margin: 'auto', padding: '50px'}}
      >
        <Carousel arrows infinite>
          <img src={ImageOne} />
          <img src={ImageTwo} />
          <img src={ImageThree} />
          <img src={ImageFour} />
        </Carousel>
        {/* <img src={ImageOne} alt="imageone" className="h-full rounded mb-20" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Chocolate Cake</h2>
          <p className="mb-2">Crispy, delicious and chocolicious</p>
          <span>$16</span>
        </div>
      </div>
      <div className="menu-card">
        <img src={ImageTwo} alt="ImageTwo" className="h-full rounded mb-20" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Birthday Cake</h2>
          <p className="mb-2">Crispy, delicious and chocolicious</p>
          <span>$16</span>
        </div>
      </div>
      <div className="menu-card">
        <img src={ImageThree} alt="ImageTwo" className="h-full rounded mb-20" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Pokemon Cake</h2>
          <p className="mb-2">Crispy, delicious and chocolicious</p>
          <span>$16</span>
        </div> */}
      </div>
      <div className="menu-card">
        <h2 className="antialiased">
          {' '}
          Click on the video thumbnail to watch some of my baking videos
        </h2>
        <ReactPlayer url="https://www.youtube.com/watch?v=3ZAqNjnMfeE" />
      </div>
    </>
  );
};

export default Content;
