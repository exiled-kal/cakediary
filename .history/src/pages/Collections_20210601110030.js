import {useState, useEffect} from 'react';

import {db} from '../firebase';

const Collections = () => {
  const [cakes, setCakes] = useState([]);
  const [loading, setLoading] = useState(false);

  // if (loading) {
  //   return <h1>Loading.....</h1>;
  // }

  useEffect(() =)

  return (
    <div className="bg-blue-300 w-full">
      <div className="grid grid-cols-3 gap-8 m-5 h-full">{cakes}</div>
    </div>
  );
};

export default Collections;
