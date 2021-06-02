import {useState, useEffect} from 'react';
// import image1 from '../images/cake1.jpg';
// import image2 from '../images/cake2.jpg';
// import image3 from '../images/cake3.jpg';
// import image4 from '../images/cake4.jpg';

import FlipMove from 'react-flip-move';

import {db} from './firebase';
import firebase from 'firebase';

const images = [
  '../images/cake1.jpg',
  '../images/cake2.jpg',
  '../images/cake3.jpg',
  '../images/cake4.jpg',
];

const Collections = () => {
  const [cakes, setCakes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    db.collection('cakes')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setCakes(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  if (loading) {
    return <h1>Loading.....</h1>;
  }

  return (
    <div className="bg-blue-300 w-full">
      <div className="grid grid-cols-3 gap-8 m-5 h-full">
        <FlipMove>
          {images.map(({id, data: {name, description, images}}) => (
            <div key={id}>
              <h2>{name}</h2>
              <h2>{description}</h2>
              <h2>{images}</h2>
            </div>
          ))}
        </FlipMove>
      </div>
    </div>
  );
};

export default Collections;
