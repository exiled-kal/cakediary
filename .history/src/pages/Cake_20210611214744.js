import {motion} from 'framer-motion';
import {useState} from 'react';

const Cake = ({name, description, photoUrl, id}) => {
  const [cake, setCake] = useState(null);

  return (
    <motion.div key={} initial={{opacity: 0}} animate={{opacity: 1}}>
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
