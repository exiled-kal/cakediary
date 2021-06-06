import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import {db} from '../firebase';
import Cake from './Cake';

const Collections = () => {
  const [cakes, setCakes] = useState([]);
  const [loading, setLoading] = useState(false);

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

  if (loading) {
    return <h1>Loading.....</h1>;
  }

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-full">
      <div>
        <h2 className="antialiased text-white font-bold text-xl italic m-2 rounded-md">
          Here are some of photos of the Cake that I do custom cake order for
          customer
        </h2>
      </div>

      <div className="h-full">
        <div className="grid grid-cols-3 gap-4 m-8 relative ">
          {cakes.map(({id, data: {name, photoUrl}}) => (
            <img key={}src={photoUrl} className="img" alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
