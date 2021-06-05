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
    <div className="ml-16 items-center">
      <div className="grid grid-cols-3 gap-8 m-4 h-full w items-center">
        {cakes.map(({id, data: {name, photoUrl}}) => (
          <img src={photoUrl} className="h-80 rounded-md" alt="" />
        ))}
      </div>
    </div>
  );
};

export default Collections;