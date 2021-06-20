import {motion} from 'framer-motion';

const Cake = ({setSelectedImg, selectedImg}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  };

  return <motion.div onClick={handleClick} initial={{opa}}></motion.div>;
};

export default Cake;