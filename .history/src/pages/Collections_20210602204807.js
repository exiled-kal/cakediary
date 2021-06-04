import {useState, useEffect} from 'react';
import image1 from '../images/cake1.jpg';

import {db} from '../firebase';

const Collections = () => {
  const [cakes, setCakes] = useState([]);
  const [loading, setLoading] = useState(false);

  // if (loading) {
  //   return <h1>Loading.....</h1>;
  // }

  useEffect(() => {
    db.collection('cakes').onSnapshot((snapshot) =>
      setCakes(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, [cakes]);
  // console.log(cakes);

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-4 m-8">
        {cakes.map(({id, data: {name, photoUrl}}) => (
          <img
            src={photoUrl}
            className="h-80 w-screen rounded-md cursor-pointer"
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Collections;
