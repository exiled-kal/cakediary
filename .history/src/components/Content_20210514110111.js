import ImageOne from '../images/cake1.jpg';
import ImageTwo from '../images/cake2.jpg';
import ImageThree from '../images/cake3.jpg';
import ImageFour from '../images/cake4.jpg';

const Content = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
      <img src={ImageOne} alt="imageone" className="h-full rounded mb-20" />
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl mb-2">Chocolate Cake</h2>
        <p className="mb-2">Crispy, delicious and chocolicious</p>
        <span>$16</span>
      </div>
    </div>
  );
};

export default Content;
