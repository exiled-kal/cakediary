import {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import {db} from '../firebase';

const Collections = () => {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    db.collection('cakes').onSnapshot((snapshot) =>
      setCakes(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    // console.log(cakes);
  }, [cakes]);

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
          {cakes.map(({id, data: {photoUrl}}) => (
            <Link to="/cakes/:id">
              <motion.div key={id} layout whileHover={{opacity: 0.4}}>
                <motion.img
                  key={id}
                  src={photoUrl}
                  className="img skewElem"
                  alt="cakes pic"
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{delay: 1}}
                  // onClick={handleClick}
                />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
