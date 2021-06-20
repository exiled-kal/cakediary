import {motion} from 'framer-motion';

const Cake = ({setSelectedImg, selectedImg}) => {
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
      <motion.img src={selectedImg} alt="enlarged pic" initial={{y: ''}}
      animate={{opacity: 1}}/>
    </motion.div>
  );
};

export default Cake;
