import ReactPlayer from 'react-player';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";

import ImageOne from '../images/cake1.jpg';
import ImageTwo from '../images/cake2.jpg';
import ImageThree from '../images/cake3.jpg';
import ImageFour from '../images/cake4.jpg';

const Content = ({ position, handleClick, children }) => {
  return (
    <>
      {/* <div className="menu-card"> */}
      <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={false}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg"
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(33).jpg"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
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
      {/* </div> */}
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
