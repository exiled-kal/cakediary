import {motion} from 'framer-motion';

const Cake = ({id, data}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      photoUrl(null);
    }
  };
  return (
    <motion.div
      onClick={handleClick}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
    >
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
