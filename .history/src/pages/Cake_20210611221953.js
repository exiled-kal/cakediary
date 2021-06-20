import {motion} from 'framer-motion';
import {useState} from 'react';

const Cake = ({name, description, photoUrl, id}) => {
  const [cake, setCake] = useState(null);

  return (
    <motion.div key={id} className="" initial={{opacity: 0}} animate={{opacity: 1}}>
      <h4>{name}</h4>
      <motion.img
        src={photoUrl}
        alt="enlarged pic"
        // initial={{y: '-100vh'}}
        // animate={{y: 0}}
      />
    </motion.div>
  );
};

export default Cake;
