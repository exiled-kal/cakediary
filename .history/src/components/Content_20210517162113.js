import ReactPlayer from 'react-player';
import {Carousel} from 'react-responsive-carousel';
import Slider from 'react-slick';

import ImageOne from '../images/cake1.jpg';
import ImageTwo from '../images/cake2.jpg';
import ImageThree from '../images/cake3.jpg';
import ImageFour from '../images/cake4.jpg';

const Content = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
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
