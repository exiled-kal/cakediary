import {motion} from 'framer-motion';

const Cake = () => {
  return (
    <motion.div key={id} initial={{opacity: 0}} animate={{opacity: 1}}>
      <motion.img
        src=""
        alt="e"
        initial={{y: '-100vh'}}
        animate={{y: 0}}
      />
    </motion.div>
  );
};

export default Cake;
