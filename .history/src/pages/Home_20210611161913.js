import Hero from '../components/Hero';
import Content from '../components/Content';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';
import Collections from './Collections';
import {useState} from 'react';

const Home = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <>
      <Hero />
      <Content />
      <Collections setSelectedImg={setSelectedImg} />
      {sele}
      <Dropdown />
      <Footer />
    </>
  );
};

export default Home;
