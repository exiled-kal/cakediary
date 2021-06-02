import {useState} from 'react';
import image1 from '../images/cake1.jpg';
import image2 from '../images/cake2.jpg';
import image3 from '../images/cake3.jpg';
import image4 from '../images/cake4.jpg';
import firebase from '../firebase';

const Collections = () => {
  const [cakes, setCakes] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection('cakes');

  if (loading) {
    return <h1>Loading.....</h1>;
  }

  return (
    <div className="bg-blue-300 w-full">
      {cakes.map((cake) => (


      ))
        }
    </div>
  );
};

export default Collections;
