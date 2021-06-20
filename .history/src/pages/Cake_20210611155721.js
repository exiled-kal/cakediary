import 

const Cake = ({setSelectedImg, selectedImg}) => {
  const handlClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  };

  return <motion.div></motion.div>;
};

export default Cake;
