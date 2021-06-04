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
    <div className="grid grid-cols-4 gap-4 m-5 pl-16 relative">
      {cakes.map(({id, data: {name, photoUrl}}) => (
        <img src={photoUrl} className="rounded-md h-75 cursor-pointer" alt="" />
      ))}
    </div>
  );
};

export default Collections;
