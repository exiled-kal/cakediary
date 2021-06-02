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
    <div></div>
      {cakes.map(({id, data: {name, photoUrl}}) => (
        <div className=" m-5 h-full">
          <img src={photoUrl} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Collections;
