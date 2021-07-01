import Hero from '../components/Hero';
import Content from '../components/Content';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';
import Collections from './Collections';
import { useState } from 'react';
import Cake from './Cake';

const Home = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <Hero />
      <Collections setSelectedImg={setSelectedImg}/>
      {selectedImg && (
        <Cake selectedImg={s/> 
      )}
      <Content />
      <Dropdown />
      <Footer />
    </>
  );
};

export default Home;
