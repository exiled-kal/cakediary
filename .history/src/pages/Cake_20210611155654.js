

const Cake = ({setSelectedImg, selectedImg}) => {
  const handlClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  };

  return <div></div>;
};

export default Cake;
