import {useState, useEffect} from 'react';
import {motion} from 'framer-motion';

import {db} from '../firebase';
import useFirestore from '../hooks/useFirestore';

// import Cake from './Cake';

const Collections = ({setSelectedImg}) => {
  const [cakes, setCakes] = useState([]);
  const {docs} = useFirestore('cakes');
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
          {cakes &&
            cakes.map((cake) => (
              <motion.div
                key={d.id}
                layout
                whileHover={{opacity: 0.2}}
                s
                onClick={() => setSelectedImg(doc.photoUrl)}
              >
                <motion.img
                  src={doc.photoUrl}
                  className="img"
                  alt="cakes pic"
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{delay: 1}}
                />
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
