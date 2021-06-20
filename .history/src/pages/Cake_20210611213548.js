import {motion} from 'framer-motion';
import {useState, useEffect} from 'react';

const Cake = (name, description, photoUrl, id) => {
  const [cake, setCake] = useState(null);

  db.collection('cakes').onSnapshot((snapshot) =>
      setCake(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, [cake]);

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
      <h3>{name}</h3>
      <h3>{description}</h3>
      <motion.img
        src={photoUrl}
        alt="enlarged pic"
        initial={{y: '-100vh'}}
        animate={{y: 0}}
      />
    </motion.div>
  );
};

export default Cake;
