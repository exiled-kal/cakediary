import {motion} from 'framer-motion';

const Cake = ({id, name, photoUrl, description}) => {
  return (
    <motion.div key={id} initial={{opacity: 0}} animate={{opacity: 1}}>
      <motion.img
        src={photoUrl}
        alt="e"
        initial={{y: '-100vh'}}
        animate={{y: 0}}
      />
    </motion.div>
  );
};

export default Cake;
