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
    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-full">
      <h2 className="antialiased text-white font-bold text-xl italic m-2 rounded-md">
        Here are some of photos of the Cake that I do custom cake order for
        customer
      </h2>

      <div className="h-full">
        <div className="grid grid-cols-3 gap-4 m-8 relative ">
          {cakes.map(({id, data: {name, photoUrl}}) => (
            <img
              src={photoUrl}
              className="img transform motion-safe:hover:scale-110"
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
