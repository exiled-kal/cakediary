import {useState, useEffect} from 'react';

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
  console.log(cakes);

  return (
    <div className="bg-blue-300 w-full">
      {cakes.map(({id, data: {photoUrl}}) => (
        <div className="grid grid-cols-3 gap-8 m-5 h-full" key={id}>
          {cakes}
        </div>
      ))}
    </div>
  );
};

export default Collections;
