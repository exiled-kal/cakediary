import {motion} from 'framer-motion';
import {useState, useEffect} from 'react';
import {db} from '../firebase';

const Cake = (name, description, photoUrl, id) => {
  const [cake, setCake] = useState(null);

  useEffect(() => {
    db.get('/cake/' + id).then((res) => setCake(res.data));
  }, [id]);
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
      
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
