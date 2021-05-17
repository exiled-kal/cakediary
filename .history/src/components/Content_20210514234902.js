import {SliderData} from '../SliderData';

const Content = () => {
  return (
    <>
      <div className="menu-card">
        {SliderData.map((slide, index) => {
          return <img src={slide.image} alt="cake image" />;
        })}
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
        </div>
      </div>
      <div className="menu-card">
        <img src={ImageFour} alt="ImageTwo" className="h-full rounded mb-20" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Birthday Cake</h2>
          <p className="mb-2">Crispy, delicious and chocolicious</p>
          <span>$16</span>
        </div> */}
      </div>
    </>
  );
};

export default Content;
