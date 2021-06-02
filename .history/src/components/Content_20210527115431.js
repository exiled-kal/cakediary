import ReactPlayer from 'react-player';
import SimpleImageSlider from 'react-simple-image-slider'

// import image1 from '../images/cake1.jpg';
// import image2 from '../images/cake2.jpg';
// import image3 from '../images/cake3.jpg';
// import image4 from '../images/cake4.jpg';


const images =[
  {url: '../images/cake1.jpg'},
  {url: '../images/cake2.jpg'},
  {url: '../images/cake3.jpg'},
  {url: '../images/cake4.jpg'},
]

const Content = () => {
  return (
    <div className="bg-blue-300 relative ">
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
      />
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
