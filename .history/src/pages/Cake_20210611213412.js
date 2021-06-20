import {motion} from 'framer-motion';

const Cake = (name, description, photoUrl, id) => {
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
