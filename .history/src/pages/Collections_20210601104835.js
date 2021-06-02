import {useState, useEffect} from 'react';
// import image1 from '../images/cake1.jpg';
// import image2 from '../images/cake2.jpg';
// import image3 from '../images/cake3.jpg';
// import image4 from '../images/cake4.jpg';

import FlipMove from 'react-flip-move';

const Collections = () => {
  const [cakes, setCakes] = useState([]);
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <h1>Loading.....</h1>;
  }

  return (
    <div className="bg-blue-300 w-full">
      <div className="grid grid-cols-3 gap-8 m-5 h-full">
        <FlipMove>images</FlipMove>
      </div>
    </div>
  );
};

export default Collections;
