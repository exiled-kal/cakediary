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
    <div className="bg-gradient-to-r from-green-400 to-blue-500 m-2">
      <h2 className="text-xl text-white">
        Here are some of photos of the Cake that I do custom cake order for
        customer
      </h2>
      <div className="grid grid-cols-4 gap-4 m-8 relative">
        {cakes.map(({id, data: {name, photoUrl}}) => (
          <img src={photoUrl} className="img" alt="" />
        ))}
      </div>
    </div>
  );
};

export default Collections;
