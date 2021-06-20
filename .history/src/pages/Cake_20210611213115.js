import {motion} from 'framer-motion';

const Cake = (name,description,{setSelectedImg, selectedImg}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      onClick={handleClick}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
    >
      <h3>{name}</h3>
      <motion.img
        src={selectedImg}
        alt="enlarged pic"
        initial={{y: '-100vh'}}
        animate={{y: 0}}
      />
    </motion.div>
  );
};

export default Cake;
