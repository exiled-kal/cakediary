import {useState} from 'react';
import image1 from '../images/cake1.jpg';
import image2 from '../images/cake2.jpg';
import image3 from '../images/cake3.jpg';
import image4 from '../images/cake4.jpg';
import firebase from './'

const Collections = () => {
  const [cakes, setCakes] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection('cakes');
  return (
    <div className="bg-blue-300 w-full">
      <div className="grid grid-cols-3 gap-8 m-5 h-full">
        <img className="img" src={image1} alt="image" />
        <img className="img" src={image3} alt="image" />
        <img className="img" src={image4} alt="image" />
        <img className="img" src={image2} alt="image" />
      </div>
    </div>
  );
};

export default Collections;
